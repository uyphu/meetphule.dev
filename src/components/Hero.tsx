import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <motion.img
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src="/profile1.png"
        alt="Phu Le"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-md object-cover mb-6"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
      >
        👋 Hi, I'm <span className="text-blue-600 dark:text-blue-400">Phu Le</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
      >
        Senior Java Developer with 15+ years of experience in backend systems, cloud-native apps, and leading cross-functional teams.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          📄 Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 dark:text-white font-medium rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          📬 Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
