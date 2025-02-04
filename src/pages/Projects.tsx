import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Pixhub",
      description:
        "A full-stack e-commerce solution built with React and Node.js",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      technologies: ["Kotlin", "JetPack Compose", "Springboot", "MySQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Foot Passion",
      description:
        "A collaborative task management tool with real-time updates",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      technologies: ["Kotlin", "JetPack Compose", "Springboot", "MySQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Animalin",
      description:
        "A weather application with detailed forecasts and interactive maps",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
      technologies: ["Wordpress", "Elementor"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Frequencies",
      description:
        "A full-stack e-commerce solution built with React and Node.js",
      image: "/images/screen_frequencies.jpg",
      technologies: ["React", "Typescript", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "https://frequencies.fr/",
    },
    {
      title: "EasyUpload",
      description:
        "A collaborative task management tool with real-time updates",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      technologies: ["PHP", "Javascript", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "PokeCodes",
      description:
        "A weather application with detailed forecasts and interactive maps",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
      technologies: ["Javascript"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">
          {t("myProjects")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-black dark:text-white font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 ">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
