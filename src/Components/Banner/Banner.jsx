import React from "react";
import myImage from "../../assets/Profile.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="pt-10 pb-20 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">Gantabya</span>{" "}
          <br />
          Full-Stack Web Developer
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-lg">
          I build modern, fast, and scalable web applications using Laravel,
          Vue, React, Tailwind, and WordPress. I love bringing ideas to life
          through clean code & beautiful UI.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-0 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-blue-600/10 dark:from-blue-300/10 dark:to-blue-700/10 blur-3xl"></div>

        <img
          src={myImage}
          alt="Developer Gantabya"
          className="relative w-[300px] md:w-[400px] drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Banner;
