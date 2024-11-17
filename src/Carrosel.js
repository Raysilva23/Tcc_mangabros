import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from './assets/banner1.jpg';
import imagem2 from './assets/banner3.png';
import imagem3 from './assets/banner2.png';
import React from 'react';

import './App.css'; // CSS para o App

function MyCarousel() {
  const [index, setIndex] = React.useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img 
            src={imagem1} 
            alt="Logo MB"              
            width="50"
            height="50"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={imagem2} 
            alt="Logo MB"              
            width="50"
            height="50"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={imagem3} 
            alt="Logo MB"              
            width="50"
            height="50"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}



export default MyCarousel;
