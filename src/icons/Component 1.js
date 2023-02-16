import React from 'react';
import PropTypes from 'prop-types';

const Component1 = props => {
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
        d="M8 0H1a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V3.5L8 0z"
      ></path>
      <path d="M8.4 3.5H12L8 0v3.1c0 .22.18.4.4.4z"></path>
      <path d="M2.47 5.753a.2.2 0 01.192-.253h.785a.2.2 0 01.193.147L5.102 11H3.9L2.47 5.753z"></path>
      <path d="M6.5 5.5H5.302L3.9 11h1.202L6.5 5.5z"></path>
      <path d="M5.302 5.5H6.5L8 11H6.8L5.302 5.5z"></path>
      <path d="M9.336 5.75a.2.2 0 00-.193-.25h-.788a.2.2 0 00-.194.15L6.8 11H8l1.336-5.25z"></path>
    </svg>
  );
};

Component1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Component1.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Component1;
