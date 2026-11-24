import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import PostDates from "@/components/pause/PostDates";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { blogIndexSchema } from "@/lib/schema";

const schema = blogIndexSchema();

const Blog = () => {
  useEffect(() => {
    setCanonical("/blog");
    setSocialMeta({
      title: "Pause Blog | Screen Time That Actually Holds",
      description: "Practical guides to blocking distracting apps and websites, closing Screen Time loopholes, and making your limits harder to undo.",
      path: "/blog",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <header className="max-w-3xl">
          <p className="section-label">Pause blog</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Make your limits harder to undo.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical guides for closing Screen Time loopholes and putting real friction between an impulse and an app.
          </p>
        </header>

        <section className="mt-14 border-t border-border pt-10" aria-labelledby="latest-articles">
          <h2 id="latest-articles" className="text-2xl font-bold">Latest</h2>
          <div className="mt-6 grid max-w-3xl gap-6">
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Social media</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/block-x-twitter-iphone" className="transition-colors hover:text-accent">How to Block X (Twitter) on iPhone: App and Website</Link>
              </h3>
              <PostDates path="/blog/block-x-twitter-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">Blocking the X app leaves twitter.com open, because the old address still works. Here is how to block X on iPhone properly, including every domain.</p>
              <Link to="/blog/block-x-twitter-iphone" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Social media</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/block-youtube-iphone" className="transition-colors hover:text-accent">How to Block YouTube on iPhone (App, Website, Shorts)</Link>
              </h3>
              <PostDates path="/blog/block-youtube-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">Screen Time cannot block Shorts without blocking all of YouTube, but YouTube's own Shorts limit can. Here is how to block each part, and make it hold.</p>
              <Link to="/blog/block-youtube-iphone" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen Time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/screen-time-passcode-backdoor" className="transition-colors hover:text-accent">Screen Time Passcode Backdoor: the Forgot Passcode Reset</Link>
              </h3>
              <PostDates path="/blog/screen-time-passcode-backdoor" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">If Screen Time Passcode Recovery is on, you can reset your own passcode in seconds even when a friend set it. Here is how to check and how to close the gap.</p>
              <Link to="/blog/screen-time-passcode-backdoor" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen Time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/iphone-screen-time-wrong" className="transition-colors hover:text-accent">Why Is My iPhone Screen Time Wrong? What It Measures</Link>
              </h3>
              <PostDates path="/blog/iphone-screen-time-wrong" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">Screen Time counts background activity, notification wake-ups and other devices, and misses audio with the screen off. Here is how to read it correctly.</p>
              <Link to="/blog/iphone-screen-time-wrong" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Social media</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/delete-or-block-instagram" className="transition-colors hover:text-accent">Should You Delete Instagram or Just Block It? How to Pick</Link>
              </h3>
              <PostDates path="/blog/delete-or-block-instagram" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">One question decides it: do your DMs matter? Here is why deleting rarely sticks, when it is still the right call, and what blocking does differently.</p>
              <Link to="/blog/delete-or-block-instagram" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/how-much-screen-time-too-much" className="transition-colors hover:text-accent">How Much Screen Time Is Too Much? No Official Limit</Link>
              </h3>
              <PostDates path="/blog/how-much-screen-time-too-much" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">No health body publishes a daily screen time limit for adults. Here is what the guidelines actually say, where the two hour figure came from, and what to track.</p>
              <Link to="/blog/how-much-screen-time-too-much" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen Time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/blocked-app-still-works-in-browser" className="transition-colors hover:text-accent">Why Your Blocked App Still Works in Safari and Chrome</Link>
              </h3>
              <PostDates path="/blog/blocked-app-still-works-in-browser" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">App limits and website blocking are separate on iPhone, and Screen Time does not filter Chrome at all. Here is why your block leaks and how to close it.</p>
              <Link to="/blog/blocked-app-still-works-in-browser" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Reading habits</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/phone-instead-of-reading" className="transition-colors hover:text-accent">Why You Pick Up Your Phone Instead of Reading a Book</Link>
              </h3>
              <PostDates path="/blog/phone-instead-of-reading" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">It is not a concentration problem. Reaching for your phone is automatic and reading is not, so willpower loses. Here is what actually works.</p>
              <Link to="/blog/phone-instead-of-reading" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Research</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/do-app-blockers-work" className="transition-colors hover:text-accent">Do App Blockers Actually Work? What Studies Show (2026)</Link>
              </h3>
              <PostDates path="/blog/do-app-blockers-work" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">Research says app blockers cut screen time while active. A 2023 PNAS study found 57% fewer app opens. Here is what works, and where the evidence is weak.</p>
              <Link to="/blog/do-app-blockers-work" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/app-blocker-you-cant-delete" className="transition-colors hover:text-accent">
                  App Blocker You Can't Delete: What iPhone Really Allows
                </Link>
              </h3>
              <PostDates path="/blog/app-blocker-you-cant-delete" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                An iPhone app blocker can stop you deleting it, but only during a session and only by blocking all app deletion. Here is where each layer breaks.
              </p>
              <Link to="/blog/app-blocker-you-cant-delete" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen Time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/screen-time-not-working" className="transition-colors hover:text-accent">
                  Screen Time Not Working on iPhone? Here's Why
                </Link>
              </h3>
              <PostDates path="/blog/screen-time-not-working" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Screen Time limits failing on iPhone usually means one of two things, and only one is a bug. Here is how to tell which problem you have, and how to fix each.
              </p>
              <Link to="/blog/screen-time-not-working" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Focus</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/stop-checking-phone-at-work" className="transition-colors hover:text-accent">
                  How to Stop Checking Your Phone at Work
                </Link>
              </h3>
              <PostDates path="/blog/stop-checking-phone-at-work" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Working from home removed the one thing that kept you off your phone at a desk. Here is why quick checks cost more than the minutes, and the setup that holds.
              </p>
              <Link to="/blog/stop-checking-phone-at-work" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Social media</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/block-tiktok-iphone" className="transition-colors hover:text-accent">
                  How to Block TikTok on iPhone (App and Website)
                </Link>
              </h3>
              <PostDates path="/blog/block-tiktok-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Blocking the TikTok app leaves tiktok.com open in Safari, and TikTok's own limits can be dismissed. Here is how to block TikTok properly, free.
              </p>
              <Link to="/blog/block-tiktok-iphone" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Social media</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/block-instagram-iphone" className="transition-colors hover:text-accent">
                  How to Block Instagram on iPhone (Including Threads)
                </Link>
              </h3>
              <PostDates path="/blog/block-instagram-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Blocking the Instagram app leaves instagram.com and Threads wide open. Here is how to block Instagram properly on iPhone, free, including the parts guides miss.
              </p>
              <Link to="/blog/block-instagram-iphone" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">New year</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/reduce-screen-time-new-year" className="transition-colors hover:text-accent">
                  How to Reduce Your Screen Time in 2027
                </Link>
              </h3>
              <PostDates path="/blog/reduce-screen-time-new-year" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Why most resolutions stop by mid-January, the smaller target that holds, and a fifteen minute setup that keeps working in February.
              </p>
              <Link
                to="/blog/reduce-screen-time-new-year"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">How it works</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/how-app-blockers-work-iphone" className="transition-colors hover:text-accent">
                  How App Blockers Actually Work on iPhone (2026)
                </Link>
              </h3>
              <PostDates path="/blog/how-app-blockers-work-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                What Apple's Screen Time framework lets a blocker do, why no blocker is truly unbypassable, and the three questions that predict whether one will hold.
              </p>
              <Link
                to="/blog/how-app-blockers-work-iphone"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/opal-vs-freedom" className="transition-colors hover:text-accent">
                  Opal vs Freedom (2026): iPhone Only or Every Device?
                </Link>
              </h3>
              <PostDates path="/blog/opal-vs-freedom" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Price, free tiers and platform coverage compared: when Opal's iPhone focus wins and when Freedom's four-platform plan is worth it.
              </p>
              <Link
                to="/blog/opal-vs-freedom"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/brick-vs-opal" className="transition-colors hover:text-accent">
                  Brick vs Opal (2026): $59 Once or $99 Every Year?
                </Link>
              </h3>
              <PostDates path="/blog/brick-vs-opal" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Hardware puck or subscription app: how Brick and Opal compare on blocking, bypassing and five-year cost, and which one fits you.
              </p>
              <Link
                to="/blog/brick-vs-opal"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Social media</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/block-reddit-iphone" className="transition-colors hover:text-accent">
                  How to Block Reddit on iPhone (App and Website)
                </Link>
              </h3>
              <PostDates path="/blog/block-reddit-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Why blocking the app leaves reddit.com and old.reddit.com open, four ways to block Reddit properly, and how to make the block hold.
              </p>
              <Link
                to="/blog/block-reddit-iphone"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/app-blockers-for-students" className="transition-colors hover:text-accent">
                  Best App Blockers for Students (2026): What to Block and What to Keep
                </Link>
              </h3>
              <PostDates path="/blog/app-blockers-for-students" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Why blocking your whole phone breaks a study session, which apps to block instead, and a ten minute setup that holds.
              </p>
              <Link
                to="/blog/app-blockers-for-students"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen Time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/stop-scrolling-at-night" className="transition-colors hover:text-accent">
                  How to Stop Scrolling in Bed at Night (2026): Why Blocking Alone Fails
                </Link>
              </h3>
              <PostDates path="/blog/stop-scrolling-at-night" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Why night blocks collapse by the end of the week, and the four-part setup that actually holds past midnight.
              </p>
              <Link
                to="/blog/stop-scrolling-at-night"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/app-blockers-adhd" className="transition-colors hover:text-accent">
                  Best App Blockers for ADHD on iPhone (2026): Why Most Fail and What Works
                </Link>
              </h3>
              <PostDates path="/blog/app-blockers-adhd" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Why most blockers ask for focus at the worst moment, what an ADHD friendly blocker needs, and how to set one up so it sticks.
              </p>
              <Link
                to="/blog/app-blockers-adhd"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/jomo-alternatives" className="transition-colors hover:text-accent">
                  Jomo Alternatives for iPhone (2026): When You Need a Block Without a Break
                </Link>
              </h3>
              <PostDates path="/blog/jomo-alternatives" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Jomo treats the break as a feature. Compare the alternatives worth trying when you keep taking it, Pause included.
              </p>
              <Link
                to="/blog/jomo-alternatives"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/brick-alternatives" className="transition-colors hover:text-accent">
                  Brick Alternatives for iPhone (2026): Do You Need the Hardware?
                </Link>
              </h3>
              <PostDates path="/blog/brick-alternatives" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Compare free software and NFC alternatives to Brick, plus when its $59 physical puck is genuinely worth buying.
              </p>
              <Link
                to="/blog/brick-alternatives"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/opal-alternatives" className="transition-colors hover:text-accent">
                  Opal Alternatives for iPhone (2026): Is It Worth $99 a Year?
                </Link>
              </h3>
              <PostDates path="/blog/opal-alternatives" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                What Opal's free tier actually limits, what the paid version earns, and the alternatives worth switching to, Pause included.
              </p>
              <Link
                to="/blog/opal-alternatives"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen Time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/block-social-media-iphone" className="transition-colors hover:text-accent">
                  How to Block Social Media on iPhone (Instagram, TikTok, YouTube, Reddit, X)
                </Link>
              </h3>
              <PostDates path="/blog/block-social-media-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Most guides block the app and leave the website open. Here are five methods for iPhone, ranked by how hard each one is to tap past.
              </p>
              <Link
                to="/blog/block-social-media-iphone"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/best-app-blockers-iphone" className="transition-colors hover:text-accent">
                  Best App Blockers for iPhone (2026): Ranked by How Hard They Are to Bypass
                </Link>
              </h3>
              <PostDates path="/blog/best-app-blockers-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Seven iPhone blockers judged on a single test: how hard each one is to bypass, and where every blocker still fails.
              </p>
              <Link
                to="/blog/best-app-blockers-iphone"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">App blockers</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/delete-app-blocker-bypass-iphone" className="transition-colors hover:text-accent">
                  Can&apos;t I Just Delete the App Blocker? What Actually Happens on iPhone
                </Link>
              </h3>
              <PostDates path="/blog/delete-app-blocker-bypass-iphone" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                What iOS lets blockers prevent, why restrictions can survive uninstall, and the bypass that matters more than deleting the app.
              </p>
              <Link
                to="/blog/delete-app-blocker-bypass-iphone"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="surface-card surface-card-hover p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">Screen Time</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                <Link to="/blog/remove-ignore-limit-screen-time" className="transition-colors hover:text-accent">
                  How to Remove &quot;Ignore Limit&quot; on Screen Time (And Why It Still Won&apos;t Stop You)
                </Link>
              </h3>
              <PostDates path="/blog/remove-ignore-limit-screen-time" className="mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Close Apple&apos;s most obvious Screen Time escape hatch, check the loopholes that remain, and understand why a passcode you know is not much of a lock.
              </p>
              <Link
                to="/blog/remove-ignore-limit-screen-time"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;