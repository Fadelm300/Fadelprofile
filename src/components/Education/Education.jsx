import React from "react";
import "./Education.css";
import gaLogo from "../../assets/EducationIcons/ga.png"; 
import uobLogo from "../../assets/EducationIcons/University_of_Bahrain_logo.png"; 
import useScrollAnimation from "../useScrollAnimation/useScrollAnimation";
const Education = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      className={`education-section ${isVisible ? "animate" : ""}`}
      ref={ref}
      >
      <h1 className="education-title">Education</h1>

      <div className="education-container">

        <div className="education-card">
          <img src={gaLogo} alt="General Assembly" className="education-logo" />
          <div className="education-info">
            <h2>Software Engineering Immersive Program</h2>
            <h3>General Assembly, Bahrain – (Jun 2024 – Sep 2024)</h3>
            <p>
              Completed a comprehensive 420-hour Software Engineering Bootcamp
              covering web and software development, including Git, HTML/CSS,
              JavaScript, Python, Django, SQL, MongoDB, Node.js, Express, jQuery,
              React, APIs, Product Development, Deployment, Authentication,
              Algorithms, Data Structures, and Design Patterns. Gained hands-on
              experience in building and deploying full-stack applications while
              developing strong problem-solving and presentation skills.
            </p>
          </div>
        </div>


        <div className="education-card">
          <img src={uobLogo} alt="University of Bahrain" className="education-logo" />
          <div className="education-info">
            <h2>Bachelor of Science in Computer Science</h2>
            <h3>
              College of Information Technology – (Semester II, 2024/2025)
            </h3>
            <p>
              Successfully completed all graduation requirements for the Bachelor
              of Science in Computer Science program, gaining a solid foundation in
              core computing concepts, programming, algorithms, data structures,
              and software development principles. Certificate pending official
              endorsement by the University Council.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
