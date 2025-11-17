import { Award, Code, Database, Globe } from "lucide-react";

const certificates = [
  {
    name: "Google Analytics",
    issuer: "Google",
    icon: <Globe className="w-6 h-6" />,
    link: "https://coursera.org/share/c3884a35981ab888972a0e9dd6ab1b9a",
  },
  {
    name: "IBM Data Analyst",
    issuer: "IBM",
    icon: <Database className="w-6 h-6" />,
    link: "https://coursera.org/share/5d700141b9ea5b7ae499ddec8917dcbe",
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    icon: <Award className="w-6 h-6" />,
    link: "/ccna.pdf",
  },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "TailwindCSS", "HTML5", "CSS3"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "Node.js", "REST APIs", "GraphQL"],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "Vercel", "Aiven", "AI Integration"],
    icon: <Globe className="w-6 h-6" />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-purple-900/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* Bio Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Hi, I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Rommel Jackson Alipao</span>—a results-oriented developer dedicated to building modern web solutions that solve real business challenges. As a fourth-year IT student, I specialize in creating seamless user experiences and robust, scalable applications across both frontend and backend environments.
            </p>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Technical Proficiency
              </h3>
              <ul className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Experienced with React.js, Next.js, TypeScript, JavaScript, and TailwindCSS for mobile-first, responsive interfaces.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Skilled in full-stack development, integrating backend logic, RESTful APIs, and secure authentication with Node.js, Typescript, MySQL, and Laravel.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Adept at leveraging AI-powered techniques—prompt engineering, resume parsing, and data extraction—to enhance user and business workflows.</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Professional Impact
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Delivered projects for career guidance, office inventory automation, and SaaS management, streamlining processes and driving measurable improvements.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Quick to turn requirements into working prototypes, utilizing cloud platforms (Vercel, Railway, Aiven) for agile deployment.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Work Ethic & Approach
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Committed to clear communication, proactive collaboration, and continuous learning.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Value sustainable, maintainable code and take pride in delivering polished features that drive growth.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                What I Offer
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                If you&apos;re looking for a developer who combines technical depth with creative problem-solving—ready to contribute, adapt, and help your business thrive—I&apos;d be excited to be part of your team or project. Let&apos;s connect and build solutions that make a difference!
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target={cert.link !== "#" ? "_blank" : undefined}
                rel={cert.link !== "#" ? "noopener noreferrer" : undefined}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all text-center cursor-pointer hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {cert.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600 dark:text-blue-400">{category.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

