import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import PostDates from "@/components/pause/PostDates";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/delete-or-block-instagram";
const { title, description } = getRoute(path);
const faqs = [
  {
    "question": "Should I delete Instagram or just block it?",
    "answer": "Block it if your direct messages matter, since blocking preserves your account, DMs, and history while removing open-ended scrolling. Delete it if you can afford to lose easy DM access, because deletion is simpler and requires no setup. The DM question decides it more reliably than how much time you spend on the app."
  },
  {
    "question": "Does deleting the Instagram app delete my account?",
    "answer": "No. Removing the app from your phone leaves your account, photos, followers, messages, and login completely intact. Deleting the account itself is a separate process that takes roughly 16 clicks and a 30-day waiting period before anything is permanently removed."
  },
  {
    "question": "Why do I keep reinstalling apps I deleted?",
    "answer": "Because deleting removes the icon, not the access. Reinstalling takes seconds, your account is waiting exactly as you left it, and the website was available the whole time. Nothing about deletion adds friction to coming back, which is why the delete and reinstall loop is so common."
  },
  {
    "question": "Is deleting social media better than blocking it?",
    "answer": "Neither is better in general. Deleting is stronger for apps you genuinely do not need and weaker for anything you depend on, because the dependency pulls you back. Blocking is weaker in theory, since you can undo it, but tends to last longer in practice because it does not force you to give up the parts that are useful."
  },
  {
    "question": "Can I block Instagram but keep my DMs?",
    "answer": "Not on iPhone. Apple’s Screen Time framework blocks whole apps rather than features inside them, so every blocker built on it blocks messages along with the feed. The workaround is scheduled blocking during the hours that matter, or deleting the app and using the website when you need messages."
  },
  {
    "question": "What is the most effective way to use Instagram less without quitting?",
    "answer": "Schedule a block during the hours when your use is worst rather than attempting all-day restriction, and consider deleting the app while keeping browser access. Both reduce autopilot opening without removing the parts of the app you actually need. Pause is free, so testing a scheduled block costs nothing."
  }
];
const schema = blogPostSchema(path, faqs);

const DeleteOrBlockInstagram = () => {
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
            <PostDates path={path} showModified className="mt-4" />
          </header>
          <p>{"Short answer: it comes down to one question. If direct messages matter to you, block it. If they do not, delete it, because deletion is cleaner and nothing about your account disappears when the app does. Most people who delete end up reinstalling within weeks, and the reason is structural rather than a willpower failure."}</p>
          <p>{"Here is how to decide, and why the deleting and reinstalling loop happens to so many people."}</p>
          <h2>{"The question that actually decides it"}</h2>
          <p>{"Forget how much you use Instagram for a moment. Ask whether anything lives in your DMs that you cannot get elsewhere."}</p>
          <p>{"For a lot of people, the answer is yes. A group chat with old friends. Messages from people who use no other platform. Event details nobody put anywhere else. A business account where enquiries arrive. If that describes you, deleting the app does not simplify your life, it just moves a problem."}</p>
          <p>{"If nothing in there is load-bearing, deletion is the cleaner option and you should take it."}</p>
          <h2>{"Why deleting usually does not stick"}</h2>
          <p>{"The pattern is extremely common and worth understanding before you try it again."}</p>
          <p>{"One writer described being trapped in a cycle of deactivating and reactivating for more than four years, having already tried timers, blocking apps and deleting the app outright. That is not unusual. One survey found 85 percent of people interact with social media mindlessly and 45 percent have attempted and failed to reduce their usage."}</p>
          <p>{"Three things make deletion fragile."}</p>
          <p>{"Deleting the app is not deleting the account. Your photos, followers and messages all survive. So does the login. Reinstalling takes about nine seconds and everything is exactly as you left it."}</p>
          <p>{"The website never left. You can open instagram.com in any browser on the phone you just cleaned up. Deleting the app removes the icon, not the access."}</p>
          <p>{"Deleting the account is deliberately hard. By one count it takes 16 clicks and a month-long waiting period. That friction is designed, and it is the opposite of the friction you actually want."}</p>
          <p>{"So the decision you think you are making, removing Instagram from your life, is usually a decision to remove the icon from your home screen for somewhere between four days and three weeks."}</p>
          <h2>{"When deleting is the right answer"}</h2>
          <p>{"Deletion works well, and better than blocking, in a specific situation: you do not need the DMs, you are not running anything on the account, and the app is a net negative rather than a mixed bag."}</p>
          <p>{"In that case, deleting the app is cleaner than any blocker, because there is nothing to configure and nothing to tap past. If you want to go further, deactivating the account hides it while keeping it recoverable, which is a reasonable middle step before anything permanent."}</p>
          <p>{"Just be honest about the DM question first, because that is where most failed deletions start."}</p>
          <h2>{"When blocking is the right answer"}</h2>
          <p>{"Blocking fits the far more common case, where the app is genuinely useful for some things and a two-hour hole for others."}</p>
          <p>{"A block keeps your account, your messages, your saved posts, and your history intact while removing open-ended access. Scheduled blocking during work hours or evenings covers most of the damage without forcing an all-or-nothing choice."}</p>
          <p>{"The catch worth knowing on iPhone is that blocking is app-level, not feature-level. You cannot block Reels and keep DMs, because iOS blocks whole apps rather than parts of them. So a block during your worst hours is realistic. A permanent block that still lets messages through is not."}</p>
          <h2>{"The middle option almost nobody mentions"}</h2>
          <p>{"Delete the app, then use Instagram deliberately through a browser."}</p>
          <p>{"The mobile web version is noticeably worse. The feed is clunkier, Reels work poorly, and every action takes more effort. That is bad design for Instagram and excellent friction for you. You keep full access to messages and your account while losing the part that runs on autopilot."}</p>
          <p>{"It is the closest thing to a genuine compromise, and it costs nothing to try before committing to either extreme."}</p>
          <p><Link to="/blog/block-instagram-iphone">How to block Instagram, including Threads</Link>, <Link to="/blog/blocked-app-still-works-in-browser">why app blocks leave browser access open</Link>, and <Link to="/blog/block-social-media-iphone">blocking social media on iPhone</Link>.</p>
          <p><a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-accent hover:text-foreground">Download Pause free for iPhone <ArrowRight className="h-4 w-4" /></a></p>
          <h2>Frequently asked questions</h2>
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

export default DeleteOrBlockInstagram;
