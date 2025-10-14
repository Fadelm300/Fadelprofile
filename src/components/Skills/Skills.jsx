import React from "react";
import "./Skills.css";
import react from "../../assets/skillsIcons/react.png";
import js from "../../assets/skillsIcons/js.png";
import nextjs from "../../assets/skillsIcons/nextjs.png";
import angular from "../../assets/skillsIcons/angular.png";
import html from "../../assets/skillsIcons/html5.png";
import flutter from "../../assets/skillsIcons/flutter.png";
import css from "../../assets/skillsIcons/css3.png";
import bootstrap from "../../assets/skillsIcons/bootstrap.png";
import tailwind from "../../assets/skillsIcons/tailwind.png";
import node from "../../assets/skillsIcons/node2.png"; 
import php from "../../assets/skillsIcons/PHP.png";
import python from "../../assets/skillsIcons/python.png";
import express from "../../assets/skillsIcons/express.png";
import django from "../../assets/skillsIcons/django.png";
import flask from "../../assets/skillsIcons/flask.png"; 

import firebase from "../../assets/skillsIcons/firebase.png";
import cloudflare from "../../assets/skillsIcons/cloudflare.png";
import AWS from "../../assets/skillsIcons/AWS.png";
import googlecloud from "../../assets/skillsIcons/googlecloud.png";
import mongodb from "../../assets/skillsIcons/mongodb.png";
import heroku from "../../assets/skillsIcons/heroku.png";

import unity from "../../assets/skillsIcons/unity.png"; 
import postman from "../../assets/skillsIcons/postman.png";
import github from "../../assets/skillsIcons/github.png";
import figma from "../../assets/skillsIcons/figma.png";
import trello from "../../assets/skillsIcons/trello.png";
import xampp from "../../assets/skillsIcons/xampp.png";
import phpmyadmin from "../../assets/skillsIcons/phpmyadmin.png";
import ubuntu from "../../assets/skillsIcons/ubuntu.png";
import linux from "../../assets/skillsIcons/linux.png";
import vscode from "../../assets/skillsIcons/vscode.png";
import androidstudio from "../../assets/skillsIcons/androidstudio.png";  

import useScrollAnimation from "../useScrollAnimation/useScrollAnimation";
const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
  {
    title: "Front-End Development 💻",
    skills: [
      { name: "React.js", img: react },
      { name: "JavaScript", img: js },
      { name: "Next.js", img: nextjs },
      { name: "Angular.js", img: angular },
      { name: "HTML", img: html },
      { name: "Flutter", img: flutter },
      { name: "CSS", img: css },
      { name: "Bootstrap", img: bootstrap },
      { name: "Tailwind", img: tailwind },
    ],
  },
  {
    title: "Back-End Development 🖥️",
    skills: [
      { name: "Node.js", img: node },
      { name: "PHP", img: php },
      { name: "Python", img: python },
      { name: "Express.js", img: express },
      { name: "Django", img: django },
      { name: "Flask", img: flask },
    ],
  },
  {
    title: "DevOps / Cloud & Infrastructure   ☁️",
    skills: [
      { name: "Firebase", img: firebase },
      { name: "Cloudflare", img: cloudflare },
      { name: "AWS", img: AWS },
      { name: "Google Cloud", img: googlecloud },
      { name: "MongoDB", img: mongodb },
      { name: "Heroku", img: heroku },
    ],
  },
  {
    title: "Development Tools & Platforms 🛠️",
    skills: [
      { name: "Unity", img: unity },
      { name: "Postman", img: postman },
      { name: "GitHub", img: github },
      { name: "Figma", img: figma },
      { name: "Trello", img: trello },
      { name: "XAMPP", img: xampp },
      { name: "phpMyAdmin", img: phpmyadmin },
      { name: "Ubuntu", img: ubuntu },
      { name: "Linux", img: linux },
      { name: "Android Studio", img: androidstudio },
      { name: "Visual Studio ", img: vscode },
    ],
  },
];


  return (
    <section ref={ref} className={`skillspage-section ${isVisible ? "animate" : ""}`}>
      <div className="skillspage-container">
        <div className="skillspage-header">
          <h2 className="skillspage-title">Skills</h2>
          <p className="skillspage-subtitle">
            Here are some of my skills on which I have been working on for the past 5 years.
          </p>
        </div>
      
        <div className="skillspage-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skillspage-category">
              <h3 className="skillspage-category-title">{category.title}</h3>
              <div className="skillspage-cards">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skillspage-card">
                    <img src={skill.img} alt={skill.name} className="skillspage-logo" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
