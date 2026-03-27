import { Star } from "lucide-react";
import { REVIEWS } from "@/data/reviews";

export function Testimonials() {
  // DOM boyutunu kontrol altında tutmak için yalnızca ilk 20 yorumu gösteriyoruz
  // ve görsel süreklilik için diziyi 2 kez tekrar ediyoruz.
  const baseItems = REVIEWS.slice(0, 20);
  const marqueeItems = [...baseItems, ...baseItems];

  return (
    <section className="py-20 bg-white dark:bg-background overflow-hidden content-visibility-auto relative border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary dark:text-white mb-4">
          Bizi Tercih Eden <span className="text-primary">Müşterilerimiz</span>
        </h2>
        <p className="text-gray-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          Müşteri memnuniyetini %100 oranında tutmayı hedefliyoruz. İşimizi şansa bırakmıyoruz, Bursa'nın her noktasına kaliteyi asansörle ulaştırıyoruz.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee gap-6 py-4 hover:[animation-play-state:paused] px-6" aria-hidden="true">
          {marqueeItems.map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`}
              className="flex-none basis-[300px] md:basis-[400px] flex flex-col bg-white dark:bg-navy-light p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Text - SEO friendly plain HTML (no schema) */}
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed flex-1 italic mb-6">
                "{review.text}"
              </p>
              
              {/* Author & Context */}
              <div className="mt-auto border-t border-slate-100 dark:border-white/10 pt-4 flex items-center justify-between">
                <div className="font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
                  {review.name}
                </div>
                <div className="bg-slate-100 dark:bg-navy px-3 py-1 rounded-full text-xs font-semibold text-gray-600 dark:text-slate-300">
                  {review.district}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
