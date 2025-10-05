import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { bazaar_website, blogify_website, edumingle_website, enviro_website, github, kof_website, musk_website } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

// ✅ Projects including EduMingle
const projects = [
  {
    name: "Bazaar: Inventory System",
    description:
      "Scalable backend for inventory tracking with RESTful APIs, RBAC, Dockerized read/write separation, Redis caching and rate limiting, and horizontal scalability with PM2.",
    tags: [
      { name: "Next.js", color: "text-blue-400" },
      { name: "PostgreSQL", color: "text-green-400" },
      { name: "SQLite", color: "text-orange-400" },
      { name: "Docker", color: "text-blue-500" },
      { name: "Redis", color: "text-red-400" },
    ],
    image: bazaar_website,
    source_code_link:
      "https://github.com/subhan215/bazaar_case_study_inventory_system",
    live_project_link: "",
  },
  {
    name: "Enviro",
    description:
      "Full-stack waste management platform with AI image classifier, sentiment analysis for urgent reports, interactive map with 150+ recycling centers, and a reward system.",
    tags: [
      { name: "Next.js", color: "text-blue-400" },
      { name: "Node.js", color: "text-green-400" },
      { name: "PostgreSQL", color: "text-orange-400" },
      { name: "Socket.io", color: "text-purple-400" },
      { name: "Cloudinary", color: "text-pink-400" },
    ],
    image: enviro_website,
    source_code_link:
      "https://github.com/subhan215/Enviro-Waste-and-Recycling-Solution/",
    live_project_link: "",
  },
  {
    name: "Khareed o Farokht",
    description:
      "Peer-to-peer transaction platform with ad posting and filtering by location/category and real-time buyer-seller chat system using Socket.io.",
    tags: [
      { name: "Node.js", color: "text-green-400" },
      { name: "React.js", color: "text-blue-400" },
      { name: "Express.js", color: "text-yellow-400" },
      { name: "MongoDB", color: "text-green-500" },
      { name: "Socket.io", color: "text-purple-400" },
    ],
    image: kof_website,
    source_code_link: "https://github.com/subhan215/olx-clone",
    live_project_link: "",
  },
  {
    name: "Blogify",
    description:
      "Blogging platform with secure authentication, multilingual support, advanced search and filtering, follow system, and comment management.",
    tags: [
      { name: "EJS", color: "text-purple-400" },
      { name: "Node.js", color: "text-green-400" },
      { name: "MongoDB", color: "text-green-500" },
      { name: "Socket.io", color: "text-purple-400" },
    ],
    image: blogify_website,
    source_code_link:
      "https://github.com/subhan215/blogging-application-with-mongodb",
    live_project_link: "",
  },
  {
    name: "Musk Store",
    description:
      "E-commerce store project (Musk Store) built with modern web technologies. (Replace with your actual tech stack and features.)",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "Node.js", color: "text-green-400" },
      { name: "Express", color: "text-yellow-400" },
      { name: "MongoDB", color: "text-green-500" },
    ],
    image: musk_website,
    source_code_link: "https://github.com/subhan215/musk-store",
    live_project_link: "",
  },
  {
    name: "EduMingle – Virtual Study Environment",
    description:
      "A virtual study environment built with Django, inspired by platforms like Discord. It facilitates collaborative learning through real-time room management and messaging.",
    tags: [
      { name: "Django", color: "text-green-500" },
      { name: "SQLite", color: "text-orange-400" },
      { name: "Virtual Learning", color: "text-blue-400" },
    ],
    image: edumingle_website, // replace with your actual image
    source_code_link: "" // add GitHub link if you have it
    //live_project_link: "https://your-live-edumingle-url.com", // replace with real live URL
  },
];

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  animate,
}) => {
  return (
    <motion.div variants={animate}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        // 👇 fixed width & height + flex-col to layout content
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex flex-col"
      >
        {/* fixed height image container */}
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* 👇 content takes the remaining height */}
        <div className="flex flex-col flex-1 mt-5 overflow-hidden">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] flex-1 overflow-hidden text-ellipsis">
            {description}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <p key={index} className={`text-[12px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {live_project_link && (
            <a
              href={live_project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button className="mt-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]">
                Live Project
              </button>
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section ref={ref}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionSubText} text-center`}>
          Innovative Creations
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionHeadText} text-center`}>Projects.</h3>
      </motion.div>

      <motion.div>
        <div
          className={
            window.innerWidth <= 768
              ? "grid grid-cols-1 gap-4 place-items-center"
              : "flex flex-wrap gap-7"
          }
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              animate={
                window.innerWidth <= 768
                  ? {}
                  : fadeIn("up", "spring", index * 0.5, 0.75)
              }
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "projects" );