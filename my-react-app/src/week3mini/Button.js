import React from 'react';
import './Button.css';

const Button = ({ color = 'red', onClick, children }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
