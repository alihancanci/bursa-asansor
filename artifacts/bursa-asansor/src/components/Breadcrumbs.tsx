"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 dark:bg-navy border-b border-gray-300 dark:border-white/10 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-slate-400">
          <li>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={item.path} className="flex items-center gap-1.5">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              {idx === items.length - 1 ? (
                <span className="text-gray-900 dark:text-white font-semibold" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-primary underline underline-offset-2 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
