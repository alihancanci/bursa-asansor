"use client";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppButton() {
  return (
    <>
      {/* MASAÜSTÜ: Sağ alttaki interaktif baloncuk */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="WhatsApp ile İletişime Geçin"
      >
        <div className="absolute -top-12 right-0 bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100 mb-2">
          Hızlı Bilgi Alın 👋
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-slate-100" />
        </div>
        <MessageCircle className="w-8 h-8" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
      </a>

      {/* MOBİL: Ekranın en altında başparmak hizasında sabit ikili hızlı bar (Hemen Ara & Fiyat Al) */}
      <aside 
        aria-label="Hızlı İletişim Menüsü"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-3 py-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_25px_rgba(0,0,0,0.12)]"
      >
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* 1. Buton: Hemen Ara */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
            onClick={() => trackPhoneClick('MobileStickyDock')}
            className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-2xl bg-primary hover:bg-orange-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-primary/25 active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5 shrink-0 fill-current animate-pulse" />
            <span>Hemen Ara</span>
          </a>

          {/* 2. Buton: Fiyat Al */}
          <a
            href={WHATSAPP_LINK}
            onClick={() => trackWhatsAppClick('MobileStickyDock')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Fiyat Al</span>
          </a>
        </div>
      </aside>
    </>
  );
}
