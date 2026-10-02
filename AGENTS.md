# Project Architecture Rules

- Keep the public App Store URL and primary download label in `src/config/site.ts` so all website calls to action stay synchronized.- Prerendering: `bun run build` runs a client build, an SSR build of src/entry-server.tsx, then scripts/prerender.mjs writes static HTML per route in src/prerender-routes.ts; add new public routes there so crawlers get real HTML and head tags.
- Structured data: pages render one JSON-LD graph inline from builders in src/lib/schema.ts, reading post headline/dates from src/prerender-routes.ts and FAQs from the same arrays the page displays, so schema ships in prerendered HTML and can't drift from visible text.
- Prerender-safe motion: use the shared Reveal wrapper for entrance animations so server HTML stays visible and animations begin only after hydration.
- Screenshot delivery: serve size-matched WebP variants through asset pointers for displayed screenshots, keeping original source images separate so mobile transfers stay small.
