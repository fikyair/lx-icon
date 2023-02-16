import React from 'react';
import PropTypes from 'prop-types';

const WendangMp4 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1H3a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V4.5L10 1z"
      ></path>
      <path d="M10.4 4.5H14L10 1v3.1c0 .22.18.4.4.4z"></path>
      <path d="M6.81 6.207a.2.2 0 00-.31.167v4.852a.2.2 0 00.31.167l3.64-2.427a.2.2 0 000-.332L6.81 6.207z"></path>
    </svg>
  );
};

WendangMp4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangMp4.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangMp4;
