// Per-route head metadata baked into prerendered HTML. Keep in sync with each page's setSocialMeta call.
export interface RouteMeta { path: string; title: string; description: string; type: "website" | "article"; headline?: string; datePublished?: string; dateModified?: string }

export const PRERENDER_ROUTES: RouteMeta[] = [
  { path: "/", type: "website", title: "Pause – Strict App & Website Blocker for iPhone", description: "Download Pause free on iPhone to block distracting apps and websites with focus sessions, daily limits, and challenges before access." },
  { path: "/blog", type: "website", title: "Pause Blog | Screen Time That Actually Holds", description: "Practical guides to blocking distracting apps and websites, closing Screen Time loopholes, and making your limits harder to undo." },
  { path: "/blog/delete-app-blocker-bypass-iphone", type: "article", headline: "Can't I Just Delete the App Blocker? What Actually Happens on iPhone", datePublished: "2026-09-24", dateModified: "2026-09-24", title: "Can You Delete an App Blocker to Bypass It? iPhone Truth", description: "Can you bypass an iPhone app blocker by deleting it? Here's what actually happens, which blocks survive uninstall, and why deletion isn't the real fix." },
  { path: "/blog/best-app-blockers-iphone", type: "article", headline: "Best App Blockers for iPhone (2026): Ranked by How Hard They Are to Bypass", datePublished: "2026-09-27", dateModified: "2026-09-27", title: "Best App Blockers for iPhone (2026): Tested by Bypass", description: "The best iPhone app blockers in 2026, ranked by how hard each one is to bypass — not by feature lists. Includes free options and where every blocker still fails." },
  { path: "/blog/block-social-media-iphone", type: "article", headline: "How to Block Social Media on iPhone (Instagram, TikTok, YouTube, Reddit, X)", datePublished: "2026-09-30", dateModified: "2026-09-30", title: "How to Block Social Media on iPhone (2026 Guide)", description: "Block Instagram, TikTok, YouTube, Reddit and X on iPhone — apps and the browser versions most guides forget. Free Screen Time methods plus what to do when they fail." },
  { path: "/blog/opal-alternatives", type: "article", headline: "Opal Alternatives for iPhone (2026): Is It Worth $99 a Year?", datePublished: "2026-10-02", dateModified: "2026-10-02", title: "Opal Alternatives for iPhone: Is It Worth $99 a Year?", description: "Opal costs $99.99 a year and its free plan allows just one rule. Compare the best Opal alternatives for iPhone in 2026, including free options with strict modes." },
  { path: "/blog/brick-alternatives", type: "article", headline: "Brick Alternatives for iPhone (2026): Do You Need the Hardware?", datePublished: "2026-10-05", dateModified: "2026-10-05", title: "Brick Alternatives for iPhone: Do You Need Hardware?", description: "Brick costs $59 for a physical puck. Compare the best Brick alternatives for iPhone in 2026 — free software and NFC options — and when the hardware is worth it." },
  { path: "/blog/jomo-alternatives", type: "article", headline: "Jomo Alternatives for iPhone (2026): When You Need a Block Without a Break", datePublished: "2026-10-07", dateModified: "2026-10-07", title: "Jomo Alternatives for iPhone: Blocks Without a Break", description: "Jomo costs $29.99 a year and is built around mindful breaks. Compare the best Jomo alternatives for iPhone in 2026 — including free blockers with no break button." },
  { path: "/blog/remove-ignore-limit-screen-time", type: "article", headline: "How to Remove \"Ignore Limit\" on Screen Time (And Why It Still Won't Stop You)", datePublished: "2026-09-22", dateModified: "2026-09-22", title: "How to Remove Ignore Limit on Screen Time (iPhone 2026)", description: "Remove the Ignore Limit option on Screen Time in two steps — plus the loophole nobody mentions, and why a passcode you already know won't stop you." },
  { path: "/contact", type: "website", title: "Contact | Pause", description: "Get in touch with the Pause team for support, feedback or questions about the app." },
  { path: "/privacy-policy", type: "website", title: "Privacy Policy | Pause", description: "How Pause handles your information." },
  { path: "/terms", type: "website", title: "Terms & Conditions | Pause", description: "The terms that apply when you use Pause." },
];

export const getRoute = (path: string): RouteMeta => {
  const r = PRERENDER_ROUTES.find((x) => x.path === path);
  if (!r) throw new Error(`No route meta for ${path}`);
  return r;
};
export const BLOG_POSTS = PRERENDER_ROUTES.filter((r) => r.type === "article");
