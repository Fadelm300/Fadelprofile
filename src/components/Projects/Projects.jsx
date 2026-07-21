import React, { useEffect, useRef } from "react";
import "./Projects.css";
import pharmacyImg from "../../assets/Projectsimg/pharmacy.webp";
import uniclubImg from "../../assets/Projectsimg/uni1.webp";
import quizAppImg from "../../assets/Projectsimg/quizapp.webp";
import carsBlog from "../../assets/Projectsimg/carsBlog.webp";
import xoaiImg from "../../assets/Projectsimg/xo-AI.webp";
import cardMatchImg from "../../assets/Projectsimg/cardmatch.webp";
import EmployeeManagementSystem from "../../assets/Projectsimg/EM_img.webp";
import insightBoardImg from "../../assets/Projectsimg/insightboard.webp";
const projectImageDimensions = {
  [pharmacyImg]: { width: 600, height: 900 },
  [uniclubImg]: { width: 600, height: 813 },
  [quizAppImg]: { width: 600, height: 600 },
  [carsBlog]: { width: 600, height: 900 },
  [xoaiImg]: { width: 600, height: 600 },
  [cardMatchImg]: { width: 600, height: 600 },
  [EmployeeManagementSystem]: { width: 600, height: 600 },
  [insightBoardImg]: { width: 600, height: 750 },
};
const projects = [
  {
    name: "UniClub",
    img: uniclubImg,
    link: "https://github.com/Fadelm300/UniClub-frontend",
  },
  {
    name: "Employee Management System",
    img: EmployeeManagementSystem,
    link: "https://github.com/Fadelm300/EmployeeManagementSystem-frontend",
  },
  {
    name: "InsightBoard",
    img: insightBoardImg,
    link: "https://github.com/Fadelm300/insightboard",
  },
  {
    name: "Quiz App",
    img: quizAppImg,
    link: "https://github.com/HaroonAlnhdi/Quizz_App",
  },
  {
    name: "Blog",
    img: carsBlog,
    link: "https://github.com/Fadelm300/Car-Blogs",
  },
  {
    name: "Card Match",
    img: cardMatchImg,
    link: "https://github.com/Fadelm300/Memory_cards_Game",
  },
  {
    name: "XO AI",
    img: xoaiImg,
    link: "https://github.com/Fadelm300/tic-tac-toe",
  },
  {
    name: "Pharmacy",
    img: pharmacyImg,
    link: "https://github.com/Fadelm300/pharmacy_489",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      sectionRef.current
        ?.querySelectorAll(".prj-reveal")
        .forEach((el) => el.classList.add("prj-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("prj-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sectionRef.current
      ?.querySelectorAll(".prj-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="prj-section" ref={sectionRef}>
      <div className="prj-inner">

        {/* Header */}
        <div className="prj-header">
          <span
            className="prj-reveal prj-label"
            style={{ "--d": "0ms" }}
          >
            Work
          </span>
          <h1
            className="prj-reveal prj-title"
            style={{ "--d": "80ms" }}
          >
            Projects
          </h1>
          <p
            className="prj-reveal prj-subtitle"
            style={{ "--d": "160ms" }}
          >
            A selection of web apps and tools I have built  from full-stack
            platforms to interactive games.
          </p>
        </div>

        {/* Grid */}
        <div className="prj-grid">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="prj-reveal prj-card"
              style={{ "--d": `${200 + i * 70}ms` }}
              aria-label={`View ${project.name} on GitHub`}
            >
              {/* Portrait image */}
              <div className="prj-img-wrap">
                <img src={project.img}
                 alt={`${project.name} project preview`}
                 className="prj-img"
                 width={projectImageDimensions[project.img].width} 
                 height={projectImageDimensions[project.img].height}
                 loading="lazy" 
                 decoding="async" />
                {/* Hover overlay */}
                <div className="prj-overlay" aria-hidden="true">
                  <span className="prj-cta">View on GitHub →</span>
                </div>
              </div>

              {/* Footer */}
              <div className="prj-footer">
                <span className="prj-name">{project.name}</span>
                <span className="prj-icon" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;