import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import TypeWriter from "../components/TypeWriter";
import { DiSqllite } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export default function EasyUpload() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <div className="mb-5">
          <Link
            to="/projects"
            className="group flex flex-row gap-3 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600"
          >
            <ArrowLeft
              size={22}
              className="text-inherit group-hover:text-inherit"
            />
            {t("backtoprojects")}
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white ">
          <TypeWriter text="EasyUpload" />
        </h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="prose prose-lg text-black dark:text-white">
            <p className="mb-6 italic">
              Easyupload est un site de transfert de fichiers lourds.
            </p>
            <p className="mb-6">
              Ce site est un projet open source organisé par le formateur et
              développeur{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yvonhuynh/"
                className="text-blue-600"
              >
                Yvon Huynh
              </a>
              . Plusieurs développeurs de formations différentes ont participé à
              ce projet.
            </p>
            <p className="mb-6">
              J'ai contribué à la résolution de plusieurs bugs et à
              l'optimisation du code JavaScript en éliminant les redondances et
              en simplifiant la validation des formulaires côté frontend.
            </p>
            <div className="mt-10 mb-4 flex flex-row flex-wrap gap-10 align-center justify-center">
            <a
              target="_blank"
              href="https://github.com/Sylvecode/EasyUpload"
              title="Lien vers le dépot Github"
            >
              <IoLogoGithub className="w-8 h-8 mr-5 flex-shrink-0 hover:text-indigo-600" />
            </a>
            <a
              target="_blank"
              href="https://easyupload.jedeploiemonappli.com/"
              title="Ouvrir le site dans un nouvel onglet"
            >
              <ExternalLink className="w-8 h-8 mr-5 flex-shrink-0 hover:text-indigo-600" />
            </a>
            </div>
            
          </div>
        </div>
        <div className="m-10 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="flex flex-row flex-wrap justify-center m-2 gap-12">
            <div className="flex flex-col justify-center items-center">
              <FaPhp className="m-3 size-8 text-blue-600" />
              <p className="text-dark dark:text-white">PHP</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiJavascript className="m-3 size-8 text-blue-600 " />
              <p className="text-dark dark:text-white">Javascript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <DiSqllite className="m-3 size-8 text-blue-600 " />
              <p className="text-dark dark:text-white">SQLite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
