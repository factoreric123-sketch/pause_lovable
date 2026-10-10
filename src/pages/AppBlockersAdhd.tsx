import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "Best App Blockers for ADHD on iPhone: Why Most Fail";
const description =
  "Most app blockers fail ADHD users because they demand focus at the worst moment. Here is what actually works on iPhone in 2026, and how to set it up so it sticks.";
const path = "/blog/app-blockers-adhd";

const faqs = [
  { question: "Why don’t app blockers work for people with ADHD?", answer: "Most require you to start a session, and most include a one-tap override. Both demand deliberate control at the moment it is hardest to summon. Blockers that run automatically and remove the override tend to hold far better." },
  { question: "What is the best app blocker for ADHD on iPhone?", answer: "It depends on what stops you. If you override everything, Pause is free and has no pause button. If you need reward framing to use a tool at all, Habit Doom ties app access to completing daily habits. For a free option with accountability, try ScreenZen." },
  { question: "Is there a free app blocker for ADHD?", answer: "Yes. Pause is free with all five blocking methods and Strict Mode included. ScreenZen is free with strict blocking and settings locks. Habit Doom has a free tier. Apple Screen Time is free but easily dismissed." },
  { question: "Does blocking apps actually help with ADHD?", answer: "Removing the option at the moment you are least able to weigh it works better for many people than relying on intention alone. It is a practical tool for a specific problem, not a treatment, and anything broader is a conversation for a clinician." },
  { question: "Why do I stop using productivity apps after a few weeks?", answer: "Novelty often drives the initial engagement, and when it fades, the habit usually goes with it. This is extremely common. Switching methods, changing what is blocked, or rotating apps works better than forcing yourself back to a setup that has gone stale." },
  { question: "Is it better to block apps or set time limits for ADHD?", answer: "Time limits still require a judgment call at the moment the limit arrives. A block with no override removes that decision entirely. If you have repeatedly ignored time limits, a hard block is the better fit." },
  { question: "Can an accountability partner help?", answer: "Yes, and it is one of the most effective options available. Having someone else hold your Screen Time passcode or your blocker’s settings lock turns a rule you can undo into one you cannot." },
];

const schema = blogPostSchema(path, faqs);

const AppBlockersAdhd = () => {
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

          <p>You install an app blocker. It works brilliantly for about two weeks. Then one evening you tap past it without really noticing, and within a month it is another icon you ignore.</p>
          <p>If that cycle is familiar, you probably did not pick the wrong app blocker. Most app blockers are built on an assumption that does not hold.</p>
          <p className="blog-callout">This is practical advice about apps, not medical advice. If phone use is seriously affecting your life, speak to a clinician.</p>

          <h2>Why most app blockers fail for ADHD</h2>
          <p>Three structural problems, and they compound.</p>
          <ul>
            <li><strong>Sessions you have to start.</strong> Most blockers need you to open the app and begin a focus session. That means remembering to do it and then initiating it, which is hardest on exactly the days you need it most.</li>
            <li><strong>Overrides that cost nothing.</strong> Apple’s Screen Time offers “Ignore Limit for Today” the moment you hit your limit, and most third-party blockers include a pause or snooze button. The override appears at the precise moment your brain is hunting for the shortest path to novelty, and it costs one tap.</li>
            <li><strong>Schedules that assume a routine.</strong> Scheduled blocking works when your days look alike. Many people’s days do not.</li>
          </ul>
          <p>The pattern underneath all three: these tools ask you to supply deliberate control at the exact moment it is least available.</p>

          <h2>What an ADHD friendly app blocker needs</h2>
          <p>Three criteria. Judge any blocker against them.</p>
          <ul>
            <li><strong>Blocking is the default, not an action.</strong> Rules that run without you starting them.</li>
            <li><strong>The override has a real cost.</strong> Not a confirmation dialog. A locked setting, a challenge you have to complete, or a passcode you do not hold.</li>
            <li><strong>Something that keeps you engaged.</strong> Uncomfortable but true. A boring tool gets abandoned.</li>
          </ul>

          <h2>The best app blockers for ADHD on iPhone</h2>

          <h3><Link to="/" className="text-accent underline underline-offset-4 hover:text-foreground">Pause</Link>. Free, with the override removed.</h3>
          <p><strong>Disclosure: we make Pause.</strong></p>
          <p>Pause is free with no account required. You pick from five blocking methods: Session, Schedule, Time Limit, Open Limit, and Friction Lock. Before a session starts, you decide whether unlocks are allowed, and with unlocks off, there are no ordinary breaks and no early exits. Strict Mode locks session editing and App List changes until the session ends. Friction Lock requires solving maths problems or typing a long password before access returns.</p>
          <p>The relevant part for ADHD: you make the decision once, in advance, so the moment of temptation has no decision left in it.</p>

          <h3>Habit Doom. Best if you need reward framing.</h3>
          <p>This is not our product, and we are recommending it anyway, because for some people it is the better fit. Habit Doom keeps your distracting apps locked until you complete your daily habits, then unlocks them automatically. Access is tied to finishing something rather than to a clock. If pure restriction leaves you cold and you need a reward structure to engage at all, this suits you better than Pause does. There is a free tier, with everything unlocked at around $4.99 a month.</p>

          <h3><Link to="/blog/jomo-alternatives" className="text-accent underline underline-offset-4 hover:text-foreground">Jomo</Link>. Same idea, broader app.</h3>
          <p>Jomo’s Routines feature also unlocks apps when you complete habits, alongside standard blocking and Locks. Jomo Plus is $29.99 a year. Worth knowing before you pay: Jomo is designed around mindful breaks, so if taking the break is your failure point, that is the wrong philosophy for you.</p>

          <h3>ScreenZen. Free, and worth trying first.</h3>
          <p>Delay timers, strict blocking by time range or number of opens, and settings locks you can hand to an accountability partner. Free, funded by optional tips. That accountability partner feature is genuinely useful if you have someone willing to hold your passcode.</p>

          <h3>Apple Screen Time. The weakest option here.</h3>
          <p>Free and already on your phone, but “<Link to="/blog/remove-ignore-limit-screen-time" className="text-accent underline underline-offset-4 hover:text-foreground">Ignore Limit for Today</Link>” is one tap away. Fine for awareness. Not a control system.</p>

          <h2>Set it up on a good day</h2>
          <p>This is the part most guides skip, and it matters more than which app you pick.</p>
          <p>Configure your strictest rules when you are calm and focused, not when you are already struggling. Choose the apps, set the limits, turn unlocks off, and enable Strict Mode. You are not trying to win the moment of temptation. You are making sure no decision exists in that moment.</p>
          <p>If you have someone you trust, let them set the passcode. Crude, and it works.</p>

          <h2>When it stops working</h2>
          <p>It probably will, and that is not a personal failure.</p>
          <p>Productivity tools commonly stop landing after a few weeks because the novelty that made them interesting has worn off. The tool did not break. The thing driving your engagement did.</p>
          <p>So plan for it. Change the blocking method, adjust what is blocked, or switch apps entirely. Rotating your approach every few months is a strategy, not evidence that nothing works.</p>
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

export default AppBlockersAdhd;
