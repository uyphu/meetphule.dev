// src/components/Bio.tsx
import React from "react";

const Bio: React.FC = () => {
  return (
    <section className="py-10 px-4 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Phu Le is a Senior Java Developer with 15+ years of experience delivering scalable backend systems and cloud-native microservices. With over 5 years of on-site work in the U.S. and a strong track record collaborating with global clients like AT&T, Boeing, Cox Automotive, and Hyundai Autoever, he excels in full-stack development, DevOps, and system architecture. Phu is passionate about building high-performance applications, modernizing legacy platforms, and leading teams to success in fast-paced Agile environments.
      </p>
    </section>
  );
};

export default Bio;
