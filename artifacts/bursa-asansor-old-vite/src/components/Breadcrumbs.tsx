import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getCanonicalUrl } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('nav.home', 'Ana Sayfa'),
        "item": getCanonicalUrl("/")
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.name,
        "item": getCanonicalUrl(item.path)
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 dark:bg-navy/30 py-3 border-b border-border dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <li className="flex items-center">
            <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">{t('nav.home', 'Ana Sayfa')}</span>
            </Link>
          </li>
          
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50" />
                {isLast ? (
                  <span className="font-semibold text-slate-900 dark:text-white" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </nav>
  );
}
