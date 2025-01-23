import './App.css';
import React from 'react';
import Contact from './Contact/Contact';
import Navbar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <div className='App'>
      <Contact />
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
