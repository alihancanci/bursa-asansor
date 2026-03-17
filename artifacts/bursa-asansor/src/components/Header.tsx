import { Link } from "wouter";
import { PhoneCall, MessageCircle, ArrowUpSquare } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <ArrowUpSquare className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-secondary dark:text-white">
                Bursa <span className="text-primary">Mobil Asansör</span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-300 font-medium uppercase tracking-wider">
                Kiralama Hizmetleri
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-4 py-2.5 rounded-full font-medium transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className="flex items-center gap-2 bg-gradient-to-r from-secondary to-navy text-white hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 px-5 py-2.5 rounded-full font-bold transition-all duration-200"
            >
              <PhoneCall className="h-5 w-5 text-primary" />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
              <span className="sm:hidden">Ara</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
