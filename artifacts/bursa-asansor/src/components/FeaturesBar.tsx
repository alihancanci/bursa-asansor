import { Clock, ArrowUpToLine, ShieldCheck } from "lucide-react";

export function FeaturesBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
      <div className="bg-white dark:bg-navy rounded-2xl p-6 shadow-lg border border-border flex items-start gap-4 hover:-translate-y-1 transition-transform">
        <div className="bg-primary/10 p-3 rounded-xl">
          <Clock className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-secondary dark:text-white mb-1">7/24 Kesintisiz Hizmet</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gündüz veya gece, ihtiyaç duyduğunuz her an hizmetinizdeyiz.</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-navy rounded-2xl p-6 shadow-lg border border-border flex items-start gap-4 hover:-translate-y-1 transition-transform">
        <div className="bg-primary/10 p-3 rounded-xl">
          <ArrowUpToLine className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-secondary dark:text-white mb-1">15. Kata Kadar Çıkar</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">Uzun erişimli teleskopik asansörlerimizle 15. kata ulaşıyoruz.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-navy rounded-2xl p-6 shadow-lg border border-border flex items-start gap-4 hover:-translate-y-1 transition-transform">
        <div className="bg-primary/10 p-3 rounded-xl">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-secondary dark:text-white mb-1">Operatör Kontrolü</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">Operatör her zaman asansörün başındadır, iş güvenliği tamdır.</p>
        </div>
      </div>
    </div>
  );
}
