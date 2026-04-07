"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DISTRICTS, PHONE_NUMBER, SERVICES, WHATSAPP_LINK } from "@/data";
import { CTASection } from "@/components/CTASection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { ChevronRight, ArrowRight, CheckCircle2, Phone, MessageCircle, AlertTriangle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getAbsoluteAssetUrl, getCanonicalUrl } from "@/lib/seo";

export default function ServicePageClient() {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const fullSlug = params.slug || "";

  const service = SERVICES.find(s => fullSlug.endsWith(`-${s.slug}`));

  if (!service) {
    return <PageNotFound404 slug={fullSlug} />;
  }

  const districtSlugLength = fullSlug.length - service.slug.length - 1;
  const districtSlug = fullSlug.substring(0, districtSlugLength);

  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district) {
    return <PageNotFound404 slug={fullSlug} />;
  }

  const serviceName = t(`services.${service.slug}.name`, service.name);
  const serviceShortDesc = t(`services.${service.slug}.shortDesc`, service.shortDesc);
  const serviceTemplate = t(`services.${service.slug}.template`, service.template);

  const YEAR = new Date().getFullYear();
  const topNeighborhoods = district.neighborhoods.slice(0, 3);
  const neighborhoodStr = topNeighborhoods.join(", ");

  const hash = fullSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const selectedNeighborhoods = district.neighborhoods
    .slice()
    .sort((a, b) => (hash % a.length) - (hash % b.length))
    .slice(0, 5);

  const htmlContent = serviceTemplate
    .replace(/{district}/g, district.name)
    .replace(/{neighborhoods}/g, selectedNeighborhoods.join(", "));

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq, idx) => ({
              "@type": "Question",
              name: t(`services.${service.slug}.faqs.${idx}.q`, faq.q),
              acceptedAnswer: {
                "@type": "Answer",
                text: t(`services.${service.slug}.faqs.${idx}.a`, faq.a),
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: getCanonicalUrl("/") },
              { "@type": "ListItem", position: 2, name: district.name, item: getCanonicalUrl(`/${fullSlug}`) },
              { "@type": "ListItem", position: 3, name: service.name, item: getCanonicalUrl(`/${fullSlug}`) },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: `Bursa Kiralık Asansör ve Evden Eve Nakliyat - ${district.name} Şubesi`,
            description: `${district.name} bölgesinde profesyonel ${serviceName} hizmeti. 7/24 kiralık asansör ve sigortalı taşımacılık.`,
            image: getAbsoluteAssetUrl("/images/hero-bg.jpg"),
            telephone: "+905053297533",
            url: getCanonicalUrl(`/${fullSlug}`),
            address: { "@type": "PostalAddress", addressLocality: district.name, addressRegion: "Bursa", addressCountry: "TR" },
            geo: { "@type": "GeoCoordinates", latitude: "40.1828", longitude: "29.0667" },
            priceRange: "₺₺",
            openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
          }),
        }}
      />

      {/* Breadcrumb strip */}
      <nav aria-label="Konum" className="bg-gray-100 dark:bg-navy border-b border-gray-300 dark:border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-sm text-gray-600 dark:text-slate-400">
          <Link href="/" className="hover:text-primary underline underline-offset-2 transition-colors">{t('nav.home', 'Ana Sayfa')}</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="hover:text-primary underline underline-offset-2 cursor-default">{district.name}</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-gray-900 dark:text-white font-semibold" aria-current="page">{serviceName}</span>
        </div>
      </nav>

      {/* Page Hero */}
      <div className="bg-[#071320] py-12 md:py-16 border-b-4 border-primary/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/service-abstract.webp"
            alt={t('services.abstract_alt', 'Profesyonel Asansörlü Nakliyat Hizmeti')}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-tight mb-4">
            {district.name}<br /><span className="text-primary">{serviceName}</span>
            <span className="block text-2xl sm:text-3xl font-semibold text-slate-600 dark:text-slate-300 mt-2 text-sm leading-snug">{neighborhoodStr} Mahalleleri</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">{serviceShortDesc}</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <a href={`tel:${PHONE_NUMBER.replace(/\\D/g, '')}`} className="flex-1 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl">
              <Phone className="w-6 h-6" /> {t('common.call_now', 'Hemen Ara')}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl">
              <MessageCircle className="w-6 h-6" /> {t('common.whatsapp_message', 'WhatsApp')}
            </a>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <h2 className="sr-only">Hizmet Özellikleri</h2>
            <FeaturesBar />

            {/* Prose content */}
            <div className="prose prose-lg max-w-none mb-12 text-[#334155] dark:text-slate-300 prose-headings:text-[#0f172a] dark:prose-headings:text-white prose-strong:text-[#0f172a] dark:prose-strong:text-white prose-a:text-primary hover:prose-a:text-orange-600">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            {/* Dynamic Local Content */}
            {district.localNote && (
              <div className="bg-[#eff6ff] dark:bg-[#1e3a5f]/40 border border-[#bfdbfe] dark:border-[#1e3a5f] rounded-2xl p-6 mb-12 flex flex-col sm:flex-row gap-5 items-start">
                <div className="h-12 w-12 shrink-0 bg-[#dbeafe] dark:bg-[#1e3a5f] rounded-full flex items-center justify-center text-[#2563eb] dark:text-[#60a5fa]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e293b] dark:text-white mb-2">{district.name} Bölgesine Özel Not</h3>
                  <p className="text-[#334155] dark:text-slate-200 leading-relaxed font-medium">{t(`districts.${district.slug}.localNote`, district.localNote)}</p>
                </div>
              </div>
            )}

            {/* District Specific Context (SEO) */}
            {district.seoParagraph && (
              <div className="mb-12 p-6 md:p-8 bg-[#fff7ed] dark:bg-[#1e293b] border-l-4 border-primary rounded-r-2xl shadow-sm">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-primary">{district.name}</span> <span className="text-[#0f172a] dark:text-white">{t('service_page.special_solutions', 'Bölgesine Özel Çözümler')}</span>
                </h3>
                <p className="text-[#334155] dark:text-slate-300 leading-relaxed text-lg">{district.seoParagraph}</p>
              </div>
            )}

            {/* Neighborhoods Context Box */}
            <section className="mb-14 p-6 bg-[#f8fafc] dark:bg-[#0f172a] border-2 border-dashed border-[#cbd5e1] dark:border-[#334155] rounded-2xl">
              <h2 className="text-xl font-display font-bold text-[#0f172a] dark:text-white mb-3">
                {district.name} {t('service_page.coverage_info', 'Hizmet Bölgesi Bilgilendirmesi')}
              </h2>
              <p className="text-[#334155] dark:text-slate-300 leading-relaxed">
                {t('service_page.coverage_desc_1', 'Firmamız')} {district.name} {t('service_page.coverage_desc_2', 'merkez ilçesinin tamamı ile birlikte özellikle')} <strong className="text-[#0f172a] dark:text-white">{selectedNeighborhoods.join(", ")}</strong> {t('service_page.coverage_desc_3', 've çevresindeki mahallelerde haftanın 7 günü kesintisiz hizmet vermektedir.')} {district.name} {t('service_page.coverage_desc_4', 'lokasyonuna özel geliştirdiğimiz dar sokak manevra kabiliyeti yüksek mobil asansörlerimizle, bina içi asansörlerin yetersiz kaldığı her noktada yanınızdayız.')}
              </p>
            </section>

            {/* Local Perspective */}
            <section className="mb-14 p-6 md:p-10 bg-secondary dark:bg-navy-light rounded-[2rem] text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10"><CheckCircle2 className="w-32 h-32" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4">
                  {t('service_page.why_us', 'Neden', { district: district.name })} {district.name}&apos;de {t('service_page.why_us_suffix', 'Bizimle Çalışmalısınız?')}
                </h3>
                <p className="text-gray-100 dark:text-slate-300 leading-relaxed text-lg mb-6">
                  {service.category === 'asansor'
                    ? t('service_page.category_elevator_desc', `${district.name} bölgesindeki yapıların çoğunlukla dar balkon girişlerine veya yüksek katlı mimariye sahip olduğunun bilincindeyiz. Bu yüzden asansör kurulumu öncesinde çevre güvenliğini sağlıyor ve mobilyalarınızın binanın iç asansörüne sığmadığı durumlarda dış cepheden %100 güvenli transfer gerçekleştiriyoruz.`, { district: district.name })
                    : t('service_page.category_moving_desc', `${district.name} lokasyonunda nakliye sürecini planlarken sadece eşya taşımıyor, bölgenin trafik saatlerini ve park yasaklarını da hesaba katıyoruz. Deneyimli ekibimizle eşyalarınızı paketliyor, asansörlü sistemimizle sıfır riskle yeni adresinize ulaştırıyoruz.`, { district: district.name })
                  }
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white/20">{t('service_page.regional_survey', 'Bölgesel Keşif Dahil')}</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white/20">{district.name} {t('service_page.fast_fleet', 'Hızlı Geniş Araç Filosu')}</div>
                </div>
              </div>
            </section>

            {/* Service Rules */}
            <section className="mb-14">
              <h2 className="text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-5 pb-3 border-b-2 border-gray-200 dark:border-white/10">{t('service_page.service_rules', 'Hizmet Kurallarımız')}</h2>
              <ul className="space-y-4">
                {[
                  { title: t('features.f2_title', "7/24 Hizmet"), desc: t('features.f2_desc', "Mesai saati gözetmeksizin, bize ihtiyaç duyduğunuz her an sahadayız.") },
                  { title: t('features.f1_title', "15. Kata Kadar"), desc: t('features.f1_desc', "Yüksek erişimli asansörlerimiz maksimum 15. kata kadar güvenli ulaşım sağlar.") },
                  { title: t('features.f3_title', "Operatörlü Çalışma"), desc: t('features.f3_desc', "Kurulum ve kullanım esnasında operatör her zaman asansörün başındadır.") },
                  { title: t('features.f4_title', "Personel & Araç Desteği"), desc: t('features.f4_desc', "Gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir.") },
                ].map(r => (
                  <li key={r.title} className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#1e293b] border-2 border-[#cbd5e1] dark:border-[#334155] rounded-2xl">
                    <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0f172a] dark:text-white text-base mb-1">{r.title}</div>
                      <div className="text-[#334155] dark:text-slate-300">{r.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="mb-14">
              <h2 className="text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-5 pb-3 border-b-2 border-[#e2e8f0] dark:border-white/10">{t('common.faq', 'Sıkça Sorulan Sorular')}</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => {
                  const q = t(`services.${service.slug}.faqs.${idx}.q`, faq.q);
                  const a = t(`services.${service.slug}.faqs.${idx}.a`, faq.a);
                  return (
                    <div key={idx} className="bg-[#f8fafc] dark:bg-[#1e293b] border-2 border-[#cbd5e1] dark:border-[#334155] rounded-2xl p-6">
                      <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">{q}</h3>
                      <p className="text-[#334155] dark:text-slate-300 leading-relaxed">{a}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-br from-navy to-secondary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold text-white mb-4">{t('cta.title', 'Hemen Fiyat Alın')}</h2>
                <p className="text-slate-200 mb-8 max-w-xl mx-auto">{district.name} {t('cta.district_desc', 'bölgesindeki asansör talepleriniz için 5 dakika içinde net fiyat ve araç durum bilgisi alın.')}</p>
                <CTASection className="justify-center max-w-2xl mx-auto" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 bg-[#071320] rounded-2xl p-6 border-2 border-primary/30 shadow-2xl">
              <h3 className="font-display font-bold text-lg text-white mb-1">{t('common.quick_contact', 'Hızlı İletişim')}</h3>
              <p className="text-slate-300 text-sm mb-5">{district.name} {t('common.quick_contact_desc', 'bölgesinde uygun fiyata profesyonel hizmet.')}</p>
              <div className="space-y-3">
                <a href={`tel:${PHONE_NUMBER.replace(/\\D/g, '')}`} className="w-full bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base">
                  <Phone className="w-5 h-5" /> {PHONE_NUMBER}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base">
                  <MessageCircle className="w-5 h-5" /> {t('common.whatsapp_message_short', "WhatsApp'tan Yaz")}
                </a>
              </div>
              <div className="mt-5 text-center text-xs text-slate-500 border-t border-white/10 pt-4">{t('common.fast_pricing_info', '5 dakika içinde net fiyat ve araç durum bilgisi')}</div>
            </div>

            <div className="bg-white dark:bg-navy-light rounded-2xl p-5 border-2 border-gray-200 dark:border-white/10">
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-gray-200 dark:border-white/10">{district.name} {t('service_page.other_services', 'Diğer Hizmetler')}</h3>
              <ul className="space-y-2">
                {SERVICES.filter(s => s.slug !== service.slug).map(s => (
                  <li key={s.slug}>
                    <Link href={`/${district.slug}-${s.slug}`} className="flex items-center justify-between group py-1.5 text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">
                      <span className="truncate pr-4">{t(`services.${s.slug}.name`, s.name)}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-navy-light rounded-2xl p-5 border-2 border-gray-200 dark:border-white/10">
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-gray-200 dark:border-white/10">{t('service_page.nearby_districts', 'Yakın İlçeler')}</h3>
              <div className="flex flex-wrap gap-2">
                {DISTRICTS.filter(d => d.slug !== district.slug).slice(0, 8).map(d => (
                  <Link key={d.slug} href={`/${d.slug}-${service.slug}`} className="inline-block px-3 py-1.5 bg-gray-50 dark:bg-navy border-2 border-gray-200 dark:border-white/10 hover:bg-primary hover:border-primary text-xs font-semibold rounded-lg text-gray-700 dark:text-slate-300 hover:text-white transition-colors">{d.name}</Link>
                ))}
                <Link href="/" className="inline-block px-3 py-1.5 bg-primary/10 border-2 border-primary/30 text-xs font-semibold rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">{t('common.view_all', 'Tümünü Gör')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PageNotFound404({ slug }: { slug: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
        <AlertTriangle className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-5xl font-display font-black text-secondary dark:text-white mb-4">404</h1>
      <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">Sayfa Bulunamadı</p>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">Ana Sayfaya Dön</Link>
    </div>
  );
}
