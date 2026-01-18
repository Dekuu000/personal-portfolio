import { Mail, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to
            be part of your vision.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-900 dark:to-primary-900/20 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email - Non-clickable as requested */}
              <div className="group flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-slate-900 dark:text-white font-semibold break-all">jacksonalipao.ja@gmail.com</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rommel-jackson-alipao-02927b207/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:scale-[1.02]"
              >
                <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <p className="text-slate-900 dark:text-white font-semibold">Connect with me</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors" />
              </a>
            </div>

            {/* Freelance Profiles */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-center text-slate-600 dark:text-slate-400 mb-6 text-sm font-medium">
                Also available on freelance platforms
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.upwork.com/freelancers/~0156e97c38cbe45fe1?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-sm font-bold shadow-sm hover:shadow-md"
                >
                  Upwork
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.fiverr.com/s/7Y8g0Pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-all text-sm font-bold shadow-sm hover:shadow-md"
                >
                  Fiverr
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
