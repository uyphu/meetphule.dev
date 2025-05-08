// src/types/Skill.ts
export interface Skill {
    name: string;
    icon?: React.ReactNode;
    level: string; // e.g., "10+ years", "Advanced"
  }
  
  export interface SkillCategory {
    category: string;
    skills: Skill[];
  }