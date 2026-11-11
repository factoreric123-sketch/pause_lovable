import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/blocked-app-still-works-in-browser";
const { title, description } = getRoute(path);
const faqs = [
  {
    "question": "Why can I still use a blocked app in the browser? (H3)\nBecause app limits and website restrictions are separate controls. Blocking the app stops the app only. The website version needs to be blocked separately under Content and Privacy Restrictions, Web Content, and even then only Safari is covered.",
    "answer": "Does Screen Time block websites in Chrome? (H3)\nNo, not in the way it does in Safari. Screen Time’s web content filtering applies to Safari, and third-party browsers like Chrome, Firefox, and Brave do not receive the same restrictions. Apple’s developer forums carry long-running discussions about exactly this. The practical answer is to restrict or remove those browsers rather than trying to filter them."
  },
  {
    "question": "How do I block a website on iPhone permanently? (H3)\nSettings, Screen Time, Content and Privacy Restrictions, Content Restrictions, Web Content, Limit Adult Websites, then add the URL under Never Allow. Lock it with a Screen Time passcode; otherwise, it can be undone in seconds. Remember this covers Safari, so an unrestricted browser elsewhere will defeat it.",
    "answer": "Why does a blocked site still open when I tap a link in a message? (H3)\nMany messaging and email apps open links in their own built-in browser rather than handing them to Safari, which puts the page outside Safari’s restrictions. If this is how you keep reaching the site, the messaging app itself needs a limit during the hours that matter."
  },
  {
    "question": "Can any iPhone app blocker block websites properly?  (H3)\nPartially. Some use a Safari extension or route traffic through their own controlled browser, which covers more ground than Screen Time alone. None of them can filter inside Chrome or Firefox, because iOS does not expose that to apps. Treat broad “blocks all websites” claims with suspicion.",
    "answer": "Is there a way to make this completely airtight on iPhone? (H3)\nNot for the phone’s owner. You can remove every browser but Safari, filter Safari, limit apps with built-in browsers, and lock it behind a passcode someone else holds. That is close. It is not airtight because the owner of an iPhone can always change settings, and Apple designed it that way deliberately."
  }
];
const schema = blogPostSchema(path, faqs);

const BlockedAppStillWorksInBrowser = () => {
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
          <p>{"Short answer: because blocking an app and blocking a website are two separate systems on an iPhone. Screen Time’s app limits stop the app. They do not reliably stop the same service from loading as a website, and any browser that is not Safari sits outside Screen Time’s website filtering entirely. Block Instagram in the app, open Instagram in Chrome, and nothing stops you."}</p>
          <p>{"Here is what is actually happening and how to close it."}</p>
          <h2>{"App blocking and website blocking are different systems"}</h2>
          <p>{"When you block an app, iOS restricts that app. It does not restrict the internet."}</p>
          <p>{"Apple does cover part of this. A blocked app’s website is normally unavailable in Safari, which is why people assume the whole thing is sealed. It is not, because Safari is only one of several ways to load a web page on an iPhone."}</p>
          <p>{"This also applies to time limits rather than outright blocks. A time allowance covers an app’s website only if the app itself declares the connection, so the browser remains an open route in plenty of cases."}</p>
          <h2>{"The third-party browser gap"}</h2>
          <p>{"This is the big one, and it is rarely written down clearly."}</p>
          <p>{"Screen Time’s website restrictions apply to Safari. They do not apply the same way inside Chrome, Firefox, Brave or other third-party browsers, because those apps do not receive the same filtering. The issue has been raised repeatedly on Apple’s own developer forums, where a developer asked whether Apple provides any way for third-party browsers to honour Screen Time’s website blocks, pointing out that being able to block Twitter or Facebook is close to useless if the web version still loads in Chrome."}</p>
          <p>{"So if you have blocked the YouTube app and Chrome is still installed, YouTube is still on your phone. The block is cosmetic."}</p>
          <h2>{"The in-app browser route"}</h2>
          <p>{"Even with Safari and third-party browsers handled, links still open."}</p>
          <p>{"Most messaging and email apps carry their own built-in browser. Tap a link in Discord, Gmail, or a similar app and the page opens inside that app rather than in Safari, which means Screen Time’s Safari-level restrictions are not in the path at all."}</p>
          <p>{"This is the hardest leak to close, because the app doing the browsing is a legitimate one you probably want to keep."}</p>
          <h2>{"How to actually close the gap"}</h2>
          <p>{"Four steps, roughly in order of how much they help."}</p>
          <p>{"Block the website, not just the app. Go to Settings, Screen Time, Content and Privacy Restrictions, Content Restrictions, Web Content. Choose Limit Adult Websites, then add the specific site under Never Allow. This is what stops the web version in Safari, and it is a different setting from your app limit."}</p>
          <p>{"Deal with other browsers. Screen Time cannot filter inside Chrome, Firefox or Brave, so filtering is not an option. The only thing that works is restricting those browsers as apps, or removing them. If you keep an unfiltered browser installed, assume everything else is decorative."}</p>
          <p>{"Limit the apps with built-in browsers if this is your actual leak. If you notice yourself opening the site through links in a messaging app, that app is now part of the problem and needs its own limit during the hours you care about."}</p>
          <p>{"Set a Screen Time passcode. None of the above holds if you can walk into Settings and switch it off in ten seconds. Ideally, someone else chooses the code."}</p>
          <h2>{"The honest limit"}</h2>
          <p>{"Everything above reduces leakage. None of it makes blocking airtight, and you should know that before you spend an evening on settings."}</p>
          <p>{"This applies to third-party app blockers too, including Pause. Every iPhone blocker runs on Apple’s Screen Time framework, which means every one inherits the same browser boundary. Any app claiming otherwise is describing something iOS does not provide."}</p>
          <p>{"What a blocker adds is enforcement on the app side: harder to switch off, harder to delete mid-session, harder to talk yourself through at eleven at night. The browser gap still has to be closed by the website settings above. Pause is free right now, so you can pair it with those settings and see whether the combination holds before paying for anything."}</p>
          <p><Link to="/blog/block-instagram-iphone">Blocking Instagram and Threads</Link>, <Link to="/blog/screen-time-not-working">troubleshooting Screen Time</Link>, and <Link to="/blog/how-app-blockers-work-iphone">what iPhone app blockers can and cannot do</Link>.</p>
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

export default BlockedAppStillWorksInBrowser;
