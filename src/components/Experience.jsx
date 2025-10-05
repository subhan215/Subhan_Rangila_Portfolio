import React, { useState, useCallback, useMemo, useTransition, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { enviro, techmile_solutions_logo , fast_nu} from "../assets";

// Replace these with your actual icons in /assets


const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company_name: "Techmile Solutions",
    icon: techmile_solutions_logo, // replace with Techmile logo if you have one
    iconBg: "#383E56",
    date: "June 2025 – August 2025",
    points: [
      "Built and maintained web applications using React.js, Node.js, Supabase, and PostgreSQL.",
      "Developed mobile app modules with React Native and explored Angular for frontend components.",
      "Collaborated with cross-functional teams to design, implement, and test new web and mobile features.",
      "Ensured smooth UI/UX and optimized API integrations across multiple platforms.",
    ],
  },
  {
    title: "Academic & Research Projects",
    company_name: "FAST National University of Computer and Emerging Sciences",
    icon: fast_nu,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Developed 'Enviro' — a full-stack waste management platform using Next.js, Node.js, PostgreSQL, and Socket.io.",
      "Integrated AI image classification using Gemini Flash API for waste report filtering and sentiment analysis.",
      "Created an interactive Leaflet.js map showcasing 150+ recycling centers with GPS-based tracking.",
      "Designed a user reward system encouraging eco-friendly recycling through PostgreSQL-based tracking.",
      "Built 'Bazaar' — an inventory management system with Redis caching, Docker containerization, and PostgreSQL scalability.",
      "Implemented role-based authentication and horizontal scaling using PM2 for high-availability systems.",
    ],
  },
  {
    title: "Freelance & Independent Projects",
    company_name: "Self-driven Development",
    icon: enviro, // can use your Enviro or personal logo
    iconBg: "#232631",
    date: "2022 – Present",
    points: [
      "Developed 'Khareed o Farokht' — a P2P ad trading platform with Node.js, React, MongoDB, and Socket.io real-time chat.",
      "Created 'Blogify' — a multilingual blogging app supporting 10+ languages using Google Translate API.",
      "Implemented secure authentication, post filtering, and comment management with live notifications.",
      "Deployed multiple applications on Firebase and Vercel with CI/CD workflows using GitHub.",
      "Continuously improving technical depth in full-stack development, backend systems, and scalable cloud design.",
    ],
  },
];

const ExperienceCard = React.memo(({ experience, isActive, onClick, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.5)}
      className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive ? "bg-tertiary" : "bg-primary"
      }`}
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-4">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-white text-[18px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[14px]">{experience.company_name}</p>
      </div>
    </motion.div>
  );
});

const ExperienceDetails = React.memo(({ experience }) => {
  return (
    <motion.div
      key={experience.company_name}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="bg-tertiary p-8 rounded-lg"
    >
      <h3 className="text-white text-[24px] font-bold mb-4">{experience.title}</h3>
      <p className="text-secondary text-[16px] mb-4">{experience.company_name}</p>
      <p className="text-white-100 text-[14px] mb-4">{experience.date}</p>
      <ul className="list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
});

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  const handleExperienceClick = useCallback((index) => {
    startTransition(() => {
      setActiveExperience(index);
    });
  }, []);

  const currentExperience = useMemo(() => experiences[activeExperience], [activeExperience]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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
          My Professional Journey
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
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <div className="flex flex-col space-y-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                isActive={index === activeExperience}
                onClick={() => handleExperienceClick(index)}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="md:w-2/3">
          <AnimatePresence mode="wait" initial={false}>
            {!isPending && (
              <ExperienceDetails key={currentExperience.company_name} experience={currentExperience} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
