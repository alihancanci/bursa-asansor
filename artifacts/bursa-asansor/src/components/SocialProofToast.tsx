import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NOTIFICATIONS = [
  "📍 Bugün Nilüfer'de 12. kata asansör kuruldu.",
  "📞 Yıldırım'dan yeni bir fiyat teklifi istendi.",
  "👥 Sitede 10 kişi aktif.",
  "🗓️ Kestel Cuma günü için yeni bir randevu ayarlandı.",
  "📸 Mudanya operasyonuna ait yeni fotoğraflar eklendi.",
  "✅ Osmangazi 7. kat eşya taşıma işlemi başarıyla tamamlandı.",
  "🚚 Gürsu'ya acil nakliye asansörü yönlendirildi.",
  "⚡ İnegöl bölgesinden hızlı asansör talebi alındı."
];

export function SocialProofToast() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);

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

  const triggerToast = () => {
    // Pick a random message
    const randomMsg = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
    setCurrentMessage(randomMsg);

    // Hide after 5 seconds
    setTimeout(() => {
      setCurrentMessage(null);
    }, 5000);
  };

  return (
    <AnimatePresence>
      {currentMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
              Şimdi
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
