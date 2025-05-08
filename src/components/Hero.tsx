// src/components/Hero.tsx
import DownloadResumeButton from "./DownloadResumeButton";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <img
        src="/profile.png"
        alt="Phu Le"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Phu Le
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-2">
        Senior Java Developer | Full Stack Engineer
      </p>
      <p className="max-w-xl mt-4 text-gray-600 dark:text-gray-400">
        Experienced in backend microservices, DevOps, and scalable systems across the U.S. and global teams.
      </p>
      <div className="flex gap-4 mt-6">
        <DownloadResumeButton />
        <a
          href="/contact"
          className="bg-gray-300 dark:bg-gray-700 dark:text-white px-6 py-2 rounded-lg shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
