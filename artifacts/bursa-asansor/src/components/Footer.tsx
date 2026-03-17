import { Link } from "wouter";
import { DISTRICTS, SERVICES, PHONE_NUMBER, WHATSAPP_LINK } from "@/data";
import { ArrowUpSquare, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-xl">
                <ArrowUpSquare className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white">
                  Bursa <span className="text-primary">Mobil Asansör</span>
                </span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Bursa ve tüm ilçelerinde 7/24 mobil asansör kiralama hizmeti. 15. kata kadar ulaşım, uzman operatör desteği ile güvenilir taşıma çözümleri.
            </p>
            <div className="space-y-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                <div className="bg-white/5 p-2 rounded-lg"><Phone className="h-5 w-5" /></div>
                <span className="font-semibold">{PHONE_NUMBER}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-white/5 p-2 rounded-lg"><Clock className="h-5 w-5 text-primary" /></div>
                <span>7/24 Kesintisiz Hizmet</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-white/5 p-2 rounded-lg"><MapPin className="h-5 w-5" /></div>
                <span>Bursa ve Tüm İlçeleri</span>
              </div>
            </div>
          </div>

          {/* Quick Links Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 font-display">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/bursa-merkez-${s.slug}`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* District Quick Links */}
          <div className="lg:col-span-2">
             <h3 className="text-lg font-bold text-white mb-6 font-display">Hizmet Bölgelerimiz</h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
               {DISTRICTS.map(d => (
                 <Link key={d.slug} href={`/${d.slug}-kiralik-mobil-asansor`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    {d.name}
                 </Link>
               ))}
             </div>
          </div>
        </div>

        {/* Mega SEO Matrix Grid (Visually subdued but present) */}
        <div className="pt-10 border-t border-white/5 mb-10">
          <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">Tüm Hizmet Ağımız</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-x-4 gap-y-8">
            {DISTRICTS.map(district => (
              <div key={district.slug} className="flex flex-col gap-2">
                <span className="text-white text-sm font-semibold mb-1 border-b border-white/10 pb-1 inline-block">{district.name}</span>
                {SERVICES.map(service => (
                  <Link 
                    key={`${district.slug}-${service.slug}`}
                    href={`/${district.slug}-${service.slug}`}
                    className="text-[11px] text-slate-500 hover:text-primary transition-colors block truncate"
                    title={`${district.name} ${service.name}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bursa Mobil Asansör. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <span>Operatörlü Hizmet</span>
            <span>•</span>
            <span>15. Kata Kadar</span>
            <span>•</span>
            <span>7/24 Açık</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
