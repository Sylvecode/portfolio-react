import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function FootPassion() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <div className="">
          <Link
            to="/projects"
            className="flex flex-row gap-3 text-gray-900 dark:text-white"
          >
            <ArrowLeft size={22} className="text-gray-600 dark:text-white" />
            Retour projets
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white ">
          Foot Passion
        </h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="prose prose-lg text-black dark:text-white">
            <p className="mb-6 ">Foot Passion</p>
            <p className="mb-6">
              Football match management mobile app: Create matches, Update
              scores, Finalize results, and Sync with the database. View a
              history of completed matches.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
