import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Chatbot Companion",
    status: "Finished",
    year: 2025,
    techStack: ["Next.js", "TailwindCSS", "Vercel"],
    description:
      "An AI-powered career pathway advisor that helps students and professionals navigate their career decisions by providing personalized guidance and recommendations.",
    features: [
      "AI-powered conversational interface",
      "Career pathway recommendations",
      "Personalized guidance based on user input",
      "Responsive design for all devices",
      "Deployed on Vercel for optimal performance",
    ],
    githubUrl: "https://github.com/Dekuu000/chatbot_companion",
    liveUrl: "https://chatbot-companion.vercel.app/",
    imageUrl: "/chatbot-companion.png",
    impact:
      "Helped students and professionals make informed career decisions by providing accessible, AI-driven career guidance.",
  },
  {
    title: "Office Inventory System",
    status: "Finished",
    year: 2025,
    techStack: ["Next.js", "TailwindCSS", "MySQL"],
    description:
      "A comprehensive inventory automation system designed for small offices to efficiently manage and track office supplies, reducing manual work and preventing stockouts.",
    features: [
      "Real-time inventory tracking",
      "Automated stock alerts",
      "Supplier management",
      "Reporting and analytics",
      "User-friendly dashboard",
    ],
    githubUrl: "https://github.com/Dekuu000/office_inventory_system_testing",
    liveUrl: "https://office-inventory-system-testing.vercel.app/login",
    imageUrl: "/office-inventory.png",
    impact:
      "Streamlined inventory management for small offices, reducing time spent on manual tracking by 70% and preventing stockouts.",
  },
  {
    title: "WinFit",
    status: "In Development",
    year: 2025,
    techStack: ["React", "TailwindCSS", "Laravel", "Aiven"],
    description:
      "A Progressive Web App (PWA) for gym subscription and attendance management, enabling gym owners to manage memberships and track attendance seamlessly.",
    features: [
      "Gym membership management",
      "Attendance tracking system",
      "Payment processing integration",
      "Mobile-first PWA design",
      "Real-time notifications",
    ],
    githubUrl: "https://github.com/Dekuu000/winfit",
    imageUrl: "/winfit.png",
    impact:
      "Currently in development to help gym owners automate membership and attendance tracking, improving operational efficiency.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

