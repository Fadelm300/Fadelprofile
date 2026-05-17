import React, { useEffect, useRef } from "react";
import "./About.css";
import rightImage from "../../assets/ST3_4992 copy.jpg";

const About = () => {
  const sectionRef = useRef(null);

  // Mount-based reveal (hero is visible on load, no scroll needed)
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      sectionRef.current
        ?.querySelectorAll(".mc-reveal")
        .forEach((el) => el.classList.add("mc-visible"));
      return;
    }

    // Small delay so browser has painted before animating
    const timer = setTimeout(() => {
      sectionRef.current
        ?.querySelectorAll(".mc-reveal")
        .forEach((el) => el.classList.add("mc-visible"));
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mc-section" ref={sectionRef}>
      <div className="mc-inner">

        {/* ── Left — Text ── */}
        <div className="mc-left">
          <span
            className="mc-reveal mc-greeting"
            style={{ "--d": "0ms" }}
          >
            Hello, I'm
          </span>

          <h1
            className="mc-reveal mc-name"
            style={{ "--d": "100ms" }}
          >
            Fadel<br />
            <em>M. Moussa</em>
          </h1>

          <p
            className="mc-reveal mc-desc"
            style={{ "--d": "220ms" }}
          >
            A Software Engineer driven by passion, creativity, and
            innovation. I craft impactful solutions that solve real
            problems, inspire change, and contribute positively to
            the community  turning ideas into reality through
            thoughtful design and purposeful development.
          </p>

          <div
            className="mc-reveal mc-actions"
            style={{ "--d": "360ms" }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mc-btn-primary"
            >
              <span className="mc-btn-label">Check Resume</span>
              <span className="mc-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a href="#contactme" className="mc-btn-ghost">
              Get in touch ↗
            </a>
          </div>

          {/* Subtle stat row */}
          <div
            className="mc-reveal mc-stats"
            style={{ "--d": "480ms" }}
          >
            <div className="mc-stat">
              <span className="mc-stat-num">8+</span>
              <span className="mc-stat-label">Projects built</span>
            </div>
            <div className="mc-stat-divider" aria-hidden="true" />
            <div className="mc-stat">
              <span className="mc-stat-num">420h</span>
              <span className="mc-stat-label">Bootcamp training</span>
            </div>
            <div className="mc-stat-divider" aria-hidden="true" />
            <div className="mc-stat">
              <span className="mc-stat-num">Full</span>
              <span className="mc-stat-label">Stack ready</span>
            </div>
          </div>
        </div>

        {/* ── Right — Photo ── */}
          <div
            className="mc-reveal mc-right"
            style={{ "--d": "180ms" }}
          >
            <div className="mc-img-frame">
              <img
                src={rightImage}
                alt="Fadel M. Moussa"
                className="mc-img"
              />

              <div className="mc-badge" aria-hidden="true">
                <span className="mc-badge-dot" />
                Available for work
              </div>
            </div>
          </div>
      </div>

      {/* Scroll hint */}
      <div className="mc-reveal mc-scroll-hint" style={{ "--d": "700ms" }}>
        <span className="mc-scroll-line" aria-hidden="true" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default About;