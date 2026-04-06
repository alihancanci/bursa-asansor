"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAbsoluteAssetUrl } from "@/lib/seo";
import { ArrowLeft, ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WorkItem { id: number; image: string; titleKey: string; descKey: string; }

const WORKS: WorkItem[] = [
  { id: 1, image: "/images/references/bursa-mobil-asansor-kiralama-referans-1.jpg", titleKey: "references.items.ref1_title", descKey: "references.items.ref1_desc" },
  { id: 2, image: "/images/references/gece-asansorlu-tasimacilik-bursa-referans-2.jpg", titleKey: "references.items.ref2_title", descKey: "references.items.ref2_desc" },
  { id: 3, image: "/images/references/yuksek-kat-esya-tasima-asansoru-referans-3.jpg", titleKey: "references.items.ref3_title", descKey: "references.items.ref3_desc" },
  { id: 4, image: "/images/references/bursa-asansorlu-nakliyat-uygulamalari-referans-4.jpg", titleKey: "references.items.ref4_title", descKey: "references.items.ref4_desc" },
];

export default function WorksPageClient() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-background">
      <Breadcrumbs items={[{ name: "Çalışmalarımız", path: "/calismalarimiz" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('common.back_to_home', 'Ana Sayfaya Dön')}
        </Link>
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <ImageIcon className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">{t('references.title', 'Çalışmalarımız')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-black text-black mb-6 italic">{t('references.title', 'Çalışmalarımız')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-800 dark:text-slate-300 max-w-3xl">{t('references.subtitle', "Bursa'nın her köşesinde, her gün onlarca mutlu müşteri ve başarılı taşıma.")}</motion.p>
        </div>
        <h2 className="sr-only">Çalışma Örneklerimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS.map((item, idx) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-3xl border border-border dark:border-white/10 bg-white dark:bg-navy shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={item.image}
                  alt={t(item.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-black dark:text-white mb-2">{t(item.titleKey)}</h3>
                  <p className="text-gray-700 dark:text-slate-300 text-sm">{t(item.descKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 p-12 text-center rounded-4xl bg-white dark:bg-navy-light border border-dashed border-border dark:border-white/10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 dark:bg-navy border-2 border-dashed border-slate-200 dark:border-slate-700 mb-6 font-bold text-3xl text-slate-300">+</div>
          <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">Yeni Çalışmalarımız Yakında</h2>
          <p className="text-slate-500 dark:text-slate-400">Her gün onlarca yeni operasyon gerçekleştiriyoruz. <br />Güncel çalışmalarımızı buradan takip edebilirsiniz.</p>
        </motion.div>
      </div>
    </div>
  );
}
