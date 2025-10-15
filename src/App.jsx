import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import Projects from './components/Projects/Projects.jsx';
import Education from './components/Education/Education.jsx';
import ContactMe from './components/ContactMe /ContactMe.jsx';
function App() {

  return (
    <>
    <NavBar />

    {/* <MainContent /> */}
   <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>


       <section id="projects">
        <Projects />
      </section>

 <section id="education">
        <Education />
      </section>


      <section id="contactme">
        <ContactMe />
      </section>

    </>
  )
}

export default App
