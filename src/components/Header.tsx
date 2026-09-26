"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, MessageCircle, ArrowUpToLine, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b-4 border-primary transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          <Link href="/" className="flex items-center gap-3 group" aria-label="Bursa Kiralık Asansör ve Evden Eve Nakliyat - Ana Sayfa">
            <div className="bg-gradient-to-br from-primary to-orange-600 p-2.5 rounded-2xl shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:-translate-y-0.5">
              <ArrowUpToLine className="h-7 w-7 text-white stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl tracking-tight leading-none text-secondary dark:text-white">
                Bursa <span className="text-primary">Kiralık Asansör</span>
              </span>
              <span className="text-[0.65rem] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
                CNC Evden Eve Nakliyat
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/hakkimizda"
              className="hidden md:flex items-center text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors pr-2"
            >
              Hakkımızda
            </Link>

            <Link
              href="/hizmet-bolgelerimiz"
              className="hidden md:flex items-center text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors pr-2"
            >
              Hizmet Bölgelerimiz
            </Link>
            
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
              onClick={() => trackWhatsAppClick('Header')}
              className="hidden lg:flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-4 py-2 rounded-full font-medium transition-all text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              onClick={() => trackPhoneClick('Header')}
              className="flex items-center gap-1.5 md:gap-2 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/40 focus:outline-none text-white px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-bold transition-all duration-200 text-sm"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
              <span className="sm:hidden">{t('common.call_now', 'Ara')}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl shadow-black/5 animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 bg-slate-50 dark:bg-slate-900">
            <Link
              href="/hakkimizda"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 hover:text-primary transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/hizmet-bolgelerimiz"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 hover:text-primary transition-colors"
            >
              Hizmet Bölgelerimiz
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 hover:text-primary transition-colors"
            >
              {t('nav.blog', 'Blog')}
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 mt-2 text-base font-semibold text-[#25D366] bg-[#25D366]/10 rounded-xl"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ile Ulaşın
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
