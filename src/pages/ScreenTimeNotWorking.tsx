import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/screen-time-not-working";
const { title, description } = getRoute(path);
const faqs = [
  {
    "question": "Why is Screen Time not blocking my apps?",
    "answer": "Usually because Block at End of Limit is switched off for that limit, or the app sits in your Always Allowed list, or no Screen Time passcode is set. Check all three before trying anything else."
  },
  {
    "question": "Why does Screen Time keep turning itself off?",
    "answer": "Users commonly report limits reverting after iOS updates and Family Sharing settings failing to sync. Check your settings after each update, and confirm every device in a Family Sharing group is on a current iOS version."
  },
  {
    "question": "Why can I still use apps after reaching my Screen Time limit?",
    "answer": "Because iOS offers Ignore Limit for Today at the moment the limit hits. That is intentional, not a bug. Enabling Block at End of Limit with a passcode replaces it with a passcode prompt, though you still know the passcode."
  },
  {
    "question": "Does Screen Time reset at midnight?",
    "answer": "Yes. App limits refresh daily at midnight, and there is no weekly or monthly option. If your heavy use happens late at night, your allowance has already renewed. Use Downtime for overnight hours instead."
  },
  {
    "question": "Can changing the date and time bypass Screen Time?",
    "answer": "Users have reported that turning off automatic date and time defeats schedule-based limits. Locking date and time under Content and Privacy Restrictions reduces the risk."
  },
  {
    "question": "How do I reset Screen Time completely?",
    "answer": "Settings, Screen Time, then Turn Off Screen Time, restart the phone, and turn it back on. This clears stored data and resolves a lot of unexplained behaviour, but it also deletes your existing limits."
  },
  {
    "question": "Is Screen Time good enough for adults?",
    "answer": "Rarely. It was built for parental control, where one person holds the passcode and another lives under the rules. When you are both people, every restriction comes with its own key."
  }
];
const schema = blogPostSchema(path, faqs);

const ScreenTimeNotWorking = () => {
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
          <p>There are two completely different problems people call “Screen Time not working,” and almost every guide only covers one of them.</p>
          <p>The first is a genuine fault. Something is misconfigured or broken and it can be fixed.</p>
          <p>The second is Screen Time working exactly as designed, and no amount of troubleshooting will change it.</p>
          <p>Work out which one you have before you start toggling settings.</p>
          <h2>The thirty-second test</h2>
          <p>Set a one-minute limit on any app. Open that app and wait for the limit to hit.</p>
          <p>If nothing happens at all, no prompt, no shield, the app just keeps working, you have a genuine fault. Go to the next section.</p>
          <p>If a screen appears and you can tap past it, Screen Time is working. It is doing precisely what Apple built it to do. Skip to the second half of this article.</p>
          <h2>Real faults, and how to fix them</h2>
          <p>Six things cause most of these, in rough order of how often.</p>
          <ol>
            <li><strong>Block at End of Limit is off.</strong> This is the big one. Go to Settings, Screen Time, App Limits, tap your limit, and check the toggle. Without it, hitting the limit produces a notification you can dismiss rather than a block. Some people report finding it switched off without having turned it off themselves.</li>
            <li><strong>No Screen Time passcode is set.</strong> Without a passcode, the restriction is barely a restriction. Settings, Screen Time, Lock Screen Time Settings.</li>
            <li><strong>The app is in Always Allowed.</strong> Anything on that list ignores your limits completely. Settings, Screen Time, Always Allowed. Check it, because apps get added there and forgotten.</li>
            <li><strong>Limits reset at midnight.</strong> App limits refresh daily and cannot be set weekly or monthly. If your heavy use is after midnight, your limit has already renewed. Use Downtime for overnight hours instead.</li>
            <li><strong>Family Sharing sync problems.</strong> If you manage limits for someone else, changes can take time to reach the other device, and users report them failing to arrive at all. Every device in the group needs to be on a compatible iOS version.</li>
            <li><strong>Date and time changes.</strong> Users have reported that turning off automatic date and time and moving the clock defeats schedule-based limits. Locking date and time under Content and Privacy Restrictions reduces this.</li>
          </ol>
          <p>If none of those fix it, restart the phone, check for an iOS update, then turn Screen Time off and back on. That resets the stored data and clears a lot of odd behaviour.</p>
          <h2>The second problem, which is not a fault</h2>
          <p>If a shield appeared and you tapped through it, nothing is broken.</p>
          <p>When you reach a limit, iOS offers you options. One More Minute. Remind Me in 15 Minutes. Ignore Limit for Today. Those are deliberate. Apple built Screen Time primarily for parents managing a child’s device, where the parent holds the passcode, and the child does not.</p>
          <p>That design falls apart when one person plays both roles. You set the passcode, so you know it. At eleven at night, typing four digits you chose yourself is not a barrier; it is a formality.</p>
          <p>This is why so many people conclude Screen Time is broken when it is configured perfectly. The configuration was never the problem. A lock is only a lock when unlocking costs something.</p>
          <h2>Why limits seem to turn themselves off</h2>
          <p>Worth addressing, because it comes up constantly in Apple’s own community forums and on MacRumors.</p>
          <p>Users report limits that stop applying after an iOS update, settings that revert, and Family Sharing restrictions that silently stop reaching a child’s device. Whether these are confirmed bugs or configuration issues varies case by case, and Apple does not comment on most of them.</p>
          <p>What is clear is that enough people report it that it is worth checking your settings periodically rather than assuming they have stayed as you left them.</p>
          <h2>What to do if your problem is the second one</h2>
          <p>If Screen Time is working and you are simply tapping past it, more configuration will not help. You need something where the exit costs more.</p>
          <p>Two options actually change the outcome.</p>
          <p>Give the passcode to someone else. A partner or flatmate sets your Screen Time code and does not tell you. Crude, and it works, because it restores the setup Apple designed for: one person holds the key, another lives under the rule.</p>
          <p>Use a blocker with no override. Pause is free, has no in-app pause button, and blocks websites alongside apps. Before a session starts, you decide whether unlocks are allowed, and with them off, there are no ordinary breaks and no early exits. Strict Mode then locks your session settings until it ends.</p>
          <p><a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-accent hover:text-foreground">Download Pause free for iPhone <ArrowRight className="h-4 w-4" /></a></p>
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

export default ScreenTimeNotWorking;
