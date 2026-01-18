import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export interface Project {
  title: string;
  status: "Finished" | "In Development";
  year: number;
  techStack: string[];
  description: string;
  features: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  impact: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-800">
      {/* Image Section */}
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-700">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <p className="text-sm">Project Screenshot</p>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Finished"
                ? "bg-green-500 text-white"
                : "bg-yellow-500 text-gray-900"
              }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {project.year}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className="mb-4 p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
          <p className="text-sm text-slate-700 dark:text-slate-300 italic">
            {project.impact}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-all text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

