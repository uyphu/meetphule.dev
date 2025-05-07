// src/components/EducationTimeline.tsx
import React from "react";
import type { EducationEntry } from "../types/EducationEntry";

const educationData: EducationEntry[] = [
  {
    year: "2006 – 2008",
    institution: "HCMC University of Natural Science",
    degree: "BSc in Information Technology",
  },
  {
    year: "2004 – 2005",
    institution: "Nong Lam University",
    degree: "Coursework",
    note: "TOEFL 460",
  },
  {
    year: "2001 – 2004",
    institution: "HCMC University of Natural Science",
    degree: "Diploma in IT",
  },
  {
    year: "1998 – 2001",
    institution: "Di An High School",
    degree: "High School Diploma",
  },
];

const EducationTimeline: React.FC = () => {
  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-gray-500">{edu.year}</p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
            <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
            {edu.note && (
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Note: {edu.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
