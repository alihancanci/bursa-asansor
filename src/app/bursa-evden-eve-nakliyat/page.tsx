import type { Metadata } from 'next';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo';
import { CTASection } from '@/components/CTASection';
import { 
  CheckCircle, 
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
  title: {
    absolute: 'Bursa Evden Eve Nakliyat & Asansörlü Nakliyat Fiyatları',
  },
  description: 'Bursa evden eve nakliyat ve asansörlü taşımacılık fiyatları. 15. kata kadar mobil evden eve asansör, marangozlu ve sigortalı ev taşıma: 0505 608 07 00.',
  keywords: [
    'bursa evden eve nakliyat',
    'bursa asansörlü nakliyat',
    'bursa asansörlü evden eve nakliyat',
    'asansörlü taşımacılık fiyatları bursa',
    'bursa evden eve asansör',
    'bursa asansörlü taşımacılık',
    'bursa ev taşıma',
    'nilüfer evden eve nakliyat',
    'osmangazi evden eve nakliyat',
    'mudanya evden eve nakliyat'
  ],
  alternates: {
    canonical: getCanonicalUrl('/bursa-evden-eve-nakliyat'),
  },
  openGraph: {
    title: 'Bursa Evden Eve Nakliyat & Asansörlü Nakliyat Fiyatları',
    description: 'Bursa genelinde 15. kata kadar dış cephe asansörlü, marangozlu ve sigortalı evden eve nakliyat. Ücretsiz keşif ve sabit fiyat: 0505 608 07 00.',
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
              Bursa Evden Eve <span className="text-primary">Nakliyat</span> &amp; Asansörlü Taşımacılık
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto font-normal">
              Bursa asansörlü nakliyat ve evden eve taşıma operasyonlarımızda; 15. kata (45-50m) ulaşan özmal mobil evden eve asansör filomuz, marangozlu uzman ekibimiz ve kapalı çelik kasa araçlarımızla eşyalarınızı sıfır hasarla yeni yuvanıza taşıyoruz.
            </p>

            <div className="max-w-xl mx-auto">
              <CTASection locationName="Bursa Evden Eve Nakliyat Hero" />
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
              Bursa Asansörlü Evden Eve Nakliyat ve Taşımacılık Fiyatları (2026)
            </h2>

            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base">
              <p>
                <strong>Bursa asansörlü nakliyat</strong> ve <strong>Bursa evden eve nakliyat</strong> süreçlerinde Nilüfer&apos;in yüksek katlı siteleri, Mudanya ve Güzelyalı&apos;nın sahil apartmanları ile Osmangazi ve Yıldırım&apos;ın dar sokakları profesyonel dış cephe ekipmanı gerektirir. Klasik merdiven taşıma yöntemleri hem apartman duvarlarında hasara hem de eşyaların sürtünerek çizilmesine yol açarken, <strong>Bursa evden eve asansör</strong> sistemimiz eşyalarınızı doğrudan balkondan kapalı çelik kasa nakliye kamyonumuza indirir.
              </p>
              <p>
                <strong>Asansörlü taşımacılık fiyatları Bursa</strong> genelinde; taşınacak evin oda sayısına (1+1, 2+1, 3+1, 4+1 veya villa), iki adres arasındaki ilçe/mahalle mesafesine, kaçıncı kata (2. kattan 15. kata kadar) asansör kurulacağına ve marangozlu ambalaj kapsamına göre belirlenir. Yalnızca dış cephe asansörü kiralamak isteyen müşterilerimiz için <Link href="/" className="text-primary font-bold hover:underline">Bursa kiralık asansör</Link> saatlik/günlük kiralama seçeneğimiz; komple anahtar teslim ev taşıma arayan müşterilerimiz için ise kardeş kuruluşumuz{' '}
                <a
                  href="https://bursavipevdeneve.com"
                  target="_blank"
                  rel="noopener"
                  className="text-primary font-bold hover:underline"
                >
                  Bursa VIP Evden Eve Nakliyat
                </a>
                {' '}ile entegre tam paket çözümlerimiz mevcuttur.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Hizmet &amp; Konut Tipi</th>
                    <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Dış Cephe Asansörü</th>
                    <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Personel &amp; Marangoz</th>
                    <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Ortalama Süre</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Sadece Mobil Asansör Kiralama</td>
                    <td className="p-3.5">2. – 15. Kat (45-50m) + Operatör</td>
                    <td className="p-3.5">Operatör Dahil (Saatlik / Günlük)</td>
                    <td className="p-3.5">1 – 3 Saat</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">1+1 / 2+1 Asansörlü Ev Taşıma</td>
                    <td className="p-3.5">Çift Yönlü Mobil Asansör</td>
                    <td className="p-3.5">3-4 Kişilik Ekip + Usta Marangoz</td>
                    <td className="p-3.5">3 – 4 Saat</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">3+1 Asansörlü Evden Eve Nakliyat</td>
                    <td className="p-3.5">15. Kat Teleskopik Asansör</td>
                    <td className="p-3.5">4-5 Kişilik Ekip + Marangoz + Ambalaj</td>
                    <td className="p-3.5">4 – 6 Saat</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">4+1 Daire &amp; Villa Taşımacılığı</td>
                    <td className="p-3.5">Yüksek/Yatay Erişimli Asansör</td>
                    <td className="p-3.5">5-6 Kişilik VIP Ekip + Çift Marangoz</td>
                    <td className="p-3.5">6 – 8 Saat</td>
                  </tr>
                </tbody>
              </table>
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
                Sabit Fiyat &amp; VIP Güvence
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {districtLinks.map((d) => (
                <div
                  key={d.slug}
                  className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xs flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{d.name} Bölgesi</span>
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-semibold">
                    <Link href={`/${d.slug}-evden-eve-nakliyat`} className="text-primary hover:underline">
                      → {d.name} Evden Eve Nakliyat
                    </Link>
                    <Link href={`/${d.slug}-kiralik-asansor`} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                      → {d.name} Kiralık Asansör
                    </Link>
                    <Link href={`/${d.slug}-saatlik-asansor-kiralama`} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                      → {d.name} Saatlik Asansör
                    </Link>
                  </div>
                </div>
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
                Eşyalarınızı riske atmayın. Bursa Kiralık Asansör uzmanlığıyla bugün ücretsiz keşif randevusu oluşturun.
              </p>
              <div className="max-w-xl mx-auto pt-2">
                <CTASection locationName="Bursa Evden Eve Nakliyat Footer CTA" />
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
