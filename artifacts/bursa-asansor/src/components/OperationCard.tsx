import { Link } from "wouter";
import { CalendarDays, MapPin } from "lucide-react";
import type { Operation } from "@/lib/airtable";
import { DISTRICTS, SERVICES } from "@/data";

interface OperationCardProps {
  operation: Operation;
  /** Pass true in homepage to show concise variant */
  compact?: boolean;
}

export function OperationCard({ operation, compact = false }: OperationCardProps) {
  const { photoUrl, district, districtName, neighborhood, description, timestamp, seoAltText } = operation;

  // Find the matching district to build a link to its main service page
  const districtData = DISTRICTS.find(d => d.slug === district);
  const mainService  = SERVICES[0]; // kiralik-mobil-asansor
  const districtLink = districtData ? `/${districtData.slug}-${mainService.slug}` : null;

  const dateStr = timestamp
    ? new Date(timestamp).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <article className="group bg-white dark:bg-navy-light rounded-3xl overflow-hidden border border-border dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Photo — lazy loaded, fixed aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-navy">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={seoAltText}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <MapPin className="w-8 h-8" />
          </div>
        )}

        {/* District badge */}
        <div className="absolute top-3 left-3">
          {districtLink ? (
            <Link
              href={districtLink}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg shadow hover:bg-orange-600 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <MapPin className="w-3 h-3" />
              {districtName}
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg">
              <MapPin className="w-3 h-3" />
              {districtName}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
          <CalendarDays className="w-3.5 h-3.5" />
          <time dateTime={timestamp}>{dateStr}</time>
          {neighborhood && (
            <>
              <span className="mx-1">·</span>
              <span className="font-medium text-slate-500">{neighborhood}</span>
            </>
          )}
        </div>

        <p className={`text-gray-700 dark:text-slate-300 text-sm leading-relaxed flex-1 ${compact ? "line-clamp-3" : ""}`}>
          {description}
        </p>
      </div>
    </article>
  );
}
