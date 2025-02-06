import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Pixhub() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <div className="">
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
          Pixhub
        </h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="prose prose-lg text-black dark:text-white">
            <p className="mb-6 justify-center">
              Status: En cours de développement
            </p>
            <p className="mb-6 ">Architecture: MVVM</p>
            <p className="mb-6">
              Pixhub est une application mobile android développée en Kotlin qui
              propose un calendrier de films, séries, jeux vidéos, anime au sein
              d'une même application. L'utilisateur aura, à terme, la
              possibilité de tracker la sortie d'une oeuvre, de la noter,
              ajouter des contacts et intéragir avec eux.
            </p>
            <p>
              Ce projet est découpé en deux parties, un client, qui fait appel à
              un webservice pour les insertions en base de données. Ce choix a
              été fait dans l'optique de développer ultérieurement une version
              web qui réutiliserait ce même webservice.
            </p>
            <div className="flex flex-row object-fit m-8 gap-10">
              <div className="flex flex-col">
                <img src="gif/screen2_pixhub.gif" className="h-100 w-60"></img>
                <p className="flex justify-center m-2">
                  Création de compte & connexion
                </p>
              </div>
              <div className="flex flex-col">
                <img src="gif/screen_pixhub.gif" className="h-100 w-60"></img>
                <p className="flex justify-center m-2">Caroussel des sorties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
