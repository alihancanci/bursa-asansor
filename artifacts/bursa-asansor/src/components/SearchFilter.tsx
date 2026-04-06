"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DISTRICTS, ELEVATOR_SERVICES, MOVING_SERVICES, SERVICES } from "@/data";
import { Search, MapPin, Truck, ChevronDown, ArrowUpToLine, Check } from "lucide-react";

const SERVICE_GROUPS = [
  { label: "Kiralık Asansör Hizmetleri", icon: ArrowUpToLine, items: ELEVATOR_SERVICES },
  { label: "Nakliyat ve Taşıma Hizmetleri", icon: Truck, items: MOVING_SERVICES },
];

function ServiceSelect({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (slug: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = SERVICES.find(s => s.slug === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full h-14 pl-4 pr-10 rounded-xl bg-slate-50 dark:bg-navy border-2 border-transparent dark:border-white/10 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-secondary dark:text-white text-left flex items-center justify-between"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{selected?.name ?? "Hizmet Seçin"}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 dark:text-slate-300 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-xl bg-white dark:bg-navy-light border border-border dark:border-white/10 shadow-2xl overflow-hidden">
          <ul
            role="listbox"
            className="max-h-64 overflow-y-auto overscroll-contain divide-y divide-transparent
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-slate-300
              dark:[&::-webkit-scrollbar-thumb]:bg-white/20"
          >
            {SERVICE_GROUPS.map(group => (
              <li key={group.label}>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-white/5 sticky top-0 z-10">
                  <group.icon className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {group.label}
                  </span>
                </div>
                <ul>
                  {group.items.map(s => (
                    <li key={s.slug} role="option" aria-selected={s.slug === value}>
                      <button
                        type="button"
                        className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-2 transition-colors
                          ${s.slug === value
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-secondary dark:text-slate-200 hover:bg-primary/5 dark:hover:bg-white/5"
                          }`}
                        onClick={() => { onChange(s.slug); setOpen(false); }}
                      >
                        <span>{s.name}</span>
                        {s.slug === value && <Check className="h-4 w-4 shrink-0" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function SearchFilter() {
  const router = useRouter();
  const [district, setDistrict] = useState(DISTRICTS[0].slug);
  const [service, setService] = useState(SERVICES[0].slug);

  const handleNavigate = () => {
    router.push(`/${district}-${service}`);
  };

  return (
    <div className="bg-white dark:bg-navy-light rounded-3xl p-4 sm:p-6 shadow-2xl border border-border dark:border-white/10 backdrop-blur-xl max-w-4xl mx-auto -mt-16 relative z-20">
      <div className="flex flex-col md:flex-row gap-4 items-end">

        <div className="w-full flex-1 space-y-2">
          <label htmlFor="district-select" className="text-sm font-semibold text-secondary dark:text-slate-200 flex items-center gap-2 ml-1">
            <MapPin className="h-4 w-4 text-primary" /> İlçe Seçin
          </label>
          <div className="relative">
            <select
              id="district-select"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full h-14 pl-4 pr-10 rounded-xl bg-slate-50 dark:bg-navy border-2 border-transparent dark:border-white/10 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none font-medium text-secondary dark:text-white"
            >
              {DISTRICTS.map((d) => (
                <option key={d.slug} value={d.slug}>{d.name}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 dark:text-slate-300">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="w-full flex-1 space-y-2">
          <label htmlFor="service-select" className="text-sm font-semibold text-secondary dark:text-slate-200 flex items-center gap-2 ml-1">
            <Truck className="h-4 w-4 text-primary" /> Hizmet Seçin
          </label>
          <ServiceSelect id="service-select" value={service} onChange={setService} />
        </div>

        <button
          onClick={handleNavigate}
          className="w-full md:w-auto h-14 px-8 bg-primary hover:bg-orange-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/30 focus:ring-4 focus:ring-primary/20 flex-shrink-0"
        >
          <Search className="h-5 w-5" />
          <span>Sayfaya Git</span>
        </button>

      </div>
    </div>
  );
}
