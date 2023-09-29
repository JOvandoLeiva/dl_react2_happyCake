import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faAddressBook,faCakeCandles } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  return (
    <Navbar className="NavBar text-white">
      
      <Container>
        <div>
        <FontAwesomeIcon icon={faHouse}  className='fa-lg m-1'/>
        <Navbar.Brand href="#home" className='text-white' >Home</Navbar.Brand>
        <FontAwesomeIcon icon={faAddressBook} className='fa-lg m-1' />
        <Navbar.Brand href="#home" className='text-white'  >Contacto</Navbar.Brand>
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