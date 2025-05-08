import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

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
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!formRef.current) return;

    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current!,
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
    <div className="mt-12 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
        Send Me a Message
      </h3>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-5 p-6 bg-gray-50 dark:bg-gray-800 rounded shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            maxLength={1000}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message (max 1000 chars)..."
            className="w-full px-4 py-2 border rounded dark:bg-gray-900 dark:text-white"
          />
          <p className="text-xs text-gray-500 mt-1 text-right">
            {form.message.length}/1000
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          📤 Send Message
        </button>

        {status === "success" && (
          <p className="text-green-600 font-medium mt-3 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium mt-3 text-center">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
