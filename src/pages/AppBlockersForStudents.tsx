import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "Best App Blockers for Students: What to Block and Keep";
const description =
  "Blocking your whole phone breaks your study session. Here is how to block the apps that actually distract you, keep the tools you need, and make it stick.";
const path = "/blog/app-blockers-for-students";

const faqs = [
  { question: "What is the best app blocker for students?", answer: "It depends on where you get distracted. For phone distraction, Pause is free and has no in-app pause button. For laptop distraction, Freedom blocks across all your devices. For motivation rather than enforcement, Forest. For a free option with accountability, ScreenZen." },
  { question: "How do I block apps while studying?", answer: "Pick the three or four apps that actually waste your time, block those and their websites, and leave your study tools available. Set a schedule so the block starts automatically, and turn off any override before you begin." },
  { question: "Is there a free app blocker for students?", answer: "Yes. Pause is free with all five blocking methods and Strict Mode included. ScreenZen is free and funded by optional tips. Apple Screen Time is free but easy to dismiss. Forest is a small one-time purchase rather than a subscription." },
  { question: "How do I block distractions on my laptop while studying?", answer: "A phone blocker cannot do this. You need a cross-device tool such as Freedom, or a browser extension, or a system-level blocker on the laptop itself. Blocking only your phone usually moves the problem rather than solving it." },
  { question: "Should I block my whole phone while studying?", answer: "Usually not. Blanket blocking removes the tools you need, which forces you to unblock, and once the block is off, it tends to stay off. Blocking a short list of specific apps holds far better over a full revision period." },
  { question: "What apps should I block while studying?", answer: "Check your Screen Time report rather than guessing. For most students, the list is Instagram, TikTok, YouTube, Snapchat, and Reddit, but your own data will tell you which four actually matter for you." },
  { question: "Does blocking apps actually help you study?", answer: "It removes the easiest interruption, which is the part a blocker can control. It does not create focus on its own, and it will not fix an unclear study plan or a subject you have not started early enough. Treat it as one change, not a strategy." },
];

const schema = blogPostSchema(path, faqs);

const AppBlockersForStudents = () => {
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

          <p>Most advice about blocking your phone while studying misses the obvious problem. You need your phone to study.</p>
          <p>The timer is on it. So are your notes, the calculator, your flashcards, the lecture PDF and the group chat where someone has posted the past paper. Block everything and you break your own study session within ten minutes, so you unblock it, and then you are in Instagram.</p>
          <p>The fix is not a stricter block. It is a smarter one.</p>

          <h2>Build a short block list, not a blackout</h2>
          <p>Instead of blocking your phone, block the three or four apps that are actually costing you time. Everything else stays available.</p>
          <p>Open your Screen Time report and look at the top five apps from last week. For most students, it is some combination of Instagram, TikTok, YouTube, Snapchat, and Reddit. Those are your targets. Your notes app, calculator, and flashcards are not.</p>
          <p>This sounds obvious, and almost nobody does it, because blanket blocking feels more serious. It is also the reason most students abandon their blocker in the first week.</p>
          <p>In Pause, you set this up as an App List, which holds the specific apps and websites you want blocked. Everything outside the list keeps working normally.</p>

          <h2>Block the websites too</h2>
          <p>Blocking the Instagram app and leaving instagram.com open in Safari does not stop anything. It moves the habit one tap sideways.</p>
          <p>Whatever you block, block its site as well. For most students, that means instagram.com, tiktok.com, youtube.com, reddit.com and old.reddit.com, x.com and twitter.com.</p>
          <p>Skipping this step is the single most common reason people say app blockers did not work for them.{" "}
            <Link to="/blog/block-social-media-iphone" className="text-accent underline underline-offset-4 hover:text-foreground">How to block social media on iPhone.</Link>
          </p>

          <h2>The laptop problem, answered honestly</h2>
          <p>Here is the part most app blogs will not tell you, including ones selling you something.</p>
          <p>If you study on a laptop, blocking your phone solves half your problem. You will open the same sites in a browser on your MacBook within an hour.</p>
          <p>Pause is iPhone-only. It cannot help with that.</p>
          <p>If laptop distraction is your real issue, Freedom is the better choice. It covers Mac, Windows, iOS, and Android on one plan and can block across every device at once. It is paid, and it is the right answer for that specific problem.</p>
          <p>Use Pause if your phone is the problem. Use Freedom if your laptop is.</p>

          <h2>The best app blockers for students</h2>
          <h3><Link to="/" className="text-accent underline underline-offset-4 hover:text-foreground">Pause</Link>. Free and strict when you need it.</h3>
          <p><em>Disclosure: we make Pause.</em></p>
          <p>Free with no account required. Five blocking methods: Pause, Schedule, Time Limit, Open Limit, and Friction Lock. Before a study session starts, you decide whether unlocks are allowed, and with unlocks off there are no breaks and no early exits. Strict Mode locks your session settings until it ends, so you cannot talk yourself into editing the rules at hour two.</p>
          <p>Friction Lock is useful during revision specifically. It makes you solve maths problems or type a long password before access returns, which is enough to break the automatic reach for the phone.</p>
          <h3>Freedom. Best if you study on a laptop.</h3>
          <p>Cross-device blocking across Mac, Windows, iOS, and Android. Paid, and worth it if your distraction is not confined to your phone.</p>
          <h3>Forest. Best if you need motivation, not enforcement.</h3>
          <p>You plant a virtual tree when you start studying, and it dies if you leave the app. Cheap, one-time purchase on iOS, and genuinely popular with students. It is a motivation tool, not a hard block, so it suits people who respond to the game rather than people who need the exit removed.</p>
          <h3>ScreenZen. Free, with an accountability option.</h3>
          <p>Delay timers, strict blocking by time range or number of opens, and settings locks you can hand to a friend or flatmate. Free, funded by optional tips. Useful if you have someone willing to hold your passcode during exam season.</p>
          <h3>Apple Screen Time. Free, and the weakest.</h3>
          <p>Already on your phone, but it offers <Link to="/blog/remove-ignore-limit-screen-time" className="text-accent underline underline-offset-4 hover:text-foreground">“Ignore Limit for Today”</Link> the moment you hit your limit. Fine for seeing where your time goes. Not a control system.</p>

          <h2>A study setup you can run tomorrow</h2>
          <p>Four steps, ten minutes.</p>
          <ol>
            <li>Open Screen Time and write down your top four time sinks from last week.</li>
            <li>Build an App List containing only those four, plus their websites. Leave your study tools out of it.</li>
            <li>Create a Schedule covering your study block, say 9 am to 1 pm, so it starts without you having to remember.</li>
            <li>Turn off unlocks and enable Strict Mode before the session begins, while you are calm. Not at hour three when you are bored and negotiating with yourself.</li>
          </ol>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
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

export default AppBlockersForStudents;
