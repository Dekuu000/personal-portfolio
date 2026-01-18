import { Mail, Linkedin, ExternalLink } from "lucide-react";
import ContactForm from "./ContactForm";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-900 dark:to-primary-900/20 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:jacksonalipao.ja@gmail.com"
                  className="group flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 hover:scale-[1.02]"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-slate-900 dark:text-white font-semibold">jacksonalipao.ja@gmail.com</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                </a>

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
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-center text-slate-600 dark:text-slate-400 mb-4 text-sm font-medium">
                  Also available on freelance platforms
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.upwork.com/freelancers/~0156e97c38cbe45fe1?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-bold"
                  >
                    Upwork
                  </a>
                  <a
                    href="https://www.fiverr.com/s/7Y8g0Pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm font-bold"
                  >
                    Fiverr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

