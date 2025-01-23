import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <nav>
      <div className='logo'><a href="#">Mi Logo</a></div>
      <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? 'X' : '≡'}
      </button>
      <ul className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Servicios</button>
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