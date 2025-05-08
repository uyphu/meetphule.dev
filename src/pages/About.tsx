// src/pages/About.tsx
import React from "react";
import Bio from "../components/Bio";
import EducationTimeline from "../components/EducationTimeline";

const About: React.FC = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Bio />
      <EducationTimeline />
    </main>
  );
};

export default About;
