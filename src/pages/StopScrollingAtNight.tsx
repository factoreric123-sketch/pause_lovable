import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "How to Stop Scrolling in Bed at Night on iPhone";
const description =
  "Blocking apps at night fails for most people by the end of the week. Here is why late night scrolling is so hard to stop, and the setup that actually holds.";
const path = "/blog/stop-scrolling-at-night";

const faqs = [
  { question: "How do I stop scrolling in bed at night?", answer: "Set a scheduled block that starts before bedtime, turn off any override or pause option, and block the websites alongside the apps. Configure it earlier in the day while you are rested, because configuring it at night rarely works." },
  { question: "Why can’t I stop scrolling before sleep?", answer: "Two reasons combine. Tiredness lowers your capacity to resist, and for many people night is the only unclaimed time in the day, so scrolling feels like reclaiming something. That second part is why blocks alone often fail." },
  { question: "Does Screen Time Downtime actually work?", answer: "It works as a reminder, not as a barrier. Downtime can be skipped, and even with “Block at Downtime” enabled you still know your own Screen Time passcode. For an adult limiting themselves, that is not real friction." },
  { question: "What is revenge bedtime procrastination?", answer: "It is the pattern of delaying sleep to reclaim leisure time you did not get during the day. It explains why late night scrolling resists willpower: the behaviour is meeting a genuine need, so removing it without replacing it tends not to stick." },
  { question: "Should I charge my phone in another room?", answer: "Physical distance is the strongest friction available and it works well if you can do it. It fails if you use your phone as an alarm or need to stay reachable. A scheduled block with no override is the realistic alternative." },
  { question: "How do I block apps only at night on iPhone?", answer: "Use a scheduled block covering your chosen hours rather than an all day limit. In Pause you create a Schedule for those hours, turn off unlocks, and enable Strict Mode so the schedule cannot be edited mid session." },
  { question: "Will blocking apps at night improve my sleep?", answer: "It removes one common reason people stay up later than they intended, which is the part a blocker can address. Sleep quality depends on many other factors, so treat it as one change rather than a complete solution." },
];

const schema = blogPostSchema(path, faqs);

const StopScrollingAtNight = () => {
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

          <p>You meant to sleep at eleven. It is now half past midnight and you are three hundred videos deep with no memory of deciding to start.</p>
          <p>You have probably already tried the obvious fixes. Downtime, a charger across the room, a promise to yourself. They work for a few nights and then they stop.</p>
          <p>Here is why late night scrolling is harder to break than daytime scrolling, and the setup that actually survives past the first week.</p>
          <p className="blog-callout">This is practical advice about phone habits, not medical advice. If sleep problems are affecting your health, speak to a doctor.</p>

          <h2>Why 11pm is different from 11am</h2>
          <p>The same block that holds all day collapses at night, and the reason is simple.</p>
          <p>Blocking works by making you pay a cost to continue. At 11am that cost feels real, because you have the capacity to weigh it. At 11pm you are tired, your self control is spent, and the cost of tapping “Ignore Limit for Today” rounds down to nothing.</p>
          <p>Every blocker that asks a question at the moment of temptation is asking it at the worst possible time. Night is when that design fails hardest.</p>

          <h2>The real reason you scroll at night</h2>
          <p>This is the part most guides skip, and it changes the advice.</p>
          <p>For a lot of people, late night scrolling is not about the phone at all. It is the only stretch of the day that nobody else has a claim on. The work is done, the house is quiet, nobody needs anything, and the phone is the nearest available leisure.</p>
          <p>There is a name for this pattern: revenge bedtime procrastination. You stay up to reclaim time you did not get during the day.</p>
          <p>If that is what is happening, a block on its own will not hold. You will lie there resenting it and turn it off by Thursday, because the block took away the one hour that was yours and gave you nothing back.</p>
          <p>Blocking the phone solves the symptom. You also have to give the evening somewhere else to go.</p>

          <h2>Why Apple’s Downtime does not hold</h2>
          <p>Screen Time Downtime is the obvious tool and the weakest one.</p>
          <p>Schedule it, and when it starts you get a prompt you can dismiss. Enabling “Block at Downtime” helps, but on your own phone you set the Screen Time passcode, so you know it. At midnight, typing four digits you already have memorised is not friction. It is a formality.</p>
          <p>This is why so many people conclude that blocking does not work for them. The configuration was fine. The problem is that a lock is only a lock when unlocking costs something.{" "}
            <Link to="/blog/remove-ignore-limit-screen-time" className="text-accent underline underline-offset-4 hover:text-foreground">How to remove Ignore Limit on Screen Time.</Link>
          </p>

          <h2>The setup that actually holds</h2>
          <p>Four parts. The order matters.</p>
          <ol>
            <li><strong>Set it up in the afternoon, not at bedtime.</strong> Configure the rules when you are rested and clear headed. At night you are negotiating with a version of yourself who wants to lose. Make the decision in advance so midnight has no decision left in it.</li>
            <li><strong>Use a schedule, not a session you have to start.</strong> Anything that requires you to remember and initiate will fail on the night you most need it. The block should already be running before you get into bed.</li>
            <li><strong>Remove the override.</strong> This is the part that matters most. If there is a pause, snooze or ignore button, you will press it. In <Link to="/" className="text-accent underline underline-offset-4 hover:text-foreground">Pause</Link> you turn unlocks off before the session begins, which removes ordinary breaks and early exits, and Strict Mode locks your session settings and App List until it ends.</li>
            <li><strong>Block the websites too.</strong> Blocking the Instagram app and leaving instagram.com open in Safari just moves the habit. Add the sites alongside the apps.{" "}<Link to="/blog/block-social-media-iphone" className="text-accent underline underline-offset-4 hover:text-foreground">How to block social media on iPhone.</Link></li>
          </ol>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>Give the evening somewhere to go</h2>
          <p>If the previous section is all you do, you have a decent chance. If you want it to last, pair it with one small change.</p>
          <p>Move something you actually enjoy earlier into the evening. A show, a book, a bath, a conversation, a game. Anything that gives you the sense of unclaimed personal time before the block starts, rather than leaving you with an empty hour and a locked phone.</p>
          <p>People who make this change keep their night blocks. People who only install the block usually do not.</p>

          <h2>If your only problem is nights</h2>
          <p>Worth saying honestly: if daytime use is fine and night is your only issue, a dedicated nighttime blocking app may suit you better than a general one. Apps built specifically around bedtime blocking exist and do exactly one job well.</p>
          <p>A general blocker like Pause makes more sense if you also want control during the day, or if you want a single setup covering work hours, evenings and bedtime.</p>

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

export default StopScrollingAtNight;
