import React from 'react';

const Frame20x20 = () => {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_4560)">
        <rect width="20" height="20" fill="#F6F6F6" />
        <rect
          x="3"
          y="1"
          width="14"
          height="18"
          stroke="#666"
          strokeWidth=".1"
        />
        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          stroke="#666"
          strokeWidth=".1"
        />
        <rect
          x="1"
          y="3"
          width="18"
          height="14"
          stroke="#666"
          strokeWidth=".1"
        />
        <circle cx="10" cy="10" r="9" stroke="#666" strokeWidth=".1" />
        <circle cx="10" cy="10" r="6" stroke="#666" strokeWidth=".1" />
        <path d="M20 20L0 0" stroke="#666" strokeWidth=".1" />
        <path d="M20 0L0 20" stroke="#666" strokeWidth=".1" />
      </g>
      <rect
        x=".05"
        y=".05"
        width="19.9"
        height="19.9"
        stroke="#666"
        strokeOpacity=".4"
        strokeWidth=".1"
      />
      <defs>
        <clipPath id="clip0_1_4560">
          <rect width="20" height="20" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Frame20x20;
