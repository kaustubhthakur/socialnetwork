import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:9000/auth/logout");

      localStorage.removeItem("user");
      setUser(null);

      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "active" : ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className={`nav-auth ${isOpen ? "active" : ""}`}>
          {user ? (
            <>
              <Link to="/profile" className="profile-button">
                Profile
              </Link>
              <p className="profile-button"> {user.username}</p>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
              <Link to="/createpost">createpost</Link>
            </>
          ) : (
            <>
              <Link to="/loginpage" className="login-button">
                Login
              </Link>
              <Link to="/registerpage" className="register-button">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
