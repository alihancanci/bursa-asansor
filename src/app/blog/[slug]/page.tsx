import { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blog';
import BlogPostClient from './BlogPostClient';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: paramsSlug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === paramsSlug);
  
  if (!post) {
    return { title: 'Yazı Bulunamadı | Blog' };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt.length > 155 ? `${post.excerpt.substring(0, 155)}...` : post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://bursakiralikasansor.com/blog/${paramsSlug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt.length > 155 ? `${post.excerpt.substring(0, 155)}...` : post.excerpt,
      type: 'article',
      url: `https://bursakiralikasansor.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return null;

  // Güvenli Tarih Çevirici (Vercel Build Hatasını Engeller)
  let isoDate = new Date().toISOString();
  if (post.date) {
    const d = new Date(post.date);
    if (!isNaN(d.getTime())) {
      isoDate = d.toISOString();
    }
  }

  // Tüm yazılar için Zengin Şema (Topical Authority)
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const graph: any[] = [
    {
      "@type": ["Article", "BlogPosting"],
      "url": `https://bursakiralikasansor.com/blog/${post.slug}`,
      "headline": post.title,
      "description": post.metaDescription || post.excerpt,
      "author": { "@type": "Person", "name": post.author },
      "publisher": { 
        "@type": "Organization", 
        "name": "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
        "logo": { "@type": "ImageObject", "url": "https://bursakiralikasansor.com/favicon.ico" }
      },
      "datePublished": isoDate,
      "image": post.image
    }
  ];

  if (post.faqs && post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": post.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    });
  }

  const richSchema = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <>
      {richSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(richSchema) }}
        />
      )}
      <BlogPostClient post={post} />
    </>
  );
}
