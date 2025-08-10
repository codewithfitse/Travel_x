import React from 'react';
import { FiGlobe, FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import useLanguage from './useLanguage';
import Header from '../components/Header';

function Demo() {
  const { currentLanguage, changeLanguage, t, availableLanguages } = useLanguage();

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      <div className="max-w-5xl mx-auto mt-[100px] px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-white/10 ring-1 ring-white/10">
            <FiGlobe className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Language & Preview</h1>
            <p className="text-sm text-white/60">Switch languages to preview localized content.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-5 shadow-lg">
            <h2 className="text-lg font-medium text-white mb-4">Language Selection</h2>

            <div className="flex flex-wrap gap-2">
              {availableLanguages.map((lang) => {
                const isActive = currentLanguage === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    aria-pressed={isActive}
                    className={`group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                      isActive
                        ? 'bg-teal-500 text-slate-950 shadow ring-1 ring-teal-400'
                        : 'bg-white/10 text-white/90 hover:bg-white/15 ring-1 ring-white/10'
                    }`}
                  >
                    <span>{lang.toUpperCase()}</span>
                    {isActive && <FiCheckCircle className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-white/60 mt-3">
              Current Language: <span className="font-semibold text-white">{currentLanguage.toUpperCase()}</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-6 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-teal-500/10 ring-1 ring-teal-500/30">
                <FiGlobe className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{t('title')}</h3>
                <p className="text-base leading-relaxed text-white/80">{t('description')}</p>
                <p className="text-base leading-relaxed text-white/80 mt-2">{t('description2')}</p>

                <button
                  type="button"
                  className="inline-flex items-center mt-5 px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  Explore
                  <FiChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;