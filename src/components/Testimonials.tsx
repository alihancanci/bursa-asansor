"use client";
import { Star } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import Marquee from "./ui/marquee";

export function Testimonials() {
  const firstRow = REVIEWS.slice(0, 10);
  const secondRow = REVIEWS.slice(10, 20);

  return (
    <section className="py-20 bg-white dark:bg-background overflow-hidden content-visibility-auto relative border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary dark:text-white mb-4">
          Bizi Tercih Eden <span className="text-primary">Müşterilerimiz</span>
        </h2>
        <p className="text-gray-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          Müşteri memnuniyetini %100 oranında tutmayı hedefliyoruz. İşimizi şansa bırakmıyoruz, Bursa&apos;nın her noktasına kaliteyi asansörle ulaştırıyoruz.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}

const ReviewCard = ({
  name,
  district,
  text,
  rating,
}: {
  name: string;
  district: string;
  text: string;
  rating: number;
}) => {
  return (
    <div className="relative w-80 md:w-96 cursor-pointer overflow-hidden rounded-3xl border border-slate-100 dark:border-white/10 p-6 md:p-8 bg-white dark:bg-navy-light shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 group">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed flex-1 italic mb-6">
          &quot;{text}&quot;
        </blockquote>
        <div className="mt-auto border-t border-slate-100 dark:border-white/10 pt-4 flex items-center justify-between">
          <div className="font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
            {name}
          </div>
          <div className="bg-slate-100 dark:bg-navy px-3 py-1 rounded-full text-xs font-semibold text-gray-600 dark:text-slate-300">
            {district}
          </div>
        </div>
      </div>
    </div>
  );
};

