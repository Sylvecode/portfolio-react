import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import TypeWriter from "../components/TypeWriter";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-4">
      <header className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="mb-8 text-2xl md:text-3xl"></div>
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img
                src="/images/profile_pic_sylvain.jpg"
                alt="Sylvain Périé"
                className="antialiased imgSylv w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-[50%_20%] border-4 border-white shadow-xl relative z-10"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-5xl font-bold font-sans mb-8 animate-fade-in text-black dark:text-white">
            Sylvain Périé
          </h1>
          <p className="font-sans text-xl md:text-2xl mb-12 text-black dark:text-white">
            <TypeWriter text={t("webDeveloper")} />
          </p>
          <div className="flex justify-center space-x-6">
            <a
              target="_blank"
              href="https://github.com/Sylvecode"
              className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sylvain-p%C3%A9ri%C3%A9-1ba98088/"
              className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sylvain.perie@hotmail.fr"
              className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
