import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import imagem1 from './assets/banner1.png';
import imagem2 from './assets/banner1.png';
import imagem3 from './assets/banner1.png';
import imagem4 from './assets/logo_MB.png';
import imagem5 from './assets/logo_MB.png';

const items = [
  { id: 1, content: 'Item 1', imgSrc: imagem1 },
  { id: 2, content: 'Item 2', imgSrc: imagem2 },
  { id: 3, content: 'Item 3', imgSrc: imagem3 },
];

const books = [
  { title: 'Malagueta', cover: require('./Imagens/Malagueta.jpg') },
  { title: 'Rei', cover: require('./Imagens/rei.jpg') },
  { title: 'Papacapim', cover: require('./Imagens/papacapim.jpg') },
  { title: 'Doutrinador', cover: require('./Imagens/doutrinador.jpg') },
  { title: 'Lebre', cover: require('./Imagens/lebre.jpg') },
  { title: 'Biribinhas', cover: require('./Imagens/biribinhas.jpg') },
  { title: 'Brasil', cover: require('./Imagens/brasil.jpg') },
  { title: 'Lampião', cover: require('./Imagens/lampiao.jpg') },
  { title: 'SenseLife', cover: require('./Imagens/senselife.jpg') },
];


const Body = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (query) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books);
    }
  };

  return (
    <div>
      {/* Carrossel */}
      <CarouselContainer>
        <Carousel>
          {items.map((item) => (
            <Carousel.Item key={item.id}>
              <StyledImage src={item.imgSrc} alt={item.content} />
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselContainer>

      {/* Barra de Pesquisa */}
      <SearchContainer>
        <input
          type="text"
          placeholder="Pesquisar livros..."
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>Pesquisar</button>
      </SearchContainer>

      {/* Lista de Livros */}
      <BookList>
        {filteredBooks.map((book, index) => (
          <BookItem key={index}>
            <img src={book.cover} alt={book.title} />
            <p>{book.title}</p>
          </BookItem>
        ))}
      </BookList>
    </div>
  );
};

export default Body;
