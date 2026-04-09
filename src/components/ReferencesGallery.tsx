"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./ui/marquee";

interface ReferenceItem {
  id: number;
  image: string;
  titleKey: string;
  descKey: string;
  category: "installation" | "night" | "sensitive" | "corporate";
}

const REFERENCES: ReferenceItem[] = [
  {
    id: 1,
    image: "/images/references/bursa-mobil-asansor-kiralama-referans-1.jpg",
    titleKey: "references.items.ref1_title",
    descKey: "references.items.ref1_desc",
    category: "installation"
  },
  {
    id: 2,
    image: "/images/references/gece-asansorlu-tasimacilik-bursa-referans-2.jpg",
    titleKey: "references.items.ref2_title",
    descKey: "references.items.ref2_desc",
    category: "night"
  },
  {
    id: 3,
    image: "/images/references/yuksek-kat-esya-tasima-asansoru-referans-3.jpg",
    titleKey: "references.items.ref3_title",
    descKey: "references.items.ref3_desc",
    category: "sensitive"
  },
  {
    id: 4,
    image: "/images/references/bursa-asansorlu-nakliyat-uygulamalari-referans-4.jpg",
    titleKey: "references.items.ref4_title",
    descKey: "references.items.ref4_desc",
    category: "corporate"
  }
];

export function ReferencesGallery() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white dark:bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4"
            >
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{t('references.title', 'Çalışmalarımız')}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-black text-black dark:text-white mb-4 italic"
            >
              {t('references.title', 'Çalışmalarımız')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-700 dark:text-slate-300"
            >
              {t('references.subtitle', "Bursa'nın her köşesinde, her gün onlarca mutlu müşteri ve başarılı taşıma.")}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/calismalarimiz" 
              className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1 group"
            >
              {t('references.view_all', 'Tüm Çalışmalarımızı Gör')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {REFERENCES.map((item) => (
            <div
              key={item.id}
              className="relative w-72 md:w-96 aspect-[3/4] overflow-hidden rounded-3xl border border-border dark:border-white/10 bg-slate-100 dark:bg-navy shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <Image
                src={item.image}
                alt={t(item.titleKey)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {t(item.titleKey)}
                </h3>
                <p className="text-slate-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-slate-50 dark:bg-navy-light border border-dashed border-border dark:border-white/10">
            <div className="px-6 py-4 flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center font-bold text-xl text-primary font-display">+</div>
              <span className="text-sm font-medium">{t('references.more_coming', 'Yeni referanslarımız yakında eklenecektir...')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

