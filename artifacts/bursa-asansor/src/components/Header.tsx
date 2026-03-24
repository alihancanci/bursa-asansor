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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all text-sm font-medium
          ${isScrolled 
            ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800' 
            : 'text-white hover:bg-white/10'}`}
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300
      ${isScrolled 
        ? "bg-navy/90 backdrop-blur-md border-b border-white/10 py-0 shadow-lg" 
        : "bg-transparent py-2 md:py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-16 md:h-18" : "h-20 md:h-24"}`}>
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`p-2.5 rounded-2xl shadow-lg transition-all duration-300 group-hover:-translate-y-0.5
              ${isScrolled ? "bg-primary" : "bg-gradient-to-br from-primary to-orange-600 shadow-primary/30"}`}>
              <ArrowUpToLine className="h-7 w-7 text-white stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-black tracking-tight leading-none transition-colors
                ${isScrolled ? "text-white text-lg md:text-xl" : "text-white text-xl md:text-2xl"}`}>
                Bursa <span className="text-primary font-black">Mobil Asansör</span>
              </span>
              <span className={`text-[0.6rem] font-bold uppercase tracking-[0.2em] mt-1 transition-colors
                ${isScrolled ? "text-slate-400" : "text-white/80"}`}>
                {t('nav.subtitle', 'Profesyonel Nakliye Ağı')}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher />
            
            <Link 
              href="/blog" 
              className={`hidden md:flex items-center text-sm font-bold transition-colors pr-2
                ${isScrolled ? "text-slate-200 hover:text-primary" : "text-white hover:text-primary-light"}`}
            >
              {t('nav.blog')}
            </Link>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all text-sm
                ${isScrolled 
                  ? "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20" 
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"}`}
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-bold transition-all duration-300 text-sm
                ${isScrolled 
                  ? "bg-primary hover:bg-orange-600 text-white shadow-md shadow-primary/20" 
                  : "bg-white text-primary hover:bg-orange-50"}`}
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
