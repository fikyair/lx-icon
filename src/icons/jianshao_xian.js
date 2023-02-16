import React from 'react';
import PropTypes from 'prop-types';

const JianshaoXian = props => {
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
        d="M3.5 7a.5.5 0 01.5-.5h6a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
      ></path>
    </svg>
  );
};

JianshaoXian.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

JianshaoXian.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default JianshaoXian;
