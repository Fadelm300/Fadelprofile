import React, { useState, useEffect, useRef } from "react";
import "./ContactMe.css";
import { sendContactMessage } from "../../controllers/contactController";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";
import communicationIcon from "../../assets/icons/communication.webp";


const ContactLinks = ({ variant }) => {
  const blockDelay  = variant === "desktop" ? "260ms" : "520ms";

  return (
    <div
      className={`cm-reveal cm-links-block cm-links-block--${variant}`}
      style={{ "--d": blockDelay }}
    >
      <nav className="cm-links" aria-label="Contact links">

        <a
          href="mailto:fadel.m200@gmail.com"
          className="cm-link cm-link--stagger-1"
        >
          <span className="cm-link-icon">
            <img src={communicationIcon} alt="" width={64} height={64} loading="lazy" decoding="async" aria-hidden="true" />
          </span>
          <span className="cm-link-label">fadel.m200@gmail.com</span>
          <span className="cm-link-arrow" aria-hidden="true">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/fadel-mohammad-b70662151"
          className="cm-link cm-link--stagger-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cm-link-icon">
            <img src={linkedinIcon} alt="" width={32} height={33} loading="lazy" decoding="async" aria-hidden="true" />
          </span>
          <span className="cm-link-label">LinkedIn</span>
          <span className="cm-link-arrow" aria-hidden="true">↗</span>
        </a>

        <a
          href="https://github.com/Fadelm300"
          className="cm-link cm-link--stagger-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cm-link-icon">
            <img src={githubIcon} alt="" width={32} height={33} loading="lazy" decoding="async" aria-hidden="true" />
          </span>
          <span className="cm-link-label">GitHub</span>
          <span className="cm-link-arrow" aria-hidden="true">↗</span>
        </a>

      </nav>

      <p className="cm-copy">© 2025 Fadel Moussa. All rights reserved.</p>
    </div>
  );
};

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus]             = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const sectionRef                      = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      sectionRef.current
        ?.querySelectorAll(".cm-reveal")
        .forEach((el) => el.classList.add("cm-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cm-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current
      ?.querySelectorAll(".cm-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await sendContactMessage(formData);
      if (response.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(response.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Unexpected error occurred.");
    }
  };

  return (
    <section className="cm-section" ref={sectionRef}>
      <div className="cm-inner">

        {/* ── Left ── */}
        <div className="cm-left">
          <span
            className="cm-reveal cm-avail"
            style={{ "--d": "0ms" }}
          >
            <span className="cm-avail-dot" aria-hidden="true" />
            Open to opportunities
          </span>

          <h1
            className="cm-reveal cm-heading"
            style={{ "--d": "80ms" }}
          >
            Let's build<br />
            <em>something</em><br />
            great.
          </h1>

          <p
            className="cm-reveal cm-desc"
            style={{ "--d": "180ms" }}
          >
            Have a project in mind or just want to say hi?
            <br />
            My inbox is always open.
          </p>

          <ContactLinks variant="desktop" />
        </div>

        {/* ── Right ── */}
        <div className="cm-right">
          <form className="cm-form" onSubmit={handleSubmit} noValidate>

            <div className="cm-reveal cm-field" style={{ "--d": "100ms" }}>
              <label htmlFor="cm-name">Full Name</label>
              <input
                id="cm-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cm-reveal cm-field" style={{ "--d": "190ms" }}>
              <label htmlFor="cm-email">Email Address</label>
              <input
                id="cm-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cm-reveal cm-field" style={{ "--d": "280ms" }}>
              <label htmlFor="cm-phone">
                Phone <span className="cm-optional">(optional)</span>
              </label>
              <input
                id="cm-phone"
                type="tel"
                name="phone"
                placeholder="+973 00 000 000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="cm-reveal cm-field" style={{ "--d": "370ms" }}>
              <label htmlFor="cm-message">Message</label>
              <textarea
                id="cm-message"
                name="message"
                placeholder="Tell me about your project…"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="cm-reveal cm-submit-row"
              style={{ "--d": "460ms" }}
            >
              <button
                type="submit"
                className={[
                  "cm-btn",
                  status === "loading" ? "cm-btn--loading" : "",
                  status === "success" ? "cm-btn--success" : "",
                ].filter(Boolean).join(" ")}
                disabled={status === "loading"}
              >
                <span className="cm-btn-label">
                  {status === "loading"
                    ? "Sending…"
                    : status === "success"
                    ? "Message sent ✓"
                    : "Send Message"}
                </span>
                {status !== "loading" && status !== "success" && (
                  <span className="cm-btn-arrow" aria-hidden="true">→</span>
                )}
              </button>

              {status === "error" && (
                <p className="cm-error" role="alert">{errorMessage}</p>
              )}
            </div>

          </form>

          <ContactLinks variant="mobile" />
        </div>

      </div>
    </section>
  );
};

export default ContactMe;