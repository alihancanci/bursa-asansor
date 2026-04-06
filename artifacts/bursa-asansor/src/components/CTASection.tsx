"use client";

import { PhoneCall, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/data";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  className?: string;
  variant?: "horizontal" | "vertical";
}

export function CTASection({ className, variant = "horizontal" }: CTASectionProps) {
  const { t } = useTranslation();
  return (
    <div className={cn(
      "flex flex-col sm:flex-row gap-4 w-full",
      variant === "vertical" && "sm:flex-col",
      className
    )}>
      <a
        href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
        className="flex-1 flex items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
      >
        <PhoneCall className="h-6 w-6 animate-pulse" />
        {t('common.call_now', 'Hemen Ara')}
      </a>
      
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6" />
        {t('cta.whatsapp', 'WhatsApp\'tan Fiyat Al')}
      </a>
    </div>
  );
}
