

import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Education from './components/Education/Education.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import NotFound from "./components/NotFound/NotFound";
function App() {
const homePaths = ["/", "/index.html"];
const isUnknownPage = !homePaths.includes(window.location.pathname);

if (isUnknownPage) {
  return <NotFound />;
}

  return (
    <>
      <NavBar />

      {/* <MainContent /> */}
      <main>
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
      </main>
    </>
  );
}

export default App
