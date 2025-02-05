import { ExternalLink, Github, Ellipsis } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import TypeWriter from "../components/TypeWriter";

export default function Projects() {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Pixhub",
      description: t("pixhubDescription"),
      image: "images/screen_pixhub.jpg",
      technologies: ["Kotlin", "JetPack Compose", "Springboot", "MySQL"],
      githubUrl: "https://github.com/Sylvecode/PixhubAndroid",
      liveUrl: "#",
      details: "/pixhub",
    },
    {
      title: "Foot Passion",
      description: t("footpassionDescription"),
      image: "images/screen_foot_passion.webp",
      technologies: ["Kotlin", "JetPack Compose", "Springboot", "MySQL"],
      githubUrl: "https://github.com/Sylvecode/FootPassion",
      liveUrl: "#",
      details: "/footpassion",
    },
    {
      title: "Animalin",
      description: t("animalinDescription"),
      image: "images/screen_animalin.jpg",
      technologies: ["Wordpress", "Elementor"],
      githubUrl: "#",
      liveUrl: "#",
      details: "/animalin",
    },
    {
      title: "Frequencies",
      description: t("frequenciesDescription"),
      image: "/images/screen_frequencies.jpg",
      technologies: [
        <FaReact className="m-1 size-6" />,
        <BiLogoTypescript className="m-1 size-6" />,
        <RiTailwindCssFill className="m-1 size-6" />,
      ],
      githubUrl: "#",
      liveUrl: "https://frequencies.fr/",
      details: "/frequencies",
    },
    {
      title: "EasyUpload",
      description: t("easyuploadDescription"),
      image: "images/screen_easyupload.jpg",
      technologies: ["PHP", "Javascript", "MongoDB"],
      githubUrl: "https://github.com/Sylvecode/EasyUpload",
      liveUrl: "https://easyupload.jedeploiemonappli.com/",
      details: "/easyupload",
    },
    {
      title: "PokeCodes",
      description: t("pokecodesDescription"),
      image: "images/screen_pokecodes.jpg",
      technologies: ["Javascript"],
      githubUrl: "https://github.com/Sylvecode/PokeCodes",
      liveUrl: "#",
      details: "/pokecodes",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">
          <TypeWriter text={t("myProjects")} />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group group-hover:scale-110 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 rounded-lg shadow-lg overflow-hidden animate-fade-in hover:size-110 "
              style={{ opacity: 0, animationDelay: `${index * 120}ms` }}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-blue-600 dark:text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    target="_blank"
                    href={project.liveUrl}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                  <Link
                    to={project.details}
                    className="flex flex-row space-x-4 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Ellipsis className="mr-1" />
                    {t("details")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
