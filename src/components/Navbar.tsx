import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useDarkMode();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="w-full px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight"
        >
          MeetPhuLe.dev
        </Link>

        <div className="flex items-center gap-4">
          <ul className="flex gap-4 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`px-3 py-1 rounded-md transition hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      isActive
                        ? "text-blue-600 font-semibold dark:text-blue-400"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-xl px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            title="Toggle dark mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
