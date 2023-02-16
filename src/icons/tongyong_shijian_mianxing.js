import React from 'react';
import PropTypes from 'prop-types';

const TongyongShijianMianxing = props => {
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
        d="M6.5 0a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 3a.5.5 0 00-1 0v4a.5.5 0 00.5.5h3a.5.5 0 000-1H6.5V3z"
      ></path>
    </svg>
  );
};

TongyongShijianMianxing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TongyongShijianMianxing.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TongyongShijianMianxing;
