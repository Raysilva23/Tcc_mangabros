// Body.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import imagem1 from './assets/banner1.png';
import imagem2 from './assets/banner1.png';
import imagem3 from './assets/banner1.png';
import imagem4 from './assets/logo_MB.png'; // Adicione mais imagens conforme necessário
import imagem5 from './assets/logo_MB.png';
import CustomRectangle from './CustomRectangle';
import logo from './assets/logo_MB.png';
import imagelateral from './Imagens/imagemlateral.png';
import boy from './Imagens/3.png';
import geril from './Imagens/geril.png';
import black from './Imagens/black.png';
import proximo from './Imagens/proximo.png';

import figura1 from './Imagens/black.png';
import figura2 from './Imagens/3.png';
import figura3 from './Imagens/geril.png';

import publicidade from './Imagens/publcidade-footer.png';
import continulendo from './Imagens/continue lendo.png';
import novasAtualizacoes from './Imagens/novasAtualizacoes.png';



const items = [
  { id: 1, content: 'Item 1', imgSrc: imagem1 },
  { id: 2, content: 'Item 2', imgSrc: imagem2 },
  { id: 3, content: 'Item 3', imgSrc: imagem3 },

];

const imageList = [
  imagem4,
  imagem5,
  // Adicione mais imagens conforme necessário
];

const CarouselContainer = styled.div`
  width: 50%;  
  height: 450px; 
  margin: auto; 
  //border: 5px solid #FF0000; 
  border-radius: 10px; 
  overflow: hidden; 
`;

const StyledImage = styled.img`
  width: 100%;   
  height: 100%;  
  object-fit: cover; 
`;

const ImageListContainer = styled.ul`
  display: flex; 
  justify-content: center; 
  padding: 10px 0; 
  list-style-type: none; // Remove os marcadores da lista
`;

const texto = styled.h3`
  display: flex; 
  justify-content: center; 
  padding: 10px 0; 
  list-style-type: none; // Remove os marcadores da lista
`;

const ListImage = styled.img`
  width: 100px; // Ajuste a largura conforme necessário
  height: auto; // Mantém a proporção
  margin: 0 5px; // Espaçamento entre as imagens
`;

const books = [
  { title: 'malagueta', cover: require('./Imagens/Malagueta.jpg') },
  { title: 'rei', cover: require('./Imagens/rei.jpg') },
  { title: 'papacapim', cover: require('./Imagens/papacapim.jpg') },
  { title: 'doutrinador', cover: require('./Imagens/doutrinador.jpg') },
  { title: 'lebre', cover: require('./Imagens/lebre.jpg') },
  { title: 'doutrinador', cover: require('./Imagens/doutrinador.jpg') },
  { title: 'lebre', cover: require('./Imagens/lebre.jpg') },


];


const SideBySideDivs = () => {
  const containerStyle = {
    display: 'flex', // Ativa o layout Flexbox
    justifyContent: 'center',
    alignItems: 'center', // Alinha verticalmente, se necessário
    gap: '20px', // Espaço entre os quadrados
    margin: '20px 0', // Espaçamento em relação a outros elementos
  };

  const squareStyle = {
    width: '150px', // Largura do quadrado
    height: '200px', // Altura do quadrado
    backgroundColor: '#3498db', // Cor do quadrado
    display: 'flex', // Centraliza conteúdo dentro do quadrado
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '16px',
    borderRadius: '10px', // Bordas arredondadas
  };

  const imageStyle = {
    width: '342px', // Largura da imagem
    height: '382px', // Altura da imagem
    objectFit: 'cover', // Ajusta a imagem para cobrir o espaço
    borderRadius: '10px', // Bordas arredondadas
  };    
    
  
    const boxStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: '#3498db',
      marginLeft: 'auto', // Empurra o elemento para a direita
      textAlign: 'center',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  

  return (
    <div style={containerStyle}>
      <img src={boy} alt="Logo"  />
      <img src={geril} alt="Logo"  />
      <img src={black} alt="Logo"  />
      <img src={proximo} />
      <img src={imagelateral} alt="Logo" style={imageStyle.imagelateral} />
    </div>
  );
};


const SideBySideDivs2 = () => {
  const containerStyle = {
    display: 'flex', // Ativa o layout Flexbox
    justifyContent: 'center',
    alignItems: 'center', // Alinha verticalmente, se necessário
    gap: '20px', // Espaço entre os quadrados
    margin: '20px 0', // Espaçamento em relação a outros elementos
  };

  const squareStyle = {
    width: '150px', // Largura do quadrado
    height: '200px', // Altura do quadrado
    backgroundColor: '#3498db', // Cor do quadrado
    display: 'flex', // Centraliza conteúdo dentro do quadrado
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '16px',
    borderRadius: '10px', // Bordas arredondadas
  };

  const imageStyle = {
    width: '342px', // Largura da imagem
    height: '382px', // Altura da imagem
    objectFit: 'cover', // Ajusta a imagem para cobrir o espaço
    borderRadius: '10px', // Bordas arredondadas
  };    
    
  
    const boxStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: '#3498db',
      marginLeft: 'auto', // Empurra o elemento para a direita
      textAlign: 'center',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  

  return (
    <div style={containerStyle}>
      <img src={figura1} alt="Logo"  />
      <img src={figura2} alt="Logo"  />
      <img src={figura3} alt="Logo"  />
      <img src={proximo} />
      <img src={imagelateral} alt="Logo" style={imageStyle.imagelateral} />
    </div>
  );
};


const imageStyle = {
  position: 'relative', // Torna a imagem posicionável
  left: '20%',          // Move a imagem 40% para a direita
  width: '150px',       // Define a largura da imagem
  height: 'auto',       // Mantém a proporção da imagem
};


const containerImage = {
  display: 'flex',           // Ativa o Flexbox
  justifyContent: 'center',  // Centraliza horizontalmente
  alignItems: 'center',      // Centraliza verticalmente
  
};

const imageStylefooter = {
  
  height: 'auto',            // Mantém a proporção da imagem
  borderRadius: '10px',      // Bordas arredondadas (opcional)
};


const Body = () => {
  return (
    <div>
      <CarouselContainer>
        <Carousel>
          {items.map(item => (
            <Carousel.Item key={item.id}>
              <StyledImage src={item.imgSrc} alt={item.content} />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselContainer>

      
      {/* Lista de imagens abaixo do carrossel */}
      
      
      
    
      <div>  
        <div>   
      <img src={continulendo} style={imageStyle} alt="Logo" />
      </div>
      <SideBySideDivs /> 
      <div>   
      <img src={novasAtualizacoes} style={imageStyle} alt="Logo" />
      </div>    
      <SideBySideDivs2 />
      <ImageListContainer>
       
      <div>        
        <div>
        <h3 className='texto'>Recomendadações</h3>
        </div>
        <ul className="book-list">
          {books.map((book, index) => (
            <li key={index} className="book-item">
              <img src={book.cover} alt={book.title} className="book-cover" />
            </li>
          ))}
        </ul>
        <div>
     </div>
      
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <img src={book.cover} alt={book.title} className="book-cover" />
          </li>
        ))}
      </ul>
      </div>
      </ImageListContainer>     
      

      <div style={containerImage}>
      <img src={publicidade} />
    </div>
    </div>
   
    </div>
  );
};



export default Body;

