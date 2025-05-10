import React from 'react';
import './Box.css';

const Box = ({ appendClasses = '', style = {}, children }) => {
  const defaultStyle = {
    backgroundColor: '#ccc',
    borderRadius: '10px',
  };

  return (
    <div
      className={`box-container ${appendClasses}`}
      style={{ ...style, ...defaultStyle }}
    >
      {children}
    </div>
  );
};

export default Box;
