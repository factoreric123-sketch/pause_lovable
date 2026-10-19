import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "How to Block Reddit on iPhone (App and Website)";
const description =
  "Blocking the Reddit app leaves reddit.com and old.reddit.com open in Safari. Here is how to block Reddit properly on iPhone, free, and make the block hold.";
const path = "/blog/block-reddit-iphone";
const linkClass = "text-accent underline underline-offset-4 hover:text-foreground";

const faqs = [
  { question: "How do I block Reddit on my iPhone?", answer: "Combine two steps. Add a Screen Time App Limit for the Reddit app, then block reddit.com, old.reddit.com and www.reddit.com under Content and Privacy Restrictions. Blocking the app alone leaves the browser version fully available." },
  { question: "Why can I still access Reddit after blocking the app?", answer: "Because you blocked only the app. Reddit works completely in Safari, so unless you add the domains under Never Allow, the block just moves your habit from the app to the browser." },
  { question: "Does Reddit have a screen time limit built in?", answer: "No. Unlike Instagram and TikTok, Reddit does not offer an in-app usage reminder or daily limit. You have to use iOS Screen Time or a third-party app blocker." },
  { question: "How do I block old.reddit.com?", answer: "Add it as a separate entry under Settings, Screen Time, Content and Privacy Restrictions, Content Restrictions, Web Content, Never Allow. It is a different subdomain from reddit.com, so blocking one does not block the other." },
  { question: "Can I block specific subreddits instead of all of Reddit?", answer: "Not with Screen Time, and not with most app blockers, including Pause. These tools work at app and domain level, not at individual URL level, so you cannot block r/one subreddit while allowing the rest. A browser extension on a desktop can do this, but not iOS." },
  { question: "How do I stop scrolling Reddit at night?", answer: "Use a scheduled block covering your evening hours rather than an all-day limit, and turn off any override before it starts. A block you can dismiss will be dismissed when you are tired." },
  { question: "What is the best Reddit blocker for iPhone?", answer: "Any blocker that covers both the app and the websites and has no one-tap override. Pause is free and does both. Apple Screen Time is free too, but its Ignore Limit option makes it the easiest on this list to bypass." },
];

const schema = blogPostSchema(path, faqs);

const BlockRedditIphone = () => {
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
            <p className="section-label">Social media</p>
            <h1>{getRoute(path).headline}</h1>
          </header>

          <p>Blocking Reddit is harder than blocking Instagram, and most guides get it wrong in the same way.</p>
          <p>They tell you to set a Screen Time limit on the Reddit app. Then you hit the limit, open Safari, type reddit.com, and carry on exactly as before.</p>
          <p>Here is how to block Reddit properly on iPhone, including the part almost every guide misses.</p>

          <h2>Why Reddit is harder to quit than other apps</h2>
          <p>Three reasons, and they stack.</p>
          <p><strong>There is no end to the feed.</strong> Instagram tells you when you are caught up. TikTok loops. Reddit simply never runs out, because there is always another subreddit, another comment thread, another reply to the reply.</p>
          <p><strong>Reddit has no built-in time limits.</strong> Instagram and TikTok both ship usage reminders you can set inside the app. Reddit does not. Your only options are iOS Screen Time or a third-party app blocker.</p>
          <p><strong>The browser version is fully usable.</strong> Blocking the app achieves very little on its own, because reddit.com in Safari gives you everything the app does.</p>

          <h2>Method one: block the Reddit app with Screen Time</h2>
          <p>Free and built-in, and the weakest of the four.</p>
          <p>Go to Settings, then Screen Time, then App Limits, then Add Limit. Select Social Networking or search for Reddit specifically. Set your limit, and on recent iOS versions you can set it to zero for a full block.</p>
          <p>Turn on Block at End of Limit, and set a Screen Time passcode under Lock Screen Time Settings.</p>
          <p>The catch is the one every adult runs into. When the limit hits, iOS offers <Link to="/blog/remove-ignore-limit-screen-time" className={linkClass}>“Ignore Limit for Today”</Link> unless you set that passcode, and if you set it yourself, you already know it. At midnight, typing four digits you have memorised is not friction.</p>

          <h2>Method two: block the Reddit websites</h2>
          <p>This is the step that actually matters, and the one most guides skip.</p>
          <p>Go to Settings, then Screen Time, then Content and Privacy Restrictions, then Content Restrictions, then Web Content, and choose Limit Adult Websites. Then add these under Never Allow:</p>
          <ul>
            <li>reddit.com</li>
            <li>old.reddit.com</li>
            <li>www.reddit.com</li>
          </ul>
          <p><strong>The old.reddit.com trap.</strong> Reddit still serves its previous interface on a completely separate subdomain. Block reddit.com and leave old.reddit.com open, and the whole block falls over. A lot of long-time Reddit users default to old.reddit anyway, so for them this is the only domain that matters.</p>
          <p>Add every variant. Blocking one and not the others is the single most common reason people say blocking Reddit did not work.</p>

          <h2>Method three: delete the app and block reinstalls</h2>
          <p>If you do not need the account on your phone, removal is cleanest.</p>
          <p>Long press the Reddit app, choose Remove App, then Delete App.</p>
          <p>Then go to Settings, Screen Time, Content and Privacy Restrictions, iTunes and App Store Purchases, Installing Apps, and set it to Don’t Allow.</p>
          <p>Without that second step, the App Store is one search away at 1 a.m. With it, reinstalling means turning a restriction off first, which is a small but real barrier.</p>

          <h2>Method four: use a blocker with no override</h2>
          <p>Every method above shares the same weakness. You hold the off switch, and flipping it takes seconds.</p>
          <p>That is the actual failure point. Almost nobody <Link to="/blog/delete-app-blocker-bypass-iphone" className={linkClass}>deletes their blocker</Link> or resets their phone. They tap the override, because it is free and instant.</p>
          <p>A dedicated Reddit blocker fixes that by making the unlock cost something. <Link to="/" className={linkClass}>Pause</Link> is free, has no in-app pause button, and blocks websites alongside apps so Safari is not a side door. Before a session starts, you decide whether unlocks are allowed, and with unlocks off there are no ordinary breaks and no early exits. Strict Mode then locks your session settings until it ends.</p>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>What to do if you only scroll Reddit at night</h2>
          <p>If your Reddit habit is a bedtime habit rather than an all-day one, do not block it around the clock. You will resent the block and turn it off within the week.</p>
          <p>Set a schedule covering your evening hours instead, starting before you get into bed, with unlocks turned off. Configure it in the afternoon while you are rested, not at eleven at night when you are already negotiating with yourself.{" "}
            <Link to="/blog/stop-scrolling-at-night" className={linkClass}>How to stop scrolling in bed at night.</Link>
          </p>

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

export default BlockRedditIphone;
