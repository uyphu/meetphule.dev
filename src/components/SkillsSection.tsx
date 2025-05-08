// src/components/SkillsSection.tsx
import React from "react";
import SkillCard from "./SkillCard";
import { FaJava, FaReact, FaAws } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiDocker, SiKubernetes, SiJenkins } from "react-icons/si";
import type { SkillCategory } from "../types/Skill";

const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: <FaJava />, level: "10+ years" },
      { name: "Spring Boot", icon: <SiSpringboot />, level: "10+ years" },
      { name: "REST API", level: "10+ years" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, level: "5+ years" },
      { name: "JavaScript", level: "5+ years" },
    ],
  },
  {
    category: "DevOps / Cloud",
    skills: [
      { name: "AWS", icon: <FaAws />, level: "5+ years" },
      { name: "Kubernetes", icon: <SiKubernetes />, level: "5+ years" },
      { name: "Docker", icon: <SiDocker />, level: "5+ years" },
      { name: "Jenkins", icon: <SiJenkins />, level: "5+ years" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Postman", icon: <SiPostgresql />, level: "5+ years" },
      { name: "WebdriverIO", level: "3+ years" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Skills</h2>
      <div className="space-y-10">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.skills.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
