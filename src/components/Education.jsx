import React, { useRef, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useAnimation, useInView } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { adamjeelogo, city_grammar_school_logo, fast_nu } from "../assets";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        education.icon ? (
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={education.icon}
              alt={education.institution}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        ) : null
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.institution}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // 👇 Subhan’s Education Details
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "FAST National University of Computer and Emerging Sciences",
      icon: fast_nu,
      iconBg: "#383E56",
      date: "2022 - 2026",
      points: [
        "Focusing on full-stack development, backend architecture, and cloud integration.",
        "Worked on projects using React.js, Node.js, and Next.js.",
        "Collaborated on scalable systems and database optimization.",
      ],
    },
    {
      title: "Intermediate in Pre-Engineering",
      institution: "Adamjee Government Science College, Karachi",
      icon: adamjeelogo,
      iconBg: "#E6DEDD",
      date: "2020 - 2022",
      points: [
        "Studied core engineering subjects including Physics, Chemistry, and Mathematics.",
        "Developed analytical and problem-solving skills through project-based learning.",
        "Built a strong foundation for pursuing Computer Science at university level.",
      ],
    },
    {
      title: "Matriculation (Science)",
      institution: "The City Grammar School, Karachi",
      icon: city_grammar_school_logo,
      iconBg: "#232631",
      date: "2016 - 2020",
      points: [
        "Developed an early interest in computers, technology, and logic building.",
        "Built the foundation for analytical thinking and programming curiosity.",
      ],
    },
  ];

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          My academic journey
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationData.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
