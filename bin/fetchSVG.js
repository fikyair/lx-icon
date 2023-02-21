const got = require("got");
const {ensureDir, writeFile} = require("fs-extra");
const {join, resolve} = require("path");
const Figma = require("figma-js");
const PQueue = require("p-queue");
const pinyin = require("tiny-pinyin");

require("dotenv").config();
const {FIGMA_TOKEN, FIGMA_FILE_URL} = process.env;


const options = {
  format: "svg",
  outputDir: "./src/",
  scale: "1",
};

for (const arg of process.argv.slice(2)) {
  const [param, value] = arg.split("=");
  if (options[param]) {
    options[param] = value;
  }
}

function uniqueFunc(arr, uniId) {
  let hash = {};
  return arr.reduce((accum, item) => {
    hash[item[uniId]] ? "" : (hash[item[uniId]] = true && accum.push(item));
    return accum;
  }, []);
}

if (!FIGMA_TOKEN) {
  throw Error("Cannot find FIGMA_TOKEN in process!");
}

const client = Figma.Client({
  personalAccessToken: FIGMA_TOKEN,
});

// Fail if there's no figma file key
let fileId = null;
if (!fileId) {
  try {
    fileId = FIGMA_FILE_URL.match(/file\/([a-z0-9]+)\//i)[1];
  } catch (e) {
    throw Error("Cannot find FIGMA_FILE_URL key in process!");
  }
}

console.log(`Exporting ${FIGMA_FILE_URL} components`);
client
  .file(fileId)

  .then(({data}) => {
    console.log("Processing response...");
    const components = {};

    function check(c) {
      if (c.type === "COMPONENT") {
        const {name, id} = c;
        const {description = "", key} = data.components[c.id];
        const {width, height} = c.absoluteBoundingBox;

        components[id] = {
          name,
          id,
          key,
          file: fileId,
          description,
          width,
          height,
        };
      } else if (c.children) {
        // eslint-disable-next-line github/array-foreach
        c.children.forEach(check);
      }
    }
    writeFile(
      resolve(options.outputDir, "figmadocument.json"),
      JSON.stringify(data.document.children),
      "utf8"
    )
    data.document.children.forEach(check);
    if (Object.values(components).length === 0) {
      throw Error("No components found!");
    }
    console.log(
      `${Object.values(components).length} components found in the figma file`
    );
    return components;
  })
  .then((components) => {
    console.log("Getting export urls...");
    return client
      .fileImages(fileId, {
        format: options.format,
        ids: Object.keys(components),
        scale: options.scale,
      })
      .then(({data}) => {
        for (const id of Object.keys(data.images)) {
          components[id].image = data.images[id];
        }
        return components;
      });
  })
  .then((fcomponents) => {
    console.log('processing fcomponents...')
    for (const item of Object.values(fcomponents)) {
      const _name = item.name.split("_").join();
      item.cName = item.name;
      const convertName = pinyin.convertToPinyin(_name, "", true);
      item.name = convertName.replace(/\s*/g,"").replace(/,/g, "_");
    }
    const components = uniqueFunc(Object.values(fcomponents), "name");
    return ensureDir(join(options.outputDir))
      .then(() =>
        writeFile(
          resolve(options.outputDir, "data.json"),
          JSON.stringify(components),
          "utf8"
        )
      )
      .then(() => components);
  })
  .then((components) => {
    console.log('transform to svg...');
    const contentTypes = {
      svg: "image/svg+xml",
      png: "image/png",
      jpg: "image/jpeg",
    };
    return queueTasks(
      Object.values(components).map((component) => () => {
        return got
          .get(component.image, {
            headers: {
              "Content-Type": contentTypes[options.format],
            },
            encoding: options.format === "svg" ? "utf8" : null,
          })
          .then((response) => {
            return ensureDir(join(options.outputDir, options.format)).then(() =>
              writeFile(
                join(
                  options.outputDir,
                  options.format,
                  `${component.name}.${options.format}`
                ),
                response.body,
                options.format === "svg" ? "utf8" : "binary"
              )
            );
          });
      })
    );
  })
  .catch((error) => {
    throw Error(`Error fetching components from Figma: ${error}`);
  });

function queueTasks(tasks, options) {
  const queue = new PQueue(Object.assign({concurrency: 5}, options));
  for (const task of tasks) {
    queue.add(task);
  }
  queue.start();
  return queue.onIdle();
}
