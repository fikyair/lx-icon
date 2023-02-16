import React from 'react';
import PropTypes from 'prop-types';

const WendangXls = props => {
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
      <path d="M5.664 12a.2.2 0 01-.169-.307l3.246-5.1A.2.2 0 018.91 6.5h1.026a.2.2 0 01.168.307l-3.245 5.1A.2.2 0 016.69 12H5.664z"></path>
      <path d="M10.219 12a.2.2 0 00.164-.314l-3.523-5.1a.2.2 0 00-.165-.086H5.681a.2.2 0 00-.164.314l3.523 5.1a.2.2 0 00.165.086h1.014z"></path>
    </svg>
  );
};

WendangXls.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangXls.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangXls;
