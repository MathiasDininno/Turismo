import './App.css';
import React from 'react';
import Contact from './Contact/Contact';
import Navbar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel';
import Events from './Events/Events';
import TourCiudad from './TourCiudad/TourCiudad';

function App() {
  return (
    <div className='App'>
      <Contact />
      <Navbar />
      <Carousel />
      <Events />
      <TourCiudad />
    </div>
  );
}

export default App;
