import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/20 rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-full font-semibold transition-all ${
          language === 'en'
            ? 'bg-white text-green-600 shadow-md'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>English</span>
        </div>
      </button>
      <button
        onClick={() => setLanguage('te')}
        className={`px-4 py-2 rounded-full font-semibold transition-all ${
          language === 'te'
            ? 'bg-white text-green-600 shadow-md'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>తెలుగు</span>
        </div>
      </button>
    </div>
  );
}
