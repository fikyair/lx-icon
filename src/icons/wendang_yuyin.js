import React from 'react';
import PropTypes from 'prop-types';

const WendangYuyin = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 8.6c.11 0 .2.09.209.2A2.297 2.297 0 008 10.9c1.204 0 2.19-.92 2.292-2.1.01-.11.098-.2.208-.2h.4c.11 0 .201.09.194.2A3.097 3.097 0 018.4 11.675v.625a.2.2 0 01-.2.2h-.4a.2.2 0 01-.2-.2v-.625A3.097 3.097 0 014.907 8.8a.19.19 0 01.193-.2h.4z"
      ></path>
      <path d="M6.6 6.9a1.4 1.4 0 112.8 0v1.7a1.4 1.4 0 01-2.8 0V6.9z"></path>
    </svg>
  );
};

WendangYuyin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangYuyin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangYuyin;