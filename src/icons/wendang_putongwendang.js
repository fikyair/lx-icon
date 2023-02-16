import React from 'react';
import PropTypes from 'prop-types';

const WendangPutongwendang = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8.2a.2.2 0 01-.2.2H5.2a.2.2 0 01-.2-.2v-.8c0-.11.09-.2.2-.2h5.6c.11 0 .2.09.2.2v.8z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 11a.2.2 0 01-.2.2H5.2A.2.2 0 015 11v-.8c0-.11.09-.2.2-.2h4.1c.11 0 .2.09.2.2v.8z"
      ></path>
      <path d="M10.4 4.5H14L10 1v3.1c0 .22.18.4.4.4z"></path>
    </svg>
  );
};

WendangPutongwendang.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangPutongwendang.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangPutongwendang;
