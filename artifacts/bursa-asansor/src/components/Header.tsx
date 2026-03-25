import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { PhoneCall, MessageCircle, ArrowUpToLine, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data";

const LANGUAGES = [
  { code: 'tr', name: 'TR' },
  { code: 'en', name: 'EN' },
  { code: 'ar', name: 'AR' },
  { code: 'ru', name: 'RU' }
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split('/').filter(Boolean);
    const firstSegment = segments[0];

    // Check if the first segment is already a known language (but not 'tr' as it's default)
    const isLangPrefixed = ['en', 'ar', 'ru'].includes(firstSegment);

    // Calculate base path (everything after language prefix if it exists)
    const pathWithoutLang = isLangPrefixed ? '/' + segments.slice(1).join('/') : currentPath;

    // Construct new path
    const newPath = lng === 'tr' ? pathWithoutLang : `/${lng}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;

    setIsOpen(false);
    i18n.changeLanguage(lng).then(() => {
      // Hard navigation to correctly kick off wouter base routing and server state
      window.location.href = newPath;
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 font-medium text-sm"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{i18n.resolvedLanguage || 'TR'}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-black/5 dark:shadow-white/5 border border-slate-100 dark:border-slate-800 py-2 z-50">
          {LANGUAGES.map((lng) => (
            <button
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors
                ${i18n.resolvedLanguage === lng.code ? 'text-primary font-bold bg-orange-50/50 dark:bg-orange-500/10' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {lng.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b-4 border-primary transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary to-orange-600 p-2.5 rounded-2xl shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:-translate-y-0.5">
              <ArrowUpToLine className="h-7 w-7 text-white stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl tracking-tight leading-none text-secondary dark:text-white">
                Bursa <span className="text-primary">Mobil Asansör</span> (v2)
              </span>
              <span className="text-[0.65rem] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
                {t('nav.subtitle', 'Profesyonel Nakliye Ağı')}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher />

            <Link
              href="/blog"
              className="hidden md:flex items-center text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors pr-2"
            >
              {t('nav.blog')}
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-4 py-2 rounded-full font-medium transition-all text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/40 focus:outline-none text-white px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-bold transition-all duration-200 text-sm"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
              <span className="sm:hidden">{t('common.call_now', 'Ara')}</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
