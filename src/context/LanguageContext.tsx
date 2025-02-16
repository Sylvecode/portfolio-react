import { createContext, useContext, useState, useEffect } from "react";
import translations from "../translations";

export type Language = "fr" | "en" | "th"; 

const getBrowserLanguage = (): Language => {
  const lang = navigator.language.split("-")[0]; 
  return ["fr", "en", "th"].includes(lang) ? (lang as Language) : "en"; 
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.fr) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) || getBrowserLanguage(); 
  });

  useEffect(() => {
    localStorage.setItem("language", language); 
  }, [language]);

  const t = (key: keyof typeof translations.fr) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

