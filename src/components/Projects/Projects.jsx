import React from "react";
import "./Projects.css";
import useScrollAnimation from "../useScrollAnimation/useScrollAnimation";
import pharmacyImg from "../../assets/Projectsimg/pharmacy.png";
import uniclubImg from "../../assets/Projectsimg/uni1.png";
import quizAppImg from "../../assets/Projectsimg/quizapp.png";
import carsBlog from "../../assets/Projectsimg/carsBlog.png";
import xoaiImg from "../../assets/Projectsimg/xo-AI.png";
import cardMatchImg from "../../assets/Projectsimg/cardmatch.png";
const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    ,
    { name: "Blog", img: carsBlog, link: "https://github.com/Fadelm300/Car-Blogs" },
    { name: "UniClub", img: uniclubImg, link: "https://github.com/Fadelm300/UniClub-frontend" },
    { name: "Quiz App", img: quizAppImg, link: "https://github.com/HaroonAlnhdi/Quizz_App" },
    { name: "Card Match", img: cardMatchImg, link: "https://github.com/Fadelm300/Memory_cards_Game" },
    { name: "XO AI", img: xoaiImg, link: "https://github.com/Fadelm300/tic-tac-toe" },
   { name: "Pharmacy", img: pharmacyImg, link: "https://github.com/Fadelm300/pharmacy" }
  ];

  return (
      <section ref={ref}    className={`projects-section${isVisible ? " animate" : ""}`}>

      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-description">
          I have worked on a wide range of projects, from web apps to Android apps.
          Here are some of my latest projects.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.name} className="project-image" />
                <span className="project-name">{project.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;






