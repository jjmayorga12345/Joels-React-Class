import React from 'react';
import './Text.css';

const Text = ({ size = 'medium', color = 'black', children }) => {
  let sizeClass = '';
  switch (size.toLowerCase()) {
    case 'small':
    case 's':
      sizeClass = 'text-small';
      break;
    case 'large':
    case 'l':
      sizeClass = 'text-large';
      break;
    default:
      sizeClass = 'text-medium';
  }

  return (
    <p className={`text ${sizeClass}`} style={{ color }}>
      {children}
    </p>
  );
};

export default Text;
