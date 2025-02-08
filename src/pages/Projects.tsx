import { ExternalLink, Github, Ellipsis } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { SiJetpackcompose } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import TypeWriter from "../components/TypeWriter";

export default function Projects() {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Pixhub",
      description: t("pixhubDescription"),
      image: "images/pixhub_pic.png",
      technologies: [
        {
          icon: <TbBrandKotlin className="m-1 size-8 text-blue-600" />,
          name: "Kotlin",
        },
        {
          icon: <SiJetpackcompose className="m-1 size-8 text-blue-600 " />,
          name: "Jetpack Compose",
        },
        {
          icon: <BiLogoSpringBoot className="m-1 size-8 text-green-500" />,
          name: "Spring Boot",
        },
        {
          icon: <GrMysql className="m-1 size-8 text-blue-600" />,
          name: "MySQL",
        },
      ],
      githubUrl: "https://github.com/Sylvecode/PixhubAndroid",
      liveUrl: "#",
      details: "/pixhub",
    },
    {
      title: "Foot Passion",
      description: t("footpassionDescription"),
      image: "images/screen_foot_passion.webp",
      technologies: [
        {
          icon: <TbBrandKotlin className="m-1 size-8 text-blue-600" />,
          name: "Kotlin",
        },
        {
          icon: <SiJetpackcompose className="m-1 size-8 text-blue-600 " />,
          name: "Jetpack Compose",
        },
        {
          icon: <BiLogoSpringBoot className="m-1 size-8 text-green-500" />,
          name: "Spring Boot",
        },
        {
          icon: <GrMysql className="m-1 size-8 text-blue-600" />,
          name: "MySQL",
        },
      ],
      githubUrl: "https://github.com/Sylvecode/FootPassion",
      liveUrl: "#",
      details: "/footpassion",
    },
    {
      title: "Animalin",
      description: t("animalinDescription"),
      image: "images/screen_animalin.jpg",
      technologies: [
        {
          icon: <FaWordpress className="m-1 size-8 text-blue-600" />,
          name: "Wordpress",
        },
        {
          icon: <FaElementor className="m-1 size-8 text-blue-600 " />,
          name: "Elementor",
        },
      ],
      githubUrl: "#",
      liveUrl: "#",
      details: "/animalin",
    },
    {
      title: "Frequencies",
      description: t("frequenciesDescription"),
      image: "/images/screen_frequencies.jpg",
      technologies: [
        {
          icon: <FaReact className="m-1 size-8 text-blue-600" />,
          name: "React",
        },
        {
          icon: <BiLogoTypescript className="m-1 size-8 text-blue-600 " />,
          name: "Typescript",
        },
        {
          icon: <RiTailwindCssFill className="m-1 size-8 text-blue-600" />,
          name: "Tailwind CSS",
        },
      ],
      githubUrl: "#",
      liveUrl: "https://frequencies.fr/",
      details: "/frequencies",
    },
    {
      title: "EasyUpload",
      description: t("easyuploadDescription"),
      image: "images/screen_easyupload.jpg",
      technologies: [
        { icon: <FaPhp className="m-1 size-8 text-blue-600" />, name: "PHP" },
        {
          icon: <SiJavascript className="m-1 size-8 text-blue-600 " />,
          name: "Javascript",
        },
        {
          icon: <BiLogoMongodb className="m-1 size-8 text-green-600" />,
          name: "MongoDB",
        },
      ],
      githubUrl: "https://github.com/Sylvecode/EasyUpload",
      liveUrl: "https://easyupload.jedeploiemonappli.com/",
      details: "/easyupload",
    },
    {
      title: "PokeCodes",
      description: t("pokecodesDescription"),
      image: "images/screen_pokecodes3.png",
      technologies: [
        {
          icon: <SiJavascript className="m-1 size-7 text-yellow-300" />,
          name: "Javascript",
        },
      ],
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
                className="w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl text-black dark:text-white font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-col items-center">
                      {tech.icon}
                      <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {tech.name}
                      </span>
                    </div>
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
