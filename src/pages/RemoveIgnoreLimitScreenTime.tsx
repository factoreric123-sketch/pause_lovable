import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";

const title = "How to Remove Ignore Limit on Screen Time (iPhone 2026)";
const description = "Remove the Ignore Limit option on Screen Time in two steps — plus the loophole nobody mentions, and why a passcode you already know won't stop you.";
const path = "/blog/remove-ignore-limit-screen-time";
const url = `https://pauseappblocker.com${path}`;

const faqs = [
  {
    question: "Can you remove the Ignore Limit option on iPhone?",
    answer: "Yes. Set a Screen Time passcode under Settings → Screen Time → Lock Screen Time Settings, then enable Block at End of Limit for each app limit. “Ignore Limit for Today” is replaced by a passcode prompt.",
  },
  {
    question: "Why does Ignore Limit still appear after I set a passcode?",
    answer: "Usually because Block at End of Limit is off for that specific limit, or the app sits in your Always Allowed list. Both settings are per-app, not global, so check each limit individually.",
  },
  {
    question: "Does Block at End of Limit actually block the app?",
    answer: "It blocks access until the passcode is entered. It doesn't prevent someone who knows the passcode from continuing — which is the core weakness for anyone limiting their own phone.",
  },
  {
    question: "Can you bypass Screen Time by changing the date and time?",
    answer: "Users have reported that manually changing the device date can cause app limits to stop applying. Locking date and time under Content & Privacy Restrictions reduces the risk.",
  },
  {
    question: "Is Screen Time enough for adults?",
    answer: "Rarely. Screen Time was designed for parental control, where one person sets the rules and another lives under them. When both roles are the same person, every restriction comes with its own key.",
  },
  {
    question: "What's the best way to block apps if I know my own passcode?",
    answer: "Use a blocker with real friction — a challenge, a session commitment or a delay — rather than a code you can type from memory. Friction, not secrecy, is what makes self-imposed limits hold.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How to Remove “Ignore Limit” on Screen Time (And Why It Still Won't Stop You)",
      description,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Pause" },
      publisher: { "@type": "Organization", name: "Pause", url: "https://pauseappblocker.com/" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pauseappblocker.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://pauseappblocker.com/blog" },
        { "@type": "ListItem", position: 3, name: "Remove Ignore Limit on Screen Time", item: url },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

const RemoveIgnoreLimitScreenTime = () => {
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
            <h1>How to Remove &quot;Ignore Limit&quot; on Screen Time (And Why It Still Won&apos;t Stop You)</h1>
          </header>

          <p>You set a 30-minute limit on Instagram. You hit it. A grey screen appears, you tap Ignore Limit for Today, and you&apos;re back in the feed before you&apos;ve finished reading the warning.</p>
          <p>If that&apos;s your loop, you&apos;re not failing at willpower. You&apos;re using a tool that was built to be overridden. Here&apos;s how to close the loophole — and why closing it may still not be enough if you&apos;re the one holding the passcode.</p>

          <h2>Why &quot;Ignore Limit&quot; appears at all</h2>
          <p>It isn&apos;t a bug. Apple built Screen Time so the person using the phone always has an escape hatch: One More Minute, Remind Me in 15 Minutes, or Ignore Limit for Today.</p>
          <p>That design makes sense for a parent who wants flexibility. It falls apart for an adult limiting themselves, because the option appears at the exact moment you&apos;re most motivated to use it. The limit asks you to choose self-control while you&apos;re already reaching for the escape.</p>

          <h2>How to remove the Ignore Limit option</h2>
          <p>There are two steps, and the first one is the part most people skip.</p>

          <h3>1. Set a Screen Time passcode</h3>
          <p>Go to <strong>Settings → Screen Time → Lock Screen Time Settings</strong>. Create a four-digit code and add your Apple Account for recovery.</p>
          <p>This matters because the &quot;Block at End of Limit&quot; toggle only becomes meaningful once a passcode exists. Without it, anyone can walk straight through the limit.</p>

          <h3>2. Turn on Block at End of Limit</h3>
          <p>Go to <strong>Settings → Screen Time → App Limits</strong>, tap the limit you&apos;ve set (or create one), and switch on <strong>Block at End of Limit</strong>.</p>
          <p>Now, when time runs out, the app locks. Instead of &quot;Ignore Limit for Today,&quot; you&apos;ll be asked for your passcode.</p>

          <h3>3. Do the same for Downtime</h3>
          <p>Downtime has its own version of the same problem. Open Downtime, schedule your hours, and enable <strong>Block at Downtime</strong> so the schedule holds instead of prompting you to skip it.</p>

          <h2>The loopholes nobody mentions</h2>
          <p>Even with both toggles on, Screen Time leaks in four places:</p>
          <ul>
            <li><strong>Always Allowed.</strong> Any app on that list ignores your limits entirely. Check it under Settings → Screen Time → Always Allowed and remove anything that shouldn&apos;t be there.</li>
            <li><strong>The browser.</strong> Block the Instagram app and Safari still loads instagram.com. Unless you block the website too, you&apos;ve moved the habit, not stopped it.</li>
            <li><strong>Date and time.</strong> Users have reported that changing the device date manually causes app limits to stop applying. Locking date and time under Content &amp; Privacy Restrictions helps.</li>
            <li><strong>Midnight reset.</strong> Limits reset daily at midnight. If your worst scrolling happens at 1 a.m., your limit has already refilled.</li>
          </ul>

          <h2>Why it still won&apos;t stop you</h2>
          <p>Here&apos;s the part the other guides leave out.</p>
          <p>Removing &quot;Ignore Limit&quot; works brilliantly on a phone you don&apos;t control. A parent sets the passcode; the child doesn&apos;t know it; the limit becomes a wall.</p>
          <p>But if you&apos;re limiting yourself, you set that passcode. You know it. So the lock screen doesn&apos;t stop you — it adds four seconds and a number you already have memorised. After a week, typing it becomes as automatic as tapping Ignore Limit was.</p>
          <p className="blog-callout">You haven&apos;t removed the bypass. You&apos;ve renamed it.</p>
          <p>This is why so many people conclude &quot;Screen Time doesn&apos;t work&quot; when the settings are configured perfectly. The configuration was never the problem. The problem is that a lock is only a lock when unlocking costs something.</p>

          <h2>What actually works instead</h2>
          <p>Two options genuinely change the outcome:</p>
          <ol>
            <li><strong>Give the passcode away.</strong> Have a partner, friend, or flatmate set your Screen Time code and not tell you. Crude, but it turns a fake wall into a real one. The drawback is obvious: you need that person available every time you have a legitimate reason to change a setting.</li>
            <li><strong>Use a blocker that makes unlocking cost something.</strong> This is what Pause does. Instead of a four-digit code you already know, Pause puts a challenge between you and the app: you decide in advance what it takes to get back in, set daily limits that don&apos;t quietly reset the moment you&apos;re tired, and block websites alongside apps so the browser isn&apos;t a side door.</li>
          </ol>
          <p>The point isn&apos;t to make your phone unusable. It&apos;s to make reopening TikTok a decision you actually make, rather than one your thumb makes for you.</p>

          <aside className="surface-card my-12 p-7 sm:p-8" aria-label="Download Pause">
            <h2 className="mt-0">Set a limit you can&apos;t talk yourself out of.</h2>
            <p>Pause makes your own limits harder to undo when the impulse hits.</p>
            <Link to="/" className="inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
              Download Pause for iPhone <ArrowRight className="h-4 w-4" />
            </Link>
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

export default RemoveIgnoreLimitScreenTime;