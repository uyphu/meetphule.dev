// src/components/ContactInfo.tsx
import React from "react";
import DownloadResumeButton from "./DownloadResumeButton";

const ContactInfo: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        I'm available for remote full-time roles. Feel free to reach out via:
      </p>

      <div className="space-y-2">
        <p>
          📧 <a href="mailto:letruonguyphu@gmail.com" className="text-blue-600 hover:underline">letruonguyphu@gmail.com</a>
        </p>
        <p>
          📞 <a href="tel:+13102272090" className="text-blue-600 hover:underline">+1 (310) 227-2090</a>
        </p>
        <p>
          🔗 <a href="https://linkedin.com/in/phu-le-57727547" target="_blank" className="text-blue-600 hover:underline">LinkedIn Profile</a>
        </p>
      </div>

      <div className="mt-6">
        <DownloadResumeButton />
      </div>
    </section>
  );
};

export default ContactInfo;
