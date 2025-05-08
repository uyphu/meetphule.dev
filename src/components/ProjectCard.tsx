import React from "react";
import type { Project } from "../types/Project";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow space-y-3">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <strong>Role:</strong> {project.role}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="text-xs italic text-gray-500 dark:text-gray-400 mt-2">
        🔒 Code and demo are proprietary (enterprise project)
      </div>
    </div>
  );
};

export default ProjectCard;
