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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto max-w-4xl text-center z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2 animate-fade-in-up">
            Rommel Jackson Alipao
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Results-driven student developer specializing in full-stack web and API development. Building robust, scalable software solutions with Node.js, TypeScript, and JavaScript.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            Core Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 text-lg"
        >
          See My Work
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

