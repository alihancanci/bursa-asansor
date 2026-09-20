<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Bursa Kiralık Asansör CNC — Agent Rules & Skill Configuration

## Project Identity

- **Site:** bursakiralikasansor.com
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, react-i18next
- **Deployment:** Vercel (auto-deploy from `main` branch on GitHub: `alihancanci/bursa-asansor`)
- **Business:** Local elevator rental & moving service covering all 17 Bursa districts
- **Phone/WhatsApp:** +90 505 608 07 00
- **Primary Goal:** Rank #1 in Google/Yandex for "Bursa kiralık asansör" and "Bursa evden eve nakliyat"

## Analytics Stack (Always Preserve)

- Google Analytics 4: `G-J2E99G4FY2`
- Yandex Metrica: `108502604` (Webvisor enabled)
- Microsoft Clarity: `wa8h3s7r2r`
- All tracking fires via `src/lib/analytics.ts` — never duplicate or remove existing events

## Skill Activation Rules

The agent MUST activate the following skills automatically based on task type:

### When Writing or Modifying ANY Code
1. **Read `node_modules/next/dist/docs/`** before touching any Next.js API — breaking changes are real
2. Activate `nextjs-best-practices` skill for App Router patterns
3. Activate `code-reviewer` skill before finalizing — check for performance, security, and accessibility issues
4. Activate `vibe-code-auditor` if generating large amounts of new code (>100 lines)

### When Working on SEO (Pages, Metadata, Schema, Sitemap)
1. Activate `seo-audit` skill — every SEO change must pass the crawlability and indexation checklist
2. Activate `schema-markup` skill — validate schema.org types before deploying
3. Activate `programmatic-seo` skill for district/service page generation
4. Ensure every page has: unique `<title>`, unique `<meta description>`, self-referencing canonical, and at least one `LocalBusiness` or service schema
5. **Never exceed:** title 60 chars, meta description 160 chars, keyword density 1-2%

### When Creating Blog Posts or Landing Pages
1. Activate `content-creator` skill for structure and tone
2. Activate `avoid-ai-writing` skill — content must NOT sound AI-generated
3. Every blog post MUST include: FAQPage schema, HowTo or Article schema, minimum 3 internal links to district pages
4. Target keyword must appear in: H1, first paragraph, one H2, meta title, meta description, and URL slug

### When Making UI/UX Changes
1. Activate `frontend-design` skill
2. Activate `mobile-design` skill — this site's primary traffic is mobile
3. All changes must preserve: dark mode compatibility, `sr-only` AI Fact Sheet div, existing analytics event listeners in `CTASection.tsx`
4. WhatsApp and Phone CTAs must always remain visible above the fold on mobile

### When Debugging or Fixing Errors
1. Activate `systematic-debugging` skill FIRST — do not guess, investigate
2. Activate `debugger` skill for runtime errors
3. Run `npm run build` to verify before pushing to `main`

### When Planning Multi-Step Work
1. Activate `writing-plans` skill to create a plan document
2. Activate `concise-planning` skill for task checklists
3. Use `task.md` artifact to track progress
4. Always request user approval before executing plans with 3+ file changes

## Critical File Map (Never Break These)

| File | Purpose | Rules |
|------|---------|-------|
| `src/app/layout.tsx` | Root layout, all analytics scripts, AI Fact Sheet | Never remove analytics IDs or GEO div |
| `src/lib/analytics.ts` | Event tracking hub | All new buttons must use `trackPhoneClick` or `trackWhatsAppClick` |
| `src/data/index.ts` | DISTRICTS, SERVICES, PHONE_NUMBER, WHATSAPP_LINK | Source of truth — no hardcoding elsewhere |
| `src/app/robots.ts` | SEO crawl rules | Never re-add `locations.kml` to sitemap directives |
| `src/app/sitemap.ts` | XML sitemap | Every new page must be added here with appropriate priority |
| `src/app/[slug]/page.tsx` | Programmatic district+service pages | ISR enabled — preserve `generateStaticParams` |

## SEO Non-Negotiables (Quality Gates)

Before ANY commit touching SEO-related files, verify:

- [ ] No page has a duplicate `<title>` or `<meta description>`
- [ ] All new pages are added to `sitemap.ts`
- [ ] Canonical URLs use absolute paths (`https://bursakiralikasansor.com/...`)
- [ ] Schema JSON-LD is valid (no broken `@id` references)
- [ ] `robots.ts` does not block any new routes
- [ ] Internal links use relative paths, not hardcoded absolute URLs

## Commit Message Convention

Always use this format:
```
<category>: <short description>

Categories: SEO, Analytics, UI, Content, Fix, Refactor, GEO, Perf
Examples:
  SEO: Add /nilüfer-kiralik-mobil-asansor to sitemap with 0.9 priority
  Analytics: Add WhatsApp click event to blog CTA buttons
  Content: Add evden-eve-nakliye-bursa landing page with FAQPage schema
  GEO: Upgrade AI Fact Sheet with 7-section structured knowledge base
```

## Known Issues & Gotchas

- `.kml` files are NOT valid sitemaps — never add `locations.kml` to `robots.ts` sitemap directive
- `react-i18next` requires `"use client"` on any component using `useTranslation()`
- `ServiceMap` component must stay dynamically imported with `ssr: false` — it uses browser-only Leaflet APIs
- Image components must use Next.js `<Image>` — no raw `<img>` tags for content images
- `data-nosnippet="true"` must remain on the GEO AI Fact Sheet div — prevents Google from showing it as a snippet

## Agent Behavior Expectations

- **Always read the relevant skill SKILL.md** before attempting a complex task
- **Never assume** — check actual file contents before making edits
- **Verify before commit** — run `npm run build` if structural changes were made
- **Ask before big changes** — any plan touching 5+ files needs user approval first
- **Preserve existing SEO** — never remove schema, meta tags, or canonical links without explicit instruction
