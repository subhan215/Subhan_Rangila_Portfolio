import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import {
  javascript,
  typescript,
  reactjs,
  nextjs,
  nodejs,
  express,
  tailwind,
  python,
  java,
  cplusplus,
  firebase,
  mongodb,
  postgresql,
  docker,
  git,
  github,
  postman,
  springboot,
  linux,
} from "../assets";

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: python },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Java", icon: java },
      { name: "C++", icon: cplusplus },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
      { name: "Spring Boot", icon: springboot },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: reactjs },
      { name: "Next.js", icon: nextjs },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: postgresql },
      { name: "MongoDB", icon: mongodb },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: docker },
      { name: "Linux", icon: linux },
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Postman", icon: postman },
    ],
  },
];

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    <section ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I work with</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8">
        {techCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={mainControls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: catIdx * 0.15, duration: 0.5 } },
            }}
          >
            <h3 className="text-white text-[18px] font-semibold mb-4" style={{
              background: "linear-gradient(90deg, #915EFF, #00BFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={mainControls}
                  variants={{
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: catIdx * 0.1 + idx * 0.05, duration: 0.4, type: "spring" },
                    },
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center justify-center w-28 h-28 bg-[#1d1836] rounded-2xl border border-[#2a2550] hover:border-[#915EFF] transition-colors cursor-pointer p-3"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-14 h-14 object-contain"
                    draggable="false"
                  />
                  <span className="text-xs text-gray-400 mt-2 text-center leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
