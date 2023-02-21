import React from 'react';

const DaohangXiaoxi = () => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.6" y="7" width="1.6" height="1.6" fill="#3F465C" />
      <rect x="7.2" y="7" width="1.6" height="1.6" fill="#3F465C" />
      <rect x="10.8" y="7" width="1.6" height="1.6" fill="#3F465C" />
      <mask id="a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 2a1 1 0 00-1 1v9a1 1 0 001 1h4l2.146 2.146a.5.5 0 00.708 0L10.5 13h4a1 1 0 001-1V3a1 1 0 00-1-1h-13z"
        />
      </mask>
      <path
        d="M5.5 13l.92-.92-.382-.38H5.5V13zm2.146 2.146l.92-.919-.92.92zM10.5 13v-1.3h-.538l-.381.38.919.92zM1.8 3a.3.3 0 01-.3.3V.7A2.3 2.3 0 00-.8 3h2.6zm0 9V3H-.8v9h2.6zm-.3-.3a.3.3 0 01.3.3H-.8a2.3 2.3 0 002.3 2.3v-2.6zm4 0h-4v2.6h4v-2.6zm-.92 2.22l2.147 2.146 1.839-1.839-2.147-2.146-1.838 1.838zm2.147 2.146a1.8 1.8 0 002.546 0l-1.839-1.839a.8.8 0 011.132 0l-1.839 1.839zm2.546 0l2.146-2.147-1.838-1.838-2.147 2.146 1.839 1.839zM14.5 11.7h-4v2.6h4v-2.6zm-.3.3a.3.3 0 01.3-.3v2.6a2.3 2.3 0 002.3-2.3h-2.6zm0-9v9h2.6V3h-2.6zm.3.3a.3.3 0 01-.3-.3h2.6A2.3 2.3 0 0014.5.7v2.6zm-13 0h13V.7h-13v2.6z"
        fill="#3F465C"
        mask="url(#a)"
      />
    </svg>
  );
};
export default DaohangXiaoxi;
