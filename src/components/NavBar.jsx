import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faAddressBook,faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <Navbar className="NavBar text-white">
      
      <Container>
        <div>
        
        <Navbar.Brand className='text-white' >
          <FontAwesomeIcon icon={faHouse}  className='fa-lg m-1'/>
            <Link className='NavBar' to="/">Inicio</Link>
        </Navbar.Brand>
   
        <Navbar.Brand  className='text-white'  >
          <FontAwesomeIcon icon={faAddressBook} className='fa-lg m-1 none' />
            <Link to="/contacto">Contacto</Link>
        </Navbar.Brand>
        </div>
      
      <div  className='justify-content-end'>
        <Navbar.Brand className='text-white' >Happy Cake</Navbar.Brand>
        <FontAwesomeIcon icon={faCakeCandles}  className='fa-lg m-1' />

      
        </div>
      </Container>
    </Navbar>
  );
}

export default Nav;