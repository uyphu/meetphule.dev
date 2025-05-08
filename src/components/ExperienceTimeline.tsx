import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>

      <div className="relative border-l-4 border-blue-500 dark:border-blue-400 pl-6 space-y-10">
        {experiences.map((exp, i) => {
          const immediate = i < 2; // show first 2 right away

          return (
            <motion.div
              key={i}
              className="relative bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-5"
              variants={itemVariants}
              initial="hidden"
              animate={immediate ? "visible" : undefined}
              whileInView={!immediate ? "visible" : undefined}
              transition={{ delay: immediate ? i * 0.2 : 0, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline dot */}
              <span className="absolute -left-[13px] top-5 h-4 w-4 bg-blue-600 border-4 border-white dark:border-gray-900 rounded-full shadow" />

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {exp.period} {exp.location && `| ${exp.location}`}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {exp.role} @ {exp.company}
              </h3>

              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
