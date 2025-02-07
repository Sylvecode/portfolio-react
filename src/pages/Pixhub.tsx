import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";
import TypeWriter from "../components/TypeWriter";

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
          <TypeWriter text="Pixhub" />
        </h1>
        <div className="flex flex-row">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
            <div className="prose prose-lg text-black dark:text-white">
              <p className="mb-6 justify-center">
                Status: En cours de développement
              </p>
              <p className="mb-6 ">Architecture: MVVM</p>
              <p className="mb-6 italic">
                Pixhub est une application mobile android développée en Kotlin
                qui propose un calendrier de films, séries, jeux vidéos, anime
                au sein d'une même application. L'utilisateur aura, à terme, la
                possibilité de tracker la sortie d'une oeuvre, de la noter,
                ajouter des contacts et intéragir avec eux.
              </p>
              <p className="mb-6">
                Ce projet est composé de deux parties distinctes :{" "}
              </p>
              <ul className="mb-6">
                <li className="mb-6">
                  Un <strong>client OkHttp</strong>, qui envoie des requêtes
                  HTTP à une API pour récupérer des données sur les utilisateurs
                  et les films, afin de les afficher dans les vues.
                </li>
                <li className="mb-6">
                  Un <strong>webservice</strong>, qui gère les opérations sur la
                  base de données. Il expose une API RESTful permettant
                  d'insérer, mettre à jour et récupérer des informations sur les
                  utilisateurs et les films.
                </li>
              </ul>
              <p>
                L'API repose sur Spring Boot, et l'accès aux données est
                facilité par Spring Data JPA et Hibernate. Ce choix
                architectural a été fait dans l’optique de développer
                ultérieurement une version web qui réutiliserait ce même web
                service.
              </p>
              <div className="flex flex-row object-fit justify-center m-10 gap-10">
                <div className="flex flex-col">
                  <img
                    src="gif/screen2_pixhub.gif"
                    className="h-100 w-60 rounded-md border border-black dark:border-gray-200"
                  ></img>
                  <p className="flex justify-center m-4">
                    Création de compte & connexion
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="gif/screen_pixhub.gif"
                    className="h-100 w-60 rounded-md border border-black dark:border-gray-200"
                  ></img>
                  <p className="flex justify-center m-4">
                    Caroussel des sorties
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto h-fit bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 ml-4">
            <p className="text-black dark:text-white">Fonctionnalités</p>
            <ul className="m-2">
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600">
                  Créer un compte
                </li>
                <AiFillCheckCircle className="ml-2 text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600">
                  Se connecter
                </li>
                <AiFillCheckCircle className="ml-2 text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600">
                  Consulter les sorties films du mois
                </li>
                <AiFillCheckCircle className="ml-2 text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600">
                  Consulter un film
                </li>
                <AiFillCheckCircle className="text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600">
                  Consulter un acteur
                </li>
                <AiFillCheckCircle className="ml-2 text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-gray-600 dark:gray-600">
                  Consulter les sorties séries du mois
                </li>
                <AiFillClockCircle className="ml-2 text-gray-600 dark:gray-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-gray-600 dark:gray-600">
                  Consulter une série
                </li>
                <AiFillClockCircle className="ml-2 text-gray-600 dark:gray-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-gray-600 dark:gray-600">
                  Consulter les sorties jeux vidéos du mois
                </li>
                <AiFillClockCircle className="ml-2 text-gray-600 dark:gray-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-gray-600 dark:gray-600">
                  Consulter un jeu vidéo
                </li>
                <AiFillClockCircle className="ml-2 text-gray-600 dark:gray-600" />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
