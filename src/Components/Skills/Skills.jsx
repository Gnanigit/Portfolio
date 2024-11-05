import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import skills from "./SkillItems";
import "./Skills.scss";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to determine if pagination should be applied
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 738); // Mobile size threshold
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Re-check on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // State for pagination on mobile
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 2;
  const paginatedSkills = skills.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * skillsPerPage < skills.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Skills">
      <div className="wrapper">
        <h1 className="title">My Skills</h1>
        <p className="desc">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p>

        <div className="SkillsContainer">
          {(isMobile ? paginatedSkills : skills).map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <div className="Skill">
                <h2 className="SkillTitle">{skill.title}</h2>
                <ul className="SkillList">
                  {skill.skills.map((item, index_x) => (
                    <li className="SkillItem" key={`skill-x-${index_x}`}>
                      <img
                        className="SkillImage"
                        src={item.image}
                        alt={item.name}
                      />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          ))}
        </div>

        {isMobile && (
          <div className="PaginationControls">
            <button onClick={handlePrevious} disabled={currentPage === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={(currentPage + 1) * skillsPerPage >= skills.length}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
