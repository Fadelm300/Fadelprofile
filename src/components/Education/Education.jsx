import React, { useEffect, useRef } from "react";
import "./Education.css";
import gaLogo from "../../assets/EducationIcons/General_Assembly_Logo.png";
import uobLogo from "../../assets/EducationIcons/University_of_Bahrain_logo.webp";

const entries = [
  {
    logo: gaLogo,
    alt: "General Assembly",
    degree: "Software Engineering Immersive Program",
    school: "General Assembly, Bahrain",
    period: "Jun 2024 – Sep 2024",
    body: "Completed a comprehensive 420-hour Software Engineering Bootcamp covering web and software development, including Git, HTML/CSS, JavaScript, Python, Django, SQL, MongoDB, Node.js, Express, jQuery, React, APIs, Product Development, Deployment, Authentication, Algorithms, Data Structures, and Design Patterns. Gained hands-on experience in building and deploying full-stack applications while developing strong problem-solving and presentation skills.",
  },
  {
    logo: uobLogo,
    alt: "University of Bahrain",
    degree: "Bachelor of Science in Computer Science",
    school: "College of Information Technology, University of Bahrain",
    period: "Semester II, 2024 / 2025",
    body: "Successfully completed all graduation requirements for the Bachelor of Science in Computer Science program, gaining a solid foundation in core computing concepts, programming, algorithms, data structures, and software development principles.",
  },
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      sectionRef.current
        ?.querySelectorAll(".edu-reveal")
        .forEach((el) => el.classList.add("edu-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("edu-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current
      ?.querySelectorAll(".edu-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu-section" ref={sectionRef}>
      <div className="edu-inner">

        {/* Header */}
        <div className="edu-header">
          <span
            className="edu-reveal edu-label"
            style={{ "--d": "0ms" }}
          >
            Background
          </span>
          <h1
            className="edu-reveal edu-title"
            style={{ "--d": "80ms" }}
          >
            Education
          </h1>
          <p
            className="edu-reveal edu-subtitle"
            style={{ "--d": "160ms" }}
          >
            Academic and professional training that shaped my technical foundation.
          </p>
        </div>

        {/* Entries */}
        <div className="edu-list">
          {entries.map((item, i) => (
            <div
              key={i}
              className="edu-reveal edu-entry"
              style={{ "--d": `${240 + i * 140}ms` }}
            >
              {/* Logo */}
              <div className="edu-logo-wrap">
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="edu-logo"
                />
              </div>

              {/* Content */}
              <div className="edu-content">
                <div className="edu-meta">
                  <span className="edu-school">{item.school}</span>
                  <span className="edu-period">{item.period}</span>
                </div>
                <h2 className="edu-degree">{item.degree}</h2>
                <p className="edu-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;