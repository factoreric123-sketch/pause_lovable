import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "Opal vs Freedom: iPhone Only or Every Device?";
const description =
  "Opal costs $99.99 a year, Freedom costs $39.99 and covers four platforms. Here is which app blocker is actually worth paying for, and when each one wins.";
const path = "/blog/opal-vs-freedom";
const linkClass = "text-accent underline underline-offset-4 hover:text-foreground";

const faqs = [
  { question: "Is Opal or Freedom better?", answer: "Neither is better overall. Freedom is cheaper and covers Mac, Windows, iOS and Android. Opal has far better analytics and a more polished iPhone experience. Pick based on whether you need multiple devices covered." },
  { question: "Is Freedom worth $39.99 a year?", answer: "It is good value if you need cross device blocking, since no other mainstream blocker covers four platforms at that price. If you only use an iPhone, you are paying for coverage you will not use." },
  { question: "Does Freedom have a free version?", answer: "Freedom is free to download and includes 7 sessions in total. That is a lifetime allowance, not a monthly one. After those seven you need a paid plan to continue." },
  { question: "Does Opal work on Mac?", answer: "Opal is built around iPhone and Apple’s Screen Time framework. If desktop blocking is your priority, Freedom is the stronger choice, since it was designed cross platform from the start." },
  { question: "Can you bypass Freedom’s Locked Mode?", answer: "Locked Mode is designed to prevent ending a session early and it is effective. Like every blocker, it cannot override the operating system itself, so a determined user with enough time can still find a route out. It raises the cost significantly rather than removing the possibility." },
  { question: "Which app blocker works across all devices?", answer: "Freedom is the main mainstream option, covering Mac, Windows, iOS, and Android on one subscription. Most competitors, Opal included, concentrate on a single platform." },
  { question: "Is there a free alternative to Opal and Freedom?", answer: "Yes. Pause and ScreenZen are both free with strict blocking methods on iPhone. Neither replaces Freedom’s cross-device coverage or Opal’s analytics, but both block apps and websites with no subscription." },
];

const priceRows = [
  ["Monthly", "$19.99", "$8.99"],
  ["Yearly", "$99.99", "$39.99"],
  ["Lifetime", "$399", "Often discounted to around $99.50 from $199"],
];

const schema = blogPostSchema(path, faqs);

const OpalVsFreedom = () => {
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

          <p>Short answer: choose Opal if your iPhone is the only device you need to block, because it is built natively on Apple’s Screen Time framework and the iOS experience is better. Choose Freedom if you also get distracted on a laptop, because blocking your phone while your MacBook stays open solves nothing.</p>
          <p>Here is the full comparison, including the price gap and the free tiers most reviews gloss over.</p>

          <h2>Price</h2>
          <div className="my-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground">Plan</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Opal</th>
                  <th className="py-3 font-semibold text-foreground">Freedom</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map(([plan, opal, freedom]) => (
                  <tr key={plan} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-semibold text-foreground">{plan}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{opal}</td>
                    <td className="py-3 text-muted-foreground">{freedom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Opal costs roughly two and a half times more per year and around four times more for lifetime access. Freedom is one of the cheaper established blockers in the category. Opal is the most expensive.</p>
          <p>Price is not the whole decision, but it is a larger gap than most comparisons make clear.</p>

          <h2>The free tiers, and what they actually limit</h2>
          <p>This is the part worth reading twice, because neither free tier is what people assume.</p>
          <p>Freedom’s free plan gives you 7 sessions in total. Not seven a month. Seven, ever. After that, you need a subscription to start another session. It is a trial, wearing a free plan’s clothes.</p>
          <p>Opal’s free plan gives you one rule, chosen from Schedule, Time Limits, or Open Limits. You pick one, and that is what you get, ongoing. Hard Mode, which stops you from ending a session early, sits behind the paywall.</p>
          <p>So Freedom’s free tier is generous while it lasts and then ends. Opal’s is permanent but narrow. Neither lets you properly test the thing you are paying for, which is strict enforcement.</p>

          <h2>Platform coverage, which is the real decision</h2>
          <p>This is where the choice is actually made.</p>
          <p>Freedom covers Mac, Windows, iOS, and Android on one plan. You can block the same sites across every device you own at the same time, which is the problem most people actually have.</p>
          <p>Opal is iPhone-focused. If your distraction lives on your phone, that is fine. If you work on a laptop, Opal leaves your biggest surface uncovered.</p>
          <p>Most people who abandon a phone blocker do so because they simply moved the habit to a browser on a different machine. If that describes you, the platform question settles this comparison before you look at anything else.</p>

          <h2>How each one blocks</h2>
          <p>Opal runs on Apple’s Screen Time framework, which is what gives it system-level blocking on iPhone. It offers scheduled sessions, focus modes, and Deep Focus, which cannot be ended early once committed. It also has app uninstall protection to stop you <Link to="/blog/delete-app-blocker-bypass-iphone" className={linkClass}>deleting Opal</Link> during a session.</p>
          <p>Freedom offers scheduled and recurring sessions across devices, plus Locked Mode, which prevents you from ending a session early. Locked Mode is the feature that makes Freedom genuinely strict, and it is premium only.</p>
          <p>One honest caveat on Freedom. Because it has to work across four operating systems, its iPhone implementation differs from native Screen Time-based blockers, and users commonly report it behaving less consistently on iOS than apps built solely for Apple’s framework. Worth testing during the trial rather than taking on faith.</p>

          <h2>Where Opal wins</h2>
          <p><strong>The best analytics in the category.</strong> Opal Score, trends over time and personalised insight. Nothing else comes close, and if understanding your habits is the point, that is the product.</p>
          <p><strong>A more polished iPhone experience,</strong> built natively on Apple’s framework.</p>
          <p><strong>A free tier that keeps working,</strong> even if it only gives you one rule.</p>
          <p>More options: <Link to="/blog/opal-alternatives" className={linkClass}>Opal alternatives for iPhone</Link>.</p>

          <h2>Where Freedom wins</h2>
          <p><strong>Price.</strong> $39.99 a year against $99.99 is not a small difference.</p>
          <p><strong>Cross-device blocking</strong> across Mac, Windows, iOS and Android on a single plan.</p>
          <p><strong>Locked Mode,</strong> which is a genuine commitment device and cheaper than Opal’s equivalent.</p>

          <h2>The free third option</h2>
          <p>Before spending anything, it is worth knowing that strict blocking is available for free.</p>
          <p><Link to="/" className={linkClass}>Pause</Link> is free with no account, offers five blocking methods including Strict Mode and Friction Lock, and has no in-app pause button. Disclosure: we make it. It is iPhone only, so it does not solve the laptop problem, and it has nothing resembling Opal’s analytics. If your issue is simply that you keep tapping past every override, try free before paying.</p>

          <aside className="blog-callout">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>Which one should you buy?</h2>
          <p><strong>Buy Freedom</strong> if you own a laptop and get distracted on it, or if you want the cheapest established blocker with a real locked mode.</p>
          <p><strong>Buy Opal</strong> if your iPhone is the problem, you want detailed usage insight, and you will actually read the reports.</p>
          <p><strong>Buy neither yet</strong> if you have not tried a free strict blocker. Most people discover their real problem is the override button, not the feature set.</p>

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

export default OpalVsFreedom;
