import { useParams, Redirect, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { DISTRICTS, PHONE_NUMBER, SERVICES, WHATSAPP_LINK } from "@/data";
import { CTASection } from "@/components/CTASection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { ChevronRight, ArrowRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const fullSlug = params.slug || "";

  const service = SERVICES.find(s => fullSlug.endsWith(`-${s.slug}`));
  
  if (!service) {
    return <Redirect to="/" />;
  }

  const districtSlugLength = fullSlug.length - service.slug.length - 1;
  const districtSlug = fullSlug.substring(0, districtSlugLength);
  
  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district) {
    return <Redirect to="/" />;
  }

  const pageTitle = `${service.name} | ${district.name} | Bursa Mobil Asansör`;
  const metaDescription = `${district.name} bölgesinde ${service.name.toLowerCase()} hizmeti alın. 7/24 hizmet, 15. kata kadar, operatörlü çalışma. Hemen arayın!`;
  
  const htmlContent = service.template.replace(/{district}/g, district.name);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Breadcrumb strip */}
      <nav aria-label="Konum" className="bg-gray-100 dark:bg-navy border-b border-gray-300 dark:border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-sm text-gray-600 dark:text-slate-400">
          <Link href="/" className="hover:text-primary underline underline-offset-2 transition-colors">Ana Sayfa</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="hover:text-primary underline underline-offset-2 cursor-default">{district.name}</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-gray-900 dark:text-white font-semibold" aria-current="page">{service.name}</span>
        </div>
      </nav>

      {/* Page Hero */}
      <div className="bg-[#071320] py-12 md:py-16 border-b-4 border-primary/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/service-abstract.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-tight mb-4"
          >
            {district.name}<br /><span className="text-primary">{service.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 leading-relaxed max-w-2xl mb-8"
          >
            {service.shortDesc}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg"
          >
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="flex-1 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" /> Hemen Ara
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <FeaturesBar />

            {/* Prose content */}
            <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:text-secondary dark:prose-headings:text-white prose-a:text-primary hover:prose-a:text-orange-600 prose-strong:text-secondary dark:prose-strong:text-white max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            {/* Service Rules */}
            <section className="mb-14">
              <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-5 pb-3 border-b-2 border-gray-200 dark:border-white/10">
                Hizmet Kurallarımız
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "7/24 Hizmet", desc: "Mesai saati gözetmeksizin, bize ihtiyaç duyduğunuz her an sahadayız." },
                  { title: "15. Kata Kadar", desc: "Yüksek erişimli asansörlerimiz maksimum 15. kata kadar güvenli ulaşım sağlar." },
                  { title: "Operatörlü Çalışma", desc: "Kurulum ve kullanım esnasında operatör her zaman asansörün başındadır." },
                  { title: "Personel & Araç Desteği", desc: "Gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir." },
                ].map(r => (
                  <li key={r.title} className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-navy-light border-2 border-gray-200 dark:border-white/10 rounded-2xl">
                    <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-base mb-1">{r.title}</div>
                      <div className="text-gray-700 dark:text-slate-300">{r.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="mb-14">
              <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-5 pb-3 border-b-2 border-gray-200 dark:border-white/10">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-navy-light border-2 border-gray-200 dark:border-white/10 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                    <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-br from-navy to-secondary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://pixabay.com/get/gb638fbffb30ab424cf06153e76129340b3baa4d497e70c20437837a28c1e9a3f86ce9c6335235b5ffd74a6333bcb244005d9bcd7852bce2bdb7d8c050f3650d9_1280.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold text-white mb-4">Hemen Fiyat Alın</h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                  {district.name} bölgesindeki asansör talepleriniz için 5 dakika içinde net fiyat ve araç durum bilgisi alın.
                </p>
                <CTASection className="justify-center max-w-2xl mx-auto" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Sticky contact widget — dark, high-contrast */}
            <div className="sticky top-24 bg-[#071320] rounded-2xl p-6 border-2 border-primary/30 shadow-2xl">
              <h3 className="font-display font-bold text-lg text-white mb-1">Hızlı İletişim</h3>
              <p className="text-slate-400 text-sm mb-5">{district.name} bölgesinde uygun fiyata profesyonel hizmet.</p>
              <div className="space-y-3">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                  className="w-full bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                >
                  <Phone className="w-5 h-5" /> {PHONE_NUMBER}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp'tan Yaz
                </a>
              </div>
              <div className="mt-5 text-center text-xs text-slate-500 border-t border-white/10 pt-4">
                5 dakika içinde net fiyat ve araç durum bilgisi
              </div>
            </div>

            {/* Other services */}
            <div className="bg-white dark:bg-navy-light rounded-2xl p-5 border-2 border-gray-200 dark:border-white/10">
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-gray-200 dark:border-white/10">
                {district.name} Diğer Hizmetler
              </h3>
              <ul className="space-y-2">
                {SERVICES.filter(s => s.slug !== service.slug).map(s => (
                  <li key={s.slug}>
                    <Link 
                      href={`/${district.slug}-${s.slug}`}
                      className="flex items-center justify-between group py-1.5 text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                    >
                      <span className="truncate pr-4">{s.name}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby districts */}
            <div className="bg-white dark:bg-navy-light rounded-2xl p-5 border-2 border-gray-200 dark:border-white/10">
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-gray-200 dark:border-white/10">
                Yakın İlçeler
              </h3>
              <div className="flex flex-wrap gap-2">
                {DISTRICTS.filter(d => d.slug !== district.slug).slice(0, 8).map(d => (
                  <Link 
                    key={d.slug}
                    href={`/${d.slug}-${service.slug}`}
                    className="inline-block px-3 py-1.5 bg-gray-50 dark:bg-navy border-2 border-gray-200 dark:border-white/10 hover:bg-primary hover:border-primary text-xs font-semibold rounded-lg text-gray-700 dark:text-slate-300 hover:text-white transition-colors"
                  >
                    {d.name}
                  </Link>
                ))}
                <Link href="/" className="inline-block px-3 py-1.5 bg-primary/10 border-2 border-primary/30 text-xs font-semibold rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
                  Tümünü Gör
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
