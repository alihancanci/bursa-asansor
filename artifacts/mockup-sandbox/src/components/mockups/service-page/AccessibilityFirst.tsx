import { Phone, MessageCircle, ChevronRight, Clock, ArrowUpToLine, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const district = "Orhangazi";
const service = "Saatlik Asansör Kiralama";
const phone = "0 (224) 444 00 00";

const faqs = [
  { q: "Minimum kaç saat kiralama yapılıyor?", a: "En az 1 saatlik kiralama yapılmaktadır. İhtiyacınıza göre ek saat eklenebilir." },
  { q: "Saatlik ücret nasıl hesaplanır?", a: "Ücret, asansörün kurulum saatinden kaldırılma saatine kadar geçen süre üzerinden hesaplanır." },
  { q: "Hangi saatlerde hizmet veriyorsunuz?", a: "İhtiyaçlarınıza kesintisiz çözüm sunabilmek için 7/24 hizmet veriyoruz." },
  { q: "Operatör dahil mi?", a: "Evet, operatör her zaman asansörün başındadır. Kurulum ve kullanım tamamen uzman ekibimizce yönetilir." },
];

export function AccessibilityFirst() {
  return (
    <div className="min-h-screen font-['DM_Sans',sans-serif] bg-white text-gray-900" style={{ fontSize: 16 }}>

      {/* High-contrast header */}
      <header className="bg-[#071320] border-b-4 border-orange-500 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
              <ArrowUpToLine className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold">Bursa <span className="text-orange-400">Mobil Asansör</span></span>
            </div>
          </div>
          <a
            href="tel:02244440000"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 focus:ring-4 focus:ring-orange-500/50 focus:outline-none transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{phone}</span>
            <span className="sm:hidden">Ara</span>
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="Konum" className="bg-gray-100 border-b border-gray-300 px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <a href="#" className="hover:text-orange-600 underline underline-offset-2">Ana Sayfa</a>
          <ChevronRight className="w-4 h-4" aria-hidden />
          <a href="#" className="hover:text-orange-600 underline underline-offset-2">{district}</a>
          <ChevronRight className="w-4 h-4" aria-hidden />
          <span className="text-gray-900 font-semibold" aria-current="page">{service}</span>
        </div>
      </nav>

      {/* Hero — simple, maximum contrast */}
      <div className="bg-[#071320] px-6 py-14 border-b-4 border-orange-500/40">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {district}<br /><span className="text-orange-400">{service}</span>
          </h1>
          <p className="text-slate-200 text-xl mb-8 max-w-xl leading-relaxed">
            Kısa süreli işleriniz için esnek ve ekonomik saatlik kiralama çözümleri.
          </p>

          {/* Large, clear CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <a
              href="tel:02244440000"
              className="flex-1 bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:ring-orange-500/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" /> Hemen Ara
            </a>
            <a
              href="https://wa.me/902244440000"
              className="flex-1 bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Key guarantees — large, clear icons */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, title: "7/24 Hizmet", desc: "Gece veya gündüz, her an ulaşabilirsiniz" },
              { icon: ArrowUpToLine, title: "15. Kata Kadar", desc: "Yüksek katlara güvenli erişim" },
              { icon: ShieldCheck, title: "Operatörlü Çalışma", desc: "Uzman personel her zaman başında" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-200">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-base">{title}</div>
                  <div className="text-gray-600 text-sm mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <main className="lg:col-span-2 space-y-12">

            {/* Body */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-200">Neden Saatlik Kiralama?</h2>
              <div className="space-y-4 text-gray-700 leading-loose text-base">
                <p>Bazen tüm gün sürecek bir nakliye işlemi yerine, sadece birkaç parça ağır eşyanın veya malzemenin yukarı çıkarılması gerekebilir.</p>
                <p><strong className="text-gray-900">Saatlik asansör kiralama</strong> hizmetimizle, beyaz eşya, mobilya, inşaat malzemesi veya çatı gereçleri için <strong className="text-gray-900">sadece kullandığınız süre kadar ödeme yaparsınız.</strong></p>
                <p>Sistemimiz <strong className="text-gray-900">15. kata kadar</strong> güvenle ulaşabilmekte ve tüm süreç boyunca operatör asansörün başındadır.</p>
              </div>
            </section>

            {/* Rules — generous spacing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-200">Hizmet Kurallarımız</h2>
              <ul className="space-y-5">
                {[
                  { title: "7/24 Hizmet", desc: "Mesai saati gözetmeksizin, bize ihtiyaç duyduğunuz her an sahadayız." },
                  { title: "15. Kata Kadar", desc: "Yüksek erişimli asansörlerimiz maksimum 15. kata güvenli ulaşım sağlar." },
                  { title: "Operatörlü Çalışma", desc: "Kurulum ve kullanım esnasında operatör her zaman asansörün başındadır." },
                  { title: "Personel & Araç Desteği", desc: "Gerekli durumlarda taşıma personeli ve nakliye kamyonu desteği de verilir." },
                ].map(r => (
                  <li key={r.title} className="flex items-start gap-4 p-5 bg-gray-50 border-2 border-gray-200 rounded-2xl">
                    <CheckCircle2 className="w-7 h-7 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 text-base mb-1">{r.title}</div>
                      <div className="text-gray-700">{r.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-200">Sıkça Sorulan Sorular</h2>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 text-base mb-2">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-5">

              {/* Contact */}
              <div className="bg-[#071320] rounded-2xl p-6 border-2 border-orange-500/30 shadow-xl">
                <h2 className="text-white font-bold text-lg mb-1">Hızlı İletişim</h2>
                <p className="text-slate-400 text-sm mb-5">{district} bölgesinde profesyonel hizmet.</p>
                <div className="space-y-3">
                  <a
                    href="tel:02244440000"
                    className="w-full bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:ring-orange-500/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                  >
                    <Phone className="w-5 h-5" /> {phone}
                  </a>
                  <a
                    href="https://wa.me/902244440000"
                    className="w-full bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp'tan Yaz
                  </a>
                </div>
              </div>

              {/* Other services */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 text-base mb-4 pb-3 border-b-2 border-gray-200">{district} Diğer Hizmetler</h3>
                <ul className="space-y-2">
                  {["Kiralık Mobil Asansör", "Evden Eve Nakliyat", "İnşaat Cephe Asansörü", "Ağır Yük Taşıma"].map(s => (
                    <li key={s}>
                      <a href="#" className="flex items-center justify-between group py-1.5 text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 font-medium text-sm transition-colors">
                        {s}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
