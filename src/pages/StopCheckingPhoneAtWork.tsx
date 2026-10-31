import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "How to Stop Checking Your Phone at Work";
const description =
  "Working from home removed the one thing that kept you off your phone at a desk. Here is why quick checks cost more than the minutes, and the setup that holds.";
const path = "/blog/stop-checking-phone-at-work";
const linkClass = "text-accent underline underline-offset-4 hover:text-foreground";

const faqs = [
  { question: "How do I stop checking my phone at work?", answer: "Block your three biggest distraction apps and their websites on a schedule covering your working hours, and turn off any override before the day starts. Keep two-factor codes, calls, and work messaging available, because blocking those breaks your day and the whole setup gets switched off." },
  { question: "Why do I check my phone more when working from home?", answer: "In an office, the possibility that someone might see you does most of the work. Working alone removes that, and nothing takes its place. The habit was not being held back by willpower; it was being held back by visibility." },
  { question: "How long does it take to refocus after checking your phone?", answer: "Longer than the interruption itself, which is the part people underestimate. Rebuilding the context you were holding takes real time, so several short checks across a morning cost far more than the minutes add up to." },
  { question: "Should I just leave my phone in another room?", answer: "It is the most effective option if your job allows it. Physical distance is friction you cannot talk your way past. It fails if you need two-factor codes or calls during the day, which is why most people end up with a scheduled block instead." },
  { question: "Does Do Not Disturb help with phone distraction at work?", answer: "It helps with interruptions coming in. It does nothing about you picking the phone up, which is where most of the time actually goes. Focus modes silence the phone; they do not stop you from opening Instagram." },
  { question: "What if I need my phone for work?", answer: "Then do not block it. Block the specific apps costing you time and leave everything else available. Blanket blocking is the most common reason these setups get abandoned in the first week." },
  { question: "How do I stop checking my phone during meetings?", answer: "A schedule covering your meeting hours with no override works better than intention. The urge to check during a dull meeting is strong precisely because there is no cost to it, so the fix is adding one." },
];

const schema = blogPostSchema(path, faqs);

const StopCheckingPhoneAtWork = () => {
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
            <p className="section-label">Focus</p>
            <h1>{getRoute(path).headline}</h1>
          </header>

          <p>Most advice about phone distraction at work was written for an office. Put it in a drawer. Face it down. Do not let your manager catch you scrolling.</p>
          <p>That advice worked because of one thing, and it was not the drawer. It was that somebody might see you.</p>
          <p>Working from home removes that completely, which is why people who had no phone problem at a desk suddenly have one at home.</p>

          <h2>The cost is not the minutes</h2>
          <p>“I only checked for two minutes” is the sentence that keeps this going, and it misunderstands what the check actually costs.</p>
          <p>The expensive part is not the two minutes. It is getting back in. You come out of a focused task, spend a moment somewhere else, and then have to rebuild the context you were holding. What you were doing, what you had decided, where you were going next.</p>
          <p>Five short checks across a morning do not cost ten minutes. They cost most of your deep work, because the task never gets long enough to go deep in the first place.</p>
          <p>This is why a day of constant small interruptions leaves you exhausted with nothing finished. You were working the whole time. You just never got past the shallow end.</p>

          <h2>Why you cannot just block everything</h2>
          <p>Here is the part that makes work harder than studying or evenings.</p>
          <p>Your phone is load-bearing during the working day. Two-factor codes for logins. Calls you cannot miss. Work messaging. The authenticator app. For some people, the calendar, the parking app, the building pass.</p>
          <p>Block the whole phone, and you break your own day within an hour. So you unblock it, and once it is off, it stays off.</p>
          <p>The answer is a short block list, not a blackout.</p>

          <h2>The setup</h2>
          <p>Four steps, about fifteen minutes.</p>
          <ol>
            <li><strong>Find your actual problem apps.</strong> Open Settings, then Screen Time, and look at last week’s breakdown rather than the total. Most people guess wrong about which app is costing them the most. You usually need three, not ten.</li>
            <li><strong>Block those three and their websites.</strong> Blocking the Instagram app while instagram.com loads in Safari does nothing except move the habit into your browser, which is already open on your work laptop anyway.</li>
            <li><strong>Schedule it to your working hours.</strong> Not a session you have to remember to start. A schedule that runs from nine to five on weekdays without you doing anything. Anything that requires you to initiate it will fail on the day you most need it.</li>
            <li><strong>Turn off the override before you start.</strong> This matters more than the rest combined. If there is a pause or snooze button, you will press it at 3 pm. Decide in the morning while you still want to, not in the afternoon when you do not.</li>
          </ol>
          <p><Link to="/" className={linkClass}>Pause</Link> does this and is free. Set a Schedule for your working hours, turn unlocks off, and enable Strict Mode so the rules cannot be edited mid-session.</p>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>Work phone and personal phone</h2>
          <p>If you have two devices, put the blocks on the personal one and leave the work phone alone. Obvious, and a lot of people do it backwards.</p>
          <p>If you have one phone, the short block list above is doing the same job. You are not trying to make the phone unusable. You are trying to make it boring during the hours you need it boring.</p>

          <h2>The thing nobody tells you about working from home</h2>
          <p>The social pressure that kept you off your phone in an office was doing real work, and nothing has replaced it.</p>
          <p>Some people recreate it deliberately. A shared call with a colleague where both of you work in silence. A coworking day once a week. Working from a library or cafe on the days you need to finish something.</p>
          <p>It feels like a strange thing to engineer. It also works better than most apps do, because it brings back the exact constraint that remote work removed.</p>

          <h2>Related guides</h2>
          <ul>
            <li><Link to="/blog/block-social-media-iphone" className={linkClass}>How to block social media on iPhone</Link>, including the browser versions most guides forget.</li>
            <li><Link to="/blog/stop-scrolling-at-night" className={linkClass}>How to stop scrolling in bed at night</Link>, if the problem follows you past working hours.</li>
            <li><Link to="/blog/remove-ignore-limit-screen-time" className={linkClass}>How to remove “Ignore Limit” on Screen Time</Link>, if you are using Apple’s built-in tools instead.</li>
          </ul>

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

export default StopCheckingPhoneAtWork;
