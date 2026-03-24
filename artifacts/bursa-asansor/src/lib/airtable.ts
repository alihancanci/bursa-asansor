// Airtable operations service
// Reads from the 'Operasyonlar' table in your Airtable base.
// Set these in Vercel env vars:
//   VITE_AIRTABLE_API_KEY   - your Airtable personal access token
//   VITE_AIRTABLE_BASE_ID   - your Airtable base ID (appXXXXX...)
//   VITE_AIRTABLE_TABLE_NAME - (optional, default: 'Operasyonlar')

export interface Operation {
  id: string;
  photoUrl: string;
  district: string;        // slug, e.g. "nilufer"
  districtName: string;    // display name, e.g. "Nilüfer"
  neighborhood: string;
  description: string;
  timestamp: string;       // ISO date string
  seoAltText: string;
}

const API_KEY   = import.meta.env.VITE_AIRTABLE_API_KEY   as string;
const BASE_ID   = import.meta.env.VITE_AIRTABLE_BASE_ID   as string;
const TABLE     = (import.meta.env.VITE_AIRTABLE_TABLE_NAME as string) || 'Operasyonlar';

const AIRTABLE_URL = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`;

interface AirtableRecord {
  id: string;
  fields: {
    photoUrl?: string;
    district?: string;
    districtName?: string;
    neighborhood?: string;
    description?: string;
    timestamp?: string;
    seoAltText?: string;
  };
}

function mapRecord(rec: AirtableRecord): Operation {
  const f = rec.fields;
  const district = f.district     || '';
  const neighborhood = f.neighborhood || '';
  const districtName = f.districtName || district;

  return {
    id:           rec.id,
    photoUrl:     f.photoUrl     || '',
    district,
    districtName,
    neighborhood,
    description:  f.description  || '',
    timestamp:    f.timestamp    || '',
    seoAltText:   f.seoAltText   || `Bursa ${districtName} ${neighborhood} kiralık mobil asansör kurulumu`,
  };
}

export async function fetchOperations(opts?: {
  limit?: number;
  districtSlug?: string;
  offset?: string;
}): Promise<{ records: Operation[]; nextOffset?: string }> {
  const params = new URLSearchParams();

  params.set('sort[0][field]',     'timestamp');
  params.set('sort[0][direction]', 'desc');

  if (opts?.limit) params.set('pageSize', String(opts.limit));
  if (opts?.districtSlug) {
    params.set('filterByFormula', `{district}="${opts.districtSlug}"`);
  }
  if (opts?.offset) params.set('offset', opts.offset);

  const res = await fetch(`${AIRTABLE_URL}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Airtable error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json() as { records: AirtableRecord[]; offset?: string };

  return {
    records:    json.records.map(mapRecord),
    nextOffset: json.offset,
  };
}
