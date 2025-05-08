import React from "react";
import { motion } from "framer-motion";

const ContactInfo: React.FC = () => {
  return (
    <motion.section
      className="py-12 px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Feel free to reach out for opportunities or collaboration:
      </p>

      <div className="space-y-2 text-gray-800 dark:text-gray-200 text-sm">
        <p>📧 <a href="mailto:letruonguyphu@gmail.com" className="text-blue-600 dark:text-blue-400 underline">letruonguyphu@gmail.com</a></p>
        <p>📞 <a href="tel:+13102272090" className="text-blue-600 dark:text-blue-400 underline">+1 (310) 227-2090</a></p>
        <p>🔗 <a href="https://linkedin.com/in/phu-le-57727547" target="_blank" className="text-blue-600 dark:text-blue-400 underline">LinkedIn Profile</a></p>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
