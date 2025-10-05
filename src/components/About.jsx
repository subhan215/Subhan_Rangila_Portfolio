import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { resume, profilepic } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full xs:w-[250px]"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
        <motion.img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
);

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile and Buttons */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_0_22.5px_7.5px_rgba(145,94,255,1.0)]">
            <img
              src={profilepic}
              alt="Subhan Rangila"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition duration-300 ease-in-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(resume, "_blank")}
            >
              <span className="font-semibold">Resume</span>
            </motion.button>

            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition duration-300 ease-in-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/subhan-rangila-864199200/',
                  '_blank'
                )
              }
            >
              <span className="font-semibold">LinkedIn</span>
            </motion.button>

            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-md hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 transform transition duration-300 ease-in-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://github.com/subhan215', '_blank')}
            >
              <span className="font-semibold">GitHub</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-2/3"
        >
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
          >
            <motion.li variants={fadeIn("up", "spring", 0.1, 0.75)}>
              <span className="mr-4 text-2xl">👨‍💻</span>
              I’m an aspiring Software Developer passionate about building
              scalable, impactful, and user-centric solutions.
            </motion.li>

            <motion.li variants={fadeIn("up", "spring", 0.2, 0.75)}>
              <span className="mr-4 text-2xl">🎓</span>
              Pursuing a Bachelor of Science in Computer Science at{" "}
              <b>FAST National University of Computer and Emerging Sciences, Karachi</b>,
              I enjoy translating ideas into reliable, production-ready software.
            </motion.li>

            <motion.li variants={fadeIn("up", "spring", 0.3, 0.75)}>
              <span className="mr-4 text-2xl">🛠</span>
              I’ve worked with technologies like <b>Next.js</b>, <b>React.js</b>,{" "}
              <b>Node.js</b>, <b>PostgreSQL</b>, and <b>MongoDB</b> to deliver
              scalable backend systems and modern frontend experiences.
            </motion.li>

            <motion.li variants={fadeIn("up", "spring", 0.4, 0.75)}>
              <span className="mr-4 text-2xl">🚀</span>
              I’m particularly interested in system design, backend architecture,
              and automation that improve efficiency and reliability.
            </motion.li>

            <motion.li variants={fadeIn("up", "spring", 0.5, 0.75)}>
              <span className="mr-4 text-2xl">💡</span>
              Continuously learning and exploring, I aim to craft elegant
              solutions that make technology simple and powerful.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
