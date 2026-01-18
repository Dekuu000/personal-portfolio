import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-8 md:py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">
              © {currentYear} Rommel Jackson Alipao. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:jacksonalipao.ja@gmail.com"
              className="p-2 rounded-lg bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rommel-jackson-alipao-02927b207/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Dekuu000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

