import type { Metadata } from 'next';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo';
import { 
  CheckCircle, 
  Phone, 
  MessageCircle, 
  Star, 
  Clock, 
  ShieldCheck, 
  Truck, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Boxes, 
  Wrench, 
  MapPin 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bursa Evden Eve Nakliyat | Bursa VIP Nakliyat & Asansörlü Taşıma',
  description: 'Bursa evden eve nakliyat ve VIP taşımacılık hizmetleri. 15. kata kadar dış cephe asansörü, profesyonel paketleme, marangozlu montaj ve hasarsız teslimat: 0505 608 07 00.',
  keywords: [
    'bursa evden eve nakliyat',
    'bursa nakliyat',
    'bursa vip evden eve nakliyat',
    'asansörlü evden eve nakliyat bursa',
    'bursa ev taşıma',
    'nilüfer evden eve nakliyat',
    'osmangazi evden eve nakliyat'
  ],
  alternates: {
    canonical: getCanonicalUrl('/bursa-evden-eve-nakliyat'),
  },
  openGraph: {
    title: 'Bursa Evden Eve Nakliyat | VIP Güvenceli Asansörlü Taşıma',
    description: 'Bursa genelinde 7/24 asansörlü, ambalajlı ve hasarsızlık garantili evden eve nakliyat desteği. Kardeş kuruluşumuz Bursa VIP Nakliyat güvencesiyle.',
    url: getCanonicalUrl('/bursa-evden-eve-nakliyat'),
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://bursakiralikasansor.com/bursa-evden-eve-nakliyat#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://bursakiralikasansor.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Bursa Evden Eve Nakliyat",
          "item": "https://bursakiralikasansor.com/bursa-evden-eve-nakliyat"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bursakiralikasansor.com/bursa-evden-eve-nakliyat#service",
      "name": "Bursa Evden Eve Nakliyat",
      "description": "Bursa genelinde asansörlü, marangozlu, hijyenik ambalajlı ve VIP güvenceli evden eve nakliyat hizmetleri.",
      "provider": { "@id": "https://bursakiralikasansor.com/#organization" },
      "areaServed": {
        "@type": "City",
        "name": "Bursa",
        "addressCountry": "TR"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://bursavipevdeneve.com/#organization",
      "name": "Bursa VIP Evden Eve Nakliyat",
      "url": "https://bursavipevdeneve.com",
      "telephone": "+905056080700",
      "description": "Bursa VIP Evden Eve Nakliyat - Lüks ambalajlama, marangozlu demontaj-montaj ve asansörlü VIP ev taşıma hizmetleri."
    }
  ]
};

const districtLinks = [
  { name: 'Nilüfer', slug: 'nilufer' },
  { name: 'Osmangazi', slug: 'osmangazi' },
  { name: 'Yıldırım', slug: 'yildirim' },
  { name: 'Mudanya', slug: 'mudanya' },
  { name: 'Gemlik', slug: 'gemlik' },
  { name: 'Kestel', slug: 'kestel' },
  { name: 'Gürsu', slug: 'gursu' },
  { name: 'İnegöl', slug: 'inegol' },
];

export default function BursaEvdenEveNakliyatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#0b1626] border-b border-white/10 text-xs text-slate-400 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Bursa Evden Eve Nakliyat</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#0b1626] via-[#071320] to-[#0b1626] py-16 md:py-20 border-b-4 border-primary/40 text-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-4 py-1.5 rounded-full text-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              Bursa Geneli 7/24 VIP Taşımacılık
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Bursa Evden Eve <span className="text-primary">Nakliyat</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto font-normal">
              15. kata kadar çıkan hidrolik mobil asansörlerimiz, marangozlu uzman ekibimiz ve kardeş kuruluşumuz{' '}
              <strong className="text-white font-semibold">Bursa VIP Evden Eve Nakliyat</strong> güvencesiyle eşyalarınızı sıfır riskle yeni yuvanıza taşıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+905056080700"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 transition-all text-base sm:text-lg shadow-lg shadow-primary/25 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara: 0505 608 07 00
              </a>
              <a
                href="https://wa.me/905056080700?text=Merhaba,%20Bursa%20evden%20eve%20nakliyat%20hizmeti%20ve%20fiyat%20bilgisi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-emerald-700 transition-all text-base sm:text-lg shadow-lg shadow-emerald-900/30 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Fiyat Al
              </a>
            </div>
          </div>
        </section>

        {/* Sister Brand Backlink Highlight Card */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                Resmi Kardeş Kuruluş &amp; VIP Taşımacılık
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Bursa VIP Evden Eve Nakliyat
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Aynı kurumsal çatıda ve aynı iletişim hattında (<strong>0505 608 07 00</strong>) buluştuğumuz kardeş firmamız{' '}
                <a 
                  href="https://bursavipevdeneve.com" 
                  target="_blank" 
                  rel="noopener"
                  className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                >
                  Bursa VIP Evden Eve Nakliyat
                  <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
                , özel ambalajlama, dezenfekte edilmiş araç filosu ve anahtar teslim VIP taşımacılık hizmeti vermektedir.
              </p>
            </div>
            <a
              href="https://bursavipevdeneve.com"
              target="_blank"
              rel="noopener"
              className="shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white dark:bg-primary dark:hover:bg-orange-600 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm sm:text-base"
            >
              <span>VIP Nakliyat Sitesini Ziyaret Et</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Content Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

          {/* Differentiators / Features */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Neden Bursa Evden Eve Nakliyat Hizmetimizi Tercih Etmelisiniz?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Merdiven boşluklarında çarpmaya, kırılmaya ve sürpriz maliyetlere son veriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Truck,
                  title: 'Özmal Mobil Asansör Filosu',
                  desc: 'Aracı komisyoncu olmadan, Bursa Kiralık Asansör CNC güvencesiyle 15. kata kadar çıkan kendi teleskopik hidrolik asansörlerimizle yükleme yapıyoruz.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Hasarsızlık Garantisi & VIP Güvence',
                  desc: 'Tüm eşyalarınız çok katmanlı havalı balonlu naylonlarla sarılır. Merdiven darlığından etkilenmeden doğrudan balkondan veya pencereden araca aktarılır.'
                },
                {
                  icon: Wrench,
                  title: 'Usta Marangoz Desteği',
                  desc: 'Gardırop, modüler mobilyalar ve üniteler uzman marangozumuz tarafından itina ile demonte edilir, yeni evinizde istediğiniz odaya milimetrik kurulur.'
                },
                {
                  icon: Boxes,
                  title: 'Hijyenik ve Özel Kolileme',
                  desc: 'Askılı kıyafet kolileri, kırılacak porselenler için özel petek ambalajlar ve sıfır hijyenik ambalaj battaniyeleri kullanılır.'
                },
                {
                  icon: Clock,
                  title: '7/24 Kesintisiz Hizmet',
                  desc: 'Hafta sonu, resmi tatil veya ay sonu fark etmeksizin; Nilüfer, Osmangazi, Yıldırım ve tüm Bursa genelinde dilediğiniz gün ve saatte taşıma yapıyoruz.'
                },
                {
                  icon: Star,
                  title: 'Net Planlama ve Sabit Fiyat',
                  desc: 'Keşif sonrası belirlenen hizmet şartları ve mutabakat dahilinde sabit fiyat sunulur. Taşınma günü sürpriz veya ek masraf çıkarılmaz.'
                }
              ].map((f, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Editorial Section with Organic Backlink */}
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-700 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Bursa&apos;da Güvenilir ve Profesyonel Evden Eve Nakliyat Rehberi
            </h2>

            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base">
              <p>
                Bursa hızla büyüyen konut projeleri, Nilüfer&apos;in yüksek katlı rezidansları ve Osmangazi ile Yıldırım&apos;ın geleneksel dar sokaklarıyla ev taşıma süreçlerinde yüksek teknik donanım gerektirir. Klasik merdiven taşıma yöntemleri hem bina duvarlarında hasarlara hem de eşyaların sürtünerek deforme olmasına yol açmaktadır.
              </p>
              <p>
                Bu noktada devreye giren modern mobil asansör sistemimiz, eşyalarınızı doğrudan dairenizin penceresinden kapalı kasa nakliyat kamyonumuza taşır. Ev taşımacılığında en üst segmentte hizmet arayan müşterilerimiz için kardeş firmamız olan{' '}
                <a
                  href="https://bursavipevdeneve.com"
                  target="_blank"
                  rel="noopener"
                  className="text-primary font-bold hover:underline"
                >
                  Bursa VIP Evden Eve Nakliyat
                </a>
                , özel ambalajlama ve anahtar teslim montaj çözümleri sunmaktadır.
              </p>
              <p>
                Hem mobil asansör ihtiyaçlarınızda hem de komple evden eve nakliyat operasyonlarınızda tek numara üzerinden (<strong>0505 608 07 00</strong>) doğrudan bizlere ulaşabilir, ücretsiz ekspertiz talep edebilirsiniz.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Ücretsiz Yerinde Keşif
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                15. Kata Kadar Mobil Asansör
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                VIP Güvenceli Teslimat
              </span>
            </div>
          </section>

          {/* 5-Step Moving Process */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-8 text-center">
              Adım Adım Taşınma Süreci
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Ücretsiz Keşif ve Taşıma Planlaması',
                  text: 'Dairenizin katı, sokak genişliği, asansörün yanaşma cephesi ve eşya yoğunluğu yerinde veya video ile incelenir. Karşılıklı hizmet şartları ve mutabakat oluşturulur.'
                },
                {
                  step: '02',
                  title: 'Özel Hijyenik Ambalajlama',
                  text: 'Taşınma sabahı mobilyalarınız kraft kağıt ve balonlu naylonlarla kat kat paketlenir. Beyaz eşyalar darbe emici koruyucularla sarılır.'
                },
                {
                  step: '03',
                  title: 'Asansörlü Yükleme (Sıfır Hasar)',
                  text: 'Hidrolik mobil asansörümüz balkona veya uygun pencereye yanaşarak eşyaları doğrudan kapalı çelik kasa nakliye aracına transfer eder.'
                },
                {
                  step: '04',
                  title: 'Güvenli Transfer ve Yeni Adrese Kurulum',
                  text: 'Yeni evinizde aynı asansörlü sistemle eşyalar yukarı çıkarılır; odalara yerleştirilir ve marangozumuz montaj işlemlerini tamamlar.'
                },
                {
                  step: '05',
                  title: 'Kontrol ve Eksiksiz Teslimat',
                  text: 'Tüm mobilya ve beyaz eşyalar kontrol edilerek hasarsız şekilde teslim edilir. Kararlaştırılan mutabakat bedeli dışında hiçbir ekstra talep edilmez.'
                }
              ].map((item) => (
                <div 
                  key={item.step}
                  className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary text-white font-black flex items-center justify-center text-lg shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bursa Districts Grid */}
          <section>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
                Bursa&apos;nın Tüm İlçelerinde Hizmetinizdeyiz
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                İlçe bazlı asansörlü nakliyat ve taşıma sayfalarımızı inceleyebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {districtLinks.map((d) => (
                <Link
                  key={d.slug}
                  href={`/${d.slug}-evden-eve-asansorlu-nakliyat`}
                  className="flex items-center justify-center gap-2 p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary transition-colors text-center shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{d.name} Nakliyat</span>
                </Link>
              ))}
            </div>
          </section>

          {/* SSS Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-6 text-center">
              Sıkça Sorulan Sorular
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Bursa evden eve nakliyat fiyatları nasıl belirlenir?',
                  a: 'Fiyatlar eşyaların oda sayısı (1+1, 2+1, 3+1), kat yüksekliği, binaların asansör kurulum durumu ve iki adres arası mesafeye göre hesaplanır. Net ve sabit fiyat için 0505 608 07 00 numaramızdan ücretsiz keşif alabilirsiniz.'
                },
                {
                  q: 'Kardeş kuruluşunuz Bursa VIP Evden Eve Nakliyat ile nasıl çalışıyorsunuz?',
                  a: 'Bursa Kiralık Asansör CNC ve Bursa VIP Evden Eve Nakliyat (bursavipevdeneve.com) aynı aileye ait entegre işletmelerdir. VIP standarttaki ev taşımalarında Bursa VIP Nakliyat ekibi ambalaj ve taşıma operasyonunu yönetirken, firmamız dış cephe mobil asansör desteğini kesintisiz sağlar.'
                },
                {
                  q: 'Taşınma günü ekstra bir masraf çıkar mı?',
                  a: 'Kesinlikle hayır. Yapılan keşif ve karşılıklı taşıma planlaması mutabakatında belirtilen rakam sabittir. Eşya yükleme sonrasında ek bir ücret talep edilmez.'
                },
                {
                  q: 'Hangi katlara kadar asansörlü taşıma yapabiliyorsunuz?',
                  a: 'Bursa genelinde 15. kata kadar (yaklaşık 45-50 metre) hidrolik teleskopik mobil asansörlerimizle hizmet sunmaktayız.'
                }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-gradient-to-br from-[#071320] to-[#0f233a] rounded-3xl p-8 sm:p-12 text-center text-white border-2 border-primary/40 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                7/24 Kesintisiz Hat
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Bursa&apos;da Sorunsuz Taşınmanın En Güvenilir Yolu
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Eşyalarınızı riske atmayın. Bursa Kiralık Asansör ve kardeş kuruluşumuz{' '}
                <a href="https://bursavipevdeneve.com" target="_blank" rel="noopener" className="text-primary font-bold underline">
                  Bursa VIP Evden Eve Nakliyat
                </a>{' '}
                ortak güvencesiyle bugün ücretsiz keşif randevusu oluşturun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <a
                  href="tel:+905056080700"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all text-base shadow-lg shadow-primary/30"
                >
                  <Phone className="w-5 h-5" />
                  0505 608 07 00
                </a>
                <a
                  href="https://wa.me/905056080700?text=Merhaba,%20Bursa%20evden%20eve%20nakliyat%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Destek
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
