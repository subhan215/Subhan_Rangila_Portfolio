import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { jawan_pakistan , frontend_certification} from "../assets"; // Replace with the actual certification logo if available

const Certification = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const certification = {
    title: "Frontend Development",
    provider: "Jawan Pakistan",
    icon: jawan_pakistan, // Replace with Great Learning logo if you have it
    iconBg: "#383E56",
    date: "Issued July 2024",
    points: [
      "Completed an in-depth course on HTML, CSS, JavaScript, and React fundamentals.",
      "Learned component-based development, responsive design, and state management.",
    ],
    credential:
      frontend_certification
  };

  return (
    <div ref={sectionRef}>
      {/* Section Header */}
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>Continuous Learning</p>
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
          Certifications
        </h2>
      </motion.div>

      {/* Certification Card */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-16 flex justify-center"
      >
        <div className="bg-tertiary p-8 rounded-2xl w-full max-w-md text-center shadow-lg hover:shadow-[0_0_20px_rgba(145,94,255,0.5)] transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#383E56] flex items-center justify-center">
              <img
                src={certification.icon}
                alt={certification.title}
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          </div>
          <h3 className="text-white font-bold text-[22px] mb-2">
            {certification.title}
          </h3>
          <p className="text-secondary text-[14px] mb-1">
            {certification.provider}
          </p>
          <p className="text-secondary text-[12px] mb-4">{certification.date}</p>
          <ul className="list-disc text-left ml-5 space-y-2 mb-6">
            {certification.points.map((point, index) => (
              <li
                key={`certification-point-${index}`}
                className="text-white-100 text-[13px] tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
          <a
            href={certification.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient text-secondary py-2 px-4 rounded-lg outline-none text-[12px] font-bold shadow-md shadow-primary transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]"
          >
            View Credential
          </a>
        </div>
      </motion.div>

      {/* Styling */}
      <style jsx global>{`
        .black-gradient {
          background: linear-gradient(to right, #434343, #000000);
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Certification, "certifications");
