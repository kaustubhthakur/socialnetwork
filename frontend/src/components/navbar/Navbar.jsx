import React, { useState } from 'react';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div
            alt="Retro Logo" 
            className="logo-image"
          >SN</div>
          <span className="logo-text">socialnetwork</span>
        </div>

        {/* Hamburger Menu */}
        <div 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/login" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="/register" className="nav-link">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
