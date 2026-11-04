import { Metadata } from 'next';
import Link from 'next/link';
import { DISTRICTS, SERVICES } from '@/data';
import { FOCUS_DISTRICTS, FOCUS_DISTRICT_SERVICES, CORE_SERVICES_ALL_DISTRICTS } from '@/app/sitemap';
import { ArrowRight, MapPin } from 'lucide-react';
import { getCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Bursa Hizmet Bölgelerimiz | Nilüfer, Osmangazi, Yıldırım',
  description: 'Nilüfer, Osmangazi, Yıldırım, Mudanya, Gürsu ve tüm Bursa ilçelerinde 15. kata kadar mobil kiralık asansör ve evden eve nakliyat: 0505 608 07 00.',
  alternates: {
    canonical: getCanonicalUrl('/hizmet-bolgelerimiz'),
  },
  openGraph: {
    title: 'Bursa Hizmet Bölgelerimiz | Nilüfer, Osmangazi, Yıldırım',
    description: 'Bursa genelinde tüm ilçelere 7/24 kiralık asansör ve asansörlü nakliyat hizmeti.',
    url: getCanonicalUrl('/hizmet-bolgelerimiz'),
  }
};

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      <div className="bg-[#071320] py-16 border-b-4 border-primary/40 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Hizmet <span className="text-primary">Bölgelerimiz</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Bursa&apos;nın tüm ilçelerine ve mahallelerine 7/24 hızlı, güvenilir ve profesyonel mobil asansör kiralama ile evden eve nakliyat çözümleri sunuyoruz.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...DISTRICTS].sort((a, b) => (b.isPriority ? 1 : 0) - (a.isPriority ? 1 : 0)).map((district) => (
            <div key={district.slug} className={`bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border transition-all duration-300 ${district.isPriority ? 'border-primary/40 ring-1 ring-primary/20' : 'border-slate-100 dark:border-slate-700 hover:border-primary/30'}`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {district.name}
                    </h2>
                    {district.isPriority && (
                      <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        Öncelikli Hizmet Bölgesi
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {SERVICES.filter((service) => {
                  const allowed = FOCUS_DISTRICTS.includes(district.slug)
                    ? FOCUS_DISTRICT_SERVICES
                    : CORE_SERVICES_ALL_DISTRICTS;
                  return allowed.includes(service.slug);
                }).map((service) => {
                  const pageSlug = `${district.slug}-${service.slug}`;
                  let targetHref = `/${pageSlug}`;
                  if (pageSlug === "bursa-merkez-kiralik-asansor") {
                    targetHref = "/";
                  } else if (
                    [
                      "bursa-merkez-evden-eve-nakliyat",
                      "bursa-merkez-evden-eve-asansorlu-nakliyat",
                      "bursa-merkez-asansorlu-ev-tasima",
                    ].includes(pageSlug)
                  ) {
                    targetHref = "/bursa-evden-eve-nakliyat";
                  }

                  return (
                    <li key={service.slug}>
                      <Link 
                        href={targetHref}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors text-sm font-medium">
                          {district.name} {service.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Sık Hizmet Verilen Mahalleler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {district.neighborhoods.slice(0, 5).map((hood, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-xs rounded-lg font-medium">
                      {hood}
                    </span>
                  ))}
                  {district.neighborhoods.length > 5 && (
                    <span className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-400 text-xs rounded-lg font-medium border border-slate-200 dark:border-slate-700">
                      +{district.neighborhoods.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Teknik Kaynaklar / Geo-SEO Alt Bölümü */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Bursa Kiralık Asansör CNC Evden Eve Nakliyat olarak hizmet bölgelerimizi teknik harita verisi (KML) olarak yayınlıyoruz.
          </p>
          <Link 
            href="/locations.kml" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
          >
            <MapPin className="w-3 h-3" />
            Coğrafi Hizmet Alanı Verisi (KML)
          </Link>
        </div>
      </div>
    </main>
  );
}
