import React from "react";
import type { Experience } from "../types/Experience";

interface Props {
  experience: Experience;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="border-l-4 border-blue-600 pl-4 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {experience.role} @ {experience.company}
      </h3>
      <p className="text-sm text-gray-500 mb-2">
        {experience.period} {experience.location && `| ${experience.location}`}
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {experience.responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap gap-2">
        {experience.techStack.map((tech, idx) => (
            <span
            key={idx}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white px-2 py-1 rounded text-sm"
            >
            {tech}
            </span>
        ))}
        </div>
    </div>
  );
};

export default ExperienceCard;
