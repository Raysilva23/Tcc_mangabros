import React from 'react';
import imagem3 from './Imagens/publcidade-footer.png';
const Footer = () => {
  const footerStyle = {
    position: 'relative',    
    backgroundColor: '#333', // Cor de fundo do footer
    padding: '50px 0', // Espaçamento interno
    textAlign: 'center',
    fontSize: '14px', // Tamanho da fonte do texto de direitos autorais
    color: '#333', // Cor do texto
  };

  const footerTextStyle = {
    color: '#fff',        // Define a cor do texto para branco
    fontSize: '14px',     // Tamanho da fonte (ajuste conforme necessário)
    lineHeight: '1.5',    // Espaçamento entre as linhas
    textAlign: 'center',  // Alinha o texto no centro
    backgroundColor: '#333', // Cor de fundo escura para contraste (opcional)
    padding: '20px',      // Espaçamento interno
  };

  const rectangleStyle = {
    width: '800.11px',
    height: '80.43px',
    margin: '0 auto', // Centraliza horizontalmente dentro do footer
    borderRadius: '34px 0px 0px 0px',
    opacity: '1',
    backgroundColor: '#128', // Cor de fundo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff', // Cor do texto
    fontSize: '40px', // Tamanho da fonte do retângulo
    fontWeight: 'bold',
    position: 'relative', // Relativo ao container pai (footer)
    bottom: '20px', // Pequeno ajuste de posicionamento
  };

  const rightsStyle = {
    marginTop: '20px', // Espaçamento acima do texto
    lineHeight: '1.5', // Melhor espaçamento entre linhas
  };

  return (
    <footer style={footerStyle}>
      
       <div style={footerTextStyle}>
      <p>© 2024 MangaBros@. Todos os direitos reservados.</p>
      <p>
        Este site e seus conteúdos são protegidos pelas leis de direitos autorais.
        É proibida a reprodução total ou parcial sem autorização prévia.
      </p>
      <p>
        Termos de uso | Política de privacidade | FAQ | Contato
      </p>
    </div>
    </footer>
  );
};

export default Footer;
