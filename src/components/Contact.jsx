import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden no-select`}
    >
      {/* LEFT: Contact Details */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let’s connect</p>
        <h3 className={styles.sectionHeadText}>Contact Information.</h3>

        <div className="mt-10 flex flex-col gap-6 text-white">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUser} className="text-purple-500 text-xl" />
            <span className="text-lg font-medium">Subhan Rangila</span>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 text-xl" />
            <a
              href="mailto:asifsubhan904@gmail.com"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              asifsubhan904@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-purple-500 text-xl" />
            <a
              href="tel:+923083978739"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              +92 308 3978739
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 text-xl" />
            <span>Karachi, Sindh, Pakistan</span>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faLinkedin} className="text-purple-500 text-xl" />
            <a
              href="https://linkedin.com/in/subhan-rangila-864199200/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              linkedin.com/in/subhan-rangila-864199200
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faGithub} className="text-purple-500 text-xl" />
            <a
              href="https://github.com/subhan215"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              github.com/subhan215
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faGlobe} className="text-purple-500 text-xl" />
            <a
              href="https://subhan-rangila-portfolio.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              subhan-rangila-portfolio.web.app
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT: Earth 3D Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
