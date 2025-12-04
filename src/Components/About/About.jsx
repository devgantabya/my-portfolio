import React from "react";
import myImg from "../../assets/Profile.png";

const About = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="about">
      {" "}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        ```
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Hi! I'm Gantabya, a passionate full-stack web developer with
            experience in Laravel, React, Vue, and WordPress. I love creating
            dynamic, responsive, and user-friendly web applications that make an
            impact.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            I enjoy problem-solving, learning new technologies, and bringing
            creative ideas to life on the web. When I'm not coding, I like
            exploring new tools and contributing to personal projects.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/your-Profile-image.jpg"
            alt="Prottoy"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
