import React from 'react';
import PropTypes from 'prop-types';

const DaohangGengduoMoren = props => {
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
      <g clipPath="url(#clip0_37_1885)">
        <circle cx="3.3" cy="8.3" r="1.3"></circle>
        <circle cx="8" cy="8.3" r="1.3"></circle>
        <circle cx="12.7" cy="8.3" r="1.3"></circle>
      </g>
      <defs>
        <clipPath id="clip0_37_1885">
          <rect width="16" height="16"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

DaohangGengduoMoren.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DaohangGengduoMoren.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DaohangGengduoMoren;
