import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { DISTRICTS, ELEVATOR_SERVICES, MOVING_SERVICES, PHONE_NUMBER, WHATSAPP_LINK } from "@/data";
import { ArrowUpToLine, Phone, MapPin, Clock, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary to-orange-600 p-2.5 rounded-2xl shadow-lg shadow-primary/20">
                <ArrowUpToLine className="h-7 w-7 text-white stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight leading-none text-white">
                  Bursa <span className="text-primary">Mobil Asansör</span>
                </span>
                <span className="text-[0.65rem] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
                  {t('nav.subtitle', 'Profesyonel Nakliye Ağı')}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {t('footer.desc', 'Bursa ve tüm ilçelerinde 7/24 mobil asansör kiralama ve nakliyat hizmetleri. 15. kata kadar ulaşım, uzman ekip desteği.')}
            </p>
            <div className="space-y-3">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                <div className="bg-white/5 p-2 rounded-lg"><Phone className="h-4 w-4" /></div>
                <span className="font-semibold text-sm">{PHONE_NUMBER}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-white/5 p-2 rounded-lg"><Clock className="h-4 w-4 text-primary" /></div>
                <span className="text-sm">{t('features.f2_title', '7/24 Kesintisiz Hizmet')}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-white/5 p-2 rounded-lg"><MapPin className="h-4 w-4" /></div>
                <span className="text-sm">Bursa ve Tüm İlçeleri</span>
              </div>
            </div>

            {/* E-E-A-T Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-xs text-slate-200 font-medium">MYK Sertifikalı Operatör</span>
              </div>
              <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-200 font-medium">Resmi Ticari İşletme</span>
              </div>
            </div>
          </div>

          {/* Column 0: Kurumsal */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">Kurumsal</h3>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/hakkimizda" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Blog / Rehber
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 1: Kiralık Asansör Hizmetleri */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <ArrowUpToLine className="h-4 w-4 text-primary shrink-0" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">{t('footer.elevator_services', 'Kiralık Asansör')}</h3>
            </div>
            <ul className="space-y-2.5">
              {ELEVATOR_SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/bursa-merkez-${s.slug}`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Nakliyat Hizmetleri */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Truck className="h-4 w-4 text-primary shrink-0" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">{t('footer.moving_services', 'Nakliyat Hizmetleri')}</h3>
            </div>
            <ul className="space-y-2.5">
              {MOVING_SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/bursa-merkez-${s.slug}`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popüler Bölgeler */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-5">{t('nav.districts', 'Hizmet Bölgelerimiz')}</h3>
            <ul className="space-y-2.5">
              {DISTRICTS.slice(0, 7).map(d => (
                <li key={d.slug}>
                  <Link href={`/${d.slug}-kiralik-mobil-asansor`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="text-primary hover:underline text-xs font-bold uppercase tracking-widest mt-2 block">
                  Tüm İlçeler +
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: İletişim */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-5">Hızlı İletişim</h3>
            <div className="space-y-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="group block">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block mb-1">Telefon</span>
                <span className="text-white font-bold group-hover:text-primary transition-colors">{PHONE_NUMBER}</span>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block mb-1">WhatsApp</span>
                <span className="text-[#25D366] font-bold group-hover:underline">7/24 Destek Hattı</span>
              </a>
              <div className="block">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block mb-1">Adres</span>
                <span className="text-slate-400 text-xs">Osmangazi, Bursa (Tüm İlçelere Mobil Ekip)</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bursa Mobil Asansör. {t('footer.rights', 'Tüm hakları saklıdır.')}
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <span>{t('features.f3_title', 'Uzman Operatör')}</span>
            <span>•</span>
            <span>{t('features.f1_title', '15. Kata Kadar')}</span>
            <span>•</span>
            <span>{t('features.f2_title', '7/24 Açık')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
