import { Phone, MessageCircle, ChevronRight, Clock, ArrowUpToLine, ShieldCheck, CheckCircle2, ArrowRight, ChevronDown, Zap } from "lucide-react";
import { useState } from "react";

const district = "Orhangazi";
const service = "Saatlik Asansör Kiralama";
const phone = "0 (224) 444 00 00";

const faqs = [
  { q: "Minimum kaç saat kiralama yapılıyor?", a: "En az 1 saatlik kiralama yapılmaktadır. İhtiyacınıza göre ek saat eklenebilir." },
  { q: "Saatlik ücret nasıl hesaplanır?", a: "Ücret, asansörün kurulum saatinden kaldırılma saatine kadar geçen süre üzerinden hesaplanır." },
  { q: "Hangi saatlerde hizmet veriyorsunuz?", a: "İhtiyaçlarınıza kesintisiz çözüm sunabilmek için 7/24 hizmet veriyoruz." },
  { q: "Operatör dahil mi?", a: "Evet, operatör her zaman asansörün başındadır. Kurulum ve kullanım tamamen uzman ekibimizce yönetilir." },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors group"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 text-orange-500 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 bg-gray-50 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  );
}

function CallBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex ${compact ? "gap-2" : "flex-col sm:flex-row gap-3"} w-full`}>
      <a href="tel:02244440000" className={`flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold ${compact ? "px-4 py-2.5 text-sm rounded-xl" : "px-6 py-4 text-base rounded-2xl"} flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5`}>
        <Phone className={compact ? "w-4 h-4" : "w-5 h-5"} /> {compact ? "Ara" : `Hemen Ara — ${phone}`}
      </a>
      <a href="https://wa.me/902244440000" className={`flex-1 bg-green-500 hover:bg-green-600 text-white font-bold ${compact ? "px-4 py-2.5 text-sm rounded-xl" : "px-6 py-4 text-base rounded-2xl"} flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5`}>
        <MessageCircle className={compact ? "w-4 h-4" : "w-5 h-5"} /> {compact ? "WhatsApp" : "WhatsApp'tan Fiyat Al"}
      </a>
    </div>
  );
}

export function AffordanceStrong() {
  return (
    <div className="min-h-screen font-['DM_Sans',sans-serif] bg-white pb-28" style={{ fontSize: 15 }}>

      {/* Header */}
      <header className="bg-[#0b1929] sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <ArrowUpToLine className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-sm">Bursa <span className="text-orange-400">Mobil Asansör</span></span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/902244440000" className="hidden sm:flex items-center gap-1.5 bg-green-600/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-green-500/30">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <a href="tel:02244440000" className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> {phone}
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-5 py-2">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 text-xs text-gray-500">
          <span>Ana Sayfa</span><ChevronRight className="w-3 h-3" />
          <span>{district}</span><ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-semibold">{service}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0b1929] via-[#0d2040] to-[#0b1929] px-5 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <Zap className="w-3 h-3 fill-orange-400" /> 5 Dakikada Fiyat Al
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
            {district} <span className="text-orange-400">{service}</span>
          </h1>
          <p className="text-slate-300 text-base mb-8 max-w-2xl">Kısa süreli işleriniz için esnek ve ekonomik saatlik kiralama çözümleri. Sadece kullandığın kadar öde.</p>

          {/* Primary CTA zone */}
          <div className="bg-white/6 border border-white/10 rounded-2xl p-5 max-w-2xl">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Ücretsiz Fiyat Al</div>
            <CallBar />
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="bg-orange-500 px-5 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 flex-wrap text-white text-xs font-semibold">
          {[
            { icon: Clock, text: "7/24 Hizmet" },
            { icon: ArrowUpToLine, text: "15. Kata Kadar" },
            { icon: ShieldCheck, text: "Operatörlü Çalışma" },
            { icon: CheckCircle2, text: "Aynı Gün Hizmet" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5" /> {text}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">

            {/* Content */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Neden Saatlik Kiralama?</h2>
              <div className="text-gray-700 leading-relaxed space-y-3 text-sm">
                <p>Bazen tüm gün sürecek bir nakliye işlemi yerine, sadece birkaç parça ağır eşyanın veya malzemenin yukarı çıkarılması gerekebilir. İşte bu noktada <strong>{district}</strong> bölgesine özel sunduğumuz <strong>saatlik asansör kiralama</strong> hizmetimiz devreye giriyor.</p>
                <p>Beyaz eşya, mobilya, inşaat malzemesi veya çatı gereçleri gibi spesifik yükleriniz için sadece kullandığınız süre kadar ödeme yaparsınız.</p>
              </div>
            </div>

            {/* Mid-page CTA */}
            <div className="bg-[#0b1929] rounded-2xl p-6 border border-white/10">
              <div className="text-white font-bold text-base mb-1">Hemen rezervasyon yaptırın</div>
              <div className="text-slate-400 text-xs mb-4">Bugün müsait tarihler için arayın veya yazın.</div>
              <CallBar compact />
            </div>

            {/* Service rules as interactive cards */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-500" /> Hizmet Garantilerimiz
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "7/24 Hizmet", desc: "Her an yanınızdayız", icon: Clock, color: "bg-blue-50 border-blue-200 hover:border-blue-400" },
                  { title: "15. Kata Kadar", desc: "Yüksek erişimli ekipman", icon: ArrowUpToLine, color: "bg-orange-50 border-orange-200 hover:border-orange-400" },
                  { title: "Operatörlü", desc: "Uzman ekip her zaman başında", icon: ShieldCheck, color: "bg-green-50 border-green-200 hover:border-green-400" },
                  { title: "Personel Desteği", desc: "Taşıma personeli talep edilebilir", icon: CheckCircle2, color: "bg-purple-50 border-purple-200 hover:border-purple-400" },
                ].map(({ title, desc, icon: Icon, color }) => (
                  <div key={title} className={`${color} border-2 rounded-2xl p-4 transition-all cursor-default group hover:shadow-md`}>
                    <Icon className="w-5 h-5 text-gray-700 mb-2" />
                    <div className="font-bold text-gray-900 text-sm">{title}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accordion FAQ */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => <AccordionItem key={i} {...faq} />)}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="bg-[#0b1929] rounded-2xl p-6 shadow-2xl text-white border border-white/10">
                <div className="text-center mb-5">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Hızlı Fiyat</div>
                  <div className="text-orange-400 font-bold text-lg">{district}</div>
                  <div className="text-white text-sm">{service}</div>
                </div>
                <div className="space-y-2.5">
                  <a href="tel:02244440000" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all text-sm shadow-lg hover:shadow-orange-500/25 active:scale-95">
                    <Phone className="w-4 h-4" /> {phone}
                  </a>
                  <a href="https://wa.me/902244440000" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all text-sm shadow-lg active:scale-95">
                    <MessageCircle className="w-4 h-4" /> WhatsApp'tan Yaz
                  </a>
                </div>
                <div className="mt-4 text-xs text-center text-slate-500">5 dakika içinde yanıt verilir</div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-3 pb-3 border-b border-gray-200">{district} Diğer Hizmetler</h3>
                <ul className="space-y-1.5">
                  {["Kiralık Mobil Asansör", "Evden Eve Nakliyat", "İnşaat Cephe Asansörü", "Ağır Yük Taşıma"].map(s => (
                    <li key={s}>
                      <a href="#" className="flex items-center justify-between group text-gray-700 hover:text-orange-600 py-1 text-xs font-medium transition-colors">
                        {s}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b1929]/95 backdrop-blur border-t border-white/10 px-4 py-3 shadow-2xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="text-white text-sm font-semibold">{district} — {service}</div>
            <div className="text-slate-400 text-xs">7/24 · Hızlı yanıt</div>
          </div>
          <div className="flex gap-2 flex-1 sm:flex-none sm:w-auto">
            <a href="tel:02244440000" className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
              <Phone className="w-4 h-4" /> Hemen Ara
            </a>
            <a href="https://wa.me/902244440000" className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
