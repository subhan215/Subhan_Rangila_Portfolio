import {
  backend,
  web,
  fullstack,
  mobile,
  javascript,
  java,
  html,
  css,
  reactjs,
  tailwind,
  postgresql,
  mongodb,
  git,
  python,
  cplusplus,
  typescript,
  docker,
  nodejs,
  nextjs,
  express,
  springboot,
  reactnative,
  postman,
  fast_nu,
  adamjeelogo,
  city_grammar_school_logo,
  techmile_solutions_logo,
  jawan_pakistan,
  bazaar_website,
  enviro_website,
  edumingle_website,
  kof_website,
  musk_website,
  github,
  linux,
  firebase,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Backend Engineer", icon: backend },
  { title: "Microservices & APIs", icon: fullstack },
  { title: "DevOps & Infrastructure", icon: mobile },
  { title: "Full-Stack Development", icon: web },
];

const education = [
  {
    title: "BS Computer Science (CGPA: 3.57/4.0)",
    company_name: "FAST-NUCES, Karachi",
    icon: fast_nu,
    iconBg: "#fff",
    date: "August 2022 - June 2026",
    points: [
      "Data Structures & Algorithms, OOP, Database Systems, Operating Systems, Computer Networks, Software Engineering",
    ],
  },
  {
    title: "Intermediate (Pre-Engineering)",
    company_name: "Adamjee Govt. Science College, Karachi",
    icon: adamjeelogo,
    iconBg: "#fff",
    date: "2020 - 2022",
    points: [],
  },
  {
    title: "Matriculation (Science)",
    company_name: "The City Grammar School, Karachi",
    icon: city_grammar_school_logo,
    iconBg: "#fff",
    date: "2018 - 2020",
    points: [],
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Java", icon: java },
  { name: "C++", icon: cplusplus },
  { name: "Node.js", icon: nodejs },
  { name: "React", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "Linux", icon: linux },
  { name: "Postman", icon: postman },
];

// Not used but kept for compatibility
const itTools = [];
const cybersecurityTools = [];
const designTools = [];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "FlowMaster (Remote)",
    icon: fast_nu, // placeholder — no FlowMaster logo available
    iconBg: "#0f3460",
    date: "Nov 2025 - Mar 2026",
    points: [
      "Built and deployed 13+ Python/FastAPI microservices on Kubernetes (K3S) with ArangoDB, PostgreSQL, and Redis for a multi-tenant process automation platform.",
      "Designed a 4-tier RBAC system with organization-level data scoping — fixed 27 data-leak vulnerabilities, enforced cross-tenant isolation across all services.",
      "Built a marketplace system with process install/uninstall lifecycle, reference-based tracking (marketplace_source_id), Redis cache invalidation, and 9-step SSE installer.",
      "Integrated AI agent execution with Claude API — orchestration, document intelligence, real-time process execution with human tasks and notifications.",
      "Deployed infrastructure on Hetzner servers — K3S clusters, GitLab CI/CD pipelines, nginx reverse proxies, service registry with health monitoring.",
      "Rewrote marketplace frontend from inline styles to Tailwind CSS — installed badges, status filters, flowchart preview, matching app design system.",
    ],
  },
  {
    title: "Node.js Intern",
    company_name: "CyberState Technologies, Karachi",
    icon: jawan_pakistan, // placeholder
    iconBg: "#fff",
    date: "Sep 2025 - Oct 2025",
    points: [
      "Stabilized production Node.js APIs by identifying and fixing backend bugs, improving system reliability and performance.",
      "Migrated legacy EJS templates to React.js, optimized backend routes, and delivered new feature modules.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Techmile Solutions, Karachi",
    icon: techmile_solutions_logo,
    iconBg: "#fff",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Built a complete Inventory Management System with Angular frontend, Node.js backend, and React Native mobile app.",
      "Created automated Playwright-based data scraping pipelines and integrated mobile workflows with backend APIs.",
    ],
  },
];

const extracurricular = [];

const projects = [
  {
    name: "AirCash — Digital Financial Platform",
    description:
      "Backend for a blockchain-based digital financial platform using Spring Boot. Implemented secure transaction processing, wallet management APIs, and designed the blockchain architecture for transaction verification.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "Blockchain", color: "pink-text-gradient" },
    ],
    image: kof_website, // placeholder
    source_code_link: "https://github.com/subhan215",
    live_project_link: "https://github.com/subhan215",
  },
  {
    name: "Bazaar — Inventory Management System",
    description:
      "Scalable backend service with RESTful APIs for inventory tracking and stock movements. RBAC authentication, Redis caching, API rate-limiting, Docker for read/write DB separation, and PM2 for horizontal scaling.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "Redis", color: "blue-text-gradient" },
    ],
    image: bazaar_website,
    source_code_link: "https://github.com/subhan215",
    live_project_link: "https://github.com/subhan215",
  },
  {
    name: "Enviro — Waste Management Platform",
    description:
      "Full-stack waste management platform with real-time Socket.io notifications, PostgreSQL backend, and AI-powered image classification using Gemini Flash API. Role-based workflows for users and waste management companies.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],
    image: enviro_website,
    source_code_link: "https://github.com/subhan215",
    live_project_link: "https://github.com/subhan215",
  },
  {
    name: "EduMingle — Student Collaboration",
    description:
      "A platform for students to collaborate, share resources, and manage academic workflows with real-time features and role-based access.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: edumingle_website,
    source_code_link: "https://github.com/subhan215",
    live_project_link: "https://github.com/subhan215",
  },
  {
    name: "Musk Website Clone",
    description:
      "A responsive website clone showcasing modern frontend development with clean UI/UX, animations, and responsive design across all devices.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Next.js", color: "pink-text-gradient" },
    ],
    image: musk_website,
    source_code_link: "https://github.com/subhan215",
    live_project_link: "https://github.com/subhan215",
  },
];

const testimonials = [];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials,
};
