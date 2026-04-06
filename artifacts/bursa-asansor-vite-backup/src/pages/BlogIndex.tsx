import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCanonicalUrl } from "@/lib/seo";

export default function BlogIndex() {
  return (
    <>
      <SEO 
        title="Blog & Nakliyat Rehberi | Bursa Mobil Asansör"
        description="Evden eve nakliyat, asansör kiralama fiyatları ve taşınma rehberi hakkında güncel sektörel haberler ve faydalı bilgiler."
        path="/blog"
        schema={[{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Bursa Mobil Asansör Nakliyat Rehberi",
          "description": "Taşınma ve asansör kiralama ipuçları.",
          "url": getCanonicalUrl("/blog")
        }]}
      />

      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-slate-50 dark:bg-navy/30 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-secondary dark:text-white"
          >
            Nakliyat & <span className="text-primary">Taşınma Rehberi</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Türkiye'nin en kapsamlı asansörlü taşımacılık ve evden eve nakliyat bilgi arşivi. Sorunsuz bir taşınma süreci için uzman tavsiyeleri.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="group flex flex-col bg-white dark:bg-navy-light rounded-3xl border border-border dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Placeholder/Cover */}
                <Link href={`/blog/${post.slug}`} className="block h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-secondary px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {post.category}
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-3 text-secondary dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
