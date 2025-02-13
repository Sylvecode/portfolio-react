import TypeWriter from "../components/TypeWriter";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white ">
          <TypeWriter text={t("aboutMe")} />
        </h1>
        <div className="animate-fade-in max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
          <div className="prose prose-lg text-black dark:text-white">
            <p className="mb-6 ">
            {t("aboutContent1")}
            </p>
            <p className="mb-6">
            {t("aboutContent2")}
            </p>
            <p>
            {t("aboutContent3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
