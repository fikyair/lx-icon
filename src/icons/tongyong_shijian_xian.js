import React from 'react';
import PropTypes from 'prop-types';

const TongyongShijianXian = props => {
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
        d="M0 7a7 7 0 1114 0A7 7 0 010 7zm7-6a6 6 0 100 12A6 6 0 007 1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 3a.5.5 0 01.5.5V7h2.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z"
      ></path>
    </svg>
  );
};

TongyongShijianXian.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TongyongShijianXian.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TongyongShijianXian;
