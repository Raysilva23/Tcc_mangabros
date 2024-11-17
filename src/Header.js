// Head.js
import React from 'react';
// Importa o logo a partir da pasta de assets
import logo from './assets/logo_MB.png';
import user from './Imagens/teste.png';
import usersuario from './Imagens/service_1.png';
import CustomTextbox from './CustomTextbox';



const ImageWithCustomTooltip = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  };

  const imageWrapperStyle = {
    position: 'relative',  // Necessário para posicionar o tooltip
  };

  const imageStyle = {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
  };

  const tooltipStyle = {
    position: 'absolute',
    bottom: '10px',    // Posiciona o tooltip acima da imagem
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Fundo escuro
    color: '#fff',   // Cor do texto
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    visibility: 'hidden',  // Começa invisível
    opacity: '0',
    transition: 'visibility 0s, opacity 0.5s linear',  // Animação de transição
  };

  const imageWrapperHoverStyle = {
    visibility: 'visible',
    opacity: '1',
  };
}

const Head = () => {
  return (
    <header style={styles.header}>
      <div style={styles.buttonContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <span style={styles.text}><h4>BrosMangá</h4></span>
        <button style={styles.buttonread}>Home</button>
        <button style={styles.button}>Séries</button>
        <button style={styles.button}>Sobre</button>
        <button style={styles.buttonamarelo}>Postar</button>
        <CustomTextbox />        
        <img src={usersuario} alt="user" style={styles.usersuario} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    height: '126px',
    backgroundColor: '#1A1A1A',
    borderBottom: '7.65px solid #FF0000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  logo: {
    width: '100px', // Ajuste o tamanho conforme necessário
    height: 'auto',
  },
  
  button: {
    width: '143.4px',
    height: '46.23px',
    borderRadius: '25.77px',
    border: '3px solid #000', // Ajuste a cor da borda conforme necessário
    backgroundColor: '#FFF', // Ajuste a cor do fundo conforme necessário
    cursor: 'pointer',
  },

  buttonamarelo: {
    width: '143.4px',
    height: '46.23px',
    borderRadius: '25.77px',
    border: '3px solid #000', // Ajuste a cor da borda conforme necessário
    backgroundColor: 'yellow', // Ajuste a cor do fundo conforme necessário
    cursor: 'pointer',
  },

  buttonread: {
    width: '143.4px',
    height: '46.23px',
    borderRadius: '25.77px',
    border: '3px solid #000', // Ajuste a cor da borda conforme necessário
    backgroundColor: 'red', // Ajuste a cor do fundo conforme necessário
    cursor: 'pointer',
  },
  
  
  text: {
      color: '#FF0000', // Cor vermelha
  }
};

export default Head;



