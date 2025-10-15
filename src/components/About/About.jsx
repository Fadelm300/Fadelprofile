import React from "react";
import "./About.css";
import profileImg from "../../assets/ST3_4992 copy.jpg"; 
import useScrollAnimation from "../useScrollAnimation/useScrollAnimation";
const About = () => {
  const [ref, isVisible] = useScrollAnimation();
  const greetingText = "Hello,";
  const letters = greetingText.split("").map((char, index) => (
    <span
      key={index}
      className="aboutpage-letter"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {char}
    </span>
  ));

  return (
    <section ref={ref} 
      className={`aboutpage-section ${isVisible ? "animate" : ""}`}
      >
      <div className="aboutpage-container">
        <div className="aboutpage-text-side">
          <h2 className="aboutpage-greeting">{letters}and welcome to my portfolio.</h2>
          <h1 className="aboutpage-name">Fadel  Moussa</h1>
          <p className="aboutpage-description">
            I’m a Software Engineer driven by passion, creativity, and
            innovation. I strive to craft impactful solutions that solve
            problems, inspire change, and contribute positively to the
            community, turning ideas into reality through thoughtful design,
            continuous growth, and purposeful development.
          </p>

          <a href="https://drive.google.com/file/d/1ObMMc-SrAGDRi6p0StsTFb2skLODRGd8/view?usp=drive_link" className="aboutpage-btn">
            Check Resume
          </a>
        </div>

        <div className="aboutpage-image-side">
          <img
            src={profileImg}
            alt="Profile"
            className="aboutpage-profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
