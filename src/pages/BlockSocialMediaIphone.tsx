import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "How to Block Social Media on iPhone (2026 Guide)";
const description =
  "Block Instagram, TikTok, YouTube, Reddit and X on iPhone — apps and the browser versions most guides forget. Free Screen Time methods plus what to do when they fail.";
const path = "/blog/block-social-media-iphone";

const faqs = [
  {
    question: "How do I block all social media on my iPhone?",
    answer:
      "Combine two steps: add a Screen Time App Limit for the Social category, then block the matching websites under Content & Privacy Restrictions → Web Content → Never Allow. Blocking apps alone leaves every browser version open.",
  },
  {
    question: "Can I block social media apps for free on iPhone?",
    answer:
      "Yes. Screen Time App Limits, website blocking, and reinstall restrictions are all built into iOS at no cost. The limitation isn't price; it's that you hold the passcode.",
  },
  {
    question: "Why can I still use TikTok or Instagram after blocking the app?",
    answer:
      "Because you blocked only the app. Both platforms run fully in Safari. Add tiktok.com and instagram.com under Never Allow to close that route.",
  },
  {
    question: "How do I block Instagram but keep my messages?",
    answer:
      "You can't split them inside Instagram; blocking the app blocks DMs too. Most people switch to a different messaging app for the contacts that matter, then block Instagram fully.",
  },
  {
    question: "Can I block Instagram Reels without blocking Instagram?",
    answer:
      "Not through Instagram or iOS. There's no official setting to disable Reels, and Screen Time can't block part of an app. Only specialised third-party tools attempt it.",
  },
  {
    question: "How do I block social media only at night?",
    answer:
      "Use Screen Time Downtime with a schedule, and enable Block at Downtime. For a block that holds when you're tired, use a dedicated blocker instead; Downtime can be skipped in one tap.",
  },
  {
    question: "What's the best way to block social media permanently on iPhone?",
    answer:
      "Delete the apps, block reinstalls, block the websites, and add a blocker without an override button. Any single layer on its own can be undone in under a minute.",
  },
];

const tableRows = [
  {
    platform: "Instagram",
    app: "App Limit or delete",
    domains: "instagram.com",
    gotcha: "Reels can't be disabled separately; Instagram has no setting for it",
  },
  {
    platform: "TikTok",
    app: "App Limit or delete",
    domains: "tiktok.com, tiktokv.com",
    gotcha: "Browser version works fully without the app",
  },
  {
    platform: "YouTube",
    app: "App Limit",
    domains: "youtube.com, m.youtube.com",
    gotcha: "Blocking the domain also breaks embedded videos on other sites",
  },
  {
    platform: "Reddit",
    app: "App Limit or delete",
    domains: "reddit.com, old.reddit.com",
    gotcha: "Old Reddit is a separate domain and stays open otherwise",
  },
  {
    platform: "X / Twitter",
    app: "App Limit",
    domains: "x.com, twitter.com",
    gotcha: "Both domains are live — blocking one leaves the other",
  },
];

const schema = blogPostSchema(path, faqs);

const BlockSocialMediaIphone = () => {
  useEffect(() => {
    setCanonical(path);
    setSocialMeta({ title, description, path, type: "article" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 sm:pt-32">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to the blog
        </Link>

        <article className="blog-content mt-10">
          <header className="border-b border-border pb-10">
            <p className="section-label">Screen Time</p>
            <h1>{getRoute(path).headline}</h1>
          </header>

          <p>Most guides on how to block social media on iPhone tell you to set a Screen Time limit and stop there. Then you hit the limit, open Safari, and Instagram loads anyway.</p>
          <p>Here's the rule every guide skips: blocking the app is only half a block. Every major social platform has a full browser version, so a real block is always two blocks: the app and the website.</p>
          <p>Here are the methods that work, from free to strongest.</p>

          <h2>Method 1: Block social media apps with Screen Time</h2>
          <p>The built-in option, free on every iPhone.</p>
          <ul>
            <li>Settings → Screen Time → App Limits → Add Limit</li>
            <li>Select Social, or pick individual apps like Instagram and TikTok</li>
            <li>Set the limit — on recent iOS versions, you can set it to zero for a full block</li>
            <li>Turn on Block at End of Limit</li>
            <li>Set a Screen Time passcode under Lock Screen Time Settings</li>
          </ul>
          <p>The weakness: without that passcode, iOS hands you "Ignore Limit for Today" and the block is one tap from gone. With it, you still know the code you just created. Screen Time was designed for parents controlling a child's device, not for blocking yourself.</p>

          <h2>Method 2: Block social media websites in Safari</h2>
          <p>This is the step almost everyone misses, and it's the one that makes the block hold.</p>
          <p>Settings → Screen Time → Content & Privacy Restrictions → Content Restrictions → Web Content → Limit Adult Websites, then add domains under Never Allow.</p>
          <h3>Add all of these:</h3>
          <ul>
            <li>instagram.com</li>
            <li>tiktok.com</li>
            <li>youtube.com</li>
            <li>reddit.com and old.reddit.com</li>
            <li>x.com and twitter.com</li>
            <li>facebook.com and m.facebook.com</li>
          </ul>
          <p>People report that TikTok "still works" after blocking it because they block the app without the website. Add both every time.</p>

          <h2>Method 3: Delete the app and block reinstalls</h2>
          <p>If you don't need the account on your phone, the cleanest option is to remove it.</p>
          <ul>
            <li>Long-press the app → Remove App → Delete App</li>
            <li>Settings → Screen Time → Content & Privacy Restrictions → iTunes & App Store Purchases → Installing Apps → Don't Allow</li>
          </ul>
          <p>Without step two, the App Store is one search away at 1 am. With it, reinstalling requires turning the restriction off first — a small but real barrier.</p>

          <h2>Method 4: Block social media with DNS filtering</h2>
          <p>DNS services like NextDNS, CleanBrowsing, or OpenDNS block social platforms across every device on your network, and they're hard to bypass casually.</p>
          <p>The catch is important: router-level blocking only covers your Wi-Fi. Switch to cellular data and every blocked site loads instantly. Treat DNS as a home-network layer, never as your only block.</p>

          <h2>Method 5: Use a dedicated app blocker</h2>
          <p>Every method above shares one flaw: you hold the off switch, and turning it off takes seconds.</p>
          <p>That's the actual failure point. People rarely delete their blocker or reset their phone; they tap the override, because it's free and instant.</p>
          <p>A dedicated iPhone app blocker fixes that by making the unlock cost something. That's what Pause does: no pause button to tap, a challenge before access instead of a one-tap escape, daily limits that hold instead of quietly resetting, and website blocking alongside app blocking so Safari isn't a side door.</p>
          <p><a href={SITE.appStoreUrl} className="font-semibold text-accent transition-opacity hover:opacity-80">Download Pause for iPhone</a> if you already know you're the one who bypasses.</p>

          <h2>Quick reference: blocking each platform</h2>
          <div className="my-10 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 pr-4 font-semibold">Platform</th>
                  <th className="py-3 pr-4 font-semibold">Block the app</th>
                  <th className="py-3 pr-4 font-semibold">Also block these</th>
                  <th className="py-3 font-semibold">Gotcha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tableRows.map((row) => (
                  <tr key={row.platform} className="align-top">
                    <td className="py-3 pr-4 font-semibold">{row.platform}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{row.app}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{row.domains}</td>
                    <td className="py-3 text-muted-foreground">{row.gotcha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Which method should you use?</h2>
          <p>Match the method to how you fail:</p>
          <ul>
            <li>You've never set anything up → Screen Time App Limits today. Free, five minutes.</li>
            <li>You keep opening the browser version → Method 2, the website block. Non-negotiable.</li>
            <li>You reinstall the app late at night → Method 3, delete plus block reinstalls.</li>
            <li>You want it gone for the whole household → Method 4, DNS, plus a device-level block for cellular.</li>
            <li>You set everything up and still tap past it → Method 5, a blocker with no override.</li>
          </ul>
          <p>Most people need two of these, not one. App block plus website block is the minimum that actually holds.</p>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Block the app and the browser, in one place.</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>FAQs</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map(({ question, answer }) => (
              <section key={question} className="py-6">
                <h3 className="mt-0">{question}</h3>
                <p className="mb-0">{answer}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlockSocialMediaIphone;
