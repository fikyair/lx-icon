import React from 'react';
import PropTypes from 'prop-types';

const DaohangYingxiaoMoren = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_37_1867)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.965 8.715A8 8 0 117.25 0v8.715h8.715zM8.75 0v7.215h7.215A8.002 8.002 0 008.75 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_37_1867">
          <rect width="16" height="16"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

DaohangYingxiaoMoren.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DaohangYingxiaoMoren.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DaohangYingxiaoMoren;
