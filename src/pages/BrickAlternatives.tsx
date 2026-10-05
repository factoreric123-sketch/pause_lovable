import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const title = "Brick Alternatives for iPhone: Do You Need Hardware?";
const description =
  "Brick costs $59 for a physical puck. Compare the best Brick alternatives for iPhone in 2026 — free software and NFC options — and when the hardware is worth it.";
const path = "/blog/brick-alternatives";

const faqs = [
  {
    question: "How much does Brick cost?",
    answer:
      "$59 as a one-time purchase, with no subscription. The app itself is free to download on iPhone and Android; the price is for the physical Brick.",
  },
  {
    question: "Is there a free alternative to Brick?",
    answer:
      "Yes. Foqos is free and open-source and works with any NFC tag if you want the tap mechanic. Pause is free software with Strict Mode and no hardware at all. ScreenZen is free with strict blocking and settings locks.",
  },
  {
    question: "Can you block apps without buying hardware?",
    answer:
      "Yes. Software blockers with strict modes: Pause, ScreenZen, and AppBlock lock your settings so you can't casually undo a session. The trade-off is that nothing physical stops you, so enforcement depends on the app's design.",
  },
  {
    question: "What happens if you lose your Brick?",
    answer:
      "Brick includes five Emergency Unbricks in the app, which unblock everything without the device. Additional ones can be requested from Brick's support team.",
  },
  {
    question: "Does Brick work on Android?",
    answer: "Yes. Brick is available on both iOS and Android.",
  },
  {
    question: "Is Brick worth $59?",
    answer:
      "It's worth it if software blockers have repeatedly failed you, because physical distance is friction you can't argue with. If you haven't tried a strict free blocker yet, try one first.",
  },
  {
    question: "What's the strongest app blocker for iPhone?",
    answer:
      "Hardware-based blockers like Brick are hardest to bypass because unblocking requires the object. Among software, blockers with no in-app override and locked settings come closest.",
  },
];

const tableRows: [string, string, string][] = [
  ["Price", "Free", "$59 one-time"],
  ["Hardware needed", "No", "Yes, the puck"],
  ["Can be left behind", "n/a", "Yes, deliberately"],
  ["Strongest friction", "Strict Mode + challenge", "Physical distance"],
  ["Something to lose", "No", "Yes, 5 Emergency Unbricks"],
  ["Works away from home", "Always", "Only with the Brick"],
  ["Platforms", "iPhone", "iPhone and Android"],
];

const schema = blogPostSchema(path, faqs);

const BrickAlternatives = () => {
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

          <p>Brick is a physical puck you tap your phone against to block distracting apps. It costs $59, one-time, with no subscription, and it works on iPhone and Android.</p>
          <p>The friction is real: leave the Brick in another room, and you physically cannot unblock your apps. But $59 and an object to carry isn't right for everyone, and that's why most people end up searching for a Brick alternative.</p>
          <p>Here's what's worth switching to, and when the hardware is genuinely the better buy.</p>

          <h2>Why people look for a Brick alternative</h2>
          <p>Three reasons come up repeatedly:</p>
          <ul>
            <li><strong>The price.</strong> $59 is a real outlay when free software blockers exist.</li>
            <li><strong>Carrying it.</strong> The Brick only works if it's where you need it. Leave it at home and you can't start a session away from your desk.</li>
            <li><strong>Losing it.</strong> Brick includes five Emergency Unbricks in the app for exactly this, which unblock everything if the puck goes missing. More are available by emailing their support, but the number isn't unlimited.</li>
          </ul>

          <h2>What Brick genuinely does better</h2>
          <p>Worth saying plainly: physical separation is the strongest friction available on a phone.</p>
          <p>Every software blocker, including the ones below, ultimately asks you to not undo it. An object in another room doesn't negotiate. If you've tried four apps and defeated all of them, the hardware is not a gimmick: it's the thing that works.</p>

          <h2>The best Brick alternatives</h2>

          <h3>Pause: free, no hardware, strict enforcement</h3>
          <p><strong>Disclosure: we make Pause.</strong></p>
          <p>Pause is free with no account required. It gives you five blocking methods: Session, Schedule, Time Limit, Open Limit, and Friction Lock, plus Strict Mode, which locks session editing and App List changes until the session ends. Friction Lock requires solving a challenge before access returns.</p>
          <p>Nothing to buy, nothing to carry, nothing to lose. What Brick does better: you can't put software in another room.</p>

          <h3>Foqos: free, open-source, and NFC-based</h3>
          <p>If the tap-a-tag mechanic is what you want but $59 isn't, Foqos does it for free. It's open-source, privacy-first, takes no account or subscription, and works with any NFC tag, including a printed code you leave somewhere inconvenient. The closest thing to Brick without the price.</p>

          <h3>ScreenZen: free, and more capable than most lists admit</h3>
          <p>Delay timers, scroll interruption, daily goals, strict blocking by time range or number of opens, and settings locks with an accountability partner. Free, funded by optional tips. A genuinely strong option and often the right first try.</p>

          <h3>AppBlock: best value paid software</h3>
          <p>Blocks apps and websites with a Strict Mode that prevents editing rules or uninstalling for a set period. Around $4.99 monthly, $29.99 yearly, or $89.99 lifetime.</p>

          <h3>Apple Screen Time: free, and the weakest</h3>
          <p>
            Already on your phone, but when you hit your limit, iOS offers "Ignore Limit for Today," one tap away. A starting point, not a solution.{" "}
            <Link to="/blog/remove-ignore-limit-screen-time" className="text-accent underline underline-offset-4 hover:text-foreground">
              How to remove Ignore Limit on Screen Time.
            </Link>
          </p>

          <h2>Brick vs Pause</h2>
          <div className="my-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground">Feature</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Pause</th>
                  <th className="py-3 font-semibold text-foreground">Brick</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([label, pause, brick]) => (
                  <tr key={label} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-semibold text-foreground">{label}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{pause}</td>
                    <td className="py-3 text-muted-foreground">{brick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Who should buy the Brick anyway?</h2>
          <p>Be honest with yourself here. If you've already tried two or three software blockers and found a way past each one, more software probably isn't the answer; you need the object. $59 once is cheap against the hours it buys back.</p>
          <p>If you haven't tried a strict software blocker yet, start free. Most people never need the hardware.</p>

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

export default BrickAlternatives;