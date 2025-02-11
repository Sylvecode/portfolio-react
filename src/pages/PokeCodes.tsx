import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import TypeWriter from "../components/TypeWriter";
import { IoLogoGithub } from "react-icons/io";
import { SiJavascript } from "react-icons/si";

export default function PokeCodes() {
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
          <TypeWriter text="PokeCodes" />
        </h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="prose prose-lg text-black dark:text-white">
            <p className="mb-6 italic">
              PokeCodes est un bot Discord qui collecte des informations par web
              scraping pour afficher la liste des Pokémon actuellement en
              distribution avec leurs codes
            </p>
            <p className="mb-6">
              Ce bot Discord est développé en JavaScript, et utilise la
              bibliothèque discord.js pour communiquer avec l'API Discord. Il
              s'appuie également sur puppeteer, une bibliothèque NodeJS
              permettant d'automatiser un navigateur web, pour récupérer
              automatiquement les codes des Pokémon en distribution via du web
              scraping.
            </p>
            <p className="mb-6">
              À chaque démarrage, le bot navigue sur Poképédia, extrait les
              informations des Pokémon actuellement disponibles et publie la
              liste sur un canal Discord, garantissant ainsi des données
              toujours à jour.
            </p>
            <p className="flex justify-center mt-10 mb-4">
              <a
                target="_blank"
                href="https://github.com/Sylvecode/PokeCodes"
                title="Lien vers le dépot Github"
              >
                <IoLogoGithub className="w-8 h-8 mr-5 flex-shrink-0 hover:text-indigo-600" />
              </a>
            </p>
          </div>
        </div>
        <div className="m-10 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="flex flex-row flex-wrap justify-center m-2 gap-12">
            <img src="/images/screen_pokecodes3.png" className="rounded"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
