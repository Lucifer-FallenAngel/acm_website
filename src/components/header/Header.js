import React, { useState } from "react";
import { Link } from "react-router-dom";
import DIETLogo from "../PIC/Logo/DIET_Logo.png";
import ACMLogo from "../PIC/Logo/DIET_ACM_Logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* DIET and ACM logos grouped together */}
      <div className="logo-container">
        <a href="https://diet.edu.in/" target="_blank" rel="noopener noreferrer">
          <img src={DIETLogo} alt="DIET Logo" className="logo" />
        </a>
        <Link to="/">
          <img src={ACMLogo} alt="ACM Logo" className="logo" />
        </Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/Blog" onClick={toggleMenu}>
          Blogs
        </Link>
        <Link to="/Events" onClick={toggleMenu}>
          Events
        </Link>
        <Link to="/Our_Team" onClick={toggleMenu}>
          Our Team
        </Link>
        <Link to="/gallery" onClick={toggleMenu}>
          Gallery
        </Link>
        <Link to="/benefits" onClick={toggleMenu}>
          Benefits
        </Link>
      </nav>
    </header>
  );
};

export default Header;
