import { useState } from "react";
import { useLocation } from "wouter";
import { DISTRICTS, SERVICES } from "@/data";
import { Search, MapPin, Truck } from "lucide-react";

export function SearchFilter() {
  const [, setLocation] = useLocation();
  const [district, setDistrict] = useState(DISTRICTS[0].slug);
  const [service, setService] = useState(SERVICES[0].slug);

  const handleNavigate = () => {
    setLocation(`/${district}-${service}`);
  };

  return (
    <div className="bg-white dark:bg-navy-light rounded-3xl p-4 sm:p-6 shadow-2xl border border-border/50 backdrop-blur-xl max-w-4xl mx-auto -mt-16 relative z-20">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        
        <div className="w-full flex-1 space-y-2">
          <label className="text-sm font-semibold text-secondary/70 dark:text-slate-300 flex items-center gap-2 ml-1">
            <MapPin className="h-4 w-4 text-primary" /> İlçe Seçin
          </label>
          <div className="relative">
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full h-14 pl-4 pr-10 rounded-xl bg-slate-50 dark:bg-navy border-2 border-transparent hover:border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none font-medium text-secondary dark:text-white"
            >
              {DISTRICTS.map((d) => (
                <option key={d.slug} value={d.slug}>{d.name}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 space-y-2">
          <label className="text-sm font-semibold text-secondary/70 dark:text-slate-300 flex items-center gap-2 ml-1">
            <Truck className="h-4 w-4 text-primary" /> Hizmet Seçin
          </label>
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full h-14 pl-4 pr-10 rounded-xl bg-slate-50 dark:bg-navy border-2 border-transparent hover:border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none font-medium text-secondary dark:text-white"
            >
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <button
          onClick={handleNavigate}
          className="w-full md:w-auto h-14 px-8 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:shadow-lg focus:ring-4 focus:ring-secondary/20 flex-shrink-0"
        >
          <Search className="h-5 w-5" />
          <span>Sayfaya Git</span>
        </button>

      </div>
    </div>
  );
}
