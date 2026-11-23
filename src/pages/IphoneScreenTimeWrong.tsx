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

const path = "/blog/iphone-screen-time-wrong";
const { title, description } = getRoute(path);
const faqs = [
  {
    "question": "Why does Screen Time show more hours than I actually used my phone?",
    "answer": "Usually background app activity, notifications waking the screen, or usage from another Apple device syncing through Share Across Devices. Safari tabs left open can also accumulate web time. Check the per-app breakdown for the specific day, and the cause is normally visible."
  },
  {
    "question": "Why is my Screen Time so low when I listened to podcasts all day?",
    "answer": "Because audio played with the screen off is not screen time. This is the most common reason the number looks too low, and the gap can be large, with hours of listening showing as minutes. Compare against the listening time recorded inside the Music or Podcasts app."
  },
  {
    "question": "Does Screen Time count when the screen is off?",
    "answer": "Mostly no, but the picture is muddier than it sounds. Screen Idle is not the same as screen off, and background processes can appear in your activity data. A notification that lights the screen does register, even if you never picked the phone up."
  },
  {
    "question": "Why does Screen Time show apps I did not open?",
    "answer": "Typically background refresh or notification activity rather than actual use. Apps that sync heavily in the background are the usual suspects. It can also happen if someone else uses a device signed in to the same Apple Account."
  },
  {
    "question": "Does Screen Time combine my iPhone, iPad and Mac?",
    "answer": "Yes, when Share Across Devices is turned on, which it often is by default. Your report then covers every device signed in to that Apple Account. Turn it off on a device if you want its usage counted separately."
  },
  {
    "question": "How do I know if my Screen Time report is actually broken?",
    "answer": "Rule out the normal causes first: audio with the screen off, background activity, notifications, and other devices. If the breakdown still does not explain the figure, check that date and time are set automatically, then toggle Share Across Devices off and on. Persistent nonsense after that is a genuine fault worth reporting to Apple."
  }
];
const schema = blogPostSchema(path, faqs);

const IphoneScreenTimeWrong = () => {
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
            <PostDates path={path} showModified className="mt-4" />
          </header>
          <p>{"Short answer: usually it is not wrong; it is measuring something different from what you assume. Screen Time counts background activity, notification wake-ups, and activity from every Apple device sharing your Apple Account, while missing audio played with the screen off. Before concluding the report is broken, check the per-app breakdown, because the explanation is almost always in there."}</p>
          <p>{"Here is what inflates the number, what deflates it, and how to tell a genuine fault from normal behaviour."}</p>
          <h2>{"The labels are the main source of confusion"}</h2>
          <p>{"Apple’s wording does a lot of damage here."}</p>
          <p>{"Screen Active and Screen Idle are not the same as screen on and screen off. Apple changed the wording from Screen Off specifically because it was misleading, and plenty of people still read it the old way. Idle time includes background processes your apps are running while you are nowhere near the phone."}</p>
          <p>{"So a report showing activity at hours you were asleep is not necessarily evidence of anything. It often means an app was refreshing in the background."}</p>
          <h2>{"Why the number looks too high"}</h2>
          <p>{"Four causes, roughly in order of how often they apply."}</p>
          <p>{"Background activity. Apps refresh, sync with iCloud, check location and pull notifications constantly. Some of that registers. Apple’s own support community notes that apps using background processes will show as usage time without being registered as active Screen Time, which is exactly the kind of distinction that makes a report look nonsensical."}</p>
          <p>{"Notifications waking the screen. When a notification arrives your screen turns on, and that registers. The time may not be attributed to the app that sent it, which is how you end up with totals that do not match the app list beneath them."}</p>
          <p>{"Other devices on the same Apple Account. If Share Across Devices is on, a morning on your Mac and an evening on your iPhone combine into one figure. That can look like impossible phone use when the phone was barely touched."}</p>
          <p>{"Safari tabs left open. Pages sitting in background tabs can accumulate web time without you reading them, which inflates website totals specifically."}</p>
          <p>{"There is also a reading error worth ruling out. Screen Time groups activity into categories as well as listing individual apps, so it is easy to count the same hour twice by reading both lists as separate totals."}</p>
          <h2>{"Why the number looks too low"}</h2>
          <p>{"This one has a single dominant cause: audio with the screen off."}</p>
          <p>{"Music, podcasts and audiobooks keep playing while you drive, train or work, and none of that is screen time because the screen is not on. The commonly reported version is listening to two hours of podcasts and seeing fifteen minutes in the report."}</p>
          <p>{"If your figure seems impossibly low, this is almost certainly why. You can confirm it by checking listening time inside the Music or Podcasts app and comparing."}</p>
          <h2>{"How to actually check"}</h2>
          <p>{"Open Settings, then Screen Time, then See All App and Website Activity, and tap the specific day."}</p>
          <p>{"Look at the app breakdown rather than the headline number. Check Music, Podcasts, Maps, and FaceTime in particular, since those are the ones that behave differently from the rest. If a surprising app appears, note whether it runs in the background or sends frequent notifications."}</p>
          <p>{"A repeated entry is worth investigating. It is not proof that you were looking at the screen for that entire period."}</p>
          <h2>{"When it is a genuine fault"}</h2>
          <p>{"Some of it really is broken, and two causes are worth checking."}</p>
          <p>{"An incorrect clock or time zone skews everything, because Screen Time depends on the system time to assign activity to a day. Make sure the date and time are set automatically."}</p>
          <p>{"Sync problems between devices are the other one. If totals are wildly inconsistent across your devices, toggling Share Across Devices off and on, and making sure every device is on the current OS version, is the usual fix."}</p>
          <p>{"If the report is accurate and the number is simply higher than you want, the report has done its job. What it cannot do is change the behaviour, which is a separate problem. Pause is free if the next step is actually blocking something rather than measuring it again."}</p>
          <p><Link to="/blog/screen-time-not-working">Why Screen Time limits stop working</Link>, <Link to="/blog/how-much-screen-time-too-much">how much screen time is too much</Link>, and <Link to="/blog/how-app-blockers-work-iphone">how app blockers work on iPhone</Link>.</p>
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

export default IphoneScreenTimeWrong;
