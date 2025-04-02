import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="/api/placeholder/150/50" alt="Logo" />
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "hamburger-line line1-active" : "hamburger-line line1"}></div>
          <div className={isOpen ? "hamburger-line line2-active" : "hamburger-line line2"}></div>
          <div className={isOpen ? "hamburger-line line3-active" : "hamburger-line line3"}></div>
        </div>

        {/* Navigation Links */}
        <div className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <div className="navbar-auth">
            <a href="/login" className="login-link">Login</a>
            <a href="/register" className="register-link">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;