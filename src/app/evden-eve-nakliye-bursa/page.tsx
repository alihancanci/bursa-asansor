import type { Metadata } from 'next';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo';
import { CheckCircle, Phone, MessageCircle, AlertTriangle, Star, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bursa Evden Eve Nakliyat | CNC Asansörlü Taşıma',
  description: 'Bursa evden eve nakliyat hizmeti. Asansörlü taşıma, ücretsiz keşif, sabit fiyat garantisi. Osmangazi, Nilüfer, Yıldırım ve tüm Bursa ilçelerine 7/24 profesyonel nakliyat.',
  keywords: ['evden eve nakliyat bursa', 'bursa evden eve', 'bursa nakliyat', 'asansörlü nakliyat bursa', 'bursa ev taşıma'],
  alternates: {
    canonical: getCanonicalUrl('/evden-eve-nakliye-bursa'),
  },
  openGraph: {
    title: 'Bursa Evden Eve Nakliyat | CNC Asansörlü Taşıma',
    description: 'Bursa\'da 7/24 asansörlü evden eve nakliyat. Ücretsiz keşif, sabit fiyat, sıfır hasar garantisi.',
    url: getCanonicalUrl('/evden-eve-nakliye-bursa'),
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Bursa evden eve nakliyat fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bursa'da evden eve nakliyat fiyatları; eşya hacmi, kat sayısı, mesafe ve asansör gereksinimine göre değişir. Net fiyat için ücretsiz yerinde keşif yapılması gerekir; keşifsiz verilen fiyatlar güvenilir değildir."
      }
    },
    {
      "@type": "Question",
      "name": "Bursa'da güvenilir nakliyat firması nasıl seçilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Özmal aracı ve asansörü olan, yerinde ücretsiz keşif yapan, yazılı hizmet şartları sunan ve gerçek referans görsellerine sahip firmalar tercih edilmelidir. Kapora talep eden ve yalnızca telefonda fiyat veren firmalardan uzak durun."
      }
    },
    {
      "@type": "Question",
      "name": "Asansörlü nakliyat ne zaman gereklidir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Taşınılacak daire 3. kat ve üzerindeyse, merdiven boşluğu darsa veya büyük mobilya ve beyaz eşya taşınacaksa dış cephe asansörü kullanmak hem eşya güvenliği hem de zaman açısından zorunludur."
      }
    },
    {
      "@type": "Question",
      "name": "Taşınmaya kaç gün önceden hazırlanmaya başlamalıyım?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En az 2-3 hafta öncesinden başlamak gerekir. Eşya ayıklama, kolileme, nakliyat firması seçimi ve abonelik devirleri için bu süre yeterlidir. Yoğun dönemlerde (ay başı/sonu, yaz) firma rezervasyonu için daha erken hareket edin."
      }
    },
    {
      "@type": "Question",
      "name": "Nakliyat sırasında eşyalar zarar görürse ne olur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIP güvence ve hasarsızlık garantisiyle çalışan kurumsal nakliyat firmalarında hasar durumunda tam sorumluluk firmaya aittir. Bu nedenle taşıma öncesi mutlaka yazılı hizmet şartları ve mutabakat oluşturulmalıdır."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bursakiralikasansor.com" },
    { "@type": "ListItem", "position": 2, "name": "Bursa Evden Eve Nakliyat", "item": "https://bursakiralikasansor.com/evden-eve-nakliye-bursa" }
  ]
};

const districtLinks = [
  { name: 'Osmangazi', slug: 'osmangazi' },
  { name: 'Nilüfer', slug: 'nilufer' },
  { name: 'Yıldırım', slug: 'yildirim' },
  { name: 'Kestel', slug: 'kestel' },
  { name: 'Gürsu', slug: 'gursu' },
  { name: 'Gemlik', slug: 'gemlik' },
  { name: 'Mudanya', slug: 'mudanya' },
  { name: 'Görükle', slug: 'gorukle' },
];

export default function EvdenEveNakliyeBursa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        {/* Hero */}
        <section className="bg-[#071320] py-16 border-b-4 border-primary/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Bursa · 7/24 Hizmet</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Bursa Evden Eve <span className="text-primary">Nakliyat</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Asansörlü taşıma, ücretsiz keşif ve sabit fiyat garantisiyle Bursa&apos;nın tüm ilçelerine profesyonel nakliyat hizmeti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905056080700"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-2xl hover:bg-primary/90 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                0505 608 07 00
              </a>
              <a
                href="https://wa.me/905056080700"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-green-700 transition-colors text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

          {/* Hizmet Özellikleri */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Neden Bizi Seçmelisiniz?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Shield, title: 'Sıfır Hasar Garantisi', text: 'Dış cephe asansörü ile eşyalarınız merdivene değmeden taşınır.' },
                { icon: Star, title: 'Ücretsiz Yerinde Keşif', text: 'Sürpriz fiyat yok. Keşif sonrası verilen fiyat sabittir.' },
                { icon: Clock, title: '7/24 Hizmet', text: 'Hafta sonu ve resmi tatil dahil her gün hizmetinizdeyiz.' },
                { icon: CheckCircle, title: 'Hizmet Şartları & Mutabakat', text: 'Her taşıma yazılı hizmet şartları ile güvence altına alınır.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">{title}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nakliyat Nasıl İşler */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Bursa&apos;da Evden Eve Nakliyat Nasıl İşler?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Doğru bir <strong className="text-slate-800 dark:text-slate-200">evden eve nakliyat</strong> süreci birkaç temel adımdan oluşur. Bu adımları önceden bilmek hem zaman kazandırır hem de sürpriz maliyetleri önler.
            </p>
            <ol className="space-y-5">
              {[
                { step: '1', title: 'Keşif ve Fiyat Alma', text: 'Nakliyat firması adresinize gelir, eşyaları inceler ve asansör kurulup kurulamayacağını değerlendirir. Keşifsiz verilen fiyatlar bağlayıcı değildir; taşınma günü artış yaşanabilir.' },
                { step: '2', title: 'Planlama ve Mutabakat', text: 'Keşif fiyatı netleştikten sonra karşılıklı hizmet şartları ve mutabakat oluşturulur. Mutabakatta hizmet kapsamı, sabit fiyat ve taşıma tarihi yer alır.' },
                { step: '3', title: 'Kolileme ve Hazırlık', text: 'Kırılgan eşyalar balonlu naylon ile sarılır, mobilyalar demonte edilir. Büyük beyaz eşyalar için nakliye emniyet vidaları takılmalıdır.' },
                { step: '4', title: 'Asansörlü Taşıma', text: 'Dış cephe asansörü binaya yanaşır ve eşyalar balkon veya pencereden doğrudan taşınır. Bu yöntem eşya hasarını neredeyse sıfıra indirir.' },
                { step: '5', title: 'Yerleşim ve Montaj', text: 'Eşyalar yeni eve taşındıktan sonra mobilyalar monte edilir, beyaz eşyalar yerleştirilir. İş bitiminde mutabakattaki sabit ücret ödenir.' },
              ].map(({ step, title, text }) => (
                <li key={step} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    {step}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">{title}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Firma Seçimi */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Nakliyat Firması Seçerken Dikkat Edilmesi Gerekenler
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Bursa&apos;da yüzlerce nakliyat firması olduğunu düşünürsek, doğru seçim yapmak kritiktir. VIP standartta taşıma için kardeş kuruluşumuz <a href="https://bursavipevdeneve.com" target="_blank" rel="noopener" className="text-primary font-bold hover:underline">Bursa VIP Evden Eve Nakliyat</a> gibi profesyonel kurumsal firmalar tercih edilmelidir:
            </p>
            <div className="space-y-4">
              {[
                { ok: true, text: 'Özmal aracı ve dış cephe asansörü mevcut.' },
                { ok: true, text: 'Taşınma öncesi ücretsiz yerinde keşif yapıyor.' },
                { ok: true, text: 'Keşif sonrası sabit fiyat garantisi veriyor.' },
                { ok: true, text: 'Yazılı hizmet şartları ve mutabakat düzenliyor.' },
                { ok: true, text: 'Web sitesinde gerçek saha görselleri mevcut.' },
                { ok: false, text: 'Yalnızca telefonla, evi görmeden fiyat veriyor.' },
                { ok: false, text: 'Rezervasyon için önceden kapora talep ediyor.' },
                { ok: false, text: 'Firmaya ait web sitesi veya referansı yok.' },
              ].map(({ ok, text }) => (
                <div key={text} className={`flex items-start gap-3 p-4 rounded-xl border ${ok ? 'bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-800/30' : 'bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-800/30'}`}>
                  {ok
                    ? <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    : <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  }
                  <p className={`text-sm font-medium ${ok ? 'text-green-800 dark:text-green-300' : 'text-red-700 dark:text-red-400'}`}>{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* İlçeler */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Bursa&apos;nın Tüm İlçelerine Hizmet Veriyoruz
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Merkez ilçelerden kırsala kadar Bursa genelinde <strong className="text-slate-800 dark:text-slate-200">asansörlü evden eve nakliyat</strong> hizmeti sunuyoruz.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {districtLinks.map(({ name, slug }) => (
                <Link
                  key={slug}
                  href={`/${slug}-evden-eve-asansorlu-nakliyat`}
                  className="flex items-center justify-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors text-center"
                >
                  {name}
                </Link>
              ))}
            </div>
          </section>

          {/* SSS */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#071320] rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ücretsiz Keşif Randevusu Alın
            </h2>
            <p className="text-slate-400 mb-7 max-w-lg mx-auto">
              Taşınma tarihinizi ve adresinizi paylaşın, uzmanımız sizi arasın. Keşif tamamen ücretsizdir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905056080700"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-2xl hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara: 0505 608 07 00
              </a>
              <a
                href="https://wa.me/905056080700"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-colors border border-white/20"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Yaz
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
