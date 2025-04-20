import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageOne from "../assets/pupscare_logo.jpg";
import "./Navbar.css";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
    <nav className="navbar">
        <div className="navbar-left">
            <img src={ImageOne} className="logo" alt="logo" />
        </div>
        
        {isMobile ? (
        <>
        
        <div className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}>
                <span />
                <span />
                <span />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/booking" onClick={() => setMenuOpen(false)}><button>Booking</button></Link></li>
        </ul>
        </>
    ) : (
        <ul className="nav-links desktop">
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/booking"><button>Booking</button></Link></li>
        </ul>
    )}
    </nav>
    );
};

export default Navbar;
