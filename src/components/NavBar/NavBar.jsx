import React, { useState } from "react";
import "./Navbar.css"; 
import logoSrc from "../../assets/logo.png"; 

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container-nav">
        <div className="brand">
          {logoSrc ? (
            <img src={logoSrc} alt="Fadel Web logo" className="logo" />
          ) : (
            <div className="logo-text">Fadel<span className="logo-accent">Web</span></div>
          )}
        </div>

        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className={`nav-links-wrapper ${open ? "open" : ""}`}>
          <ul className="nav-links" onClick={closeMenu}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
          <div className="cta">
                <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-github"
                >
                    <img src="./src/assets/icons/github.png" alt="GitHub" className="btn-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/username/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-linkedin"
                >
                    <img src="./src/assets/icons/linkedin.png" alt="LinkedIn" className="btn-icon" />
                </a>
                </div>

        </div>
      </nav>
    </header>
  );
};

export default NavBar;
