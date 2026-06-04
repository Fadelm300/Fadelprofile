import React, { useEffect, useRef } from "react";
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
import typescript from "../../assets/skillsIcons/typescript.png";
const skillCategories = [
  {
    title: "Front-End Development",
    description: "Interfaces, components, and visual experiences",
    skills: [
      { name: "React.js",   img: react },
      { name: "JavaScript", img: js },
      { name: "TypeScript", img: typescript },
      { name: "Next.js",    img: nextjs },
      { name: "Angular.js", img: angular },
      { name: "HTML",       img: html },
      { name: "Flutter",    img: flutter },
      { name: "CSS",        img: css },
      { name: "Bootstrap",  img: bootstrap },
      { name: "Tailwind",   img: tailwind },
    ],
  },
  {
    title: "Back-End Development",
    description: "APIs, server logic, and data management",
    skills: [
      { name: "Node.js",    img: node },
      { name: "Express.js", img: express },
      { name: "PHP",        img: php },
      { name: "Python",     img: python },
      { name: "Django",     img: django },
      { name: "Flask",      img: flask },
    ],
  },
  {
    title: "DevOps / Cloud & Infrastructure",
    description: "Deployment, hosting, and cloud services",
    skills: [
      { name: "Firebase",     img: firebase },
      { name: "Cloudflare",   img: cloudflare },
      { name: "AWS",          img: AWS },
      { name: "Google Cloud", img: googlecloud },
      { name: "MongoDB",      img: mongodb },
      { name: "Heroku",       img: heroku },
    ],
  },
  {
    title: "Development Tools & Platforms",
    description: "Workflow, testing, design, and productivity",
    skills: [
      { name: "Unity",          img: unity },
      { name: "Postman",        img: postman },
      { name: "GitHub",         img: github },
      { name: "Figma",          img: figma },
      { name: "Trello",         img: trello },
      { name: "XAMPP",          img: xampp },
      { name: "phpMyAdmin",     img: phpmyadmin },
      { name: "Ubuntu",         img: ubuntu },
      { name: "Linux",          img: linux },
      { name: "Android Studio", img: androidstudio },
      { name: "VS Code",        img: vscode },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      sectionRef.current
        ?.querySelectorAll(".sk-reveal")
        .forEach((el) => el.classList.add("sk-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sk-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sectionRef.current
      ?.querySelectorAll(".sk-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sk-section" ref={sectionRef}>
      <div className="sk-inner">

        {/* ── Header ── */}
        <div className="sk-header">
          <span
            className="sk-reveal sk-label"
            style={{ "--d": "0ms" }}
          >
            Tech Stack
          </span>
          <h1
            className="sk-reveal sk-title"
            style={{ "--d": "80ms" }}
          >
            Skills &<br />
            <em>Tools</em>
          </h1>
          <p
            className="sk-reveal sk-subtitle"
            style={{ "--d": "160ms" }}
          >
            A practical stack I use to design, build, test, and ship
            full-stack web experiences.
          </p>
        </div>

        {/* ── Categories grid ── */}
        <div className="sk-grid">
          {skillCategories.map((category, ci) => (
            <div
              key={ci}
              className="sk-reveal sk-category"
              style={{ "--d": `${240 + ci * 110}ms` }}
            >
              {/* Category header */}
              <div className="sk-cat-header">
                <span className="sk-cat-count">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
                <div className="sk-cat-meta">
                  <h2 className="sk-cat-title">{category.title}</h2>
                  <p className="sk-cat-desc">{category.description}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="sk-cat-line" aria-hidden="true" />

              {/* Skill chips */}
              <div className="sk-chips">
                {category.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="sk-reveal sk-chip"
                    style={{ "--d": `${260 + ci * 110 + si * 45}ms` }}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="sk-chip-icon"
                    />
                    <span className="sk-chip-name">{skill.name}</span>
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