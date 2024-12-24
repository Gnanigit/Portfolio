import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gnani
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/Gnanigit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
          <a
            href="http://www.linkedin.com/in/gnaneswar-yalla-730ba4250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/LinkedIn.png" alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/gnani_178/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/gnaneswar.yall.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@gnaniyalla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
