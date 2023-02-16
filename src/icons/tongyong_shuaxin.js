import React from 'react';
import PropTypes from 'prop-types';

const TongyongShuaxin = props => {
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
        d="M13.697 7a.5.5 0 00.5-.5A6.5 6.5 0 002.064 3.255a.5.5 0 00.866.5A5.5 5.5 0 0113.197 6.5a.5.5 0 00.5.5zm-.552 2.067a.5.5 0 00-.683.183A5.5 5.5 0 012.197 6.5a.5.5 0 00-1 0 6.5 6.5 0 0012.13 3.25.5.5 0 00-.182-.683z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.447h3.395l-1.697 1.697L12 6.447z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.394 6.553H0l1.697-1.697 1.697 1.697z"
      ></path>
    </svg>
  );
};

TongyongShuaxin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TongyongShuaxin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TongyongShuaxin;
