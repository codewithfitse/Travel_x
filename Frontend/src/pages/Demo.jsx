import React from 'react';
import useLanguage from './useLanguage';

function Demo() {
  const { currentLanguage, changeLanguage, t, availableLanguages } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Language Selection   */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Language Selection</h2>
          <div className="flex gap-3">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  currentLanguage === lang
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Current Language: <span className="font-semibold">{currentLanguage.toUpperCase()}</span>
          </p>
        </div>

        {/* Content  */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('title')}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{t('description')}</p>
          <p className="text-lg text-gray-600 leading-relaxed">{t('description2')}</p>
        </div>
      </div>
    </div>
  );
}

export default Demo;