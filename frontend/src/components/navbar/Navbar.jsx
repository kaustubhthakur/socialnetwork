import React, { useState } from 'react';
import './Navbar.css'; // We'll create this CSS file below

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="navbar-logo">
          <a href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJUXzf_UtdZFv2VAZrqZNhTaidl_XLuikBA&s" alt="Logo" className="logo-image" />

          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>

        {/* Navigation links - hidden on mobile unless menu is open */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        
          
          {/* Auth links on the right */}
          <div className="auth-links">
            <a href="/login" className="login-link">Login</a>
            <a href="/register" className="register-link">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;