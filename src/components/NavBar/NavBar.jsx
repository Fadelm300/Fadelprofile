import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoSrc from "../../assets/logo.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";

const NavBar = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu  = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
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
            <li><a href="#contactme">Contact Me</a></li>
          </ul>

          <div className="cta">
            <a
              href="https://github.com/Fadelm300"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-link btn-github"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" className="btn-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/fadel-mohammad-b70662151"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-link btn-linkedin"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="btn-icon" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;