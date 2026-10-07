import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "Jomo Alternatives for iPhone: Blocks Without a Break";
const description =
  "Jomo costs $29.99 a year and is built around mindful breaks. Compare the best Jomo alternatives for iPhone in 2026 — including free blockers with no break button.";
const path = "/blog/jomo-alternatives";

const faqs = [
  { question: "Is Jomo free?", answer: "Jomo is free to download and includes basic app blocking. Jomo Plus unlocks the full feature set, starting at $5.99 a month or $29.99 a year. The App Store listing does not clearly separate which features are free and which require Plus." },
  { question: "How much does Jomo cost?", answer: "Jomo Plus is $5.99 monthly, $29.99 yearly (roughly $2.49 a month billed annually), or a one-time lifetime purchase listed between $84.99 and $99.99. Family plans are $11.99 monthly or $59.99 yearly, and the annual plan includes a 3-day trial." },
  { question: "What is the best alternative to Jomo?", answer: "It depends on why you are leaving. For stricter enforcement with no break option, Pause is free and has no in-app pause button. For a free option with settings locks, try ScreenZen. For detailed analytics, Opal. For physical separation, Brick." },
  { question: "Can you bypass Jomo?", answer: "Jomo includes mindful breaks by design, so a session can be interrupted without defeating the app. Jomo also runs on Apple's Screen Time framework, which means it shares the same ceiling as every iOS blocker: the owner of the phone always keeps ultimate control." },
  { question: "Is Jomo better than Opal?", answer: "On value, yes. Jomo costs $29.99 a year against Opal's $99.99, and it offers habit-gated unlocking that Opal does not. Opal wins clearly on analytics and long-term usage insight. Neither removes the option to end a session early on standard settings." },
  { question: "What is a free alternative to Jomo?", answer: "ScreenZen and Pause are both free with no subscription. ScreenZen focuses on friction and settings locks. Pause gives you five blocking methods plus Strict Mode at no cost. Apple Screen Time is free as well, but it can be dismissed in one tap." },
  { question: "Does Jomo have a strict mode?", answer: "Jomo's release notes reference a Strict Mode, an emergency code, and rules that stay locked for a few days by default. The App Store listing does not state whether these can be overridden mid-session, so test it before you rely on it." },
];

const tableRows: [string, string, string][] = [
  ["Price", "Free", "Free app, Plus from $29.99/yr"],
  ["Breaks during a session", "Optional, removed when unlocks are off", "Built in as a core feature"],
  ["Strict enforcement free", "Yes, Strict Mode", "Paid tier"],
  ["Habit-gated unlocking", "No", "Yes, Routines"],
  ["Website blocking", "Yes", "Yes"],
  ["Account required", "No", "Yes"],
];

const schema = blogPostSchema(path, faqs);

const JomoAlternatives = () => {
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
            <p className="section-label">App blockers</p>
            <h1>{getRoute(path).headline}</h1>
          </header>

          <p>Jomo is one of the better app blockers on iPhone, and it costs far less than Opal. Jomo Plus is $5.99 a month or $29.99 a year, which works out to roughly $2.49 a month billed annually.</p>
          <p>So if you are looking for a Jomo alternative, price is probably not the reason. It is usually something more specific: you keep taking the break.</p>

          <h2>How Jomo works</h2>
          <p>Jomo blocks apps and websites, including whole categories such as social media and games. On top of that, it adds two distinctive features.</p>
          <ul>
            <li><strong>Locks.</strong> Block an app continuously and set how many times a day you can open it, with an optional exercise before it unlocks.</li>
            <li><strong>Routines.</strong> Completing your daily habits unlocks apps or earns you app time.</li>
          </ul>
          <p>Its break exercises include Mirror, Recopy, and an AI-checked photo option. Jomo runs on Apple's Screen Time API and states it never sees your private data.</p>
          <p>This is a thoughtful product, and it is built on a clear philosophy that Jomo states plainly in its own App Store description:</p>
          <blockquote>"You can always take mindful breaks if you need to."</blockquote>
          <p>That sentence is the whole design. Jomo treats the break as a feature, not a loophole.</p>

          <h2>Who outgrows Jomo</h2>
          <p>For many people, a mindful break is exactly right. You pause, you reconsider, you put the phone down.</p>
          <p>For other people the exercise becomes a ritual. You complete the Recopy task without reading it, the app opens, and twenty minutes vanish. The friction turned into a formality.</p>
          <p>If that is you, better-designed friction will not fix it. You need the break to not be available at all.</p>
          <p>That is a different kind of app blocker, not a better one.</p>

          <h2>The best Jomo alternatives for iPhone</h2>

          <h3>
            <Link to="/" className="text-accent underline underline-offset-4 hover:text-foreground">Pause</Link>. Free, with no break button.
          </h3>
          <p><strong>Disclosure: we make Pause, so weigh this accordingly.</strong></p>
          <p>Pause is free with no account required. It offers five blocking methods: Session, Schedule, Time Limit, Open Limit, and Friction Lock. Before a session starts, you decide whether unlocks are allowed, and with unlocks off there are no ordinary breaks and no early exits. Strict Mode then locks session editing and App List changes until the session ends.</p>
          <p>Where Jomo is better: habit-gated unlocking through Routines is genuinely clever, and Jomo is a mature product with years of refinement behind it.</p>

          <h3>ScreenZen. Free, and stronger than most lists admit.</h3>
          <p>Delay timers, scroll interruption, strict blocking by time range or number of opens, and settings locks you can hand to an accountability partner. Free, funded by optional tips. Worth trying before you pay for anything.</p>

          <h3>AppBlock. Similar price, no gamification.</h3>
          <p>Blocks apps and websites, with a Strict Mode that prevents editing your rules or uninstalling for a set period. Around $4.99 monthly, $29.99 yearly, or $89.99 lifetime, which is almost identical to Jomo. Pick it if you want enforcement without habits and streaks.</p>

          <h3>
            <Link to="/blog/opal-alternatives" className="text-accent underline underline-offset-4 hover:text-foreground">Opal</Link>. Only if analytics matter most.
          </h3>
          <p>The best usage analytics in the category, but at $19.99 a month or $99.99 a year it costs more than three times Jomo, and its free tier allows only one rule.</p>

          <h3>
            <Link to="/blog/brick-alternatives" className="text-accent underline underline-offset-4 hover:text-foreground">Brick</Link>. If software keeps failing you.
          </h3>
          <p>A $59 physical puck you tap to block apps, with no subscription. Leave it in another room, and you cannot unblock. You have to carry it, and you can lose it, but physical distance is friction you cannot argue with.</p>

          <h3>Jomo vs Pause</h3>
          <div className="my-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground">Feature</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Pause</th>
                  <th className="py-3 font-semibold text-foreground">Jomo</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([label, pause, jomo]) => (
                  <tr key={label} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-semibold text-foreground">{label}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{pause}</td>
                    <td className="py-3 text-muted-foreground">{jomo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Which philosophy fits you</h2>
          <p>Answer one question honestly. When the block appears, do you want a moment to reconsider, or do you want the decision already made?</p>
          <p>If you want the moment, Jomo is excellent, and you should stay with it. If you have already proved to yourself that you take the break every single time, stop paying for better friction and remove the exit instead.</p>

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

export default JomoAlternatives;
