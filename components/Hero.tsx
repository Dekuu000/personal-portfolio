"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Laravel",
    "TailwindCSS",
    "MySQL",
    "API Integration",
    "AI Projects",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 bg-gradient-to-br from-blue-50 via-purple-50 to-purple-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            Rommel Jackson Alipao
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Results-driven student developer specializing in full-stack web and API development. Building robust, scalable software solutions with Node.js, TypeScript, and JavaScript.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Core Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
        >
          See My Work
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

