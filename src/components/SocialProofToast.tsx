"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export function SocialProofToast() {
  const { t } = useTranslation();
  
  const NOTIFICATIONS = [
    t('toasts.msg0', "📍 Bugün Nilüfer'de 12. kata asansör kuruldu."),
    t('toasts.msg1', "📞 Yıldırım'dan yeni bir fiyat teklifi istendi."),
    t('toasts.msg2', "👥 Sitede 10 kişi aktif."),
    t('toasts.msg3', "🗓️ Kestel Cuma günü için yeni bir randevu ayarlandı."),
    t('toasts.msg4', "📸 Mudanya operasyonuna ait yeni fotoğraflar eklendi."),
    t('toasts.msg5', "✅ Osmangazi 7. kat eşya taşıma işlemi başarıyla tamamlandı."),
    t('toasts.msg6', "🚚 Gürsu'ya acil nakliye asansörü yönlendirildi."),
    t('toasts.msg7', "⚡ İnegöl bölgesinden hızlı asansör talebi alındı.")
  ];

  const [currentMessage, setCurrentMessage] = useState<string | null>(null);

  const triggerToast = () => {
    // Pick a random message
    const randomMsg = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
    setCurrentMessage(randomMsg);

    // Hide after 5 seconds
    setTimeout(() => {
      setCurrentMessage(null);
    }, 5000);
  };

  useEffect(() => {
    // Initial delay to avoid interrupting initial load
    const startTimeout = setTimeout(() => {
      // Show immediately after initial delay
      triggerToast();

      // Cycle every 30 seconds
      const interval = setInterval(() => {
        triggerToast();
      }, 30000);

      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(startTimeout);
  }, []);



  return (
    <AnimatePresence>
      {currentMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          role="status"
          aria-live="polite"
          className="fixed z-[100] left-4 right-4 top-24 md:top-auto md:bottom-8 md:left-8 md:right-auto md:w-[350px] shadow-2xl rounded-2xl bg-white dark:bg-navy-light border border-slate-100 dark:border-white/10 p-4 flex items-center gap-4 cursor-default"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
            <span className="text-primary text-xl relative z-10">✨</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug">
              {currentMessage}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t('common.now', 'Şimdi')}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
