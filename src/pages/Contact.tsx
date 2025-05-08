// src/pages/Contact.tsx
import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      <ContactInfo />
      <ContactForm/>
    </main>
  );
};

export default Contact;
