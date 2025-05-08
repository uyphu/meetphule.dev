// src/components/DownloadResumeButton.tsx
import React from "react";

const DownloadResumeButton: React.FC = () => {
  return (
    <a
      href="/phu-le-resume.pdf"
      download
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
    >
      📄 Download Resume
    </a>
  );
};

export default DownloadResumeButton;
