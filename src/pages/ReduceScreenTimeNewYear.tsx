import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "How to Reduce Screen Time in 2027: Make It Stick";
const description =
  "Most screen time resolutions fail by mid-January because they rely on willpower. Here is the setup that survives February, and why smaller targets hold.";
const path = "/blog/reduce-screen-time-new-year";
const linkClass = "text-accent underline underline-offset-4 hover:text-foreground";

const faqs = [
  { question: "How do I reduce my screen time in 2027?", answer: "Check your Screen Time report to find your top three apps, block those and their websites, set a schedule so the block starts automatically, and use a blocker without a one-tap override. Set it up once rather than relying on daily willpower." },
  { question: "Why do screen time resolutions fail?", answer: "Most people set a goal instead of a mechanism. A goal needs a correct decision hundreds of times a day. A mechanism needs one afternoon of setup. Targets that are too aggressive also fail, because people break them, feel defeated, and quit entirely." },
  { question: "What is a realistic screen time goal?", answer: "Cut your current average by about a quarter rather than aiming for a dramatic number. If you are at four hours, aim for three and hold it for a month before reducing again. Gradual targets survive. Dramatic ones rarely last two weeks." },
  { question: "How much screen time is too much?", answer: "There is no single threshold that applies to everyone, and what you are doing on the phone matters more than the total. Two hours of messaging family is not the same as two hours of scrolling. The more useful question is whether your phone use is displacing something you would rather be doing." },
  { question: "Does deleting social media apps actually work?", answer: "It works if you also block the websites and block reinstalls, because otherwise the browser version and the App Store are both one tap away. Deleting alone usually lasts a few days." },
  { question: "How long does it take to break a phone habit?", answer: "Longer than a week, and it varies a lot between people. Rather than counting days, judge it by whether reaching for the phone still feels automatic. Keeping the block running while that fades matters more than hitting a particular number of days." },
  { question: "What is the best free way to cut phone use?", answer: "Apple’s Screen Time is free but can be dismissed in one tap. Free third-party blockers such as Pause and ScreenZen offer stricter enforcement without a subscription. The important feature is not the price; it is whether the app ships an override button." },
];

const schema = blogPostSchema(path, faqs);

const ReduceScreenTimeNewYear = () => {
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
            <p className="section-label">New year</p>
            <h1>{getRoute(path).headline}</h1>
          </header>

          <p>Around the second week of January, most screen time resolutions quietly stop. Not dramatically. You just check your phone one evening and realise you stopped paying attention to it a few days ago.</p>
          <p>The reason is not that you lack discipline. It is that almost everyone sets the wrong kind of resolution.</p>

          <h2>Goals fail, mechanisms hold</h2>
          <p>“Use my phone less” is a goal. It requires you to make the right decision several hundred times a day, including at eleven at night when you are tired and bored.</p>
          <p>“Instagram and TikTok are blocked between 9 pm and 7 am, and I cannot turn it off” is a mechanism. It requires one afternoon of setup and then nothing at all.</p>
          <p>Goals depend on the version of you who is motivated in January. Mechanisms work on the version of you who is tired in February.</p>
          <p>Almost every screen time guide hands you more goals. This one is about the mechanism.</p>

          <h2>Pick a target you will still want in February</h2>
          <p>The second reason resolutions fail is that people set targets they resent within a fortnight.</p>
          <p>If you currently spend four hours a day on your phone, cutting to one hour is not ambitious; it is a guarantee of failure. You will break it, feel like you failed, and abandon the whole thing.</p>
          <p>Cut four hours to three. Hold that for a month. Then go to two if you still want to.</p>
          <p>A smaller target you keep for a year beats a dramatic one you keep for nine days. This is the least exciting advice in this article and the most useful.</p>

          <h2>The setup, done once</h2>
          <p>Four steps, about fifteen minutes, done in daylight while you are clear-headed rather than at midnight when you are negotiating with yourself.</p>
          <ol>
            <li><strong>Find out where the time actually goes.</strong> Open Settings, then Screen Time, and look at last week. Not the total, the breakdown. Most people are wrong about which app is costing them the most.</li>
            <li><strong>Block the top three, not everything.</strong> Blanket blocking removes the apps you actually need and forces you to unblock, and once it is off it stays off. Pick the three apps your own data says are the problem.</li>
            <li><strong>Block the websites too.</strong> This is the step most people skip. Blocking the Instagram app while instagram.com loads in Safari moves the habit rather than stopping it. Add the sites alongside the apps. See <Link to="/blog/block-social-media-iphone" className={linkClass}>how to block social media on iPhone</Link>.</li>
            <li><strong>Remove the override.</strong> Apple’s Screen Time offers “Ignore Limit for Today” the moment you hit your limit, and most third-party blockers include a pause or snooze button. If there is a one-tap escape, you will use it. Pick a blocker that lets you turn unlocks off before a session starts, so the tired version of you has no decision to make. More in <Link to="/blog/remove-ignore-limit-screen-time" className={linkClass}>how to remove Ignore Limit on Screen Time</Link>.</li>
          </ol>
          <p><Link to="/" className={linkClass}>Pause</Link> does this and is free. Set a schedule, turn unlocks off, and enable Strict Mode so the rules cannot be edited mid-session.</p>

          <aside className="blog-callout">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>If you got a new iPhone over the holidays</h2>
          <p>This is the easiest moment you will ever get, and most people waste it.</p>
          <p>A fresh phone has no muscle memory attached to it yet. Your thumb does not know where Instagram sits on the home screen. Set your limits during setup, before you rebuild the habits, and you are working with the grain instead of against it.</p>
          <p>If you are reinstalling apps anyway, simply do not reinstall one or two of them. Deleting an app you already use feels like a loss. Not reinstalling it feels like nothing.</p>

          <h2>When you break it in week three</h2>
          <p>You will. Plan for it now rather than treating it as evidence that nothing works.</p>
          <p>A broken week is not a failed resolution; it is a normal week. The people who keep their screen time down are not the ones who never slip. They are the ones who did not conclude anything from slipping.</p>
          <p>If it happens, change one thing about the setup rather than abandoning it. Move the schedule an hour earlier. Add the app you forgot. Turn off the unlock you left on. Then carry on. If evenings are the hard part, read <Link to="/blog/stop-scrolling-at-night" className={linkClass}>how to stop scrolling in bed at night</Link>.</p>

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

export default ReduceScreenTimeNewYear;
