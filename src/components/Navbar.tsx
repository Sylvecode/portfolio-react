import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-gray-200 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-bold font-sans text-xl font-bold text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600"
          >
            {t("portfolio")}
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop menu */}
            <div className="hidden lg:flex space-x-10">
              <Link
                to="/"
                className="font-bold font-sans text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="font-bold font-sans text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                to="/projects"
                className="font-bold font-sans text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {t("projects")}
              </Link>
              <Link
                to="/skills"
                className="font-bold font-sans text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {t("skills")}
              </Link>
              <Link
                to="/contact"
                className="font-bold font-sans text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {t("contact")}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu size={24} className="text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>

          <div className="hidden sm:hidden lg:flex space-x-8">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("projects")}
              </Link>
              <Link
                to="/skills"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("skills")}
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("contact")}
              </Link>
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
