import react, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";
// import LogoutButton from "../logout/LogoutButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">LOGO</div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`menu ${isOpen ? "open" : ""}`}>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          {/* //<LogoutButton /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
