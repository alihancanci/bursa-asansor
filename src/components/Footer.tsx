"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ELEVATOR_SERVICES, MOVING_SERVICES, PHONE_NUMBER, WHATSAPP_LINK, GOOGLE_REVIEW_LINK } from "@/data";
import { trackPhoneClick } from "@/lib/analytics";
import { ArrowUpToLine, Phone, MapPin, Clock, Truck, ShieldCheck, CheckCircle2, Star } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-14">

          {/* İletişim */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="Ana Sayfa">
              <div className="bg-linear-to-br from-primary to-orange-600 p-2.5 rounded-2xl shadow-lg shadow-primary/20">
                <ArrowUpToLine className="h-7 w-7 text-white stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight leading-none text-white">
                  Bursa <span className="text-primary">Kiralık Asansör</span>
                </span>
                <span className="text-[0.65rem] text-slate-300 font-bold uppercase tracking-[0.2em] mt-1">
                  CNC Evden Eve Nakliyat
                </span>
              </div>
            </Link>
            <p className="text-slate-200 text-sm mb-6 leading-relaxed">
              {t('footer.desc', 'Bursa ve tüm ilçelerinde 7/24 mobil asansör kiralama ve nakliyat hizmetleri. 15. kata kadar ulaşım, uzman ekip desteği.')}
            </p>
            <div className="space-y-3">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
                onClick={() => trackPhoneClick('Footer')}
                className="flex items-center gap-3 text-gray-200 hover:text-primary transition-colors"
              >
                <div className="bg-white/5 p-2 rounded-lg"><Phone className="h-4 w-4" /></div>
                <span className="font-semibold text-sm">{PHONE_NUMBER}</span>
              </a>
               <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-white/5 p-2 rounded-lg"><Clock className="h-4 w-4 text-primary" /></div>
                <span className="text-sm text-slate-300">{t('features.f2_title', '7/24 Kesintisiz Hizmet')}</span>
              </div>
              <a
                href="https://maps.app.goo.gl/W5D6w9hQQ39QvVy29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group"
                title="Bursa CNC Asansör Kiralama - Google Haritalar Profili"
              >
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors"><MapPin className="h-4 w-4 text-primary" /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-200 group-hover:text-primary transition-colors">Bursa CNC Asansör Kiralama</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">Google Haritalar&apos;da Görün ↗</span>
                </div>
              </a>
            </div>

            {/* E-E-A-T Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3 py-2 rounded-xl flex items-center justify-between gap-2 transition-all group"
                title="Google'da 5 Yıldız Bırakın"
              >
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-xs text-amber-300 font-bold">4.9 / 5.0 Google Puanı</span>
                </div>
                <span className="text-[11px] text-slate-300 underline group-hover:text-white transition-colors">Yorum Yaz ↗</span>
              </a>
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
                <Link href="/hakkimizda" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmet-bolgelerimiz" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Hizmet Bölgelerimiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Blog / Rehber
                </Link>
              </li>
              <li>
                <Link href="/calismalarimiz" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Çalışmalarımız
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 1: Popüler Bölgeler (VIP SEO) */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">Popüler Bölgeler</h3>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/nilufer-kiralik-asansor" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Nilüfer Kiralık Asansör
                </Link>
              </li>
              <li>
                <Link href="/osmangazi-kiralik-asansor" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Osmangazi Kiralık Asansör
                </Link>
              </li>
              <li>
                <Link href="/yildirim-kiralik-asansor" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Yıldırım Kiralık Asansör
                </Link>
              </li>
              <li>
                <Link href="/mudanya-kiralik-asansor" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Mudanya Kiralık Asansör
                </Link>
              </li>
              <li>
                <Link href="/nilufer-evden-eve-nakliyat" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Nilüfer Evden Eve Nakliyat
                </Link>
              </li>
              <li>
                <Link href="/osmangazi-evden-eve-nakliyat" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Osmangazi Evden Eve Nakliyat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Kiralık Asansör Hizmetleri */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <ArrowUpToLine className="h-4 w-4 text-primary shrink-0" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">{t('footer.elevator_services', 'Kiralık Asansör')}</h3>
            </div>
            <ul className="space-y-2.5">
              {ELEVATOR_SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/bursa-merkez-${s.slug}`} className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Nakliyat Hizmetleri */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Truck className="h-4 w-4 text-primary shrink-0" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">{t('footer.moving_services', 'Nakliyat Hizmetleri')}</h3>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/bursa-evden-eve-nakliyat" className="text-white hover:text-primary transition-colors text-sm flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Bursa Evden Eve Nakliyat
                </Link>
              </li>
              <li>
                <a 
                  href="https://bursavipevdeneve.com" 
                  target="_blank" 
                  rel="noopener"
                  className="text-primary hover:text-orange-400 transition-colors text-sm flex items-center gap-2 font-bold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  Bursa VIP Nakliyat ↗
                </a>
              </li>
              {MOVING_SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/bursa-merkez-${s.slug}`} className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Kardeş Kuruluş Tanıtım Bandı */}
        <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Resmi Kardeş Kuruluşumuz: Bursa VIP Evden Eve Nakliyat</p>
              <p className="text-slate-400 text-xs">Asansörlü, ambalajlı ve marangozlu lüks ev taşımacılığı için ortak kurumsal hat: 0505 608 07 00</p>
            </div>
          </div>
          <a
            href="https://bursavipevdeneve.com"
            target="_blank"
            rel="noopener"
            className="shrink-0 px-4 py-2 bg-primary hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition-all shadow-md"
          >
            bursavipevdeneve.com Ziyaret Et ↗
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-sm">
            © {new Date().getFullYear()} Bursa Kiralık Asansör CNC Evden Eve Nakliyat. {t('footer.rights', 'Tüm hakları saklıdır.')}
          </p>
          <div className="flex gap-4 text-sm text-slate-300">
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
