"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState, Suspense } from "react";
import { CTASection } from "@/components/CTASection";
import { SearchFilter } from "@/components/SearchFilter";
import { FeaturesBar } from "@/components/FeaturesBar";
import dynamic from "next/dynamic";
const ServiceMap = dynamic(() => import("@/components/ServiceMap"), { ssr: false, loading: () => <div className="h-[500px] w-full bg-slate-100 animate-pulse rounded-3xl" /> });
/* eslint-disable @typescript-eslint/no-explicit-any */
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => m.Testimonials as any));
const FaqSection = dynamic(() => import("@/components/FaqSection").then(m => m.FaqSection as any));
const ReferencesGallery = dynamic(() => import("@/components/ReferencesGallery").then(m => m.ReferencesGallery as any));
/* eslint-enable @typescript-eslint/no-explicit-any */
import { DISTRICTS, GOOGLE_MAPS_LINK, SERVICES } from "@/data";
import { ArrowRight, CheckCircle2, ArrowUpToLine, Home as HomeIcon, Sofa, Truck, HardHat, Package, Phone, ShieldCheck, ExternalLink, Star } from "lucide-react";

export default function HomePageClient() {
  const { t } = useTranslation();
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldLoadMap) return;
    const el = mapSentinelRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setTimeout(() => setShouldLoadMap(true), 0);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadMap(true);
          obs.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [shouldLoadMap]);

  const getServiceIcon = (slug: string) => {
    if (slug.includes('evden-eve') || slug.includes('ofis')) return HomeIcon;
    if (slug.includes('esya') || slug.includes('mobilya') || slug.includes('beyaz')) return Sofa;
    if (slug.includes('nakliyat') || slug.includes('nakliye') || slug.includes('kamyon')) return Truck;
    if (slug.includes('insaat') || slug.includes('moloz') || slug.includes('tuğla')) return HardHat;
    if (slug.includes('asansor')) return ArrowUpToLine;
    return Package;
  };

  return (
    <>
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt={t('hero.image_alt', 'Bursa Kiralık Asansör ve Mobil Asansör Hizmetleri - 7/24 Güvenli Taşıma')}
            className="w-full h-full object-cover"
            fill
            priority
            quality={60}
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-primary/30 text-primary mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">{t('home.active_in_all', 'Bursa ve Tüm İlçelerinde Aktif')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.2] mb-6">
                {t('hero.title1', "Bursa Kiralık")} <span className="text-gradient">{t('hero.title2', "Mobil Asansör")}</span> <br />
                {t('hero.title3', "Eşya Taşıma Asansörü")}
              </h1>

              <p className="text-lg sm:text-xl text-slate-100/90 mb-10 leading-relaxed max-w-2xl">
                {t('hero.subtitle', "Bursa’da 15. kata kadar mobil asansör kiralama. Haftanın her günü, 7/24 ulaşılabiliriz. Nilüfer, Mudanya, Osmangazi, Yıldırım ve Gürsu öncelikli olmak üzere Bursa’nın tüm ilçelerine hizmet veriyoruz. Net fiyat garantisi ve ücretsiz ekspertiz ile sürpriz maliyetlere son veriyoruz.")}
              </p>

              <CTASection className="max-w-xl" />

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Google İşletme Profilimizi açın: 5 üzerinden 5 yıldız, 11 yorum"
              >
                <span className="inline-flex text-amber-500" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </span>
                <span>Google’da 5,0 / 5 · 11 yorum</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
              </a>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t('features.f2_title', '7/24 Hizmet')}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t('features.f1_title', '15. Kata Kadar')}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t('features.f3_title', 'Uzman Operatör')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 relative z-20">
        <SearchFilter />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Hizmet Özelliklerimiz</h2>
        <FeaturesBar />
      </div>

      {/* Öncelikli hizmet ilçeleri */}
      <section className="py-12 bg-white dark:bg-navy border-b border-border dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Bursa geneli · Haftanın her günü 7/24
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-secondary dark:text-white">
                Öncelikli Asansör Kiralama Bölgelerimiz
              </h2>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 md:mt-0 max-w-md">
              Öncelikli hizmet ilçelerimiz Nilüfer, Mudanya, Osmangazi, Yıldırım ve Gürsu’dur. Bursa’nın tüm ilçelerine 15. kata kadar mobil asansör hizmeti veriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[
              {
                slug: "nilufer",
                name: "Nilüfer",
                title: "Nilüfer Kiralık Asansör",
                desc: "Özlüce, Balat, Görükle, İhsaniye ve çevresinde adrese göre kurulum değerlendirmesi.",
                hoods: ["Özlüce", "Balat", "Görükle", "İhsaniye"],
                slugPrefix: "nilufer"
              },
              {
                slug: "mudanya",
                name: "Mudanya",
                title: "Mudanya Kiralık Asansör",
                desc: "Güzelyalı, Burgaz, Bademli, Halitpaşa ve çevresinde adrese göre kurulum değerlendirmesi.",
                hoods: ["Güzelyalı", "Burgaz", "Bademli", "Halitpaşa"],
                slugPrefix: "mudanya"
              },
              {
                slug: "osmangazi",
                name: "Osmangazi",
                title: "Osmangazi Kiralık Asansör",
                desc: "Hamitler, Yunuseli, Dikkaldırım, Çekirge ve çevresinde adrese göre kurulum değerlendirmesi.",
                hoods: ["Hamitler", "Yunuseli", "Dikkaldırım", "Çekirge"],
                slugPrefix: "osmangazi"
              },
              {
                slug: "yildirim",
                name: "Yıldırım",
                title: "Yıldırım Kiralık Asansör",
                desc: "Millet, Teleferik, Ertuğrulgazi, Mesken ve çevresinde adrese göre kurulum değerlendirmesi.",
                hoods: ["Millet Mah.", "Teleferik", "Ertuğrulgazi", "Mesken"],
                slugPrefix: "yildirim"
              },
              {
                slug: "gursu",
                name: "Gürsu",
                title: "Gürsu Kiralık Asansör",
                desc: "Kurtuluş, Yenidoğan, İstiklal, Zafer ve çevresinde adrese göre kurulum değerlendirmesi.",
                hoods: ["Kurtuluş", "Yenidoğan", "İstiklal", "Zafer"],
                slugPrefix: "gursu"
              }
            ].map((d) => (
              <div key={d.slug} className="bg-slate-50 dark:bg-navy-light/60 border border-slate-200 dark:border-white/10 rounded-2xl p-5 hover:border-primary transition-all flex flex-col justify-between group shadow-sm hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg uppercase">
                      {d.name}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">15. Kata Kadar</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/${d.slugPrefix}-kiralik-asansor`}>{d.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {d.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {d.hoods.map(h => (
                      <span key={h} className="text-[11px] bg-white dark:bg-navy px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
                  <Link href={`/${d.slugPrefix}-kiralik-asansor`} className="text-primary hover:underline flex items-center gap-1">
                    Asansör Kirala <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href={`/${d.slugPrefix}-kiralik-asansor-fiyatlari`} className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                    Fiyatlar
                  </Link>
                  <Link href={`/${d.slugPrefix}-evden-eve-nakliyat`} className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                    Evden Eve
                  </Link>
                  <Link href={`/${d.slugPrefix}-evden-eve-asansorlu-nakliyat`} className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                    Asansörlü Nakliyat
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.services_title', 'Bursa Mobil Asansör ve Nakliyat Hizmetleri')}</h2>
            <p className="dark:text-slate-300 text-lg text-[#000000]">{t('home.services_desc', 'İhtiyacınıza uygun profesyonel mobil asansör çözümleriyle yanınızdayız.')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => {
              const Icon = getServiceIcon(service.slug);
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Link
                    href={`/bursa-merkez-${service.slug}`}
                    className="block h-full bg-white dark:bg-navy-light rounded-3xl p-6 border border-border dark:border-white/10 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-6 line-clamp-3">{service.shortDesc}</p>

                  <div className="mt-auto flex items-center text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
                    {t('common.read_more', 'Detaylı İncele')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/hizmet-bolgelerimiz"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-primary/30"
            >
              {t('home.view_all_services', 'Tüm Asansörlü Nakliyat Hizmetlerimizi Gör')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">{SERVICES.length} farklı hizmet · Bursa&apos;nın tüm ilçelerine</p>
          </div>
        </div>
      </section>

      {/* Kardeş Kuruluş & VIP Evden Eve Nakliyat Backlink Bölümü (Anasayfa Otorite Bağlantısı) */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-[#071320] to-slate-950 text-white border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">
                  <ShieldCheck className="w-4 h-4" />
                  Resmi Kardeş Kuruluşumuz &amp; VIP Taşımacılık Çözüm Ortağımız
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4">
                  Bursa VIP Evden Eve Nakliyat
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  <strong>Bursa Kiralık Asansör CNC</strong> olarak dış cephe asansör filomuzla hizmet sunarken; komple anahtar teslim ev taşıma, lüks ambalajlama ve marangozlu mobilya demontaj/montaj işlemlerinde kardeş markamız{' '}
                  <a 
                    href="https://www.bursavipevdeneve.com" 
                    target="_blank" 
                    rel="noopener"
                    className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                    title="Bursa VIP Evden Eve Nakliyat Resmi Sitesi"
                  >
                    Bursa VIP Evden Eve Nakliyat
                    <ExternalLink className="w-4 h-4 inline" />
                  </a>
                  {' '}ile ortak çağrı merkezimiz (<a href="tel:05056080700" className="text-white font-bold hover:text-primary underline">0505 608 07 00</a>) üzerinden 7/24 koordineli çalışmaktayız.
                </p>
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                  <span className="text-slate-400 py-1">İlçe VIP Nakliyat Sayfaları:</span>
                  <a href="https://www.bursavipevdeneve.com/nilufer-evden-eve-nakliyat" target="_blank" rel="noopener" className="px-3 py-1.5 bg-white/10 hover:bg-primary text-slate-200 hover:text-white rounded-lg transition-colors border border-white/10">Nilüfer Evden Eve Nakliyat</a>
                  <a href="https://www.bursavipevdeneve.com/osmangazi-evden-eve-nakliyat" target="_blank" rel="noopener" className="px-3 py-1.5 bg-white/10 hover:bg-primary text-slate-200 hover:text-white rounded-lg transition-colors border border-white/10">Osmangazi Evden Eve Nakliyat</a>
                  <a href="https://www.bursavipevdeneve.com/yildirim-evden-eve-nakliyat" target="_blank" rel="noopener" className="px-3 py-1.5 bg-white/10 hover:bg-primary text-slate-200 hover:text-white rounded-lg transition-colors border border-white/10">Yıldırım Evden Eve Nakliyat</a>
                  <a href="https://www.bursavipevdeneve.com/mudanya-evden-eve-nakliyat" target="_blank" rel="noopener" className="px-3 py-1.5 bg-white/10 hover:bg-primary text-slate-200 hover:text-white rounded-lg transition-colors border border-white/10">Mudanya Evden Eve Nakliyat</a>
                  <a href="https://www.bursavipevdeneve.com/gemlik-evden-eve-nakliyat" target="_blank" rel="noopener" className="px-3 py-1.5 bg-white/10 hover:bg-primary text-slate-200 hover:text-white rounded-lg transition-colors border border-white/10">Gemlik Evden Eve Nakliyat</a>
                  <a href="https://www.bursavipevdeneve.com/gursu-evden-eve-nakliyat" target="_blank" rel="noopener" className="px-3 py-1.5 bg-white/10 hover:bg-primary text-slate-200 hover:text-white rounded-lg transition-colors border border-white/10">Gürsu Evden Eve Nakliyat</a>
                  <a href="https://www.bursavipevdeneve.com/hizmetler/asansorlu-evden-eve-nakliyat" target="_blank" rel="noopener" className="px-3 py-1.5 bg-white/10 hover:bg-primary text-slate-200 hover:text-white rounded-lg transition-colors border border-white/10">Asansörlü VIP Ev Taşıma</a>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">
                <a
                  href="https://www.bursavipevdeneve.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-extrabold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-primary/20 text-base text-center"
                >
                  <span>bursavipevdeneve.com Ziyaret Et</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:05056080700"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all border border-white/15 text-base text-center"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>0505 608 07 00</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-20 bg-white dark:bg-background"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-64 bg-slate-100 dark:bg-navy-light rounded-3xl animate-pulse" /></div></div>}>
        <ReferencesGallery />
      </Suspense>

      <section className="py-24 relative overflow-hidden opacity-[1] bg-[#000000c9]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none">
            <Image
              src="/images/service-abstract.png"
              alt="Bursa mobil asansör hizmeti"
              fill
              className="object-cover"
              sizes="50vw"
            />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">{t('home.why_choose_us', 'Neden Bizi Tercih Etmelisiniz?')}</h2>
              <div className="space-y-6 text-lg text-slate-200">
                <p dangerouslySetInnerHTML={{ __html: t('home.trust_p1', "Bursa'da uzun yıllara dayanan lojistik ve taşıma tecrübemizle, müşterilerimize <strong class='text-white'>en sorunsuz ve profesyonel</strong> kiralık mobil asansör hizmetini sunuyoruz.") }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.trust_p2', "Klasik yöntemlerin aksine; eşyalarınızı merdiven dairesine sokmadan, duvarları çizmeden ve eşyalarınıza zarar vermeden doğrudan taşıma işlemini gerçekleştiriyoruz. Üstelik <strong class='text-white'>15. kata kadar çıkar</strong> kapasitemizle yüksek binalarda bile kolaylık sağlıyoruz.") }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.trust_p3', "İhtiyaç duymanız halinde sadece asansör değil, <strong class='text-white'>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>. İşimizi ciddiye alıyoruz: Tam saatinde oluruz, özenli çalışırız, makinelerimiz bakımlıdır ve iş güvenliğine dikkat ederiz.") }} />
              </div>
              <div className="mt-10">
                <CTASection />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-navy-light p-6 rounded-3xl shadow-lg border border-border dark:border-white/10 text-center transform translate-y-8">
                <div className="text-4xl font-display font-black text-primary mb-2">15.</div>
                <div className="font-semibold text-secondary dark:text-white" dangerouslySetInnerHTML={{ __html: t('home.up_to_floor', 'Kata Kadar<br/>Erişim') }} />
              </div>
              <div className="bg-secondary p-6 rounded-3xl shadow-lg text-center">
                <div className="text-4xl font-display font-black text-white mb-2">7/24</div>
                <div className="font-semibold text-slate-100">{t('features.f2_title', 'Kesintisiz')}<br />Hizmet</div>
              </div>
              <div className="bg-primary p-6 rounded-3xl shadow-lg text-center transform translate-y-8">
                <div className="text-4xl font-display font-black text-white mb-2">%100</div>
                <div className="font-semibold text-white/90" dangerouslySetInnerHTML={{ __html: t('home.operator_control', 'Operatör<br/>Kontrolü') }} />
              </div>
              <div className="bg-white dark:bg-navy-light p-6 rounded-3xl shadow-lg border border-border dark:border-white/10 text-center">
                <div className="text-4xl font-display font-black text-primary mb-2">18</div>
                <div className="font-semibold text-secondary dark:text-white" dangerouslySetInnerHTML={{ __html: t('home.active_network', 'İlçede<br/>Aktif Ağ') }} />
              </div>
              <div className="bg-white dark:bg-navy-light p-6 rounded-3xl shadow-lg border border-border dark:border-white/10 text-center transform translate-y-8">
                <div className="text-4xl font-display font-black text-primary mb-2">₺0</div>
                <div className="font-semibold text-secondary dark:text-white" dangerouslySetInnerHTML={{ __html: t('home.free_appraisal', 'Ücretsiz<br/>Ekspertiz') }} />
              </div>
              <div className="bg-secondary p-6 rounded-3xl shadow-lg text-center">
                <div className="text-4xl font-display font-black text-white mb-2">Sıfır</div>
                <div className="font-semibold text-slate-100" dangerouslySetInnerHTML={{ __html: t('home.customer_sat', 'Hasar<br/>Garantisi') }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Guide Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-navy-light/30 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <ArrowUpToLine className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                   {t('nav.blog', 'Uzman Rehberi')}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary dark:text-white mb-6 leading-tight">
                  {t('home.guide_title', 'Bursa Asansör Kiralama Rehberi: Nelere Dikkat Etmeli?')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic border-l-4 border-primary/30 pl-6">
                  {t('home.guide_desc', "Bursa'nın dar sokakları ve yüksek binalarında asansör kurulumu teknik uzmanlık gerektirir...")}
                </p>
              </div>
            </motion.div>

            {/* Pricing Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-orange-50/30 dark:bg-primary/5 p-8 md:p-10 rounded-[2.5rem] border border-primary/20 dark:border-primary/10 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-primary">
                <Truck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                  {t('features.f4_title', 'Fiyatlandırma & Detaylar')}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary dark:text-white mb-6 leading-tight">
                  {t('home.pricing_title', 'Bursa Kiralık Asansör Fiyatları ve Hizmet Detayları')}
                </h3>
                <div className="space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    {t('home.pricing_desc', "Kiralık mobil asansör ücretlerimiz; kurulum yapılacak katın yüksekliği (15. kata kadar), taşınacak eşyanın veya malzemenin miktarı ve operasyonun tahmini süresine göre şeffaf bir şekilde belirlenir. Binanın önündeki ağaç, elektrik teli gibi engeller operatörümüz tarafından değerlendirilir ve en güvenli kurulum sağlanır. İhtiyaç halinde eşya taşıma personeli (hamal) ve nakliye aracı da fiyat teklifine dahil edilebilir. Gizli ücret veya sürpriz maliyet yoktur.")}
                  </p>
                  <div className="bg-white dark:bg-navy-light p-5 rounded-2xl border border-primary/20 shadow-sm">
                    <p className="text-primary font-bold text-base flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      {t('home.call_for_exact_price', 'Net fiyat teklifi ve ücretsiz yerinde keşif için bizi arayın.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.service_network', 'Hizmet Ağımız')}</h2>
            <p className="dark:text-slate-300 text-lg text-slate-700">{t('home.service_network_desc', "Bursa’nın 17 ilçesinde hizmet veriyoruz. Öncelikli bölgelerimiz Nilüfer, Mudanya, Osmangazi, Yıldırım ve Gürsu’dur.")}</p>
          </div>
          <div ref={mapSentinelRef}>
            {shouldLoadMap ? (
              <ServiceMap />
            ) : (
              <div className="h-[500px] w-full bg-slate-100 animate-pulse rounded-3xl" />
            )}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-20 bg-white dark:bg-background"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-40 bg-slate-100 dark:bg-navy-light rounded-3xl animate-pulse" /></div></div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="py-20 bg-slate-50 dark:bg-background"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-40 bg-slate-100 dark:bg-navy-light rounded-3xl animate-pulse" /></div></div>}>
        <FaqSection />
      </Suspense>

      <section className="py-20 bg-slate-50 dark:bg-navy/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('nav.districts', 'Hizmet Bölgelerimiz')}</h2>
            <p className="dark:text-slate-300 text-lg text-slate-700">{t('home.districts_desc', "Bursa'nın tüm ilçelerine en kısa sürede mobil asansör ulaştırıyoruz.")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-secondary dark:text-white">
                <ArrowUpToLine className="w-5 h-5 text-primary" />
                Asansör Kiralama Bölgelerimiz
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DISTRICTS.map(district => (
                  <Link
                    key={`${district.slug}-asansor`}
                    href={`/${district.slug}-kiralik-asansor`}
                    className="bg-white dark:bg-navy-light text-secondary dark:text-white py-3 px-2 rounded-xl text-center border border-border dark:border-white/10 hover:border-primary hover:text-primary transition-all font-medium text-xs sm:text-sm shadow-sm"
                  >
                    {district.name} Kiralık Asansör
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-secondary dark:text-white">
                <Truck className="w-5 h-5 text-primary" />
                Evden Eve Nakliyat Bölgelerimiz
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DISTRICTS.map(district => (
                  <Link
                    key={`${district.slug}-nakliyat`}
                    href={`/${district.slug}-evden-eve-nakliyat`}
                    className="bg-white dark:bg-navy-light text-secondary dark:text-white py-3 px-2 rounded-xl text-center border border-border dark:border-white/10 hover:border-primary hover:text-primary transition-all font-medium text-xs sm:text-sm shadow-sm"
                  >
                    {district.name} Evden Eve Nakliyat
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/hizmet-bolgelerimiz"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-navy-light border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Tüm İlçe ve Hizmet Kombinasyonlarını Gör
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-sm text-gray-500 dark:text-slate-400">{DISTRICTS.length} ilçe · {SERVICES.length} hizmet türü</p>
          </div>
        </div>
      </section>
    </>
  );
}
