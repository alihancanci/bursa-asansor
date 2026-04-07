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
      canonical: `/blog/${paramsSlug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt.length > 155 ? `${post.excerpt.substring(0, 155)}...` : post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`,
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

  // Eğer bu makale ise özel zengin şema ekleyelim
  const isAsansorluNakliyat = post.slug === "asansorlu-evden-eve-nakliyat";
  
  const richSchema = isAsansorluNakliyat ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "url": `https://bursakiralikasansor.com/blog/${post.slug}`,
        "headline": post.title,
        "description": post.metaDescription,
        "author": { "@type": "Person", "name": "Alihan Çancı" },
        "publisher": { 
          "@type": "Organization", 
          "name": "Bursa Kiralık Asansör ve Evden Eve Nakliyat",
          "logo": { "@type": "ImageObject", "url": "https://bursakiralikasansor.com/favicon.svg" }
        },
        "datePublished": "2026-04-06T23:39:19Z",
        "image": post.image
      },
      {
        "@type": "FAQPage",
        "mainEntity": post.faqs?.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      },
      {
        "@type": "HowTo",
        "name": "Asansörlü Evden Eve Nakliyat Süreci",
        "description": post.excerpt,
        "step": [
          { "@type": "HowToStep", "position": 1, "text": "Ücretsiz keşif ile taşıma planı oluşturulması." },
          { "@type": "HowToStep", "position": 2, "text": "Eşyaların profesyonel paketleme malzemeleriyle korunması." },
          { "@type": "HowToStep", "position": 3, "text": "Mobil asansörün bina cephesine güvenli kurulumu." },
          { "@type": "HowToStep", "position": 4, "text": "Eşyaların asansörle hasarsız şekilde sevkiyatı." }
        ]
      }
    ]
  } : null;

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
