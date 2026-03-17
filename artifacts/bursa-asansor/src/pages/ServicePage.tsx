import { useParams, Redirect, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { DISTRICTS, SERVICES } from "@/data";
import { CTASection } from "@/components/CTASection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { ChevronRight, ArrowRight, Info, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const fullSlug = params.slug || "";

  // Dynamic router logic: parse /:district-:service
  // Find which service slug matches the end of the URL
  const service = SERVICES.find(s => fullSlug.endsWith(`-${s.slug}`));
  
  if (!service) {
    return <Redirect to="/" />;
  }

  // Extract district slug
  const districtSlugLength = fullSlug.length - service.slug.length - 1; // -1 for the hyphen
  const districtSlug = fullSlug.substring(0, districtSlugLength);
  
  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district) {
    return <Redirect to="/" />;
  }

  // Prepare content
  const pageTitle = `${service.name} | ${district.name} | Bursa Mobil Asansör`;
  const metaDescription = `${district.name} bölgesinde ${service.name.toLowerCase()} hizmeti alın. 7/24 hizmet, 15. kata kadar, operatörlü çalışma. Hemen arayın!`;
  
  // Inject district name into template
  const htmlContent = service.template.replace(/{district}/g, district.name);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Page Header */}
      <div className="bg-navy py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src={`${import.meta.env.BASE_URL}images/service-abstract.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-slate-400 mb-6 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{district.name}</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white truncate">{service.name}</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            {district.name} <span className="text-primary">{service.name}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <FeaturesBar />

            <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:text-secondary dark:prose-headings:text-white prose-a:text-primary hover:prose-a:text-orange-600 prose-strong:text-secondary dark:prose-strong:text-white max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            <div className="bg-slate-50 dark:bg-navy-light rounded-3xl p-8 border border-border dark:border-white/10 mb-16">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-secondary dark:text-white">
                <Info className="text-primary h-6 w-6 shrink-0" />
                Hizmet Kurallarımız
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-100"><strong className="text-secondary dark:text-white">7/24 Hizmet:</strong> Mesai saati gözetmeksizin, bize ihtiyaç duyduğunuz her an sahadayız.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-100"><strong className="text-secondary dark:text-white">15. Kata Kadar:</strong> Yüksek erişimli asansörlerimiz maksimum 15. kata kadar güvenli ulaşım sağlar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-100"><strong className="text-secondary dark:text-white">Operatörlü Çalışma:</strong> Kurulum ve kullanım esnasında operatör her zaman asansörün başındadır.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-100"><strong className="text-secondary dark:text-white">Personel ve Araç Desteği:</strong> Gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir.</span>
                </li>
              </ul>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-secondary dark:text-white">Sıkça Sorulan Sorular</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-navy-light rounded-2xl p-6 shadow-sm border border-border dark:border-white/10">
                    <h4 className="text-lg font-bold text-secondary dark:text-white mb-2">{faq.q}</h4>
                    <p className="text-slate-600 dark:text-slate-200">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Huge CTA */}
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
          <div className="lg:col-span-1 space-y-8">
            
            {/* Sticky contact widget */}
            <div className="sticky top-28 bg-white dark:bg-navy-light rounded-3xl p-6 border border-border dark:border-white/10 shadow-xl">
              <h3 className="font-display font-bold text-xl mb-4 pb-4 border-b border-border dark:border-white/10 text-secondary dark:text-white">Hızlı İletişim</h3>
              <CTASection variant="vertical" />
              <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300 font-medium">
                {district.name} bölgesinde uygun fiyata profesyonel hizmet.
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-navy-light rounded-3xl p-6 border border-border dark:border-white/10">
              <h3 className="font-display font-bold text-xl mb-4 pb-4 border-b border-border dark:border-white/10 text-secondary dark:text-white">{district.name} Diğer Hizmetler</h3>
              <ul className="space-y-3">
                {SERVICES.filter(s => s.slug !== service.slug).map(s => (
                  <li key={s.slug}>
                    <Link 
                      href={`/${district.slug}-${s.slug}`}
                      className="flex items-center justify-between group text-slate-700 dark:text-slate-200 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <span className="truncate pr-4">{s.name}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-navy-light rounded-3xl p-6 border border-border dark:border-white/10">
              <h3 className="font-display font-bold text-xl mb-4 pb-4 border-b border-border dark:border-white/10 text-secondary dark:text-white">Yakın İlçeler</h3>
              <div className="flex flex-wrap gap-2">
                {DISTRICTS.filter(d => d.slug !== district.slug).slice(0, 8).map(d => (
                  <Link 
                    key={d.slug}
                    href={`/${d.slug}-${service.slug}`}
                    className="inline-block px-3 py-1.5 bg-white dark:bg-navy border border-border dark:border-white/10 hover:bg-primary hover:border-primary text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:text-white transition-colors"
                  >
                    {d.name}
                  </Link>
                ))}
                <Link href="/" className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/30 text-xs font-semibold rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
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
