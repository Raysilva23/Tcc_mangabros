//import React from 'react';

const CustomRectangle = () => {
  const style = {
    width: '800.11px',
    height: '80.43px',
    position: 'absolute', // Posicionamento absoluto
    top: '50%', // Move o componente 50% para baixo a partir do topo
    left: '50%', // Move o componente 50% para a direita a partir da esquerda
    transform: 'translate(-50%, -50%)', // Centraliza o componente ao ajustar o deslocamento
    borderRadius: '34px 0px 0px 0px',
    opacity: '1',
    backgroundColor: '#3498db',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '40px',
    fontWeight: 'bold',
  };

  return (
    <div style={style}>
      Publicidade
    </div>
  );
};

export default CustomRectangle;
