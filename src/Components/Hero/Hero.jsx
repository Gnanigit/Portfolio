import React from "react";
import "./Hero.scss";

import { motion } from "framer-motion";

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const textVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Gnaneswar Yalla</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer & UI Designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <a
              href="/Resume/Gnaneswar_Yalla_Resume.pdf"
              download="Gnaneswar_Yalla_Resume.pdf"
            >
              <motion.button variants={textVariants}>
                Download Resume
              </motion.button>
            </a>

            <motion.button
              onClick={() =>
                document
                  .querySelector("#Contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              variants={textVariants}
            >
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
          ></motion.img>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Computer Science Engineer | Full Stack Web Developer
      </motion.div>

      <div className="imageContainer">
        <img src="hero.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
