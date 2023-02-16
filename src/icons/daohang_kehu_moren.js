import React from 'react';
import PropTypes from 'prop-types';

const DaohangKehuMoren = props => {
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
      <circle cx="8" cy="4.25" r="3.25"></circle>
      <path d="M14.5 14.5v-2A3.5 3.5 0 0011 9H5a3.5 3.5 0 00-3.5 3.5v2a.5.5 0 00.5.5h12a.5.5 0 00.5-.5z"></path>
    </svg>
  );
};

DaohangKehuMoren.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DaohangKehuMoren.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DaohangKehuMoren;
