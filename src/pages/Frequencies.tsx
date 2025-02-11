import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import TypeWriter from "../components/TypeWriter";
import { FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export default function Frequencies() {
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
          <TypeWriter text="Frequencies" />
        </h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="prose prose-lg text-black dark:text-white">
            <p className="mb-6 italic">
              Frequencies.fr est le site de l'association Frequencies, qui
              produit des courts-métrages ainsi que des fictions audio déstinées
              aux malvoyants.
            </p>
            <p className="mb-6">
              Je me suis greffé à l'équipe de développement pendant mes 3 mois
              de stages chez Frequencies pour participer à la refonte du site
              web de l'association. L'équipe était composée de plusieurs
              développeurs fullstack; un scrum master, un product owner, un
              designer et deux devOps.
            </p>
            <p className="mb-6">
              Le site était dans un premier temps développé en VueJS mais nous
              avons migré vers ReactJS en cours de route pour des questions
              pratiques.
            </p>
            <p className="mb-6">
              J'ai contribué aux développement de plusieurs pages et notamment
              mis en place un formulaire et un mode clair.
            </p>
            <p className="mb-6">
              Cette expérience m'as permi de me familiariser avec ReactJS,
              Tailiwnd CSS et le travail en méthode agile.
            </p>
            <div className="mt-10 mb-4 flex flex-row flex-wrap gap-10 align-center justify-center">
              <a
                target="_blank"
                href="https://frequencies.fr/"
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
              <FaReact className="m-3 size-8 text-blue-600" />
              <p className="text-dark dark:text-white">React</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BiLogoTypescript className="m-3 size-8 text-blue-600" />
              <p className="text-dark dark:text-white">Typescript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <RiTailwindCssFill className="m-3 size-8 text-blue-600 " />
              <p className="text-dark dark:text-white">Tailwind CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IoLogoFirebase className="m-3 size-8 text-blue-600 " />
              <p className="text-dark dark:text-white">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
