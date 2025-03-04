import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useRecoilState(userAtom); // Replaces useRecoilValue

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      localStorage.removeItem("user-threads");
      setUser(null);
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">LOGO</div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`menu ${isOpen ? "open" : ""}`}>
          {user ? (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/create-post">Create Post</Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
