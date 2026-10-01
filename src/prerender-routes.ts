// Per-route head metadata baked into prerendered HTML. Keep in sync with each page's setSocialMeta call.
export interface RouteMeta { path: string; title: string; description: string; type: "website" | "article" }

export const PRERENDER_ROUTES: RouteMeta[] = [
  { path: "/", type: "website", title: "Pause – Strict App & Website Blocker for iPhone", description: "Download Pause free on iPhone to block distracting apps and websites with focus sessions, daily limits, and challenges before access." },
  { path: "/blog", type: "website", title: "Pause Blog | Screen Time That Actually Holds", description: "Practical guides to blocking distracting apps and websites, closing Screen Time loopholes, and making your limits harder to undo." },
  { path: "/blog/delete-app-blocker-bypass-iphone", type: "article", title: "Can You Delete an App Blocker to Bypass It? iPhone Truth", description: "Can you bypass an iPhone app blocker by deleting it? Here's what actually happens, which blocks survive uninstall, and why deletion isn't the real fix." },
  { path: "/blog/best-app-blockers-iphone", type: "article", title: "Best App Blockers for iPhone (2026): Tested by Bypass", description: "The best iPhone app blockers in 2026, ranked by how hard each one is to bypass — not by feature lists. Includes free options and where every blocker still fails." },
  { path: "/blog/block-social-media-iphone", type: "article", title: "How to Block Social Media on iPhone (2026 Guide)", description: "Block Instagram, TikTok, YouTube, Reddit and X on iPhone — apps and the browser versions most guides forget. Free Screen Time methods plus what to do when they fail." },
  { path: "/blog/remove-ignore-limit-screen-time", type: "article", title: "How to Remove Ignore Limit on Screen Time (iPhone 2026)", description: "Remove the Ignore Limit option on Screen Time in two steps — plus the loophole nobody mentions, and why a passcode you already know won't stop you." },
  { path: "/contact", type: "website", title: "Contact | Pause", description: "Get in touch with the Pause team for support, feedback or questions about the app." },
  { path: "/privacy-policy", type: "website", title: "Privacy Policy | Pause", description: "How Pause handles your information." },
  { path: "/terms", type: "website", title: "Terms & Conditions | Pause", description: "The terms that apply when you use Pause." },
];
