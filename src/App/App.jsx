import "./App.scss";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <h2>Services</h2>
      </section>

      <section id="Portfolio">
        <h2>Portfolio</h2>
      </section>

      <section id="Contact">
        <h2>Contact</h2>
      </section>

      <section id="About">
        <h2>About</h2>
      </section>
    </div>
  );
};

export default App;
