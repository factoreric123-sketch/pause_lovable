import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "Brick vs Opal (2026): $59 Once or $99 Every Year?";
const description =
  "Brick costs $59 once. Opal costs $99.99 a year. Here is how they actually compare on blocking, bypassing and total cost, and which one is right for you.";
const path = "/blog/brick-vs-opal";
const linkClass = "text-accent underline underline-offset-4 hover:text-foreground";

const faqs = [
  { question: "Is Brick or Opal better?", answer: "Neither is better overall. Brick is harder to bypass because unblocking needs the physical puck. Opal has far better analytics and works anywhere without carrying anything. Pick based on whether your problem is enforcement or understanding." },
  { question: "Is Brick worth $59?", answer: "It is worth it if software blockers have repeatedly failed you, since physical distance is friction you cannot talk your way past. If you have not tried a strict free blocker yet, try one first." },
  { question: "Is Opal worth $99 a year?", answer: "It is worth it if you value the analytics and will use them. If you only want apps blocked reliably, cheaper and free options deliver comparable blocking without the subscription." },
  { question: "Can you bypass Brick?", answer: "Not casually, because unblocking requires the puck. But Brick includes five Emergency Unbricks in the app for when you lose it, and like every iOS blocker it runs on Apple’s framework, so the device owner always retains ultimate control." },
  { question: "Does Opal have a free version?", answer: "Yes, but it is limited to one rule, chosen from Schedule, Time Limits, or Open Limits, plus your Opal Score for the current day. Hard Mode, which prevents ending a session early, requires a paid plan." },
  { question: "Do I need to carry the Brick everywhere?", answer: "Only if you want to start or end blocks while you are out. Many people keep it at home deliberately, which is the point. If you need to block on the move, software suits you better." },
  { question: "Is there a free alternative to both Brick and Opal?", answer: "Yes. Pause and ScreenZen are both free with strict blocking methods. Neither replaces Brick’s physical separation or Opal’s analytics, but both block apps and websites without a subscription." },
];

const schema = blogPostSchema(path, faqs);

const BrickVsOpal = () => {
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

          <p>Short answer: buy the Brick if you have already defeated two or three software blockers, because physical distance is the only friction you cannot argue with. Pay for Opal if you want to understand your phone habits in detail and will actually read the reports.</p>
          <p>Here is the full comparison, including the cost difference almost nobody does the maths on.</p>

          <h2>What each one actually is</h2>
          <p>Brick is a physical puck. You tap your phone against it to start a block and tap again to end it. Leave the Brick in another room, and you cannot unblock. It costs $59 once, with no subscription, and the companion app is free on iPhone and Android.</p>
          <p>Opal is a software app blocker built on Apple’s Screen Time framework. It offers scheduled sessions, focus modes, detailed usage analytics, and an Opal Score. It costs $19.99 a month, $99.99 a year, or $399 for lifetime access.</p>
          <p>They are solving the same problem in completely different ways.</p>

          <h2>The cost nobody compounds</h2>
          <p>Every comparison lists these prices side by side. Almost none of them run the numbers forward.</p>
          <div className="my-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground">Total cost</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Brick</th>
                  <th className="py-3 font-semibold text-foreground">Opal (annual)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-semibold text-foreground">Year 1</td>
                  <td className="py-3 pr-4 text-muted-foreground">$59</td>
                  <td className="py-3 text-muted-foreground">$99.99</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-semibold text-foreground">After 3 years</td>
                  <td className="py-3 pr-4 text-muted-foreground">$59</td>
                  <td className="py-3 text-muted-foreground">$299.97</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-semibold text-foreground">After 5 years</td>
                  <td className="py-3 pr-4 text-muted-foreground">$59</td>
                  <td className="py-3 text-muted-foreground">$499.95</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Brick is a one-time purchase. Opal is a subscription that keeps charging as long as you keep using it. Over three years, Opal costs roughly five times as much.</p>
          <p>Opal does offer $399 lifetime access, which breaks even against the annual plan at about four years. That is a large upfront number for a category most people are still testing.</p>
          <p>Cost is not the only axis, but it is the one that gets glossed over most.</p>

          <h2>How each one blocks</h2>
          <p>Brick blocks through distance. The app uses Apple’s Screen Time framework like everything else on iOS, but the unlock requires the physical object. That is the entire design. If the puck is in a drawer upstairs, the decision to unblock costs you a walk.</p>
          <p>Opal blocks through software settings. Scheduled sessions, focus modes, and Deep Focus, which cannot be ended early once committed. Opal also offers app uninstall protection, which stops you <Link to="/blog/delete-app-blocker-bypass-iphone" className={linkClass}>deleting Opal itself</Link> during a session.</p>

          <h2>How each one gets bypassed</h2>
          <p>This is where the honest comparison lives.</p>
          <p>Opal’s standard sessions can be ended. Outside Deep Focus, stopping a session is straightforward. Opal also runs on Apple’s Screen Time framework, which means it shares the ceiling every iOS blocker has: the owner of the phone always keeps ultimate control.</p>
          <p>Brick’s bypass is physical, which makes it slower. You have to go and get the puck. But Brick includes five Emergency Unbricks in the app, which unblock everything without the device, intended for when you lose it. Additional ones are available by contacting their support.</p>
          <p>So neither is unbypassable. Brick simply makes the bypass cost a trip up the stairs rather than a tap.</p>

          <h2>Where Brick wins</h2>
          <p><strong>Physical separation.</strong> No software equivalent exists. If you have beaten every app you have tried, this is the reason to buy hardware.</p>
          <p><strong>No subscription.</strong> Pay once, own it.</p>
          <p><strong>Android support.</strong> Brick works on iPhone and Android. Opal is iPhone-focused.</p>
          <p>More options: <Link to="/blog/brick-alternatives" className={linkClass}>Brick alternatives for iPhone</Link>.</p>

          <h2>Where Opal wins</h2>
          <p><strong>Analytics.</strong> Opal Score, trends over time, and personalised insight. Nothing in this category comes close, and for people who want to understand their habits before changing them, it is genuinely the product.</p>
          <p><strong>Nothing to carry or lose.</strong> Brick only works when it is nearby. Opal works anywhere, including when you are out, travelling, or at someone else’s house.</p>
          <p><strong>Polish and maturity.</strong> Years of refinement and a large user base behind it.</p>
          <p>More options: <Link to="/blog/opal-alternatives" className={linkClass}>Opal alternatives for iPhone</Link>.</p>

          <h2>The free third option</h2>
          <p>Worth knowing before you spend anything: you can get strict software blocking without paying.</p>
          <p><Link to="/" className={linkClass}>Pause</Link> is free with no account, offers five blocking methods plus Strict Mode and Friction Lock, and has no in-app pause button. Disclosure: we make it. It does not have Opal’s analytics, and it obviously cannot put an object in another room, so it is not a replacement for either if those are what you actually want.</p>
          <p>If your problem is simply that you keep tapping past every override you set, try the free option before spending $59 or $99.</p>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Download Pause free for iPhone</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <a href={SITE.appStoreUrl} className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <h2>Which one should you buy?</h2>
          <p><strong>Buy the Brick</strong> if you have already tried two or three software blockers and found a way past each one. More software will not fix that. $59 once is cheap against the hours it buys back.</p>
          <p><strong>Buy Opal</strong> if you want detailed usage insight, you travel or move around a lot, or you know you will not carry a puck.</p>
          <p><strong>Buy neither yet</strong> if you have not tried a free strict blocker. Most people never need the hardware, and most people do not read the analytics they paid for.</p>

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

export default BrickVsOpal;
