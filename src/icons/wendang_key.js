import React from 'react';
import PropTypes from 'prop-types';

const WendangKey = props => {
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
        d="M13 14.935H3a1 1 0 01-1-1V2a1 1 0 011-1h7l4 3.5v9.435a1 1 0 01-1 1z"
      ></path>
      <path d="M10.4 4.5H14L10 1v3.1c0 .22.18.4.4.4z"></path>
      <path d="M10.099 12H8.9a.2.2 0 01-.16-.08L7 9.6v2.2a.2.2 0 01-.2.2H6a.2.2 0 01-.2-.2V6.7c0-.11.09-.2.2-.2h.8c.11 0 .2.09.2.2v2.1l1.74-2.223a.2.2 0 01.157-.077h1.187a.1.1 0 01.077.165L8.1 9.1l2.077 2.74a.1.1 0 01-.08.16z"></path>
    </svg>
  );
};

WendangKey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WendangKey.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WendangKey;
