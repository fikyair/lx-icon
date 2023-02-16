import React from 'react';
import PropTypes from 'prop-types';

const WendangPpt = props => {
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
        d="M10 1l4 3.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1h7z"
      ></path>
      <path d="M10.4 4.5H14L10 1v3.1c0 .22.18.4.4.4z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.65 6.7c0-.11.09-.2.2-.2h2.7c1.032 0 1.8.882 1.8 1.85 0 .969-.769 1.85-1.8 1.85h-1.7v1.7a.2.2 0 01-.2.2h-.8a.2.2 0 01-.2-.2V6.7zM6.85 9V7.7h1.7c.307 0 .6.28.6.65s-.293.65-.6.65h-1.7z"
      ></path>
    </svg>
  );
};

WendangPpt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangPpt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangPpt;
