import React from 'react';
import PropTypes from 'prop-types';

const DaohangHaiguanshujuMoren = props => {
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
      <path d="M1.7 5a.5.5 0 01.5-.5h2.2a.5.5 0 01.5.5v6.5a.5.5 0 01-.5.5H2.2a.5.5 0 01-.5-.5V5z"></path>
      <path d="M11.1 6a.5.5 0 01.5-.5h2.2a.5.5 0 01.5.5v5.5a.5.5 0 01-.5.5h-2.2a.5.5 0 01-.5-.5V6z"></path>
      <path d="M6.4 1.5a.5.5 0 01.5-.5h2.2a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H6.9a.5.5 0 01-.5-.5v-10z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 14.5H1v-1h14v1z"
      ></path>
    </svg>
  );
};

DaohangHaiguanshujuMoren.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DaohangHaiguanshujuMoren.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DaohangHaiguanshujuMoren;
