import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/phone-instead-of-reading";
const { title, description } = getRoute(path);
const faqs = [
  {
    "question": "Why do I pick up my phone instead of reading even when I want to read?",
    "answer": "Because reaching for the phone is automatic and reading is deliberate. The habit runs through deeper brain structures that act before conscious decision-making engages, so by the time you notice, the phone is already unlocked. Wanting to read is not competing on equal terms with a behaviour that does not require wanting."
  },
  {
    "question": "Why can’t I focus on reading anymore?",
    "answer": "Two different problems get called this. One is not starting, which is a friction problem and the more common one. The other is starting and drifting after ten minutes, which is reduced reading stamina after years of short-form content. The first is fixed by changing your environment; the second by short daily sessions that gradually lengthen."
  },
  {
    "question": "Does putting my phone in another room actually help?",
    "answer": "Yes, and it is the most consistently recommended single change. Research has found that phone proximity reduces cognitive capacity even when the phone is silent and face down, so distance removes both the cue and the background cost of resisting it."
  },
  {
    "question": "How long does it take to rebuild a reading habit?",
    "answer": "Most people see a change within one to two weeks of consistently reading in a fixed slot, though published timelines vary and depend heavily on how often the habit is actually triggered rather than how long you have been trying."
  },
  {
    "question": "Should I switch to ebooks or audiobooks instead?",
    "answer": "Reading on a phone puts you one tap away from every distraction you own, which reinstates the problem you were solving. A dedicated e-reader avoids that. Audiobooks are a reasonable substitute for commutes, but they engage attention differently, so treat them as an addition rather than a replacement if deep reading is the goal."
  },
  {
    "question": "Is this a sign of ADHD?",
    "answer": "It can be, since ADHD affects attention regulation, working memory, and motivation, all of which reading depends on. But difficulty starting a book is extremely common in people without ADHD, especially when a phone is nearby. If focus is poor everywhere and not just with books, that is worth raising with a doctor rather than solving with an app."
  }
];
const schema = blogPostSchema(path, faqs);

const PhoneInsteadOfReading = () => {
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
          <p>{"Short answer: because reading costs effort and your phone costs none. By the time you notice you have reached for it, the decision has already happened. Phone reaching is an automatic habit that runs before conscious thought catches up, so trying to beat it with willpower means using a system that is offline to override one that is already running."}</p>
          <p>{"This is not a reading problem. It is a cost problem at a specific moment, and that moment is fixable."}</p>
          <h2>{"It is not a concentration problem"}</h2>
          <p>{"Most advice about why you cannot focus on reading anymore assumes your attention span is broken. Sometimes it is. But if you own the book, you carry it with you, you have the free time, and you still open YouTube, attention is not what failed."}</p>
          <p>{"You never got to the part where attention matters. The book was never opened."}</p>
          <p>{"That distinction matters because the usual fixes target the wrong stage. Reading in shorter sessions, choosing easier books, and rebuilding reading stamina all help once you are reading. None of them help in the three seconds where you choose."}</p>
          <h2>{"Your phone wins because it costs nothing"}</h2>
          <p>{"Compare the two actions honestly."}</p>
          <p>{"Picking up your phone takes zero steps. It is already in your hand or your pocket, it unlocks on your face, and it delivers something immediately."}</p>
          <p>{"Picking up the book takes several. Find it, open it, locate your page, rebuild the context you lost since last time, and wait while interest builds. The payoff arrives minutes later, not instantly."}</p>
          <p>{"Habit researchers describe phone checking as a loop of cue, action and reward. Boredom or a gap in stimulation is the cue, reaching is the action, novelty is the reward. Repeated enough times, the loop moves into the striatum, the part of the brain that runs learned sequences automatically. That is why your hand moves before you decide."}</p>
          <p>{"There is also a measurable cost to the phone simply being there. Research has found that having your phone within sight reduces available cognitive capacity even when it is face down and silent. Your brain is spending something on not checking it."}</p>
          <h2>{"Why “I will just read before bed” never works"}</h2>
          <p>{"This is the most common version of the failure, and it is worth naming."}</p>
          <p>{"Deferring reading to bedtime moves the task into the one slot where your capacity is lowest. You have spent the day making decisions; you are tired, and reading is the option that demands effort while your phone is the option that demands none."}</p>
          <p>{"A plan that depends on willpower at the moment willpower is weakest is not a plan. It is a way of feeling like you intend to read without ever reading."}</p>
          <p>{"Reading is more likely to happen in the slot you already protected, which for most people is a break, a commute, or the first twenty minutes after getting home, before the TV goes on."}</p>
          <h2>{"What actually changes it"}</h2>
          <p>{"Three things, and they all work by changing cost rather than motivation."}</p>
          <p>{"Make the phone cost something. Friction works because automatic behaviour depends on being effortless. A 2023 study published in PNAS tested a mandatory pause before a distracting app opened and found around 36 percent of attempts ended with the user closing the app, with openings falling roughly 57 percent over six weeks. The pause does not forbid anything. It just gives your conscious brain time to arrive."}</p>
          <p>{"Make the book cost less. Leave it open at your page rather than closed. Keep it in the place where the habit fires, such as the car on a break. Reduce the number of steps between sitting down and reading a sentence."}</p>
          <p>{"Attach reading to an existing cue instead of to a time. “After I park for my break” is a trigger. “Later today” is not."}</p>
          <p>{"If the phone is the part you cannot get past, a blocker that covers your break window removes the easy option entirely rather than asking you to resist it. Pause is free right now, so you can test whether the pull is actually the phone before paying for anything."}</p>
          <p><Link to="/blog/do-app-blockers-work">What research says about app blockers</Link>, <Link to="/blog/stop-scrolling-at-night">why bedtime scrolling is hard to stop</Link>, and <Link to="/blog/app-blockers-adhd">app blockers and ADHD</Link>.</p>
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

export default PhoneInsteadOfReading;
