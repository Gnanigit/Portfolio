import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useAnimation } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import "./Experience.scss";
import { experiences } from "./ExperienceItems.js";

export const textVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
    },
  },
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentClassName="vertical-timeline-element-content"
      contentArrowClassName="vertical-timeline-element-content-arrow"
      date={experience.date}
      iconClassName="vertical-timeline-element-icon"
      icon={
        <div className="vertical-timeline-element-icon">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="icon-img"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    });
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div ref={ref} className="experience-section">
      <motion.div initial="hidden" animate={controls} variants={textVariant}>
        {/* <p className="sectionSubText text-center">What I have done so far</p> */}
        <h2 className="sectionHeadText text-center">Work Experience</h2>
      </motion.div>

      <div className="mt-20 experience">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
