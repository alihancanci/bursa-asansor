"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data";

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

      {/* MOBİL: Ekranın en altında başparmak hizasında yüzen geniş bar (Thumb-Zone Floating Pill) */}
      <div className="md:hidden fixed bottom-6 left-5 right-5 z-50">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#20B053] to-[#25D366] text-white py-4 px-4 rounded-2xl font-bold shadow-[0_10px_25px_rgba(37,211,102,0.5)] active:scale-[0.98] active:shadow-sm transition-all"
        >
          <MessageCircle className="w-6 h-6 animate-bounce" />
          <span className="text-[16px] tracking-wide">WhatsApp'tan Fiyat Alın</span>
        </a>
      </div>
    </>
  );
}
