import { useRef, FormEvent } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';
import TypeWriter from '../components/TypeWriter';

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   
        formRef.current,                             
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY     
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-center mb-16 text-black dark:text-white"><TypeWriter text={t("contactMe")} /></h1>
        <div className="max-w-lg mx-auto animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
            <div className="flex items-center justify-center space-x-6 mb-8 ">
              <a href="mailto:sylvain.perie@hotmail.fr" className="text-gray-600 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 transition-colors dark:text-white">
                <Mail className="w-8 h-8" />
              </a>
              <a target="_blank" href="https://github.com/Sylvecode" className="text-gray-600 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 dark:text-white hover:text-indigo-500 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/sylvain-p%C3%A9ri%C3%A9-1ba98088/" className="hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 text-gray-600 dark:text-white hover:text-indigo-500 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                {t("contactFormInfo")[0]}
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                {t("contactFormInfo")[1]}
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>

              <div>
                <label htmlFor="user_subject" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                {t("contactFormInfo")[2]}
                </label>
                <input
                  type="text"
                  name="user_subject"
                  id="user_subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                {t("contactFormInfo")[3]}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t('send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}