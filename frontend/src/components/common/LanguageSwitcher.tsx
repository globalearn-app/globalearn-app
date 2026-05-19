import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
      >
        <Globe className="w-5 h-5" />
        <span className="text-2xl">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline text-sm font-semibold">{currentLanguage?.name}</span>
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-3 border-b border-slate-700">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Select Language</p>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                  language === lang.code
                    ? 'bg-blue-600/20 text-blue-300 border-l-2 border-blue-600'
                    : 'text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <span className="ml-auto text-blue-400">✓</span>
                )}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-slate-700 bg-slate-900/50 text-xs text-gray-400">
            More languages coming soon
          </div>
        </div>
      )}
    </div>
  );
}
