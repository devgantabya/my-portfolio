import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          DevGantabya
        </a>

        <ul className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-300 font-medium">
          <li className="hover:text-blue-500 dark:hover:text-blue-400 transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-500 dark:hover:text-blue-400 transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-500 dark:hover:text-blue-400 transition">
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-gray-800 dark:text-gray-200 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col py-4 px-6 text-gray-700 dark:text-gray-300 gap-4">
            <li>
              <Link
                to={"/"}
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                Hire Me
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
