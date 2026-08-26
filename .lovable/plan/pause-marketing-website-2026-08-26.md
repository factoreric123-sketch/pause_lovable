# Pause — Marketing Website

A full rebuild of the site as a premium, Apple-native marketing page for **Pause**, an iPhone screen-time app built around four rules: Session, Schedule, Time Limit, Open Limit.

## Look and feel

Deep Forest direction: dark-first, calm, premium.

- Background `#0d1512`, raised surfaces `#16211d`, primary green `#2f6f63`, mint highlight `#a9d8c8`
- Large display typography, generous whitespace, fully rounded cards and buttons
- Subtle green radial glows, soft borders, gentle scroll-reveal animations
- The pause icon you uploaded becomes the logo and favicon

## Page structure (single scrolling homepage)

1. **Sticky nav** — Logo | How It Works | Rules | FAQ | Download for iPhone
2. **Hero** — "Use your phone on your terms." Sub: rules that stop distracting apps from taking over your day. Primary CTA + App Store badge, secondary "See How It Works". iPhone mockup showing the Rules screen.
3. **The core idea** — "One limit doesn't work for everything." Followed by the four rules introduced visually.
4. **Rule 1 Session** — "Block it for now." 45 minutes, Instagram/TikTok/YouTube, plus the "perfect for" list. iPhone mockup.
5. **Rule 2 Schedule** — "Make distraction-free time automatic." Weekdays 5:00 PM to 10:00 PM example plus Work / Morning / Wind Down presets.
6. **Rule 3 Time Limit** — "Enjoy it. Just not all day." Instagram 45 min/day, portion-control framing.
7. **Rule 4 Open Limit** — "Stop checking without thinking." Instagram 10 opens/day, habit-check app examples.
8. **Four rules overview** — "Four ways to take back control." Four cards with the exact one-liners you supplied.
9. **Hard Mode** — "For when you know you'll try to cheat." Described only as stricter controls chosen when creating a rule (Hard Mode / Disable Resets), no exaggeration.
10. **Why it works** — "Don't rely on willpower. Create rules instead." Impulse → Rule → Back to your life visual.
11. **Use cases** — "A rule for every distraction." Five examples, each tagged with its rule type.
12. **Screenshot showcase** — horizontal scroll through Session → Schedule → Time Limit → Open Limit in iPhone frames.
13. **Privacy** — "Your habits are your business." Written generically until you confirm the specifics.
14. **FAQ** — accordion with all the questions you listed, including iPhone-only and Android-not-yet.
15. **Final CTA** — "Set the rule. Get back to your life." plus App Store badge.
16. **Footer** — Features, How It Works, FAQ, Contact, Privacy Policy, Terms & Conditions, App Store link.

## App screens

The four rule screens are recreated in code as styled iPhone mockups (rounded frame, status bar, app-row lists, time pickers, toggles) matching the section content. When you upload the real screenshots, they drop into the same frames with no layout change.

## Site cleanup

The existing Detach card/shop content is retired:

- New pages: Home, Contact, Privacy Policy, Terms & Conditions
- Removed from routing and nav: shop, blog and blog posts, reviews, life-in-dots, facts, comparison pages, FAQ variants, unsubscribe
- Old landing components and blog data files deleted
- `index.html` title, description, and social tags updated for Pause; sitemap and `robots.txt` reduced to the remaining pages
- Backend functions (Stripe checkout, order emails, blog sync) are left in place but unreferenced by the site

## Needs your input before launch

- App Store URL for Pause — CTAs will point to a placeholder `#` until you provide it
- Exact privacy wording (e.g. whether data stays on device) — a neutral placeholder is used meanwhile

## Technical notes

- New `src/components/pause/*` components, one per section, all content driven by arrays at the top of each file for easy editing
- Design tokens redefined in `index.css` and `tailwind.config.ts` as HSL semantic variables; no hardcoded colors in components
- Framer Motion for scroll reveals, shadcn Accordion for FAQ
- JSON-LD SoftwareApplication schema updated for Pause, iOS only
