import { Link } from "wouter";
import { PhoneCall, MessageCircle, ArrowUpToLine } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b-4 border-primary transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-primary p-2 rounded-xl group-hover:bg-orange-600 transition-colors">
              <ArrowUpToLine className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-secondary dark:text-white">
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
              className="hidden sm:flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-4 py-2 rounded-full font-medium transition-all text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className="flex items-center gap-2 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/40 focus:outline-none text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-200 text-sm"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
              <span className="sm:hidden">Ara</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
