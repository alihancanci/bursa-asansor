"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DISTRICTS, PHONE_NUMBER, SERVICES, WHATSAPP_LINK, USPS } from "@/data";
import { CTASection } from "@/components/CTASection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { Testimonials } from "@/components/Testimonials";
import { ChevronRight, ArrowRight, CheckCircle2, Phone, MessageCircle, AlertTriangle, MapPin, Truck, UserCheck, Zap, Building2, ShieldCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { getAbsoluteAssetUrl, getCanonicalUrl } from "@/lib/seo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export default function ServicePageClient() {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const fullSlug = params.slug || "";

  const service = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length).find(s => fullSlug.endsWith(`-${s.slug}`));

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
  const priorityDistricts = ["nilufer", "yildirim", "mudanya", "osmangazi", "gursu"];
  const districtServiceSlugs = ["kiralik-asansor", "kiralik-asansor-fiyatlari", "evden-eve-nakliyat", "evden-eve-asansorlu-nakliyat", "saatlik-asansor-kiralama"];
  const hasDistrictSearchContent = priorityDistricts.includes(district.slug) && districtServiceSlugs.includes(service.slug);

  const YEAR = new Date().getFullYear();
  const topNeighborhoods = district.neighborhoods.slice(0, 3);
  const neighborhoodStr = topNeighborhoods.join(", ");

  const hash = fullSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const selectedNeighborhoods = district.neighborhoods
    .slice()
    .sort((a, b) => (hash % a.length) - (hash % b.length))
    .slice(0, 5);

  let htmlContent = serviceTemplate
    .replace(/{district}/g, district.name)
    .replace(/{neighborhoods}/g, selectedNeighborhoods.join(", "));

  if (hasDistrictSearchContent && service.slug === "evden-eve-nakliyat") {
    htmlContent = `<p>${district.name} evden eve nakliyat talebiniz için taşınacak eşya miktarı, iki adresin mesafesi, katlar ve bina erişimi birlikte değerlendirilir. İhtiyacınız komple ev taşıma ise nakliye kapsamını; yalnızca büyük eşyaları cepheden taşımak istiyorsanız asansörlü nakliyat seçeneğini belirtin.</p>
      <h2>${district.name} ev taşıma teklifi için gerekli bilgiler</h2>
      <ul><li>Alınacak ve bırakılacak mahalle veya adresler</li><li>Kat ve bina içi asansör bilgisi</li><li>Oda sayısı ya da eşya listesi; büyük parçaların fotoğrafı</li><li>Taşınma tarihi ve paketleme/montaj ihtiyacı</li><li>Asansör gerekiyorsa bina cephesi ve aracın duracağı alanın fotoğrafı</li></ul>
      <p>Bu ayrıntılar, ${district.name} evden eve nakliyat fiyatı ve gerekli ekipman için doğru teklif hazırlanmasına yardımcı olur. Asansör kurulumu her binada mümkün olmayabilir; adresin cephe ve zemin koşulları önceden teyit edilir.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "evden-eve-asansorlu-nakliyat") {
    htmlContent = `<p>${district.name} asansörlü nakliyat hizmetinde büyük eşyalar, bina koşulları elveriyorsa dış cephe mobil asansörüyle balkon veya uygun pencereden taşınabilir. Bu yöntem komple evden eve nakliye ile aynı kapsamda değildir; taşıma ekibi ve araç ihtiyacınızı ayrıca belirtin.</p>
      <h2>Asansörlü nakliyat kurulumu nasıl değerlendirilir?</h2>
      <p>Aracın bina önünde durabileceği alan, cepheye erişim, balkon veya pencere açıklığı, çevredeki ağaç ve kablolar ile taşınacak yükün ölçüleri kontrol edilir. ${district.name} adresiniz için kat, yük, tarih ve sokak/cephe fotoğrafı göndererek uygunluk ve fiyat bilgisi isteyin.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "saatlik-asansor-kiralama") {
    htmlContent = `<p>${district.name} saatlik asansör kiralama, birkaç parça eşya veya sınırlı süreli malzeme aktarımı için değerlendirilebilir. Minimum süre, ücret ve müsaitlik talebin kapsamına göre netleştirilir.</p>
      <h2>Saatlik asansör kiralama fiyatını etkileyenler</h2>
      <ul><li>Konum ve aracın kurulum alanına erişimi</li><li>Kat yüksekliği ve cephe koşulları</li><li>Taşınacak yükün türü ve yaklaşık miktarı</li><li>Talep edilen çalışma süresi ve tarih</li></ul>
      <p>Bilgileri ve mümkünse bina cephesinin fotoğrafını paylaşarak ${district.name} için kurulum uygunluğu, fiyat ve müsaitlik sorun.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "kiralik-asansor-fiyatlari") {
    htmlContent = `<p>${district.name} kiralık asansör fiyatı; hizmet konumu, kat, taşınacak yükün türü ve miktarı ile tahmini çalışma süresine göre değerlendirilir. Fiyat talebinde işin kapsamını doğru paylaşmak, uygun hizmet seçeneğinin belirlenmesine yardımcı olur.</p>
      <h2>${district.name} asansör kiralama fiyat teklifini etkileyenler</h2>
      <ul><li>Mahalle veya açık adres ve aracın kurulum alanına erişimi</li><li>Kat sayısı ve binanın cephe koşulları</li><li>Taşınacak eşya veya malzemenin türü, ölçüsü ve miktarı</li><li>Saatlik ya da daha uzun kullanım ihtiyacı</li><li>Talep edilen tarih ve varsa ek taşıma personeli/araç</li></ul>
      <p>Bu bilgileri ve mümkünse sokak ile bina cephesinin fotoğrafını paylaşarak ${district.name} için güncel teklif isteyin. Net ücret ve müsaitlik, iş ayrıntıları alındıktan sonra teyit edilir.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "kiralik-asansor") {
    htmlContent = `<p>${district.name} kiralık asansör arıyorsanız dış cepheye kurulan mobil eşya asansörü; büyük mobilya, beyaz eşya veya yapı malzemesi aktarımı için değerlendirilebilir. Bina içi asansörün yetersiz kaldığı durumlarda balkon veya uygun pencereden taşıma seçeneği incelenir.</p>
      <p>Mobil asansör kiralama uygunluğu yalnızca kata göre belirlenmez. Binanın cephesi, aracın duracağı alan, ağaç veya kablo gibi engeller ve yükün ölçüleri birlikte değerlendirilmelidir. ${district.name} içinde ${neighborhoodStr} ve çevresindeki adresler için bu bilgileri ileterek ön değerlendirme isteyin.</p>
      <h2>${district.name} kiralık asansör fiyatı nasıl belirlenir?</h2>
      <p>Kat, tahmini çalışma süresi, konum, yükün türü ve miktarı fiyat teklifini etkiler. Talep oluştururken mahalle veya adres, kat, eşya bilgisi, tarih ve cephe/sokak fotoğrafını paylaşın. Taşıma personeli veya nakliye aracı gerekiyorsa bunu ayrıca belirtin.</p>`;
  }

  const targetedFaqs = !hasDistrictSearchContent ? service.faqs : service.slug === "kiralik-asansor-fiyatlari" ? [
    { q: `${district.name} kiralık asansör fiyatı neye göre hesaplanır?`, a: "Konum, kat, cephe ve kurulum koşulları, yükün türü ve miktarı ile kullanım süresi değerlendirilir." },
    { q: "Fiyat teklifi için hangi bilgileri paylaşmalıyım?", a: "Mahalle veya adres, kat, yük bilgisi, tahmini süre ve talep edilen tarihi iletin. Cephe fotoğrafı ön değerlendirmeyi kolaylaştırır." },
    { q: "Saatlik asansör kiralama seçeneği var mı?", a: "İşin kapsamını ve tahmini süreyi iletip saatlik veya farklı kullanım seçeneklerinin uygunluğunu sorun." },
  ] : service.slug === "evden-eve-nakliyat" ? [
    { q: `${district.name} evden eve nakliyat fiyatı neye göre belirlenir?`, a: "Eşya miktarı, iki adresin mesafesi, katlar, erişim koşulları, paketleme ve montaj ihtiyaçları birlikte değerlendirilir." },
    { q: "Teklif almak için hangi bilgileri paylaşmalıyım?", a: "Alınacak ve bırakılacak adresleri, katları, eşya listesini veya fotoğraflarını ve taşınma tarihini paylaşın." },
    { q: "Ev taşımada dış cephe asansörü kullanılabilir mi?", a: "Cephe erişimi, aracın duracağı alan ve çevredeki engeller uygunsa değerlendirilebilir. Uygunluk adres bazında teyit edilir." },
  ] : service.slug === "evden-eve-asansorlu-nakliyat" ? [
    { q: "Asansörlü nakliyat her binada yapılabilir mi?", a: "Hayır. Binanın cephesi, aracın kurulum alanı, balkon veya pencere erişimi ve çevredeki engeller önceden değerlendirilir." },
    { q: "Fiyat teklifi için ne göndermeliyim?", a: "Mahalle veya adres, kat, taşınacak yükün türü ve miktarı, tarih ve cephe/sokak fotoğrafı paylaşın." },
    { q: "Asansörlü nakliyat komple ev taşıma mıdır?", a: "Her zaman değil. Mobil asansör kullanımı ayrı bir hizmet olabilir; araç ve taşıma personeli ihtiyacınızı teklif talebinde belirtin." },
  ] : service.slug === "saatlik-asansor-kiralama" ? [
    { q: "Saatlik kiralama süresi ve ücreti nasıl belirlenir?", a: "Tahmini çalışma süresi ve işin kapsamı paylaşılınca fiyat ve minimum süre bilgisi verilir." },
    { q: "Saatlik asansör her adreste kurulabilir mi?", a: "Hayır. Aracın duracağı alan, cephe erişimi ve çevredeki engeller kontrol edilir." },
    { q: "Teklif için hangi bilgileri paylaşmalıyım?", a: "Konum, kat, yük türü ve miktarı, tahmini süre, tarih ve varsa cephe fotoğrafını iletin." },
  ] : [
    { q: "Mobil asansör her binaya kurulabilir mi?", a: "Hayır. Binanın cephesine erişim, aracın durabileceği alan ve çevredeki engeller kontrol edilmelidir." },
    { q: "Kiralık asansör fiyatı için hangi bilgiler gerekli?", a: "Adres veya mahalle, kat, yükün türü ve miktarı, tahmini kullanım süresi ve planlanan tarih fiyat değerlendirmesine yardımcı olur." },
    { q: "Teklif almak için cephe fotoğrafı gönderebilir miyim?", a: "Evet. Sokak ve bina cephesinin güncel fotoğrafı kurulum uygunluğunu önceden değerlendirmeye yardımcı olur." },
  ];

  // Kardeş kuruluş bursavipevdeneve.com dinamik sayfa bazlı backlink eşlemesi
  const vipDistricts: Record<string, string> = {
    "nilufer": "nilufer-evden-eve-nakliyat",
    "osmangazi": "osmangazi-evden-eve-nakliyat",
    "yildirim": "yildirim-evden-eve-nakliyat",
    "mudanya": "mudanya-evden-eve-nakliyat",
    "gemlik": "gemlik-evden-eve-nakliyat",
    "gursu": "gursu-evden-eve-nakliyat",
  };

  const isNakliyat = service.slug.includes("nakliyat") || service.slug.includes("tasima") || service.slug.includes("ev-tasima");
  const hasExactDistrictPage = !!vipDistricts[district.slug];
  
  const vipTargetUrl = hasExactDistrictPage 
    ? `https://www.bursavipevdeneve.com/${vipDistricts[district.slug]}`
    : (isNakliyat 
        ? "https://www.bursavipevdeneve.com/hizmetler/asansorlu-evden-eve-nakliyat" 
        : "https://www.bursavipevdeneve.com/hizmetler/bursa-kiralik-asansor");

  const vipAnchor = hasExactDistrictPage
    ? `${district.name} Evden Eve Nakliyat`
    : `${district.name} Asansörlü VIP Nakliyat`;

  const vipBadge = hasExactDistrictPage
    ? `${district.name} VIP Taşımacılık Çözüm Ortağımız`
    : `Bursa VIP Taşımacılık Çözüm Ortağımız`;

  const vipTitle = hasExactDistrictPage
    ? `${district.name} VIP Evden Eve Nakliyat & Komple Taşıma`
    : `${district.name} İçin VIP Evden Eve Nakliyat Çözümü`;

  const vipDescription = hasExactDistrictPage
    ? `${district.name} bölgesinde sadece mobil asansör değil, komple anahtar teslim ev taşıma, birinci sınıf balonlu ambalajlama ve marangozlu demontaj/montaj desteği almak istiyorsanız resmi kardeş markamız Bursa VIP Evden Eve Nakliyat profesyonel filosuyla hizmetinizdedir.`
    : `${district.name} ve tüm Bursa genelinde sigortalı, marangozlu ve asansörlü komple ev taşıma operasyonlarında kardeş kuruluşumuz Bursa VIP Evden Eve Nakliyat ile ortak koordinasyonla çalışıyoruz.`;

  return (
    <>
      {/* Breadcrumb strip — Silo PageRank Aktarımı: Tali sayfadan doğrudan ana ilçe otorite sayfasına akış */}
      <nav aria-label="Konum" className="bg-gray-100 dark:bg-navy border-b border-gray-300 dark:border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-sm text-gray-600 dark:text-slate-400">
          <Link href="/" className="hover:text-primary underline underline-offset-2 transition-colors">{t('nav.home', 'Ana Sayfa')}</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          {service.slug === 'kiralik-asansor' ? (
            <span className="text-gray-900 dark:text-white font-semibold">{district.name} Kiralık Asansör</span>
          ) : (
            <Link 
              href={`/${district.slug}-kiralik-asansor`} 
              className="hover:text-primary underline underline-offset-2 font-medium transition-colors"
              title={`${district.name} Kiralık Asansör Ana Sayfası`}
            >
              {district.name} Kiralık Asansör
            </Link>
          )}
          {service.slug !== 'kiralik-asansor' && (
            <>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="text-gray-900 dark:text-white font-semibold" aria-current="page">{serviceName}</span>
            </>
          )}
        </div>
      </nav>

      {/* Page Hero */}
      <div className="bg-[#071320] py-12 md:py-16 border-b-4 border-primary/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/service-abstract.webp"
            alt={`${district.name} ${serviceName} - Bursa Kiralık Asansör`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-tight mb-4">
            {district.name} <span className="text-primary">{service.slug === 'kiralik-asansor' ? 'Kiralık Asansör' : serviceName}</span>
            <span className="block text-2xl sm:text-3xl font-semibold text-slate-300 mt-2 leading-snug">{neighborhoodStr} ve çevresi</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
            {service.slug === 'kiralik-asansor' 
              ? `${district.name} için mobil dış cephe asansörü kiralama. Kurulum uygunluğu; adres, bina cephesi, kat ve taşınacak yüke göre değerlendirilir.`
              : serviceShortDesc}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} 
              onClick={() => trackPhoneClick(`${district.name} Hero`)}
              className="flex-1 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" /> {t('common.call_now', 'Hemen Ara')}
            </a>
            <a 
              href={`https://wa.me/905056080700?text=${encodeURIComponent(`Merhaba, ${district.name} bölgesinde kiralık asansör / nakliyat hizmeti hakkında fiyat ve uygunluk bilgisi almak istiyorum.`)}`} 
              onClick={() => trackWhatsAppClick(`${district.name} Hero`)}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <MessageCircle className="w-6 h-6" /> {t('common.whatsapp_message', 'WhatsApp')}
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* AI & Quick Contact Visibility Row */}
      <div className="bg-gray-50 dark:bg-navy-dark border-b border-gray-200 dark:border-white/5 py-4 px-4 sm:px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-gray-600 dark:text-slate-400 uppercase tracking-wider">{district.name} Hizmet Hattı</span>
          </div>
          <p className="text-xl sm:text-2xl font-display font-black text-secondary dark:text-white flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
              0505 608 07 00
            </a>
          </p>
          <div className="hidden md:block h-6 w-px bg-gray-300 dark:bg-white/10" />
          <p className="text-base font-semibold text-primary">
            {hasDistrictSearchContent ? "Uygunluk ve fiyat bilgisi için arayın" : "Hemen Ara, 5 Dakikada Fiyat Al!"}
          </p>
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

            {hasDistrictSearchContent && (
              <nav aria-label={`${district.name} hizmet bağlantıları`} className="mb-12 rounded-2xl border border-gray-200 dark:border-white/10 p-5">
                <h2 className="text-lg font-bold mb-3">{district.name} için hizmet seçenekleri</h2>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {service.slug !== "evden-eve-nakliyat" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-evden-eve-nakliyat`}>{district.name} evden eve nakliyat</Link></li>}
                  {service.slug !== "evden-eve-asansorlu-nakliyat" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-evden-eve-asansorlu-nakliyat`}>{district.name} asansörlü nakliyat</Link></li>}
                  {service.slug !== "saatlik-asansor-kiralama" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-saatlik-asansor-kiralama`}>{district.name} saatlik asansör kiralama</Link></li>}
                  {service.slug !== "kiralik-asansor" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-kiralik-asansor`}>{district.name} kiralık asansör</Link></li>}
                  {service.slug !== "kiralik-asansor-fiyatlari" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-kiralik-asansor-fiyatlari`}>{district.name} kiralık asansör fiyatları</Link></li>}
                </ul>
              </nav>
            )}

            {/* Dynamic Local Content */}
            {service.slug === "kiralik-asansor" && district.localNote && (
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
            {service.slug === "kiralik-asansor" && district.seoParagraph && (
              <div className="mb-12 p-6 md:p-8 bg-[#fff7ed] dark:bg-[#1e293b] border-l-4 border-primary rounded-r-2xl shadow-sm">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-primary">{district.name}</span> <span className="text-[#0f172a] dark:text-white">{t('service_page.special_solutions', 'Bölgesine Özel Çözümler')}</span>
                </h3>
                <p className="text-[#334155] dark:text-slate-300 leading-relaxed text-lg">{district.seoParagraph}</p>
              </div>
            )}

            {/* Kardeş Kuruluş Sayfa Bazlı Dinamik VIP Backlink Kartı */}
            <section className="mb-14 p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-[#071320] text-white border-2 border-primary/30 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">
                    <ShieldCheck className="w-4 h-4" />
                    {vipBadge}
                  </div>
                  <span className="text-xs font-semibold text-slate-300">
                    Ortak Çağrı Hattı: <a href="tel:05056080700" className="text-white hover:text-primary font-bold">0505 608 07 00</a>
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  {vipTitle}
                </h3>
                
                <p className="text-slate-200 leading-relaxed mb-6 text-sm sm:text-base">
                  {vipDescription}{' '}
                  {district.name} bölgesinde anahtar teslim VIP taşınma ayrıcalığı için resmi kardeş kuruluşumuz{' '}
                  <a
                    href={vipTargetUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                    title={`${vipAnchor} - bursavipevdeneve.com`}
                  >
                    {vipAnchor}
                    <ExternalLink className="w-3.5 h-3.5 inline" />
                  </a>
                  {' '}web sayfamızı ziyaret edebilirsiniz.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                  <a
                    href={vipTargetUrl}
                    target="_blank"
                    rel="noopener"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 text-sm"
                  >
                    <span>{vipAnchor} Sayfasına Git</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.bursavipevdeneve.com"
                    target="_blank"
                    rel="noopener"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl transition-all border border-white/10 text-sm"
                  >
                    <span>Bursa VIP Nakliyat Ana Sayfa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Neighborhoods Context Box (SEO Otoritesi) */}
            <section className="mb-14 p-6 md:p-8 bg-[#f8fafc] dark:bg-[#0f172a] border-2 border-dashed border-[#cbd5e1] dark:border-[#334155] rounded-2xl shadow-sm">
              <h2 className="text-xl md:text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-3 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {district.name} Asansör Kiralama ve Nakliyat Mahallelerimiz
              </h2>
              <p className="text-[#334155] dark:text-slate-300 leading-relaxed mb-5">
                {hasDistrictSearchContent
                  ? `${district.name} için hizmet talebi bu mahallelerden alınabilir. Asansörün adrese kurulup kurulamayacağı; cepheye erişim, aracın durabileceği alan, kat ve yük bilgisine göre teyit edilir.`
                  : `${district.name} ve çevresindeki adresler için kiralama talebi oluşturabilirsiniz. Kurulum uygunluğu adres ve bina koşulları incelendikten sonra netleştirilir.`}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {district.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 p-2.5 bg-white dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">{district.name} {n}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#334155] dark:text-slate-300 leading-relaxed mt-5 italic text-sm border-t border-gray-200 dark:border-white/10 pt-4">
                Teklif için mahalle veya konum, kat sayısı, taşınacak eşyanın türü ve planlanan tarih bilgilerini paylaşın. Cephe ya da sokak fotoğrafı ön değerlendirmeye yardımcı olur.
              </p>
            </section>

            {/* Local Perspective */}
            <section className="mb-14 p-6 md:p-10 bg-secondary dark:bg-navy-light rounded-[2rem] text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10"><CheckCircle2 className="w-32 h-32" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-6">
                  {t('service_page.why_us', 'Neden', { district: district.name })} {district.name}&apos;de {t('service_page.why_us_suffix', 'Bizimle Çalışmalısınız?')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {USPS.map((usp, idx) => {
                    const Icon = { Truck, UserCheck, Zap, Building2 }[usp.icon] || MapPin;
                    return (
                      <div key={idx} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{usp.title}</h4>
                          <p className="text-sm text-gray-200 dark:text-slate-300 leading-relaxed">{usp.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Service Rules */}
            <section className="mb-14">
              <h2 className="text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-5 pb-3 border-b-2 border-gray-200 dark:border-white/10">{t('service_page.service_rules', 'Hizmet Kurallarımız')}</h2>
              <ul className="space-y-4">
                  {(hasDistrictSearchContent ? [
                    { title: "Adres ve kurulum uygunluğu", desc: "Bina cephesi, aracın duracağı alan ve çevredeki engeller önceden değerlendirilir." },
                    { title: "Kat ve yük bilgisi", desc: "Kat, eşyanın türü ve yaklaşık ölçüleri uygun ekipman ve teklif değerlendirmesine yardımcı olur." },
                    { title: "Randevu planı", desc: "Talep edilen tarih ve tahmini çalışma süresini paylaşarak müsaitlik bilgisi alın." },
                  ] : [
                    { title: t('features.f1_title', "Asansör uygunluğu"), desc: t('features.f1_desc', "Kurulum imkânı adres, cephe ve çalışma alanı incelendikten sonra teyit edilir.") },
                    { title: "Operatörlü kullanım", desc: "Kiralama ve operatör kapsamını teklif sırasında netleştirin." },
                    { title: "Kurulum alanı", desc: "Sokak erişimi, araç konumu ve çevredeki engeller kurulum kararını etkiler." },
                  ]).map(r => (
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
                {targetedFaqs.map((faq, idx) => {
                  const q = hasDistrictSearchContent ? faq.q : t(`services.${service.slug}.faqs.${idx}.q`, faq.q);
                  const a = hasDistrictSearchContent ? faq.a : t(`services.${service.slug}.faqs.${idx}.a`, faq.a);
                  return (
                    <div key={idx} className="bg-[#f8fafc] dark:bg-[#1e293b] border-2 border-[#cbd5e1] dark:border-[#334155] rounded-2xl p-6">
                      <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">{q}</h3>
                      <p className="text-[#334155] dark:text-slate-300 leading-relaxed">{a}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Testimonials (Review Schema Sinyalini Doğrulamak İçin) */}
            <section className="mb-14">
              <Testimonials />
            </section>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-br from-navy to-secondary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl mb-12">
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold text-white mb-4">{t('cta.title', 'Hemen Fiyat Alın')}</h2>
                <p className="text-slate-200 mb-8 max-w-xl mx-auto">{district.name} {t('cta.district_desc', 'bölgesindeki asansör talepleriniz için 5 dakika içinde net fiyat ve araç durum bilgisi alın.')}</p>
                <CTASection className="justify-center max-w-2xl mx-auto" locationName={`${district.name} Bottom`} />
              </div>
            </div>

            {/* Ninja SEO: Geo-Targeted Neighbor Graph */}
            <section className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-display font-bold text-[#0f172a] dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {district.name} {t('service_page.nearby_locations', 'Yakınındaki Diğer Hizmet Noktalarımız')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DISTRICTS
                  .filter(d => d.slug !== district.slug)
                  .map(d => ({
                    ...d,
                    distance: Math.sqrt(Math.pow(d.latitude - district.latitude, 2) + Math.pow(d.longitude - district.longitude, 2))
                  }))
                  .sort((a, b) => a.distance - b.distance)
                  .slice(0, 4)
                  .map(neighbor => (
                    <Link 
                      key={neighbor.slug} 
                      href={`/${neighbor.slug}-${service.slug}`}
                      className="group p-4 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary dark:hover:border-primary transition-all shadow-sm flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-[#0f172a] dark:text-white group-hover:text-primary transition-colors">{neighbor.name}</div>
                        <div className="text-sm text-gray-500 dark:text-slate-400">{serviceName}</div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))
                }
              </div>
            </section>

            {/* Ninja SEO: Map Entity Stacking (Google Iframe Hack) */}
            <section className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-display font-bold text-[#0f172a] dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {district.name} {serviceName} Haritası
              </h3>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden border-4 border-[#e2e8f0] dark:border-[#334155] shadow-lg">
                <iframe
                  title={`${district.name} ${serviceName} Haritası`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(district.name + " " + serviceName)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 bg-[#071320] rounded-2xl p-6 border-2 border-primary/30 shadow-2xl">
              <h3 className="font-display font-bold text-lg text-white mb-1">{t('common.quick_contact', 'Hızlı İletişim')}</h3>
              <p className="text-slate-300 text-sm mb-5">{district.name} {t('common.quick_contact_desc', 'bölgesinde uygun fiyata profesyonel hizmet.')}</p>
              <div className="space-y-3">
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} 
                  onClick={() => trackPhoneClick(`${district.name} Sidebar`)}
                  className="w-full bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                >
                  <Phone className="w-5 h-5" /> {PHONE_NUMBER}
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  onClick={() => trackWhatsAppClick(`${district.name} Sidebar`)}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                >
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
