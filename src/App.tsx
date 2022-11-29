import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import { About } from './paginas/About/About';
import { Home } from './paginas/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      

    </Router>
  

  );
}

export default App;
