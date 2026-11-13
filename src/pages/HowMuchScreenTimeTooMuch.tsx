import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/how-much-screen-time-too-much";
const { title, description } = getRoute(path);
const faqs = [
  {
    question: "Is there an official screen time limit for adults?",
    answer: "No. The WHO, AAP, APA, and CDC publish screen guidance for children and none for adults. Any article giving you a specific recommended adult limit is either quoting Stanford Lifestyle Medicine's two-hour recreational benchmark without the qualifier, or repeating a number with no source.",
  },
  {
    question: "Is 7 hours of screen time bad?",
    answer: "Seven hours is close to the global average, so it is normal rather than extreme. Scripps Health notes that seven or more hours can be unhealthy depending on how and why screens are used, which is the honest answer. Seven hours of work and video calls is a different thing from seven hours of scrolling, and no guideline treats them the same.",
  },
  {
    question: "What is the average screen time for adults?",
    answer: "Around seven hours a day globally across all devices, with the United States slightly higher. Phone-specific figures are lower, roughly five hours. Estimates vary noticeably between studies because they measure different devices, so treat any single figure as approximate.",
  },
  {
    question: "Does work screen time count?",
    answer: "Under the most cited benchmark, no. Stanford Medicine's two-hour figure applies to screen time outside work. For work screens, the guidance that exists is about breaks, posture, and eye strain rather than cutting hours, because most people cannot.",
  },
  {
    question: "How much screen time is too much before bed?",
    answer: "No body publishes a figure for this either, but the sleep guidance is firm: the CDC recommends at least seven hours a night for adults 18 to 60. If evening screen use is the reason you are below that, it is too much for you regardless of your daily total.",
  },
  {
    question: "How do I know if my screen time is actually a problem?",
    answer: "Less by the number and more by whether it displaces sleep, movement, people and focused work, and whether you can stop when you intend to. If your hours are high but nothing important is getting crowded out, the figure on its own is weak evidence of anything.",
  },
];
const schema = blogPostSchema(path, faqs);

const HowMuchScreenTimeTooMuch = () => {
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
            <p className="section-label">Screen time</p>
            <h1>{getRoute(path).headline}</h1>
          </header>
          <p>{"Short answer: no major health body publishes a daily screen time limit for adults. The WHO, AAP, APA, and CDC all set guidance for young children and none for adults, which means the widely repeated “experts recommend two hours” figure has no authoritative source behind it. The useful question is not how many hours you spend on screens. It is what those hours are replacing."}</p>
          <p>{"Here is what the guidance actually says, where the two-hour number came from, and what to measure instead."}</p>
          <h2>{"What the guidelines actually say"}</h2>
          <p>{"Search this question, and you will find consistent numbers. Under two hours. Two to four hours. Seven hours is the danger point. They cannot all be right, and most of them are not sourced."}</p>
          <p>{"The position is simpler than it looks. Health organisations publish screen time guidance for children, where the research base is stronger, and the stakes are developmental. For adults, the largest screen-using population on Earth, no major medical organisation has published an authoritative threshold at all."}</p>
          <p>{"The American Academy of Child and Adolescent Psychiatry encourages healthy habits without naming a limit. Scripps Health, a hospital system, states plainly that there is no set screen time limit for adults, adding that seven or more hours can be unhealthy depending on how and why the screens are used."}</p>
          <p>{"That last clause is the part most articles drop."}</p>
          <h2>{"Where the “two hours” number comes from"}</h2>
          <p>{"It is not invented, but it is narrower than how it gets quoted."}</p>
          <p>{"The most commonly cited source is Stanford Lifestyle Medicine, which defines excessive screen time as more than two hours a day outside work. That qualifier changes the meaning entirely. It is not a two hour cap on all screens. It is a benchmark for recreational use, which excludes the eight hours most people spend on a computer because their job requires it."}</p>
          <p>{"When a site tells you experts recommend two hours and does not mention the work exclusion, the number has been stripped of the thing that made it meaningful."}</p>
          <h2>{"What the average actually is"}</h2>
          <p>{"Context helps before you judge your own number."}</p>
          <p>{"Global average daily screen time sits at roughly seven hours. The United States is slightly higher, around seven hours. Estimates vary by methodology, with some sources putting adults closer to six hours forty minutes, and totals climb well past ten hours once work computers and television are included."}</p>
          <p>{"It skews sharply by age. Gen Z averages around seven hours eighteen minutes a day. Millennials sit near six hours forty, Gen X around six, and Baby Boomers under three."}</p>
          <p>{"So if your weekly report says seven hours and you felt alarmed, you are average. That is not reassurance, because average is not the same as healthy. It does mean the number alone tells you very little."}</p>
          <h2>{"A better question than hours"}</h2>
          <p>{"Since no threshold exists, the practical approach is to look at what screens displace rather than what they total."}</p>
          <p>{"The clearest yardsticks come from guidance that does exist. The CDC recommends at least seven hours of sleep a night for adults aged 18 to 60. Adults sitting eight or more hours a day face elevated cardiovascular risk. Those are published figures with real evidence behind them, and they are measurable."}</p>
          <p>{"So the questions worth asking are whether your screen time is cutting into sleep, whether it has replaced movement, whether it is eating the time you would otherwise spend with people, and whether it is pulling attention away from work you care about."}</p>
          <p>{"A person on nine hours of screens who sleeps well, exercises and sees friends is in a different position from a person on five hours who scrolls until two in the morning. The totals say the opposite of the truth."}</p>
          <h2>{"When the number is worth acting on"}</h2>
          <p>{"There is one signal more reliable than any hour count: whether you can stop when you intend to."}</p>
          <p>{"If you regularly open an app meaning to spend two minutes and lose forty, the problem is not the total. It is that the behaviour is running without your involvement. That is the point where a tool helps, because the issue is the moment of reaching rather than the size of the figure."}</p>
          <p>{"Pause is free, so you can test whether blocking changes anything for you before deciding your screen time needs managing at all."}</p>
          <p><Link to="/blog/reduce-screen-time-new-year">Reducing your screen time so it sticks</Link>, <Link to="/blog/stop-scrolling-at-night">stopping late night scrolling</Link>, and <Link to="/blog/do-app-blockers-work">what the research says about app blockers</Link>.</p>
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

export default HowMuchScreenTimeTooMuch;
