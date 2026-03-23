import { Clock, ArrowUpToLine, ShieldCheck } from "lucide-react";

export function FeaturesBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
      <div className="bg-white dark:bg-navy-light rounded-xl p-4 border-2 border-gray-200 dark:border-white/10 flex items-start gap-4">
        <div className="w-11 h-11 bg-orange-100 dark:bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
          <Clock className="w-6 h-6 text-orange-600 dark:text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-base mb-0.5">7/24 Kesintisiz Hizmet</h4>
          <p className="text-sm text-gray-600 dark:text-slate-300">Gece veya gündüz, her an ulaşabilirsiniz.</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-navy-light rounded-xl p-4 border-2 border-gray-200 dark:border-white/10 flex items-start gap-4">
        <div className="w-11 h-11 bg-orange-100 dark:bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
          <ArrowUpToLine className="w-6 h-6 text-orange-600 dark:text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-base mb-0.5">15. Kata Kadar Çıkar</h4>
          <p className="text-sm text-gray-600 dark:text-slate-300">Yüksek katlara güvenli erişim.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-navy-light rounded-xl p-4 border-2 border-gray-200 dark:border-white/10 flex items-start gap-4">
        <div className="w-11 h-11 bg-orange-100 dark:bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6 text-orange-600 dark:text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-base mb-0.5">Operatör Kontrolü</h4>
          <p className="text-sm text-gray-600 dark:text-slate-300">Uzman personel her zaman asansörün başında.</p>
        </div>
      </div>
    </div>
  );
}
