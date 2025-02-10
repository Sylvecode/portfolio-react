import { ArrowLeft} from "lucide-react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";
import TypeWriter from "../components/TypeWriter";
import { TbBrandKotlin } from "react-icons/tb";
import { SiJetpackcompose } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiHibernate } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";

export default function FootPassion() {
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

        <h1 className="text-4xl font-bold mb-14 text-center text-black dark:text-white ">
          <TypeWriter text="Foot Passion" />
        </h1>
        <div className="flex flex-row flex-wrap justify-center w-full gap-8">
          <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
            <div className="prose prose-lg text-black dark:text-white">
              <p className="mb-8 mt-4 italic">
                Foot Passion est une application mobile android développée en Kotlin
                qui permet de créer un match, mettre à jour le score, finaliser le match, et consulter les matches terminés.
              </p>
              <p className="mb-8 justify-center">
                Status : Terminé
              </p>
              <p className="mb-8 ">Architecture : MVVM</p>

              <p className="">Stack :</p>
              <div className="flex flex-row flex-wrap justify-center m-10 mb-20 gap-12">
                <div className="flex flex-col justify-center items-center">
                  <TbBrandKotlin className="m-3 size-8 text-blue-600" />
                  <p>Kotlin</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <SiJetpackcompose className="m-3 size-8 text-blue-600 " />
                  <p>Jetpack Compose</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <BiLogoSpringBoot className="m-3 size-8 text-blue-600" />
                  <p>Spring Boot</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <SiHibernate className="m-3 size-8 text-blue-600" />
                  <p>Hibernate</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <GrMysql className="m-3 size-8 text-blue-600" />
                  <p>MySQL</p>
                </div>
              </div>
              <div className="">
                <p className="mb-8">
                  Ce projet est composé de deux parties distinctes :{" "}
                </p>
                <div className="flex flex-row items-center mb-6">
                  <a
                    target="_blank"
                    href="https://github.com/Sylvecode/PixhubAndroid"
                  >
                    <IoLogoGithub className="w-8 h-8 mr-5 flex-shrink-0 hover:text-indigo-600" />
                  </a>
                  <p>
                    Un <strong>client OkHttp</strong>, qui envoie des requêtes
                    HTTP à une API pour récupérer des données sur les
                    utilisateurs et les films, afin de les afficher dans les
                    vues.
                  </p>
                </div>
                <div className="flex flex-row items-center mb-8">
                  <a
                    target="_blank"
                    href="https://github.com/Sylvecode/PixhubAPI"
                  >
                    <IoLogoGithub className="w-8 h-8 mr-5 flex-shrink-0 hover:text-indigo-600" />
                  </a>

                  <p>
                    Un <strong>webservice</strong>, qui gère les opérations sur
                    la base de données. Il expose une API RESTful permettant
                    d'insérer, mettre à jour et récupérer des informations sur
                    les utilisateurs et les films.
                  </p>
                </div>
              </div>
              <p>
                L'API repose sur Spring Boot, et l'accès aux données est
                facilité par Spring Data JPA et Hibernate. 
              </p>
            </div>
          </div>
          <div className="max-w-3xl h-fit bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 ml-1">
            <p className="text-black dark:text-white mb-4">Fonctionnalités</p>
            <ul className="m-2">
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600 mr-3">
                  Créer un match
                </li>
                <AiFillCheckCircle className="ml-2 text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600 mr-3">
                  Mettre à jour le score
                </li>
                <AiFillCheckCircle className="ml-2 text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600 mr-3">
                  Terminer un match
                </li>
                <AiFillCheckCircle className="ml-2 text-lime-700 dark:text-lime-600" />
              </div>
              <div className="mb-1 flex flex-row justify-between">
                <li className="text-lime-700 dark:text-lime-600 mr-3">
                  Consulter les matches terminés
                </li>
                <AiFillCheckCircle className="text-lime-700 dark:text-lime-600" />
              </div>
            </ul>
          </div>
        </div>
        <div className="flex mx-auto m-10 justify-center h-fit bg-white rounded-lg shadow-lg p-10 pb-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 w-full max-w-screen-lg overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {[
              {
                src: "gif/footpassion.gif",
                text: "Demo",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[150px] sm:w-60 h-auto gap-4"
              >
                <img
                  src={item.src}
                  className="rounded-md border border-gray-700 dark:border-gray-700 w-full h-auto object-contain"
                />
                <p className="text-black dark:text-white text-center">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
