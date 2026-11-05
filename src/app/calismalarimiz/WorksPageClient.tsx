"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft, ImageIcon, MapPin, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { trackPhoneClick } from "@/lib/analytics";

interface WorkItem { id: number; image: string; titleKey: string; descKey: string; }

const WORKS: WorkItem[] = [
  { id: 1, image: "/images/references/bursa-mobil-asansor-kiralama-referans-1.jpg", titleKey: "references.items.ref1_title", descKey: "references.items.ref1_desc" },
  { id: 2, image: "/images/references/gece-asansorlu-tasimacilik-bursa-referans-2.jpg", titleKey: "references.items.ref2_title", descKey: "references.items.ref2_desc" },
  { id: 3, image: "/images/references/yuksek-kat-esya-tasima-asansoru-referans-3.jpg", titleKey: "references.items.ref3_title", descKey: "references.items.ref3_desc" },
  { id: 4, image: "/images/references/bursa-asansorlu-nakliyat-uygulamalari-referans-4.jpg", titleKey: "references.items.ref4_title", descKey: "references.items.ref4_desc" },
];

const DISTRICT_CASE_STUDIES = [
  {
    district: "Nilüfer",
    neighborhood: "Özlüce & Balat Yüksek Katlı Siteler",
    floor: "13. Kat (42 Metre)",
    setupTime: "35 Dakika",
    summary: "Nilüfer Özlüce'deki site içi rezidans taşımalarında bina yönetim kuralları gereği yük asansörü bulunmayan bloklara 45-50 metre teleskopik mobil asansörümüzle bahçe peyzajına zarar vermeden dış cepheden kurulum sağlandı.",
    asansorUrl: "/nilufer-kiralik-asansor",
    fiyatUrl: "/nilufer-kiralik-asansor-fiyatlari",
    nakliyatUrl: "/nilufer-evden-eve-nakliyat"
  },
  {
    district: "Mudanya",
    neighborhood: "Güzelyalı, Burgaz & Bademli Sahil Hattı",
    floor: "9. Kat (Eğimli Zemin)",
    setupTime: "30 Dakika",
    summary: "Mudanya Güzelyalı'daki eğimli sokak yapısında 4 noktalı hidrolik denge ayaklarımızla tam teraziye alınan aracımızla, rüzgar sensörü kontrolü altında 3+1 ev eşyası ve beyaz eşyalar balkondan hasarsız şekilde indirildi.",
    asansorUrl: "/mudanya-kiralik-asansor",
    fiyatUrl: "/mudanya-kiralik-asansor-fiyatlari",
    nakliyatUrl: "/mudanya-evden-eve-nakliyat"
  },
  {
    district: "Osmangazi",
    neighborhood: "Hamitler, Yunuseli & Dikkaldırım",
    floor: "8. Kat (Dar Cadde)",
    setupTime: "25 Dakika",
    summary: "Osmangazi Hamitler ve Yunuseli bölgesindeki bitişik nizam apartmanlarda sokak trafiğini kapatmadan kompakt şasili mobil asansörümüzle saatlik kiralama ve komple ev taşıma operasyonu tamamlandı.",
    asansorUrl: "/osmangazi-kiralik-asansor",
    fiyatUrl: "/osmangazi-kiralik-asansor-fiyatlari",
    nakliyatUrl: "/osmangazi-evden-eve-nakliyat"
  },
  {
    district: "Yıldırım",
    neighborhood: "Millet, Erikli & Ertuğrulgazi",
    floor: "7. Kat",
    setupTime: "30 Dakika",
    summary: "Yıldırım Millet Mahallesi ve Erikli çevresinde dar merdiven boşluklarından geçmeyen büyük hacimli koltuk takımı, gardırop ve çelik kapı sevkiyatları doğrudan pencere/balkon cephesinden gerçekleştirildi.",
    asansorUrl: "/yildirim-kiralik-asansor",
    fiyatUrl: "/yildirim-kiralik-asansor-fiyatlari",
    nakliyatUrl: "/yildirim-evden-eve-nakliyat"
  },
  {
    district: "Gürsu",
    neighborhood: "Kurtuluş & Yenidoğan Mahalleleri",
    floor: "6. Kat",
    setupTime: "25 Dakika",
    summary: "Gürsu Kurtuluş ve Yenidoğan'daki yeni konut projelerinde hem evden eve asansörlü nakliyat hem de inşaat/mobilya firmaları için saatlik cephe asansörü kurulumları düzenli olarak yapılmaktadır.",
    asansorUrl: "/gursu-kiralik-asansor",
    fiyatUrl: "/gursu-kiralik-asansor-fiyatlari",
    nakliyatUrl: "/gursu-evden-eve-nakliyat"
  }
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
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-black text-black dark:text-white mb-6 italic">
            Bursa Kiralık Asansör Çalışmalarımız &amp; Saha Referansları
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-800 dark:text-slate-300 max-w-3xl">
            Nilüfer, Mudanya, Osmangazi, Yıldırım ve Gürsu başta olmak üzere Bursa&apos;nın 17 ilçesinde 15. kata kadar gerçekleştirdiğimiz mobil asansör kurulumları ve evden eve nakliyat operasyonlarımız.
          </motion.p>
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

        {/* 5 Ana İlçe Gerçek Saha Operasyon Örnekleri (E-E-A-T & İç Link Merkezi) */}
        <section className="mt-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-secondary dark:text-white mb-3">
              Bursa İlçelerinde Gerçekleştirdiğimiz Örnek Asansör Kurulumları
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              Her ilçenin sokak genişliği, eğimi ve bina yüksekliği farklıdır. Aşağıda Bursa&apos;nın 5 merkez ilçesinde uyguladığımız standart kurulum prosedürlerini ve ilgili bölge sayfalarımızı inceleyebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DISTRICT_CASE_STUDIES.map((cs) => (
              <div
                key={cs.district}
                className="bg-white dark:bg-navy-light rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm hover:border-primary transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      {cs.district} Saha Operasyonu
                    </span>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <span className="bg-slate-100 dark:bg-navy px-2.5 py-1 rounded-lg">{cs.floor}</span>
                      <span className="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-lg">Kurulum: {cs.setupTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">
                    {cs.district} — {cs.neighborhood}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold">
                  <Link href={cs.asansorUrl} className="text-primary hover:underline inline-flex items-center gap-1">
                    {cs.district} Kiralık Asansör <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href={cs.fiyatUrl} className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                    {cs.district} Fiyatları
                  </Link>
                  <Link href={cs.nakliyatUrl} className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                    {cs.district} Evden Eve Nakliyat
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 p-8 sm:p-12 text-center rounded-3xl bg-gradient-to-br from-[#071320] to-[#0f233a] text-white border border-primary/30 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Ücretsiz Keşif &amp; Cephe Uygunluk Kontrolü
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Sokağınız ve Binanız Mobil Asansöre Uygun mu?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
            Bina cephenizin veya sokağınızın fotoğrafını WhatsApp üzerinden gönderin, operatörümüz 5 dakika içinde kaçıncı kata nasıl kurulum yapılabileceğini ve net fiyatımızı iletsin.
          </p>
          <a
            href="tel:+905056080700"
            onClick={() => trackPhoneClick("Works Page CTA")}
            className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Hemen Ara: 0505 608 07 00
          </a>
        </div>
      </div>
    </div>
  );
}
