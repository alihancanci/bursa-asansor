import { Phone, MessageCircle, ChevronRight, Clock, ArrowUpToLine, ShieldCheck, CheckCircle2, ArrowRight, Star } from "lucide-react";

const district = "Orhangazi";
const service = "Saatlik Asansör Kiralama";
const serviceShortDesc = "Kısa süreli işleriniz için esnek ve ekonomik saatlik kiralama çözümleri.";
const phone = "0 (224) 444 00 00";

const faqs = [
  { q: "Minimum kaç saat kiralama yapılıyor?", a: "En az 1 saatlik kiralama yapılmaktadır. İhtiyacınıza göre ek saat eklenebilir." },
  { q: "Saatlik ücret nasıl hesaplanır?", a: "Ücret, asansörün kurulum saatinden kaldırılma saatine kadar geçen süre üzerinden hesaplanır." },
  { q: "Hangi saatlerde hizmet veriyorsunuz?", a: "İhtiyaçlarınıza kesintisiz çözüm sunabilmek için 7/24 hizmet veriyoruz." },
  { q: "Operatör dahil mi?", a: "Evet, operatör her zaman asansörün başındadır ve kurulum ile kullanım tamamen bizim ekibimiz tarafından yönetilir." },
];

const rules = [
  { title: "7/24 Hizmet", desc: "Mesai saati gözetmeksizin, bize ihtiyaç duyduğunuz her an sahadayız." },
  { title: "15. Kata Kadar", desc: "Yüksek erişimli asansörlerimiz maksimum 15. kata güvenli ulaşım sağlar." },
  { title: "Operatörlü Çalışma", desc: "Kurulum ve kullanım esnasında operatör her zaman asansörün başındadır." },
  { title: "Personel & Araç Desteği", desc: "Gerekli durumlarda taşıma personeli ve nakliye kamyonu desteği de verilir." },
];

const otherServices = [
  "Kiralık Mobil Asansör",
  "Evden Eve Asansörlü Nakliyat",
  "İnşaat Cephe Asansörü",
  "Ağır Yük Taşıma",
];

export function HierarchyClear() {
  return (
    <div className="min-h-screen font-['DM_Sans',sans-serif] bg-gray-50" style={{ fontSize: 15 }}>

      {/* Header */}
      <header className="bg-[#0b1929] sticky top-0 z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <ArrowUpToLine className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-sm">Bursa <span className="text-orange-400">Mobil Asansör</span></span>
            </div>
          </div>
          <a href="tel:02244440000" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {phone}
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-5 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 text-xs text-gray-500">
          <span>Ana Sayfa</span>
          <ChevronRight className="w-3 h-3" />
          <span>{district}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-semibold">{service}</span>
        </div>
      </div>

      {/* Hero — CTA above the fold */}
      <div className="bg-[#0b1929] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="max-w-6xl mx-auto px-5 py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <Star className="w-3 h-3 fill-orange-400" /> {district} Bölgesi &mdash; Hemen Hizmet
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                {district} <span className="text-orange-400">{service}</span>
              </h1>
              <p className="text-slate-300 text-base mb-6 max-w-lg">{serviceShortDesc}</p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:02244440000" className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 text-base shadow-lg transition-colors">
                  <Phone className="w-5 h-5" /> Hemen Ara
                </a>
                <a href="https://wa.me/902244440000" className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 text-base shadow-lg transition-colors">
                  <MessageCircle className="w-5 h-5" /> WhatsApp'tan Fiyat Al
                </a>
              </div>
            </div>

            {/* Trust stats */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { label: "7/24", sub: "Kesintisiz Hizmet", icon: Clock },
                { label: "15. Kat", sub: "Yüksek Erişim", icon: ArrowUpToLine },
                { label: "Operatörlü", sub: "Uzman Ekip", icon: ShieldCheck },
                { label: "%100", sub: "Müşteri Memnuniyeti", icon: Star },
              ].map(({ label, sub, icon: Icon }) => (
                <div key={label} className="bg-white/8 border border-white/10 rounded-xl p-3 text-center">
                  <Icon className="w-5 h-5 text-orange-400 mx-auto mb-1.5" />
                  <div className="text-lg font-bold text-white">{label}</div>
                  <div className="text-xs text-slate-400">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Body text */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Neden Saatlik Kiralama?</h2>
              <div className="text-gray-700 leading-relaxed space-y-3 text-sm">
                <p>Bazen tüm gün sürecek bir nakliye işlemi yerine, sadece birkaç parça ağır eşyanın veya malzemenin yukarı çıkarılması gerekebilir. İşte bu noktada <strong>{district}</strong> bölgesine özel sunduğumuz <strong>saatlik asansör kiralama</strong> hizmetimiz devreye giriyor.</p>
                <p>Beyaz eşya, mobilya, inşaat malzemesi veya çatı gereçleri gibi spesifik yükleriniz için sadece kullandığınız süre kadar ödeme yaparsınız. Sistemimiz <strong>15. kata kadar</strong> güvenle ulaşabilmekte; tüm süreç boyunca operatör asansörün başındadır.</p>
              </div>
            </div>

            {/* Service rules */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-500" /> Hizmet Garantilerimiz
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rules.map(r => (
                  <div key={r.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-0.5">{r.title}</div>
                      <div className="text-xs text-gray-600">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Sıkça Sorulan Sorular</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4">
                    <div className="font-semibold text-gray-900 text-sm mb-1.5">{faq.q}</div>
                    <div className="text-gray-600 text-sm">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Sticky sidebar */}
          <div className="lg:col-span-1 space-y-5">

            {/* Contact widget */}
            <div className="sticky top-20 bg-[#0b1929] rounded-2xl p-6 shadow-xl text-white">
              <div className="text-center mb-5">
                <div className="text-sm text-slate-400 mb-1">Hızlı Fiyat Al</div>
                <div className="font-bold text-lg">{district} Bölgesi</div>
                <div className="text-orange-400 text-sm">{service}</div>
              </div>
              <div className="space-y-3 mb-5">
                <a href="tel:02244440000" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" /> {phone}
                </a>
                <a href="https://wa.me/902244440000" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp'tan Yaz
                </a>
              </div>
              <div className="border-t border-white/10 pt-4 text-center text-xs text-slate-400">
                5 dakika içinde net fiyat ve araç durum bilgisi
              </div>
            </div>

            {/* Other services */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-4 pb-3 border-b border-gray-100">{district} Diğer Hizmetler</h3>
              <ul className="space-y-2">
                {otherServices.map(s => (
                  <li key={s}>
                    <a href="#" className="flex items-center justify-between group text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium py-1">
                      <span>{s}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
