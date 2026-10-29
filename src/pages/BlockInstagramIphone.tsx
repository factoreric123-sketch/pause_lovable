import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "How to Block Instagram on iPhone (Including Threads)";
const description = "Blocking the Instagram app leaves instagram.com and Threads wide open. Here is how to block Instagram properly on iPhone, free, including the parts guides miss.";
const path = "/blog/block-instagram-iphone";
const faqs = [
  {
    "question": "How do I block Instagram on my iPhone?",
    "answer": "Add Screen Time App Limits for both Instagram and Threads, then block instagram.com, www.instagram.com, and threads.net under Content and Privacy Restrictions. Blocking the app alone leaves the browser version and Threads fully available."
  },
  {
    "question": "Why can I still use Instagram after blocking the app?",
    "answer": "Because instagram.com works completely in Safari. Unless you add the domain under Never Allow, blocking the app only moves your habit from the app to the browser."
  },
  {
    "question": "Does blocking Instagram also block Threads?",
    "answer": "Not automatically if you block Instagram as an individual app. Threads is a separate app on a separate domain with its own settings, even though it uses your Instagram account. Block it separately, or use a Social Networking category limit that covers both."
  },
  {
    "question": "Can I block Instagram Reels without blocking Instagram?",
    "answer": "No. iPhone blockers operate at app and domain level, not at screen level, so there is no way to block Reels while keeping messages and the main feed available."
  },
  {
    "question": "Does Instagram’s Take a Break feature actually work?",
    "answer": "It works as a reminder, not a block. The prompt appears, and you can dismiss it and keep scrolling. It is useful for awareness and ineffective as a limit."
  },
  {
    "question": "How do I block Instagram only at night?",
    "answer": "Use a scheduled block covering your evening hours rather than an all-day limit, and turn off any override before it starts. A block you can dismiss will get dismissed when you are tired."
  },
  {
    "question": "What is the best free Instagram blocker for iPhone?",
    "answer": "Any blocker that covers both the app and the websites and has no one-tap override. Pause and ScreenZen are both free. Apple Screen Time is free too, but its Ignore Limit option makes it the easiest to bypass on this list."
  }
];
const schema = blogPostSchema(path, faqs);

const BlockInstagramIphone = () => {
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
          <p>Most guides tell you to set a Screen Time limit on the Instagram app. Then you hit the limit, open Safari, load instagram.com, and nothing has changed.</p>

          <p>And even if you block both, there is a third door almost nobody mentions. Threads uses your Instagram account, has its own app, its own domain, and its own feed. Block Instagram without blocking Threads, and Meta just moves you sideways.</p>

          <p>Here is how to block Instagram properly on iPhone, free, including the parts other guides leave out.</p>

          <h2>Why blocking the Instagram app is not enough</h2>

          <p>Three surfaces, not one.</p>

          <p>The app. The obvious one, and the only one most guides cover.</p>

          <p>The website. instagram.com in Safari is fully functional. Feed, stories, reels, messages. Blocking the app without the site just moves your habit into the browser.</p>

          <p>Threads. This is the one people miss. Meta launched Threads using your Instagram login, and it has since become genuinely separate. It even has its own time limit settings, managed apart from Instagram’s. Separate app, separate domain, same account and the same endless feed.</p>

          <p>If your problem is scrolling rather than Instagram specifically, leaving Threads open solves nothing.</p>

          <h2>Method one: block the apps with Screen Time</h2>

          <p>Go to Settings, then Screen Time, then App Limits, then Add Limit. Add Instagram and Threads as separate entries, or select the Social Networking category to cover both. Set your limit, and on recent iOS versions you can set it to zero for a full block.</p>

          <p>Turn on Block at End of Limit, then set a passcode under Lock Screen Time Settings.</p>

          <p>The weakness is the one every adult hits. When the limit arrives, iOS offers “Ignore Limit for Today” unless a passcode is set, and if you set that passcode yourself, then you know it. Typing four digits you have memorised is not friction.</p>

          <h2>Method two: block the websites</h2>

          <p>This is the step that makes the block hold.</p>

          <p>Go to Settings, Screen Time, Content and Privacy Restrictions, Content Restrictions, Web Content, and choose Limit Adult Websites. Then add these under Never Allow:</p>

          <ul><li>instagram.com</li><li>www.instagram.com</li><li>threads.net</li></ul>

          <p>Add all three. Blocking one and leaving the others is the most common reason people say blocking Instagram did not work for them.</p>

          <h2>Method three: delete and block reinstalls</h2>

          <p>If you do not need the account on your phone, removal is cleanest.</p>

          <p>Long-press Instagram, choose Remove App, then Delete App. Do the same for Threads.</p>

          <p>Then go to Settings, Screen Time, Content and Privacy Restrictions, iTunes and App Store Purchases, Installing Apps, and set it to Don’t Allow.</p>

          <p>Without that second step, the App Store is one search away at midnight. With it, reinstalling means turning a restriction off first.</p>

          <h2>Why Instagram’s own Take a Break feature does nothing</h2>

          <p>Instagram ships usage reminders and daily limits inside the app, and Threads now has its own.</p>

          <p>They are reminders. A card appears, you tap past it, you carry on scrolling. They are designed by the company whose revenue depends on you staying, which tells you how firm they were ever going to be.</p>

          <p>Use them if you want awareness of your usage. Do not expect them to stop you.</p>

          <h2>Method four: a blocker with no override</h2>

          <p>Every method above shares one flaw. You hold the off switch, and flipping it takes seconds.</p>

          <p>That is the real failure point. Almost nobody deletes their blocker or resets their phone. They tap the override, because it is free and instant.</p>

          <p>Pause is free, has no in-app pause button, and blocks websites alongside apps so Safari is not a side door. Before a session starts, you decide whether unlocks are allowed, and with unlocks off there are no breaks and no early exits. Strict Mode then locks your session settings until it ends.</p>

          <aside className="blog-callout">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>Can you block Instagram Reels only?</h2>

          <p>No, and it is worth being clear about this.</p>

          <p>iPhone blockers work at app and domain level, because that is all Apple’s framework exposes. Nothing can block Reels while leaving your messages and feed working. Blocking Instagram blocks all of Instagram.</p>

          <p>A few third-party tools attempt it with workarounds, but there is no reliable native way to do it on iOS.</p>

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

export default BlockInstagramIphone;
