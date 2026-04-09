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
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => m.Testimonials as any));
const FaqSection = dynamic(() => import("@/components/FaqSection").then(m => m.FaqSection as any));
const ReferencesGallery = dynamic(() => import("@/components/ReferencesGallery").then(m => m.ReferencesGallery as any));
import { DISTRICTS, PHONE_NUMBER, SERVICES, WHATSAPP_LINK } from "@/data";
import { ArrowRight, CheckCircle2, ArrowUpToLine, Home as HomeIcon, Sofa, Truck, HardHat, Package, Phone } from "lucide-react";
import { getAbsoluteAssetUrl } from "@/lib/seo";

export default function HomePageClient() {
  const { t } = useTranslation();

  const ogImage = getAbsoluteAssetUrl("/opengraph.jpg");
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

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                {t('hero.title1', "Bursa'nın Lider")} <br />
                <span className="text-gradient">{t('hero.title2', "Mobil Asansör")}</span> {t('hero.title3', "Firması")}
              </h1>

              <p className="text-lg sm:text-xl text-slate-100/90 mb-10 leading-relaxed max-w-2xl">
                {t('hero.subtitle', "Dar sokaklar, yüksek binalar dert değil! 15. kata kadar güvenli ve hızlı mobil asansör kiralama ve nakliyat çözümleri sunuyoruz.")}
              </p>

              <CTASection className="max-w-xl" />

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
              href="/bursa-merkez-kiralik-mobil-asansor"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-primary/30"
            >
              {t('home.view_all_services', 'Tüm Asansörlü Nakliyat Hizmetlerimizi Gör')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">{SERVICES.length} farklı hizmet · Bursa&apos;nın tüm ilçelerine</p>
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
                    {t('home.pricing_desc', "Kiralık mobil asansör ücretlerimiz; kurulum yapılacak katın yüksekliği (15. kata kadar)...")}
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
            <p className="dark:text-slate-300 text-lg text-slate-700">{t('home.service_network_desc', "Türkiye'nin en aktif çalışan asansörlü nakliyat ağıyla, her noktadayız.")}</p>
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
                    href={`/${district.slug}-kiralik-mobil-asansor`}
                    className="bg-white dark:bg-navy-light text-secondary dark:text-white py-3 px-2 rounded-xl text-center border border-border dark:border-white/10 hover:border-primary hover:text-primary transition-all font-medium text-xs sm:text-sm shadow-sm"
                  >
                    {district.name} Asansör
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
                    {district.name} Nakliyat
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
