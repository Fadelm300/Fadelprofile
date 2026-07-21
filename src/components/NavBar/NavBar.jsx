import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoSrc from "../../assets/logo.webp";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";

const NavBar = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu  = () => setOpen(false);

  useEffect(() => {
    let frameId = null;

    const updateScrolledState = () => {
      setScrolled(window.scrollY > 20);
      frameId = null;
    };

    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrolledState);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="navbar container-nav">
        <div className="brand">
          {logoSrc ? (
           <img
  src={logoSrc}  alt="Fadel Web logo"className="logo"width="128"height="128"decoding="async"/>
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
          <img   src={githubIcon} alt="" className="btn-icon" width="32" height="33" decoding="async" aria-hidden="true"/>     
         </a>
            <a
              href="https://www.linkedin.com/in/fadel-mohammad-b70662151"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-link btn-linkedin"
              aria-label="LinkedIn"
            >
              <img
  src={linkedinIcon}
  alt=""
  className="btn-icon"
  width="32"
  height="33"
  decoding="async"
  aria-hidden="true"
/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;