import React, { useState } from 'react';
import '../Style/Navbar.css';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid nav-content">
        <a className="navbar-brand navbar-logo" href="#home" onClick={closeMenu}>
          <span className="logo-my">My </span><span className="logo-gradient">Portfolio</span>
        </a>

        <button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          aria-controls="portfolioNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="portfolioNavbar"
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto navbar-links">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
