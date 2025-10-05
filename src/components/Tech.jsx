import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import all icons from your assets
import {
  javascript,
  typescript,
  reactjs,
  reactnative,
  nextjs,
  nodejs,
  express,
  tailwind,
  django,
  python,
  java,
  cplusplus,
  c , 
  cisco,
  firebase,
  mysql,
  mongodb,
  postgresql,
  docker,
  git,
  github,
  postman,
  vscode,
  threejs,
  photoshop,
  figma,
  canva,
  aws,
  azure,
  springboot,
  jira
} from "../assets";

// 💻 Core Programming & Frameworks
const programming = [
  { name: "C", icon: c },
  { name: "C++", icon: cplusplus },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  { name: "React Native", icon: reactnative },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "Spring Boot", icon: springboot },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },
];

// ⚙️ Databases, Tools & Platforms
const itTools = [
  { name: "PostgreSQL", icon: postgresql },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Postman", icon: postman },
  { name: "VS Code", icon: vscode },
  { name: "Cisco Networking", icon: cisco },
  { name: "Jira", icon: jira },
];

// 🎨 Design & Creative Tools
const contentProduction = [
  { name: "Figma", icon: figma },
  { name: "Photoshop", icon: photoshop },
  { name: "Canva", icon: canva },
];

const Tech = () => {
  const [rows, setRows] = useState({
    programming: [],
    itTools: [],
    contentProduction: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    const dynamicRows = [];
    const rowSize = width < 500 ? 3 : 6;
    for (let i = 0; i < techArray.length; i += rowSize) {
      dynamicRows.push(techArray.slice(i, i + rowSize));
    }
    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      setRows({
        programming: calculateRows(window.innerWidth, programming),
        itTools: calculateRows(window.innerWidth, itTools),
        contentProduction: calculateRows(window.innerWidth, contentProduction),
      });
    };

    calculateRowsForAllCategories();
    window.addEventListener("resize", calculateRowsForAllCategories);
    return () => window.removeEventListener("resize", calculateRowsForAllCategories);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: Math.random() * 1.5, duration: 0.5, type: "spring" } },
    hover: { scale: 1.05, zIndex: 2, transition: { duration: 0.3 } },
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
    >
      <motion.h2
        className="category-title top"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        style={{
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >
        {`<${categoryName}>`}
      </motion.h2>

      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img src={tech.icon} alt={tech.name} style={{ userSelect: "none" }} draggable="false" />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <motion.h2
        className="category-title bottom"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        style={{
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >
        {`</${categoryName}>`}
      </motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>

        {renderCategory("Programming & Frameworks", rows.programming)}
        {renderCategory("Databases & Tools", rows.itTools)}
        {renderCategory("Design & Creative Tools", rows.contentProduction)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
