import React from 'react';
import logo from './assets/react.svg';

const Logo = ({ className }) => {
  return (
    <img src={logo} alt="React Logo" className={className} />
  );
};

export default Logo;