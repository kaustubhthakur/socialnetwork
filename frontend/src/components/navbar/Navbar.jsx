import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="retro-navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>SN</h1>
        </div>

        <div className={`menu-items ${menuOpen ? 'active' : ''}`}>
        
          <div className="auth-buttons-mobile">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        </div>

        <div className="auth-buttons-desktop">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;