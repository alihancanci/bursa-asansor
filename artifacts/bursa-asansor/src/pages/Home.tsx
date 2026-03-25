import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { CTASection } from "@/components/CTASection";
import { SearchFilter } from "@/components/SearchFilter";
import { FeaturesBar } from "@/components/FeaturesBar";
import { ServiceMap } from "@/components/ServiceMap";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { DISTRICTS, PHONE_NUMBER, SERVICES, WHATSAPP_LINK } from "@/data";
import { ArrowRight, CheckCircle2, ArrowUpToLine } from "lucide-react";
import { getAbsoluteAssetUrl } from "@/lib/seo";

export default function Home() {
  const { t } = useTranslation();

  const ogImage = getAbsoluteAssetUrl("/opengraph.jpg");

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "Bursa Mobil Asansör",
    areaServed: DISTRICTS.map((district) => district.name),
    telephone: PHONE_NUMBER,
    url: "https://bursakiralikasansor.com/",
    image: ogImage,
    sameAs: [WHATSAPP_LINK],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bursa",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bursa Mobil Asansör",
    url: "https://bursakiralikasansor.com/",
    inLanguage: "tr-TR",
  };

  return (
    <>
      <SEO
        title={t('meta.home_title', 'Bursa Mobil Asansör Kiralama | 7/24 Asansörlü Nakliyat')}
        description={t('meta.home_desc', 'Bursa\'da 7/24 mobil asansör kiralama hizmeti. 15. kata kadar ulaşım, uzman operatörlü. Evden eve asansörlü nakliyat ve saatlik kiralama için hemen arayın.')}
        path="/"
        ogImage={ogImage}
        schema={[localBusinessSchema, websiteSchema]}
      />
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet={`${import.meta.env.BASE_URL}images/hero-bg.webp`} type="image/webp" />
            <img
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
              alt="Bursa Mobil Asansör — Kiralık Mobil Asansör Hizmeti"
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">{t('home.active_in_all', 'Bursa ve Tüm İlçelerinde Aktif')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                TEST: BURSA ASANSÖR V2.1 <br />
                {t('hero.title1', "Bursa'nın Lider")} <br />
                <span className="text-gradient">{t('hero.title2', "Mobil Asansör")}</span> {t('hero.title3', "Kiralama Firması")}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                {t('hero.subtitle', "Dar sokaklar, yüksek binalar dert değil! 15. kata kadar güvenli ve hızlı mobil asansör kiralama ve nakliyat çözümleri sunuyoruz.")}
              </p>

              <CTASection className="max-w-xl" />

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t('features.f2_title', '7/24 Hizmet')}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t('features.f1_title', '15. Kata Kadar')}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t('features.f3_title', 'Uzman Operatör')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Search Filter Module (Overlaps Hero) */}
      <div className="px-4 sm:px-6 lg:px-8 relative z-20">
        <SearchFilter />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturesBar />
      </div>
      {/* Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('nav.services', 'Hizmetlerimiz')}</h2>
            <p className="dark:text-slate-300 text-lg text-[#000000]">{t('home.services_desc', 'İhtiyacınıza uygun mobil asansör çözümleriyle yanınızdayız.')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
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
                    <ArrowUpToLine className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 line-clamp-3">{service.shortDesc}</p>

                  <div className="mt-auto flex items-center text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
                    {t('common.read_more', 'Detaylı İncele')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Tüm hizmetleri gör */}
          <div className="mt-10 text-center">
            <Link
              href="/bursa-merkez-kiralik-mobil-asansor"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-primary/30"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{SERVICES.length} farklı hizmet · Bursa'nın tüm ilçelerine</p>
          </div>
        </div>
      </section>
      {/* Trust Content Section */}
      <section className="py-24 relative overflow-hidden opacity-[1] bg-[#000000c9]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none">
          <picture>
            <source srcSet={`${import.meta.env.BASE_URL}images/service-abstract.webp`} type="image/webp" />
            <img src={`${import.meta.env.BASE_URL}images/service-abstract.png`} alt="Bursa mobil asansör hizmeti için soyut görsel" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </picture>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-secondary dark:text-white">{t('home.why_choose_us', 'Neden Bizi Tercih Etmelisiniz?')}</h2>
              <div className="space-y-6 text-lg text-slate-700 dark:text-slate-200">
                <p dangerouslySetInnerHTML={{ __html: t('home.trust_p1', "Bursa'da uzun yıllara dayanan lojistik ve taşıma tecrübemizle, müşterilerimize <strong>en sorunsuz ve profesyonel</strong> kiralık mobil asansör hizmetini sunuyoruz.") }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.trust_p2', "Klasik yöntemlerin aksine; eşyalarınızı merdiven dairesine sokmadan, duvarları çizmeden ve eşyalarınıza zarar vermeden doğrudan taşıma işlemini gerçekleştiriyoruz. Üstelik <strong>15. kata kadar çıkar</strong> kapasitemizle yüksek binalarda bile kolaylık sağlıyoruz.") }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.trust_p3', "İhtiyaç duymanız halinde sadece asansör değil, <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>. İşimizi ciddiye alıyoruz: Tam saatinde oluruz, özenli çalışırız, makinelerimiz bakımlıdır ve iş güvenliğine dikkat ederiz.") }} />
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

      {/* Service Map Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.service_network', 'Hizmet Ağımız')}</h2>
            <p className="dark:text-slate-300 text-lg text-slate-700">{t('home.service_network_desc', "Türkiye'nin en aktif çalışan asansörlü nakliyat ağıyla, her noktadayız.")}</p>
          </div>
          <ServiceMap />
        </div>
      </section>

      <Testimonials />

      <FaqSection />

      {/* Districts Grid */}
      <section className="py-20 bg-slate-50 dark:bg-navy/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('nav.districts', 'Hizmet Bölgelerimiz')}</h2>
            <p className="dark:text-slate-300 text-lg text-[#ffffff]">{t('home.districts_desc', "Bursa'nın tüm ilçelerine en kısa sürede mobil asansör ulaştırıyoruz.")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {DISTRICTS.map(district => (
              <Link
                key={district.slug}
                href={`/${district.slug}-kiralik-mobil-asansor`}
                className="bg-white dark:bg-navy-light text-secondary dark:text-white py-4 px-3 rounded-2xl text-center border border-border dark:border-white/10 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:border-primary hover:shadow-md transition-all font-semibold text-sm sm:text-base"
              >
                {district.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
