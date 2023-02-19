import React from "react";
import styled from "styled-components";
import {Popover, Image} from "antd";

const Header = styled.header`
  display: block;
  padding: 50px 50px 0 50px;
`;
const Tips = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-left: 20px;
  > span {
    color: #747a8c;
  }
`;

export default () =>{
  const [visible, setVisible] = React.useState(false)
  return <Header>
  <h1 style={{display: "inline-block"}}>LX Icon 图标</h1>
  <Tips>
    <Popover
      open={visible}
      trigger="click"
      onOpenChange={setVisible}
      content={
        <>
          <div style={{ marginBottom: 10 }}>第一步：在设计稿文件中选中图标</div>
          <div style={{ marginBottom: 10 }}>第二步：找到图标名称</div>
          <Image
            width={300}
            src="https://blog-1253646934.cos.ap-beijing.myqcloud.com/icon-demo.png"
          />
          <div style={{ marginTop: 10 }}>第三步：在文档中搜索拼音</div>
        </>
      }
      placement="bottom"
    >
      我如何知道图标叫什么?
    </Popover>
  </Tips>
</Header>
};
