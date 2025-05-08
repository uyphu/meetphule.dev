import React from "react";
import EducationTimeline from "../components/EducationTimeline";
import { motion } from "framer-motion";

import { Helmet } from "react-helmet-async";

const About: React.FC = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-12 min-h-screen">
      <Helmet>
        <title>Phu Le | Senior Java Developer</title>
        <meta name="description" content="Experienced Java developer with expertise in backend microservices, cloud-native systems, and scalable enterprise solutions." />
        <meta name="keywords" content="Phu Le, Java Developer, Spring Boot, Microservices, Backend, Portfolio, Full Stack Developer" />
        <meta name="author" content="Phu Le" />
        <meta property="og:title" content="Phu Le | Senior Java Developer Portfolio" />
        <meta property="og:description" content="Explore Phu Le's portfolio showcasing his backend, full-stack, and enterprise development skills." />
        <meta property="og:image" content="https://meetphule-dev.vercel.app/preview.png" />
        <meta property="og:url" content="https://meetphule-dev.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Phu Le | Java Developer Portfolio" />
        <meta name="twitter:description" content="Explore my work in microservices, DevOps, and scalable backend systems." />
        <meta name="twitter:image" content="https://meetphule-dev.vercel.app/preview.png" />
      </Helmet>
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Optional profile image */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src="/profile1.png"
          alt="Phu Le"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-md object-cover"
        />

        {/* Bio block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I’m Phu Le, a Senior Java Developer with 15+ years of experience designing and building backend systems, microservices, and enterprise platforms. 
            I’ve worked onsite in the U.S. and remotely with global teams to ship secure, scalable systems using Java, Spring Boot, REST APIs, and cloud-native tooling.
            <br /><br />
            I care deeply about code quality, architectural clarity, and mentoring developers. I’m currently exploring modern frontend stacks, DevOps practices, and improving my UI skills to become a more well-rounded full-stack engineer.
          </p>
        </motion.div>
      </section>

      {/* Education section with background */}
      <section className="bg-gray-50 dark:bg-gray-800 mt-16 rounded-lg shadow-sm py-10">
        <EducationTimeline />
      </section>
    </main>
  );
};

export default About;
