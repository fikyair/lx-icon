import React from 'react';
import PropTypes from 'prop-types';

const DaohangXiaoxiMoren = props => {
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
        d="M15.25 3a1 1 0 00-1-1H3.75v1h10.5v7.5h1V3z"
      ></path>
      <path d="M.75 5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V5z"></path>
      <path d="M6.75 15.5L8.699 13H4.8l1.949 2.5z"></path>
    </svg>
  );
};

DaohangXiaoxiMoren.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DaohangXiaoxiMoren.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DaohangXiaoxiMoren;
