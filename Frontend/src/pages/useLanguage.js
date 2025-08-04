import { useState, useEffect } from 'react';
import langData from './lang.json';

const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translations, setTranslations] = useState(langData.en);

  useEffect(() => {
    // Get language from localStorage on component mount
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && langData[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
      setTranslations(langData[savedLanguage]);
    }
  }, []);

  const changeLanguage = (languageCode) => {
    if (langData[languageCode]) {
      setCurrentLanguage(languageCode);
      setTranslations(langData[languageCode]);
      localStorage.setItem('selectedLanguage', languageCode);
    }
  };

  const t = (key) => {
    return translations[key] || key;
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: Object.keys(langData)
  };
};

export default useLanguage;