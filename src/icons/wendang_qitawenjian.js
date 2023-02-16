import React from 'react';
import PropTypes from 'prop-types';

const WendangQitawenjian = props => {
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
      <circle cx="5" cy="8.75" r=".75"></circle>
      <circle cx="8" cy="8.75" r=".75"></circle>
      <circle cx="11" cy="8.75" r=".75"></circle>
    </svg>
  );
};

WendangQitawenjian.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangQitawenjian.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangQitawenjian;
