import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Bursa'da mobil asansör kiralama fiyatları ne kadar?",
    a: "Bursa merkez ve ilçelerinde kiralık asansör fiyatları, asansörün kurulacağı kat yüksekliğine, kiralama süresine (saatlik veya günlük) ve taşınacak eşya hacmine göre değişiklik göstermektedir. Kesin fiyat için ücretsiz ekspertiz hizmetimizden yararlanabilirsiniz."
  },
  {
    q: "Evden eve nakliyat sürecinde asansör kullanmak zorunlu mu?",
    a: "Eğer binanızın merdiven boşlukları dar ise veya site yönetiminiz bina içi yolcu asansöründe eşya taşınmasını yasaklamışsa dış cephe asansörü kullanmak en güvenli ve yasal yoldur. Ayrıca eşyalarınızın çizilme riskini sıfıra indirir."
  },
  {
    q: "Dış cephe asansörleriniz en fazla kaçıncı kata ulaşabiliyor?",
    a: "Bursa Mobil Asansör filomuzda bulunan son teknoloji teleskopik araçlarımız sayesinde 15. kata kadar (yaklaşık 45-50 metre) güvenle ve sarsıntısız bir şekilde ulaşabilmekteyiz."
  },
  {
    q: "Saatlik asansör kiralama hizmetiniz var mı?",
    a: "Evet, özellikle beyaz eşya, klima motoru, cam/pvc veya mobilya gibi tek parça eşya taşıtacak müşterilerimiz ve inşaat firmaları için saatlik mobil asansör kiralama seçeneğimiz mevcuttur."
  },
  {
    q: "Bursa'nın her ilçesine asansörlü taşıma hizmeti veriyor musunuz?",
    a: "Nilüfer, Osmangazi, Yıldırım, Mudanya, Gürsu, Kestel başta olmak üzere Bursa'nın tüm ilçelerine 7/24 kesintisiz kiralık mobil asansör altyapısı sağlamaktayız."
  },
  {
    q: "Asansör kurulması için evin önünde ne kadar alan olmalı?",
    a: "Aracımızın yanaşması ve hidrolik ayaklarını açabilmesi için bina önünde veya sokağınızda standart bir kamyonun park edebileceği kadar alan olması genelde yeterlidir. Dar sokaklar için özel manevra tekniklerimiz bulunmaktadır."
  },
  {
    q: "Rüzgarlı ve yağmurlu havalarda asansörlü nakliyat yapılır mı?",
    a: "Yağmurlu havalarda eşyalarınız özel brandalarla korunduğu için taşıma yapılabilir. Ancak saatte 10-12 metreyi aşan şiddetli lodos ve fırtınalarda iş güvenliği kuralları gereği (rüzgar sensörü uyarısıyla) işlem ertelenir."
  },
  {
    q: "Eşyaların güvenliğini nasıl sağlıyorsunuz?",
    a: "Düzenli bakımı yapılan son teknoloji asansörlerimiz ve deneyimli operatörlerimiz sayesinde taşıma esnasında insan gücüne dayalı hasar riski sıfıra indirilmekte, eşyalarınız özenle taşınmaktadır."
  },
  {
    q: "Moloz indirme veya inşaat malzemesi taşıma için asansör kiralanır mı?",
    a: "Kesinlikle. İnşaat cephe asansörlerimiz ile yüksek katlara tuğla, çimento, alçıpan, kiremit çıkartabilir veya tadilat sonrası çuvallanmış molozları dakikalar içinde aşağı indirebilirsiniz."
  },
  {
    q: "Taşınma işleminden kaç gün önce nakliye randevusu almalıyım?",
    a: "Özellikle yaz ayları ve hafta sonları çok yoğun olabilmektedir. Sorunsuz bir planlama ve yasal izinler (sokak kapatma vb.) için en az 1 hafta önceden bizimle iletişime geçmenizi tavsiye ederiz."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate standard Google FAQ Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* FAQ Image and Trust Badges */}
          <div className="relative sticky top-32">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <picture>
                <img 
                  src="/images/asansorlu-nakliyat-faq.png" 
                  alt="Sıkça Sorulan Sorular - Asansörlü Nakliyat" 
                  className="w-full h-full object-cover aspect-square md:aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-2">Aklınızda Soru Kalmasın</h3>
                  <p className="text-sm text-slate-200">Taşınma sürecinizi en şeffaf şekilde yönetmek için merak ettiğiniz tüm detayları derledik.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-4">
                Sıkça Sorulan <span className="text-primary">Sorular</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Mobil asansör kiralama ve taşımacılık hizmetlerimiz hakkında Bursa'daki müşterilerimizin en çok sorduğu soruların yanıtları.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border border-border dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-slate-50 dark:bg-navy-light shadow-md' : 'bg-white dark:bg-navy/30'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    aria-expanded={openIndex === idx}
                  >
                    <span className="font-semibold text-slate-900 dark:text-white pr-8 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Inject SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
