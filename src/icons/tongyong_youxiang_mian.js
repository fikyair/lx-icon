import React from 'react';

const TongyongYouxiangMian = () => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_1_3520)">
        <path
          d="M1 3a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3z"
          fill="#3F465C"
        />
        <path
          d="M1.444 3c0-.307.25-.556.556-.556h12c.307 0 .556.249.556.556v10a.556.556 0 01-.556.555H2A.556.556 0 011.444 13V3z"
          stroke="#3F465C"
          strokeWidth=".889"
          strokeLinecap="round"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.084 3.723a.5.5 0 01.693-.14L8 6.4l4.223-2.815a.5.5 0 01.554.832l-4.5 3a.5.5 0 01-.554 0l-4.5-3a.5.5 0 01-.139-.693z"
        fill="#fff"
      />
      <defs>
        <filter
          id="filter0_b_1_3520"
          x="-1.37"
          y="-.371"
          width="18.741"
          height="16.741"
          filterUnits="userSpaceOnUse"
          color-interpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.185" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_3520"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_3520"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default TongyongYouxiangMian;
