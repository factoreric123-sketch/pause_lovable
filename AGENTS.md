# Project Architecture Rules

- Keep the public App Store URL and primary download label in `src/config/site.ts` so all website calls to action stay synchronized.- Prerendering: `bun run build` runs a client build, an SSR build of src/entry-server.tsx, then scripts/prerender.mjs writes static HTML per route in src/prerender-routes.ts; add new public routes there so crawlers get real HTML and head tags.
