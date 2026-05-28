import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import type { Translation } from './pt';

type Lang = 'pt' | 'en' | 'es';

const translations: Record<Lang, Translation> = { pt, en, es };

interface I18nContextType {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'pt',
  t: pt,
  setLang: () => {},
});

function getLangFromPath(pathname: string): Lang {
  const seg = pathname.split('/')[1];
  if (seg === 'en') return 'en';
  if (seg === 'es') return 'es';
  return 'pt';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Lang>(() => getLangFromPath(location.pathname));

  useEffect(() => {
    const fromPath = getLangFromPath(location.pathname);
    if (fromPath !== lang) setLangState(fromPath);
  }, [location.pathname]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('sftax-lang', l);
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'language_switch', language: l });
    }
    // Navigate to same sub-path but with new lang prefix
    const parts = location.pathname.split('/');
    parts[1] = l;
    navigate(parts.join('/') || `/${l}`);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
