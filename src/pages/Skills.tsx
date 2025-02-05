import { Code2, Database, Layout, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TypeWriter from '../components/TypeWriter';

export default function Skills() {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-indigo-600" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Kotlin", "Bootstrap", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      skills: ["PHP", "Laravel", "Springboot", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      skills: ["MySQL"]
    },
    {
      title: "Other Skills",
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      skills: ["Git", "Agile Methodology","Figma"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-gray-100"><TypeWriter text={t("techSkills")} /></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold ml-4 text-black dark:text-gray-100">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
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
  );
}