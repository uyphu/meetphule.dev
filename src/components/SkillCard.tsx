// src/components/SkillCard.tsx
import React from "react";
import type { Skill } from "../types/Skill";

interface Props {
  skill: Skill;
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <div className="text-xl">{skill.icon}</div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
      </div>
    </div>
  );
};

export default SkillCard;
