import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setForm({ from_name: "", from_email: "", message: "" });
        },
        () => setStatus("error")
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
      className="space-y-5 p-6 bg-gray-50 dark:bg-gray-800 rounded shadow-md max-w-md mx-auto mb-16"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
        <input
          type="text"
          name="from_name"
          required
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-2 border rounded dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input
          type="email"
          name="from_email"
          required
          value={form.from_email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-2 border rounded dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          maxLength={1000}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full px-4 py-2 border rounded dark:bg-gray-900 dark:text-white"
        />
        <p className="text-right text-xs text-gray-500 mt-1">{form.message.length}/1000</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        📤 Send Message
      </button>

      {status === "success" && (
        <p className="text-green-600 text-center mt-3">✅ Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-3">❌ Something went wrong. Try again.</p>
      )}
    </motion.form>
  );
};

export default ContactForm;
