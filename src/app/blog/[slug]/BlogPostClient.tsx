"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/data/blog";
import { Calendar, Clock, User, MessageCircle } from "lucide-react";
import { getCanonicalUrl, getAbsoluteAssetUrl } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";

export default function BlogPostClient() {
  const params = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const ogImage = getAbsoluteAssetUrl(post.image);

  return (
    <>
      <Breadcrumbs items={[
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` }
      ]} />

      <header className="pt-32 pb-12 bg-slate-50 dark:bg-navy/30 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">{post.category}</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-display font-bold mb-8 text-secondary dark:text-white leading-tight">{post.title}</motion.h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </header>

      <main className="py-16 bg-white dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-12 rounded-3xl overflow-hidden shadow-lg h-[400px] relative">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-secondary dark:prose-headings:text-white prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary dark:prose-strong:text-white prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-img:rounded-2xl prose-img:shadow-md" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-16 bg-gradient-to-br from-slate-50 to-primary/5 dark:from-navy-light/50 dark:to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-4">Profesyonel Çözüm İçin Hemen Teklif Alın</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">Siz de eşyalarınızı riske atmadan, %100 güvenli ve hızlı dış cephe asansörü ile taşıtmak istiyorsanız Bursa&apos;nın en iyi kiralama firmasıyla iletişime geçin.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/905053297533" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-[#25D366]/20">
                <MessageCircle className="w-5 h-5" /> WhatsApp&apos;tan Teklif Al
              </a>
              <Link href="/nilufer-kiralik-mobil-asansor" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20">
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Etiketler</h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map(keyword => (
                <span key={keyword} className="bg-slate-100 dark:bg-navy-light text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm">#{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
