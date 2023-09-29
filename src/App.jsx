import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar';
import Formulary from './components/Contact';

function App() {

  return (
    <>
      <Nav />

      <div className='text-center'> 
        <h1 className='p-3' >Bienvenido a Happy Cake</h1>
          <p>El lugar de los pasteles felices</p>
          <img src="src\assets\cake.png" alt="" className='img' />
      
      </div>
     
    </>
  )
}

export default App
