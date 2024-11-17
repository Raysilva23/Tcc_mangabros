import React from 'react';

const CustomTextbox = () => {
  const style = {
    width: '300.6px',
    height: '56.01px',
    top: '33.25px',
    
    borderRadius: '31.23px',
    border: '3.64px solid black',
    
    padding: '10px',
    fontSize: '16px'
  };

  return (
    <input
      type="text"
      style={style}
      placeholder="Pesquisar..."
    />
  );
};

export default CustomTextbox;
