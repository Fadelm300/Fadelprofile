import React from "react";
import "./ContactMe.css";
import useScrollAnimation from "../useScrollAnimation/useScrollAnimation";

const ContactMe = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <section
      className={`contact-section ${animate ? "animate" : ""}`}
      ref={ref}
    >
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>
        <form className="contact-form">
          <label>
            Full Name
            <input type="text" placeholder="Enter your full name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Phone Number
            <input type="tel" placeholder="Enter your phone number" />
          </label>
          <label>
            Message
            <textarea placeholder="Type your message here"></textarea>
          </label>
          <button type="submit" className="contact-button">
            SEND MESSAGE
          </button>
        </form>

        <div className="form-bottom-space"></div>

        <div className="contact-footer">
          <div className="social-links">
            <a href="---------------" className="social-link">
              <img src="./src/assets/icons/gmail.png" alt="Email" />
              Email
            </a>
            <a href="-------------" className="social-link">
              <img src="./src/assets/icons/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="-------" className="social-link">
              <img src="./src/assets/icons/github.png" alt="GitHub" />
              GitHub
            </a>
          </div>

          <div className="footer-bottom-space"></div>

          <p className="copyright">Copyright 2025 FADEL MOUSSA , All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
