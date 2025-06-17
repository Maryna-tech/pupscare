import { useState } from "react"
import { Link } from "react-router-dom"
import { navItems } from "./data" // Import the data
import ImageOne from "../assets/pupscare_logo.jpg"
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={ImageOne} className="logo" alt="logo" />
      </div>

      {/* Burger icon */}
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Navigation list rendered from navItems */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navItems.map(({ path, label, isButton }) => (
          <li key={path}>
            <Link to={path} onClick={() => setMenuOpen(false)}>
              {isButton ? <button>{label}</button> : label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar

