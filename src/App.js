import './App.css';
import React from 'react';
import Contact from './Contact/Contact';
import Navbar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel';
import Events from './Events/Events';

function App() {
  return (
    <div className='App'>
      <Contact />
      <Navbar />
      <Carousel />
      <Events />
    </div>
  );
}

export default App;
