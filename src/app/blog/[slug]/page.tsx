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
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${paramsSlug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
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

export default async function BlogPost() {
  return <BlogPostClient />;
}
