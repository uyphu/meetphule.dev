// src/components/ProjectsSection.tsx
import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 auto-rows-fr"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={itemVariants} className="flex">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
