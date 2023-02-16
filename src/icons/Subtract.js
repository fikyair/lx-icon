import React from 'react';
import PropTypes from 'prop-types';

const Subtract = props => {
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
        d="M.01.858l4.675 4.676-4.683 5.534A1.014 1.014 0 010 11V1C0 .952.003.905.01.858zm.792 11.123l4.779-5.648L7.625 7.97l.375.3.375-.3 2.044-1.636 4.778 5.647c-.063.013-.13.02-.197.02H1c-.068 0-.134-.007-.198-.02zm15.196-.913L16 11V1c0-.048-.003-.095-.01-.142l-4.675 4.676 4.683 5.534zM.858.01C.905.003.952 0 1 0h14c.048 0 .095.003.142.01l-5.043 5.042L8 6.732l-2.1-1.68L.859.01z"
      ></path>
    </svg>
  );
};

Subtract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Subtract.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Subtract;
