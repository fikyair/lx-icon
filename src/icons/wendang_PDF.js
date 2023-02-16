import React from 'react';
import PropTypes from 'prop-types';

const WendangPdf = props => {
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
        d="M3.25 7.8c0-.11.09-.2.2-.2h1.7c.672 0 1.25.578 1.25 1.25s-.579 1.25-1.25 1.25h-1.1v1a.2.2 0 01-.2.2h-.4a.2.2 0 01-.2-.2V7.8zm.8 1.5h1.1c.23 0 .45-.22.45-.45s-.22-.45-.45-.45h-1.1v.9zm2.8-1.5c0-.11.09-.2.2-.2h1.2a1.8 1.8 0 011.8 1.8v.17a1.8 1.8 0 01-1.8 1.8h-1.2a.2.2 0 01-.2-.2V7.8zm.8.6v2.17h.6a1 1 0 001-1V9.4a1 1 0 00-1-1h-.6zm2.85-.6c0-.11.09-.2.2-.2h2c.11 0 .2.09.2.2v.4a.2.2 0 01-.2.2h-1.4v.673h1.2c.11 0 .2.09.2.2v.4a.2.2 0 01-.2.2h-1.2V11.1a.2.2 0 01-.2.2h-.4a.2.2 0 01-.2-.2V7.8z"
      ></path>
    </svg>
  );
};

WendangPdf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangPdf.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangPdf;
