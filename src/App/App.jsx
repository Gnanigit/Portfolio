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
      <section className="section-app" id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section className="section-app" id="My Skills">
        <Parallax type="mySkills" />
      </section>

      <div className="box" style={{ marginBottom: "5rem" }}>
        <Skills />
      </div>
      <section className="section-app" id="Projects">
        <Parallax type="Projects" />
      </section>

      <div className="box">
        <Projects />
      </div>
      <section className="section-app" id="Experience">
        <Parallax type="Experience" />
      </section>

      <div className="box">
        <Experience />
      </div>

      <section className="section-app" id="Contact">
        <Contact />
      </section>

      {/* <div className="box" id="Contact">
        <Contact />
      </div> */}
    </div>
  );
};

export default App;
