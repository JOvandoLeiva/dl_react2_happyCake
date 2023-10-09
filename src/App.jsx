
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulary from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Notfound from './components/NotFound';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
  

        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/contacto" element={<Formulary />}  />
          <Route path="*" element={<Notfound />}  />
            
        </Routes>
     
    </>
  )
}

export default App
