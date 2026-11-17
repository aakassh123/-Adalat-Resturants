# Adalat Restaurant — website

Next.js 15 (App Router) · Framer Motion · CSS Modules

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to edit things
| What | File |
|---|---|
| Phone numbers, address, hours, social links, branches | `app/lib/siteConfig.js` (single source of truth) |
| Menu items + SEO text | `app/data/menuData.js` |
| Menu SEO titles | `app/data/recipeMetadata.js` |
| Colours / fonts / base styles | `app/globals.css` |
| Scroll animations | `components/Hero`, `Features`, `HandiSection`, `MenuSection`, `CTASection`, `Reveal` |

## Images
- Local images live in `public/` (WebP). Menu/landing images are loaded from the GitHub image repo
  via direct `raw.githubusercontent.com` URLs (allowed in `next.config.mjs`).
  Recommended: move them to Cloudinary and update `remotePatterns`.
- `unused-assets/` holds files that were in `public/` but never referenced. Safe to delete.

## Notes
- Landing pages (`/best-*`, `/famous-*`) still contain `aggregateRating` structured data
  (ratings/review counts). Keep only if these match your real Google reviews.
- `prefers-reduced-motion` is respected: pinned/parallax effects switch off automatically.
