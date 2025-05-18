// src/components/SkillsSection.tsx
import React from "react";
import SkillCard from "./SkillCard";
import { FaJava, FaReact, FaAws, FaDocker, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiKubernetes, SiJenkins, SiGraphql, SiApachekafka, SiMongodb, SiPostman, SiRuby, SiGithub, SiSpring } from "react-icons/si";
import type { SkillCategory } from "../types/Skill";

const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: <FaJava />, level: "10+ years" },
      { name: "Spring", icon: <SiSpring />, level: "4+ years" },
      { name: "Spring Boot", icon: <SiSpringboot />, level: "5+ years" },
      { name: "REST API", level: "10+ years" },
      { name: "SOAP API", level: "4+ years" },
      { name: "MyBatis", level: "3+ years" },
      { name: "Hibernate", level: "10+ years" },
      { name: "Kafka", icon: <SiApachekafka />, level: "5+ years" },
      { name: "GraphQL", icon: <SiGraphql />, level: "2+ years" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, level: "4+ years" },
      { name: "JavaScript", level: "5+ years" },
      { name: "Xamarin", level: "1+ year" },
      { name: "GWT", level: "3+ years" },
      { name: "JSP", level: "3+ years" },
    ],
  },
  {
    category: "DevOps / Cloud",
    skills: [
      { name: "AWS", icon: <FaAws />, level: "5+ years" },
      { name: "Kubernetes", icon: <SiKubernetes />, level: "3+ years" },
      { name: "Docker", icon: <FaDocker />, level: "4+ years" },
      { name: "Jenkins", icon: <SiJenkins />, level: "5+ years" },
      { name: "Github Actions", icon: <SiGithub />, level: "3+ years" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "Oracle", icon: <FaDatabase />, level: "10+ years" },
      { name: "SQLServer", icon: <FaDatabase />, level: "4+ years" },
      { name: "PostgreSQL", icon: <FaDatabase />, level: "3+ years" },
      { name: "MongoDB", icon: <SiMongodb />, level: "4+ years" },
      { name: "DB2", icon: <FaDatabase />, level: "7+ years" },
    ],
  },
  {
    category: "Testing / QA",
    skills: [
      { name: "Postman", icon: <SiPostman />, level: "5+ years" },
      { name: "WebdriverIO", level: "3+ years" },
      { name: "Appium", level: "1+ year" },
      { name: "K6", level: "1+ year" },
    ],
  },
  {
    category: "Other Languages & Tools",
    skills: [
      { name: "Ruby", icon: <SiRuby />, level: "3+ years" },
      { name: "Ruby on Rails", icon: <SiRuby />, level: "3+ years" },
      { name: "PowerBuilder", level: "2+ years" },
      { name: "AS400", level: "2+ years" },
      { name: "Flex / ActionScript", level: "2+ years" },
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
