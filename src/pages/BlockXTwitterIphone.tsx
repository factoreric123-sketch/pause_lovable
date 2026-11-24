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

const path = "/blog/block-x-twitter-iphone";
const { title, description } = getRoute(path);
const faqs: { question: string; answer: string }[] = [];
const schema = blogPostSchema(path, faqs);

const BlockXTwitterIphone = () => {
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
          <p className="blog-callout">{"Blocking the X app is only half the job. X is the one platform where the old address still works, so twitter.com stays open after you block x.com. To block X properly on iPhone you need a Screen Time limit on the app, every X domain on the Never Allow list, and a passcode you cannot undo yourself."}</p>
          <h2>{"Why blocking the app is not enough"}</h2>
          <p>{"X is the app people most often reopen in Safari after blocking it. Part of that is habit, and part is that the web version works well enough to be a real substitute."}</p>
          <p>{"The bigger problem is the rename. Twitter became X, but twitter.com never stopped working. Block x.com and leave twitter.com alone and you have blocked a front door while leaving the side entrance open. No other platform is in this situation with two live domains."}</p>
          <h2>{"Block the X app with Screen Time"}</h2>
          <p>{"On iOS 16 to 26, go to Settings, Screen Time, App Limits, Add Limit. Uncheck everything, expand Social, and select X. Set your daily time, then turn on Block at End of Limit so the app actually locks rather than warning you."}</p>
          <p>{"On iOS 27 the names changed. App Limits are now Time Allowances, found under Settings, Screen Time, Time Allowances. Downtime is now Screen Time Schedule. Set a low allowance for the category holding X, then lock it under Manage Screen Time, Lock Screen Time Settings."}</p>
          <p>{"Without Block at End of Limit, the limit is a notification with an Ignore Limit button underneath it."}</p>
          <h2>{"Block every X domain, not just x.com"}</h2>
          <p>{"This is the step most guides get wrong, and it is the one that decides whether your block holds."}</p>
          <p>{"Go to Settings, Screen Time, Content and Privacy Restrictions, Content Restrictions, Web Content. Choose Limit Adult Websites, then add each of these under Never Allow:"}</p>
          <ul><li>x.com</li><li>twitter.com</li><li>mobile.twitter.com</li></ul>
          <p>{"Adding only x.com leaves the original Twitter address fully functional."}</p>
          <p>One limitation applies to all of this. Screen Time&apos;s web filtering covers Safari and does not cover Chrome, Firefox or Brave, which receive no Screen Time web restrictions at all. If you keep an <Link to="/blog/blocked-app-still-works-in-browser">unfiltered browser</Link> installed, every domain above is reachable in it.</p>
          <h2>{"If you cannot find X in Screen Time"}</h2>
          <p>{"On some iOS versions the app still appears as Twitter rather than X in the Screen Time app list. If you expand Social and cannot see X, look for Twitter instead."}</p>
          <p>{"People often assume the block failed when in fact they were searching for the wrong name."}</p>
          <h2>{"Make the block hold"}</h2>
          <p>{"Three things, and the last one matters most."}</p>
          <p>{"Block reinstalls. If you delete the app, go to Settings, Screen Time, Content and Privacy Restrictions, iTunes and App Store Purchases, Installing Apps, and set it to Don't Allow. Otherwise reinstalling takes nine seconds and your timeline is waiting exactly as you left it."}</p>
          <p>{"Set a Screen Time passcode different from your unlock code. A code you chose yourself is an unlock button with four extra taps, so have someone else choose it if you can."}</p>
          <p>Then check <Link to="/blog/screen-time-passcode-backdoor">Screen Time Passcode Recovery</Link>. If it is active you can reset that passcode using your Apple Account, even when a friend set it, which quietly defeats the whole arrangement.</p>
          <p>{"If managing six settings is more than you want, a blocker without an override button handles the app side in one place. Pause is free, so you can pair it with the domain list above and see whether the combination survives a bad evening."}</p>
          <p>For the other platforms, see our <Link to="/blog/block-social-media-iphone">full guide to blocking social media on iPhone</Link>.</p>
          <p><a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-accent hover:text-foreground">Download Pause free for iPhone <ArrowRight className="h-4 w-4" /></a></p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlockXTwitterIphone;
