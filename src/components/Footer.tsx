import { useLanguage } from "../context/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white py-8 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
      <div className="container flex flex-row justify-between mx-auto px-6 text-center">
        <div>
          <p className="text-black dark:text-white">
            &copy; {new Date().getFullYear()} Sylvain Périé. {t("rights")}.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            target="_blank"
            href="https://github.com/Sylvecode"
            className="text-black dark:text-white hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sylvain-p%C3%A9ri%C3%A9-1ba98088/"
            className="text-black dark:text-white hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sylvain.perie@hotmail.fr"
            className="text-black dark:text-white hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
