import "./App.scss";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Parallax from "../Components/Parallax/Parallax";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Cursor from "../Components/Cursor/Cursor";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="My Skills">
        <Parallax type="mySkills" />
      </section>
      <section>
        <Skills />
      </section>

      <section id="Projects">
        <Parallax type="Projects" />
      </section>

      <Projects />
      <section id="Experience">
        <Experience />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
