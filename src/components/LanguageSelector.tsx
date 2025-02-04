import { useLanguage, Language } from '../context/LanguageContext';

const languages: { code: Language; flag: string; alt: string }[] = [
  { code: 'fr', flag:'/images/france_flag.png', alt:'French flag'},
  { code: 'en', flag:'/images/uk_flag.png', alt:'English flag'},
  { code: 'th', flag:'/images/th_flag.png', alt:'Thai flag'}
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      {languages.map(({ code, flag, alt }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`px-2 py-1 rounded text-sm font-medium transition-colors border border-transparent hover:border-indigo-500 ${
            language === code
              ? 'bg-indigo-100 dark:bg-indigo-900'
              : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-300'
          }`}
        >
          <img src={flag} alt={alt} className="w-6 h-6" />
        </button>
      ))}
    </div>
  );
}
