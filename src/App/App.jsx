import "./App.scss";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Parallax from "../Components/Parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="My Skills">
        <Parallax type="mySkills" />
      </section>
      <section>My Skills</section>

      <section id="Projects">
        <Parallax type="Projects" />
      </section>
      <section>My Projects</section>

      <section id="Contact"></section>

      <section id="About"></section>
    </div>
  );
};

export default App;
