import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "How to Block TikTok on iPhone (App and Website)";
const description =
  "Blocking the TikTok app leaves tiktok.com open in Safari, and TikTok's own screen time limits can be dismissed. Here is how to block TikTok properly, free.";
const path = "/blog/block-tiktok-iphone";
const linkClass = "text-accent underline underline-offset-4 hover:text-foreground";

const faqs = [
  { question: "How do I block TikTok on my iPhone?", answer: "Combine two steps. Add a Screen Time App Limit for the TikTok app, then block tiktok.com and www.tiktok.com under Content and Privacy Restrictions. Blocking the app alone leaves the browser version fully available." },
  { question: "Why can I still watch TikTok after blocking the app?", answer: "Because tiktok.com works completely in Safari. Unless you add the domain under Never Allow, blocking the app just moves your habit into the browser." },
  { question: "Does TikTok's screen time limit actually work?", answer: "Not as a block. When you hit the limit, TikTok asks for a passcode that you set yourself, so you can dismiss it whenever you want. It is useful for awareness and ineffective as a limit." },
  { question: "How do I block TikTok permanently on iPhone?", answer: "Delete the app, block reinstalls under Content and Privacy Restrictions, and block the websites. Nothing on iOS is permanent in the strict sense, since the phone's owner can always reverse it, but that combination holds far longer than any single step." },
  { question: "Can I block TikTok only at certain times?", answer: "Yes. Use a schedule rather than a daily limit, covering the hours you want it gone. Turn off any override before the schedule starts, because a block you can dismiss will get dismissed when you are tired." },
  { question: "Is there a free TikTok blocker for iPhone?", answer: "Yes. Pause and ScreenZen are both free and block apps and websites. Apple Screen Time is free as well, but its Ignore Limit option makes it the easiest on this list to bypass." },
  { question: "Does deleting TikTok actually help?", answer: "It helps if you also block reinstalls and block the website, because otherwise the App Store and Safari are both one tap away. Deleting on its own usually lasts a few days." },
];

const schema = blogPostSchema(path, faqs);

const BlockTiktokIphone = () => {
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

          <p>You have probably already tried TikTok's own screen time limit. You set an hour, hit it a few days later, and then discovered you could tap straight past it using a passcode you chose yourself.</p>
          <p>That is not a bug. TikTok's in-app controls are reminders, built by a company whose revenue depends on you staying.</p>
          <p>Here is how to actually block TikTok on iPhone, free, including the part most guides skip.</p>

          <h2>Why TikTok's own limits do nothing</h2>
          <p>TikTok ships a daily screen time limit and screen time breaks inside the app. They look like controls.</p>
          <p>When you reach the limit, a screen appears asking for a passcode. You set that passcode. At eleven at night, typing four digits you already know is not friction; it is a formality.</p>
          <p>Use them if you want to see where your time goes. Do not expect them to stop you.</p>

          <h2>Why blocking the TikTok app is not enough</h2>
          <p>tiktok.com works fully in a browser. The full feed, the For You page, everything. Block the app and leave the website, and you have moved your habit from the app to Safari, which is where most people end up within a week.</p>
          <p>TikTok Lite exists as a separate app in some regions. If it is available where you are, blocking TikTok without blocking Lite leaves an obvious door open.</p>
          <p>A real block covers the app and the web, not just the icon.</p>

          <h2>Method one: block the TikTok app with Screen Time</h2>
          <p>Go to Settings, then Screen Time, then App Limits, then Add Limit. Select Social Networking or search for TikTok specifically. Set your limit, and on recent iOS versions you can set it to zero for a full block.</p>
          <p>Turn on Block at End of Limit. Then set a passcode under Lock Screen Time Settings.</p>
          <p>Same weakness as TikTok's own version, though. Without a passcode, iOS offers <Link to="/blog/remove-ignore-limit-screen-time" className={linkClass}>“Ignore Limit for Today”</Link> the moment you hit the limit. With one, you still know the code because you created it.</p>

          <h2>Method two: block the TikTok websites</h2>
          <p>This is the step that makes the block hold, and the one most guides leave out.</p>
          <p>Go to Settings, Screen Time, Content and Privacy Restrictions, Content Restrictions, Web Content, and choose Limit Adult Websites. Then add these under Never Allow:</p>
          <ul>
            <li>tiktok.com</li>
            <li>www.tiktok.com</li>
          </ul>
          <p>Add both. Skipping the website is the single most common reason people say blocking TikTok did not work for them.</p>

          <h2>Method three: delete TikTok and block reinstalls</h2>
          <p>If you do not need the account on your phone, removal is cleanest.</p>
          <p>Long-press TikTok, choose Remove App, then Delete App.</p>
          <p>Then go to Settings, Screen Time, Content and Privacy Restrictions, iTunes and App Store Purchases, Installing Apps, and set it to Don't Allow.</p>
          <p>Without that second step, the App Store is one search away at midnight. With it, reinstalling means turning a restriction off first, which is a small but real barrier.</p>

          <h2>Method four: use a blocker with no override</h2>
          <p>Everything above shares one flaw. You hold the off switch, and flipping it takes seconds.</p>
          <p>That is the actual failure point. Almost nobody <Link to="/blog/delete-app-blocker-bypass-iphone" className={linkClass}>deletes their blocker</Link> or resets their phone. They tap the override, because it is free and instant.</p>
          <p><Link to="/" className={linkClass}>Pause</Link> is free, has no in-app pause button, and blocks websites alongside apps so Safari is not a side door. Before a session starts, you decide whether unlocks are allowed, and with unlocks off there are no ordinary breaks and no early exits. Strict Mode then locks your session settings until it ends.</p>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>If TikTok is mainly a night problem</h2>
          <p>Do not block it around the clock if your scrolling is a bedtime habit. You will resent the block and turn it off within a week.</p>
          <p>Set a schedule covering your evening hours instead, starting before you get into bed, with unlocks off. Configure it during the day while you are rested, not at eleven at night when you are already negotiating with yourself.{" "}
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

export default BlockTiktokIphone;
