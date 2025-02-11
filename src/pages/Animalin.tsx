import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import { SiWoo } from "react-icons/si";
import TypeWriter from "../components/TypeWriter";

export default function Animalin() {
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
          <TypeWriter text="Animalin" />
        </h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="prose prose-lg text-black dark:text-white">
            <p className="mb-6 italic">
              Animalin est une boutique en ligne fictive spécialisée dans la vente de chiens et de chats de race.
            </p>
            <p>
              Le site est réalisé avec Wordpress ainsi que les extensions Woo
              Commerce et Elementor. Lors de cet exercice, j'ai configuré
              l'interface graphique du site, créé des produits et mis en place et un module de paiement en ligne fonctionnel. Ce projet a été
              réalisé dans le cadre de ma formation de développeur web.
            </p>
          </div>
        </div>
        <div className="m-10 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="flex flex-row flex-wrap justify-center m-2 gap-12">
            <div className="flex flex-col justify-center items-center">
              <FaWordpress className="m-3 size-8 text-blue-600" />
              <p className="text-dark dark:text-white">Wordpress</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaElementor className="m-3 size-8 text-blue-600 " />
              <p className="text-dark dark:text-white">Elementor</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiWoo className="m-3 size-8 text-blue-600 " />
              <p className="text-dark dark:text-white">Woo Commerce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
