import { Code2, Database, Layout, Server } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import TypeWriter from "../components/TypeWriter";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiKotlin,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiJetpackcompose,
} from "react-icons/si";
import { BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { RxLoop } from "react-icons/rx";

export default function Skills() {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-indigo-600" />,
      skills: [
        {
          name: "HTML5",
          logo: <FaHtml5 className="w-8 h-8 text-orange-600" />,
        },
        { name: "CSS3", logo: <FaCss3Alt className="w-8 h-8 text-blue-600" /> },
        {
          name: "JavaScript",
          logo: <FaJs className="w-7 h-7 text-yellow-500" />,
        },
        { name: "React", logo: <FaReact className="w-8 h-8 text-blue-600" /> },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="w-8 h-8 text-blue-600" />,
        },
        {
          name: "Kotlin",
          logo: <SiKotlin className="w-6 h-6 text-purple-600" />,
        },
        {
          name: "Jetpack Compose",
          logo: <SiJetpackcompose className="w-6 h-6 text-purple-600" />,
        },
        {
          name: "Bootstrap",
          logo: <FaBootstrap className="w-8 h-8 text-purple-600" />,
        },
        {
          name: "Tailwind CSS",
          logo: <SiTailwindcss className="w-8 h-8 text-blue-500" />,
        },
        {
          name: "Responsive Design",
          logo: <Layout className="w-8 h-8 text-indigo-600" />,
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      skills: [
        { name: "PHP", logo: <SiPhp className="w-9 h-9 text-indigo-600" /> },
        {
          name: "Laravel",
          logo: <SiLaravel className="w-8 h-8 text-red-600" />,
        },
        {
          name: "Spring Boot",
          logo: <BiLogoSpringBoot className="w-8 h-8 text-green-600" />,
        },
        {
          name: "RESTful APIs",
          logo: <Server className="w-8 h-8 text-indigo-600" />,
        },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      skills: [
        { name: "MySQL", logo: <GrMysql className="w-8 h-8 text-blue-600" /> },
      ],
    },
    {
      title: "Other Skills",
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      skills: [
        { name: "Git", logo: <FaGitAlt className="w-8 h-8 text-orange-600" /> },
        {
          name: "Agile Methodology",
          logo: <RxLoop className="w-7 h-7 text-indigo-600" />,
        },
        {
          name: "Figma",
          logo: <FaFigma className="w-8 h-8 text-purple-600" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-gray-100">
          <TypeWriter text={t("techSkills")} />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold ml-4 text-black dark:text-gray-100">
                  {category.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-4 py-2 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {skill.logo}
                    <span className="text-black dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
