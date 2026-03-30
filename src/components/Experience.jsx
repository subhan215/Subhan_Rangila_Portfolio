import React, { useState, useCallback, useMemo, useTransition, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { enviro, techmile_solutions_logo, fast_nu, jawan_pakistan } from "../assets";

const experiences = [
  {
    title: "Software Engineer",
    company_name: "FlowMaster (Remote)",
    icon: fast_nu,
    iconBg: "#0f3460",
    date: "Nov 2025 – Mar 2026",
    points: [
      "Architected and maintained 24+ Python/FastAPI microservices — process design, execution engine, API gateway, AI agent service, human task management, notification system, scheduling, event bus, document intelligence, WebSocket gateway, and marketplace.",
      "Designed and implemented 4-tier RBAC system with organization-level data scoping, internal service-to-service auth (IST), and per-user gateway response caching — removed 27 cross-tenant data-leak vulnerabilities.",
      "Built DXG (Dynamic Experience Generator) integration — AI-powered UI rendering engine using Claude API, deployed across Manager and Engage micro-apps with 16/16 e2e tests passing.",
      "Developed full marketplace system — 9-step SSE installer, reference-based install tracking, Redis cache invalidation, process lifecycle management, and rewrote frontend from inline styles to Tailwind CSS.",
      "Integrated AI agent execution pipeline — Claude API orchestration, document saving to doc-intelligence, real-time execution with human tasks, notifications, and event-driven workflows.",
      "Provisioned and deployed infrastructure across 5 Hetzner servers — K3S clusters, GitLab CI/CD pipelines, Docker registries, nginx reverse proxies, ArangoDB, PostgreSQL, Redis. Achieved 30/30 e2e test suite.",
      "Synced production data between servers (ArangoDB collections, PostgreSQL schemas), set up SDX cross-server proxy, and managed database migrations across environments.",
      "Set up Plane (self-hosted project management), created 18+ structured tickets for Service Registry and Marketplace tasks, and maintained skills config loader for team workflows.",
    ],
  },
  {
    title: "Node.js Intern",
    company_name: "CyberState Technologies",
    icon: jawan_pakistan,
    iconBg: "#fff",
    date: "Sep 2025 – Oct 2025",
    points: [
      "Stabilized production Node.js APIs by identifying and fixing backend bugs, improving system reliability.",
      "Migrated legacy EJS templates to React.js, optimized backend routes, and delivered new feature modules.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Techmile Solutions",
    icon: techmile_solutions_logo,
    iconBg: "#383E56",
    date: "Jun 2025 – Aug 2025",
    points: [
      "Built a complete Inventory Management System with Angular frontend, Node.js backend, and React Native mobile app.",
      "Created automated Playwright-based data scraping pipelines and integrated mobile workflows with backend APIs.",
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
