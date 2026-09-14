# Pause Product-Accuracy Update

Update the existing Pause marketing site without changing its approved visual design. The current Deep Forest palette, typography, navigation treatment, buttons, cards, spacing, animations, phone frames, header, footer, shadows, and mobile patterns remain the design system.

## Homepage content and flow

1. **Navigation and hero**
   - Keep the current header layout and mobile menu.
   - Change navigation to **How It Works**, **Features**, **Insights**, and **FAQ**.
   - Change the primary CTA everywhere to **Get Pause Free** with **Available on iPhone** or **Free on iPhone. No account required.** where specified.
   - Use the supplied hero headline and supporting copy.
   - Keep the existing hero phone frame, but replace its current four-rule screen with a tasteful Pause block screen and short quote.
   - Add a compact trust row near the hero: **Free right now**, **No account**, **No ads**, and **Your block lists stay on your phone**.

2. **Positioning**
   - Rework an existing text-led section into **“Blocking an app is easy. Not unblocking it is the hard part.”**
   - Include the override examples and prominently highlight the 10:47 PM / 9:00 AM line.
   - Reinforce the central idea: Pause makes a person's pre-decided limits harder to undo impulsively.

3. **Five blocking methods**
   - Replace the current four-rule model with the accurate five-method model: **Pause**, **Schedule**, **Time Limit**, **Open Limit**, and **Friction Lock**.
   - Rename the current “Session” terminology to **Pause** throughout public content and mockups.
   - Reuse the existing overview-card grid for **“One app. Five ways to stop.”**
   - Reuse the current alternating phone-and-copy sections for concise explanations and accurate UI examples for all five methods.
   - Give Friction Lock slightly more prominence within the same existing layout, covering Math Challenge, the 20-character Password Challenge, and the choice of 1–10 correct challenges in a row.

4. **App Lists and website blocking**
   - Repurpose the existing card-grid language for **“Block the distraction, wherever it hides.”**
   - Explain that an **App List** groups apps and supported websites, using Social Media, Work, Night, Deep Focus, and Morning examples.
   - Make **“Reddit in Safari is still Reddit.”** prominent and explain website blocking as protection against browser workarounds.
   - Use “App List” consistently and never introduce Allow Lists.

5. **Strict protections and emergency access**
   - Expand the existing enforcement section, preserving its current two-column/card styling.
   - Explain **Emergency Exits** as limited, configurable escape hatches with the supplied “2 exits / replenishes in 7 days” example.
   - Explain **Strict Mode** precisely, including protection against deleting Pause while restrictions are active, without claiming bypass is impossible.
   - Add an existing-style card section for anti-weasel protections:
     - a 30-second wait plus typing **“I choose to change my plan”** before changing an active rule;
     - protected App Lists that can become stricter during a block but cannot have protected apps quietly removed.

6. **Block screens, Insights, calculator, and Shortcuts**
   - Reuse the current iPhone frame and horizontal showcase for compact block-screen quote examples and accurate feature mockups.
   - Add an **Insights** section with Day, Week, Month, and Year views plus simple historical trend charts. Do not add streaks, goals, per-app analytics, scores, badges, or social features.
   - Add a small interactive time-savings calculator using the existing control and card styles. Its weekly, monthly, and yearly totals will be clearly labeled as hypothetical arithmetic based on the visitor's chosen daily reduction.
   - Add a compact Siri and Shortcuts feature area with the supplied example commands and no implication of Apple endorsement.

7. **Trust, comparison, and free positioning**
   - Replace the generic privacy card with the specific four-part trust message: no account, no ads, blocking data stays on-device, and one minimal anonymous daily usage ping.
   - Add the generic **Pause vs Typical App Blocker** comparison using the requested rows, without naming competitors or making exclusivity claims.
   - Use the current CTA section style for **“Your screen time doesn't need another subscription.”** and state **“Pause is free right now.”**
   - Do not display pricing, purchase flows, testimonials, ratings, or customer-result claims.

8. **FAQ, final CTA, footer, and public metadata**
   - Keep the existing FAQ accordion and replace its content with the supplied product-accuracy questions and answers, including Screen Time permission, website blocking, Emergency Exits, local data, and Apple's 50-app App List limit.
   - Keep the final CTA design and use **“Make distraction harder.”** with **Get Pause Free** and **Available on iPhone**.
   - Keep the footer layout and copyright format while updating links and brand line.
   - Update the privacy page, terms page, search/social metadata, structured data, and `llms.txt` so public descriptions match the five methods, free-right-now status, website blocking, and precise data practices.

## Accuracy guardrails

Before completion, scan all public-facing copy and mockups to remove or avoid:

- “Modes” for the five blocker types, “Session” as the blocker name, and Allow List terminology
- Android download prompts or Android availability claims beyond the FAQ's “not right now” answer
- NFC cards, hardware, physical products, purchases, subscriptions, lifetime pricing, “pay once,” or “free forever”
- “No tracking,” “zero data collection,” or other absolute privacy claims
- fake testimonials, ratings, statistics, time-saved results, or unsupported product features

## Technical implementation

- Extend the existing shared content configuration from four entries to five.
- Reuse `RuleSection`, `PhoneFrame`, `surface-card`, the existing motion patterns, and semantic color tokens.
- Add only focused sections and mockup variants needed for the missing product features; no new theme, fonts, layout language, or animation system.
- Keep the comparison and calculator fully responsive and accessible on mobile and desktop.
- Keep JSON-LD synchronized with the visible FAQ and app description.
- Validate with type checks, the production build, and browser checks at desktop and mobile sizes, including menu links, accordion behavior, calculator math, section anchors, text wrapping, and overflow.

## App Store link

The current download destination is still a placeholder (`#`). CTA labels will be updated now, but the buttons will remain placeholders until the live Pause App Store URL is provided.
