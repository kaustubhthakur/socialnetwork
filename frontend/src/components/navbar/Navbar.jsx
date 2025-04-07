import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="logo">
        <img className='logo-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPrDYakpuB1E4lvZbTWnXY61BM92EfEIPVw&s" alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/register" className="nav-item">Register</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/login" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link to="/register" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;