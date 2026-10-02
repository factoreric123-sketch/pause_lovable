# Fix prerendered homepage output

## Changes
- Keep all homepage FAQ answers mounted in the static HTML while preserving the current collapsed accordion behavior.
- Add a hydration-aware animation wrapper so server-rendered primary content is visible, then retain the existing entrance animations after the client loads.
- Stop runtime canonical creation and rely on one build-time canonical per prerendered route.
- Remove the keywords tag and the standalone WebSite JSON-LD from `index.html`.
- Build one homepage JSON-LD graph containing SoftwareApplication, Organization, WebSite, and FAQPage nodes with stable `@id` references.
- Serve a share image from `pauseappblocker.com`, add matching Open Graph and X image tags, and include `og:image:alt`.

## Verification
- Inspect built homepage HTML for all nine FAQ answers, no primary-content `opacity:0`, one canonical, no keywords, one linked JSON-LD graph, and local-domain image metadata.
- Load the hydrated homepage to confirm one canonical remains and accordion and entrance animation behavior are unchanged.

## Technical details
- Use one small client-hydration hook/helper for Framer Motion initial states instead of removing animation behavior.
- Preserve route-specific prerender metadata and the existing React routing/hydration setup.
