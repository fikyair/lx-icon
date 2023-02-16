import React from 'react';
import PropTypes from 'prop-types';

const TongyongLishijilu = props => {
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
        d="M6.5 3.664a.5.5 0 10-1 0v3.333a.5.5 0 00.51.5h3.324a.5.5 0 000-1H6.5V3.664z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.5a6.5 6.5 0 0111-4.69V.833a.5.5 0 011 0v2.334a.5.5 0 01-.5.5H9.166a.5.5 0 110-1h1.278A5.5 5.5 0 1012 6.5a.5.5 0 011 0 6.5 6.5 0 11-13 0z"
      ></path>
    </svg>
  );
};

TongyongLishijilu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TongyongLishijilu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TongyongLishijilu;
