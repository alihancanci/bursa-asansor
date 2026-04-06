import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-background">
      <div className="w-full max-w-md mx-4 bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-border dark:border-white/10 p-8">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">404 Sayfa Bulunamadı</h1>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-slate-400">
          Aradığınız sayfa kaldırılmış olabilir veya adres hatalı yazılmış olabilir.
        </p>
        <Link href="/" className="inline-flex mt-5 text-sm font-semibold text-primary hover:underline">
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}
