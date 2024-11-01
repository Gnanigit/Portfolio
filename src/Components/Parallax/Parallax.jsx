import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleFactor = 0.7;
  const yText = useTransform(
    scrollYProgress,
    (value) => `${value * 500 * scaleFactor}%`
  );
  const yBg = useTransform(
    scrollYProgress,
    (value) => `${value * 100 * scaleFactor}%`
  );

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "mySkills"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "mySkills" ? "My Skills" : "My Projects"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "mySkills" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
