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

const path = "/blog/block-youtube-iphone";
const { title, description } = getRoute(path);
const faqs = [
  {
    "question": "Can you block YouTube Shorts without blocking YouTube?",
    "answer": "Yes, and YouTube is the only major platform where this works. Use the Shorts feed limit inside the YouTube app, under Settings, then Time management, and set it to zero minutes. Apple's Screen Time cannot do this, because it blocks whole apps rather than features inside them. On adult accounts, the Shorts limit can be dismissed, so it is friction rather than a hard block."
  },
  {
    "question": "How do I block YouTube on iPhone for free?",
    "answer": "Screen Time covers it at no cost. Set an App Limit, called a Time Allowance on iOS 27, of one minute on YouTube with blocking at the end of the limit, then block youtube.com under Web Content. Both are built into iOS. Several third-party blockers are also free."
  },
  {
    "question": "Why can I still watch YouTube in Safari after blocking the app?",
    "answer": "Because app limits and website restrictions are separate controls on iPhone. Blocking the app stops the app only. You need to add youtube.com to the Never Allow list under Web Content as a separate step, and even then it applies to Safari rather than to Chrome or Firefox."
  },
  {
    "question": "Does blocking YouTube also block YouTube Music and YouTube Kids?",
    "answer": "No. They are separate apps with separate Screen Time entries. Add each one you have installed to the same limit, or the block leaks through whichever you left out."
  },
  {
    "question": "How do I stop myself from reinstalling YouTube after deleting it?",
    "answer": "Set Installing Apps to Don't Allow under Content and Privacy Restrictions, iTunes and App Store Purchases. Without that, deleting the app achieves very little, since reinstalling takes seconds and your account and history survive untouched."
  },
  {
    "question": "What is the strongest way to block YouTube on iPhone?",
    "answer": "Four layers together: a one-minute limit on YouTube plus YouTube Music and Kids, youtube.com blocked under Web Content, no unfiltered browsers installed, and reinstalls disabled, all locked behind a Screen Time passcode somebody else chose. Any single layer on its own is straightforward to get around."
  }
];
const schema = blogPostSchema(path, faqs);

const BlockYoutubeIphone = () => {
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
            <p className="section-label">Social media</p>
            <h1>{getRoute(path).headline}</h1>
            <PostDates path={path} showModified className="mt-4" />
          </header>
          <p>{"Short answer: set a Screen Time limit on the YouTube app, block youtube.com separately because the app limit does not reliably cover it, and let someone else hold the passcode. If Shorts is the actual problem rather than YouTube itself, there is a better first step, and YouTube is the only major platform where it exists."}</p>
          <h2>{"Block Shorts without blocking YouTube"}</h2>
          <p>{"This is worth doing first because it is the one option most guides bury."}</p>
          <p>{"Apple's Screen Time cannot separate Shorts from the rest of YouTube. It sees one app and blocks all of it, tutorials and sermons and Shorts alike. YouTube's own app, however, has a Shorts feed limit you can set to zero."}</p>
          <p>{"Open YouTube, tap your profile picture, go to Settings, then Time management, then Shorts feed limit, and set it to zero minutes."}</p>
          <p>{"That removes the compulsive surface while leaving search, subscriptions, and anything you actually use. On Instagram and TikTok, this is impossible. YouTube is the exception."}</p>
          <p>{"One honest caveat. On adult accounts, the limit can be dismissed, so treat it as friction rather than a lock. It is still the only Shorts-specific control that exists, and for a lot of people it solves the whole problem."}</p>
          <h2>{"Block the whole YouTube app"}</h2>
          <p>{"If YouTube itself is the issue, use Screen Time."}</p>
          <p>{"On iOS 16 to 26, go to Settings, Screen Time, App Limits, Add Limit. Uncheck everything, expand Entertainment, and select YouTube. Set it to one minute, the minimum allowed, and turn on Block at End of Limit. The icon greys out once that minute is used."}</p>
          <p>{"On iOS 27 the names changed. App Limits are now Time Allowances and Downtime is now Screen Time Schedule. Set a low allowance on YouTube under Settings, Screen Time, Time Allowances, then lock it under Manage Screen Time, Lock Screen Time Settings."}</p>
          <h2>{"Catch the other YouTube apps"}</h2>
          <p>{"Blocking YouTube and stopping there is the most common mistake."}</p>
          <p>{"YouTube Music and YouTube Kids are separate apps with separate entries. If either is installed, add them to the same limit; otherwise, you have blocked one door and left two open."}</p>
          <h2>{"Close the browser route"}</h2>
          <p>{"A blocked app does not mean a blocked website. Apple says an allowance covers an app's website only if the app declares the connection, so youtube.com needs testing in Safari after you set your limit."}</p>
          <p>{"To block it, go to Settings, Screen Time, Content and Privacy Restrictions, Content Restrictions, Web Content. Choose Limit Adult Websites, then add youtube.com under Never Allow."}</p>
          <p>{"Two things to know about this. Screen Time's web filtering works at the domain level, so it will not reliably block only the /shorts path while leaving the rest of YouTube available. And the filtering applies to Safari, not to Chrome, Firefox or Brave, which receive no Screen Time web restrictions at all. If you keep an unfiltered browser installed, the block is decorative."}</p>
          <h2>{"Make it actually hold"}</h2>
          <p>{"Everything above is undone in seconds if you can edit it."}</p>
          <p>{"Block reinstalls. If you deleted the app, go to Settings, Screen Time, Content and Privacy Restrictions, iTunes and App Store Purchases, Installing Apps, and set it to Don't Allow. Otherwise, YouTube is a nine-second redownload away."}</p>
          <p>{"Set a Screen Time passcode, ideally one someone else chooses. A code you picked yourself is an unlock button with four extra taps. Also check whether Screen Time Passcode Recovery is active, because if it is you can reset that code using your Apple Account even when a friend set it."}</p>
          <p>{"If you would rather not manage five settings, a blocker without an override button handles the app side in one place. Pause is free, which means you can pair it with the website block above and see whether the combination holds before paying for anything."}</p>
          <p><Link to="/blog/blocked-app-still-works-in-browser">Why blocked apps still work in a browser</Link>, <Link to="/blog/screen-time-passcode-backdoor">how to close Screen Time Passcode Recovery</Link>, and <Link to="/blog/block-social-media-iphone">how to block social media on iPhone</Link>.</p>
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

export default BlockYoutubeIphone;
