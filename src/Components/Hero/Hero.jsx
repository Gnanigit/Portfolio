import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <h2>Gnaneswar Yalla</h2>
        <h1>Full Stack Developer & UI Designer</h1>
        <div className="buttons">
          <button>See the latest works</button>
          <button>Contact me</button>
        </div>
        <img src="scroll.png"></img>
      </div>

      <div className="imageContainer">
        <img src="hero.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
