import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoMB from './assets/logo_MB.jpg';
import fundo from './assets/login.jpg';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Carrosel from './Carrosel';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de importar os estilos do Bootstrap


const App = () => {
  return (
    <div>
    <Header />        
    <Body />        
    <Footer />
  </div>
  );

}

export default App;