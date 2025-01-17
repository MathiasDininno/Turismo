import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle para dropdown "Servicios"
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Toggle para menú hamburguesa
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className='logo'><a href="home">Mi Logo</a></div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </button>
      <ul className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Servicios
          </button>
          <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <li><a href="#service1">Servicio 1</a></li>
            <li><a href="#service2">Servicio 2</a></li>
            <li><a href="#service3">Servicio 3</a></li>
          </ul>
        </li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

