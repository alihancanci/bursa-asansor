import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, ArrowUpToLine, Users, ArrowRight, Compass, Target } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAbsoluteAssetUrl } from "@/lib/seo";

export default function AboutPage() {
  const { t } = useTranslation();
  const ogImage = getAbsoluteAssetUrl("/opengraph.jpg");

  const features = [
    {
      icon: Clock,
      title: "7/24 Kesintisiz Hizmet",
      description: "Bursa'nın her noktasına, günün her saati acil asansör ve nakliyat desteği sağlıyoruz."
    },
    {
      icon: ArrowUpToLine,
      title: "Yeni Nesil Asansörler",
      description: "15. kata kadar güvenle uzanan, düzenli bakımı yapılan Alman teknolojisi mobil asansör filosu."
    },
    {
      icon: ShieldCheck,
      title: "Sıfır Hasar Garantisi",
      description: "Eşyalarınızı insan gücüne dayalı çarpma ve düşme risklerinden koruyarak, doğrudan yeni evinize ulaştırıyoruz."
    },
    {
      icon: Users,
      title: "Uzman Kadro",
      description: "Paketlemeden asansör kurulumuna kadar her aşamada profesyonel, eğitimli ve tecrübeli operatörler."
    }
  ];

  return (
    <div className="flex-1 bg-background pt-20">
      <SEO 
        title={t('meta.about_title', 'Hakkımızda | CNC Bursa Evden Eve Nakliyat ve Kiralık Asansör')}
        description={t('meta.about_desc', 'CNC Bursa evden eve nakliyat ve kiralık mobil asansör hizmetleri. Misyonumuz, vizyonumuz ve güvenilir taşımacılık anlayışımız hakkında bilgi edinin.')}
        path="/hakkimizda"
        ogImage={ogImage}
        schema={[{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Bursa Mobil Asansör Hakkımızda",
          "description": "CNC Bursa evden eve nakliyat ve kiralık mobil asansör hizmetleri hakkında kurumsal bilgiler.",
          "url": getAbsoluteAssetUrl("/hakkimizda")
        }]}
      />

      <Breadcrumbs items={[{ name: "Hakkımızda", path: "/hakkimizda" }]} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900 border-b-4 border-primary">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Hakkımızda | <span className="text-primary">Bursa Mobil Asansör & Nakliyat</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              <span className="text-primary font-semibold">CNC Bursa</span> Evden Eve Nakliyat & Kiralık Asansör
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biz Kimiz Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-black text-slate-900 mb-6">
              Biz Kimiz?
            </h2>
            <div className="prose prose-lg dark:prose-invert prose-p:text-black dark:prose-p:text-slate-300 font-medium">
              <p>
                <strong>CNC Bursa Evden Eve Nakliyat ve Kiralık Asansör</strong> olarak, Bursa'nın zorlu ve dar sokaklarında evden eve taşımacılık sektörüne yenilikçi bir nefes getirdik. Klasik "sırtta taşıma" dönemini kapatarak, hem eşya güvenliğini hem de zaman tasarrufunu odağımıza aldık.
              </p>
              <p>
                Yılların getirdiği sektör tecrübemizle, bugün 18 ilçenin tamamında aktif hizmet asansörlü nakliyat ağına sahibiz. İster parça eşya, ister yüksek katlı lüks rezidans taşımacılığı olsun; teknolojik altyapımız ve güler yüzlü ekibimizle nakliyatı "stresli bir gün" olmaktan çıkarıp, "keyifli bir başlangıca" dönüştürüyoruz.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 border border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Misyonumuz</h3>
              <p className="text-slate-700 leading-relaxed text-sm">
                Bursa'nın her noktasına, eşyalara sıfır zarar garantisiyle, en hızlı ve yenilikçi asansörlü taşıma hizmetini sunmak.
              </p>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors mt-0 sm:mt-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary dark:bg-slate-700 text-white flex items-center justify-center mb-6 shadow-lg shadow-black/10">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vizyonumuz</h3>
              <p className="text-slate-700 leading-relaxed text-sm">
                Marmara bölgesinde nakliyat ve asansör kiralama denilince akla gelen ilk, en teknolojik ve en güvenilir marka olmak.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neden CNC Section */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Neden <span className="text-primary">CNC?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Modern operasyon anlayışımızla rakiplerimizden ayrılıyor, güveni standart olarak sunuyoruz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group border border-slate-100 dark:border-slate-700"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Eşyalarınız CNC Güvencesinde
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Eski usul taşımacılığın risklerine veda edin. Teknolojik asansörlerimiz ve uzman kadromuzla taşınmak artık çok kolay.
          </p>
          <a
            href="tel:+905321234567" // Placeholder, will use global logic if needed
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/10 mx-auto"
          >
            Hemen Teklif Alın
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
