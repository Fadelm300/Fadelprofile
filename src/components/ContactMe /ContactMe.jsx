import React, { useState } from "react";
import "./ContactMe.css";
import useScrollAnimation from "../useScrollAnimation/useScrollAnimation";
import { sendContactMessage } from "../../controllers/contactController";

const ContactMe = () => {
  const [ref, animate] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`🟢 Field Changed → ${name}:`, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("📨 Submitting contact form with data:", formData);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await sendContactMessage(formData);
      // console.log("📬 Response from sendContactMessage:", response);

      if (response.success) {
        // console.log("✅ Message sent successfully!");
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // console.warn("⚠️ Message sending failed:", response.error);
        setStatus("error");
        setErrorMessage(response.error || "Something went wrong.");
      }
    } catch (err) {
      // console.error("❌ Unexpected error during form submission:", err);
      setStatus("error");
      setErrorMessage("Unexpected error occurred.");
    }
  };

  // console.log("📄 ContactMe component rendered");

  return (
    <section className={`contact-section ${animate ? "animate" : ""}`} ref={ref}>
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit" className="contact-button" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>

          {status === "success" && (
            <p className="success-message">Thank you! We look forward to connecting with you.</p>
          )}


        <div className="form-bottom-space"></div>

        <div className="contact-footer">
          <div className="social-links">
            <a href="mailto:youremail@example.com" className="social-link">
              <img src="./src/assets/icons/communication.png" alt="Email" />
              Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="social-link">
              <img src="./src/assets/icons/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" className="social-link">
              <img src="./src/assets/icons/github.png" alt="GitHub" />
              GitHub
            </a>
          </div>

          <div className="footer-bottom-space"></div>

          <p className="copyright">Copyright 2025 FADEL MOUSSA, All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
