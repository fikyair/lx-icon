import React from 'react';
import PropTypes from 'prop-types';

const TianjiaXian = props => {
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
        d="M7 1a6 6 0 100 12A6 6 0 007 1zM0 7a7 7 0 1114 0A7 7 0 010 7z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3.5a.5.5 0 01.5.5v2.5H10a.5.5 0 010 1H7.5V10a.5.5 0 01-1 0V7.5H4a.5.5 0 010-1h2.5V4a.5.5 0 01.5-.5z"
      ></path>
    </svg>
  );
};

TianjiaXian.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TianjiaXian.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TianjiaXian;
