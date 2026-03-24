import { useState } from "react";
import { SEO } from "@/components/SEO";
import { OperationCard } from "@/components/OperationCard";
import { useInfiniteOperations } from "@/hooks/useOperations";
import { motion } from "framer-motion";
import { Loader2, ChevronDown } from "lucide-react";
import { getAbsoluteAssetUrl } from "@/lib/seo";

export default function Operations() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteOperations();

  const allOps = data?.pages.flatMap(p => p.records) ?? [];

  return (
    <>
      <SEO
        title="Son Operasyonlar | Bursa Mobil Asansör"
        description="Bursa'da tamamladığımız kiralık mobil asansör kurulumları ve nakliyat operasyonlarına göz atın. Gerçek müşteri işlerimiz, fotoğraflarla belgelenmiş."
        path="/operasyonlar"
        ogImage={getAbsoluteAssetUrl("/opengraph.jpg")}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-navy to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-5 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Canlı Operasyon Arşivi
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Son <span className="text-gradient">Operasyonlar</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Bursa'nın tüm ilçelerinde tamamladığımız gerçek asansör kurulumları ve nakliyat işlerimize göz atın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-slate-50 dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center py-24">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : allOps.length === 0 ? (
            <div className="text-center py-24 text-slate-500">
              Henüz operasyon kaydı bulunmuyor.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allOps.map((op, i) => (
                  <motion.div
                    key={op.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
                  >
                    <OperationCard operation={op} />
                  </motion.div>
                ))}
              </div>

              {/* Load more */}
              {hasNextPage && (
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
                  >
                    {isFetchingNextPage
                      ? <Loader2 className="w-4 h-4 animate-spin" />
                      : <ChevronDown className="w-4 h-4" />
                    }
                    Daha Fazla Göster
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
