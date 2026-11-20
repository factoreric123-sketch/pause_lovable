import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/screen-time-passcode-backdoor";
const { title, description } = getRoute(path);
const faqs = [
  {
    "question": "What is Screen Time Passcode Recovery?",
    "answer": "It is an Apple Account linked to your Screen Time passcode when you first create it, allowing you to reset that passcode if you forget it. It is optional at setup, enabled by default in the flow, and once attached, it creates a reset route that needs only your Apple Account email and password."
  },
  {
    "question": "Can I still reset my Screen Time passcode if someone else set it?",
    "answer": "Yes, if recovery is enabled. The reset authenticates against the Apple Account on the device rather than against the person who chose the code, so their involvement is not required, and they are not notified. This is the single biggest gap in the partner-held passcode approach."
  },
  {
    "question": "How do I disable Screen Time Passcode Recovery?",
    "answer": "There is no toggle for removing it after the fact. Turn the Screen Time passcode off, then set a new one and decline the Apple Account prompt when it appears during setup. After that, the Forgot Passcode option should no longer show on the passcode entry screen."
  },
  {
    "question": "Why is there no Forgot Passcode option on my iPhone?",
    "answer": "Because no Apple Account was provided when the passcode was first created. For most people, this is a problem, but if you set limits for yourself, it is actually the state you want. Note that recovery uses the Apple Account that was active at the time the passcode was set, not your current one, so changing your Apple ID later can break the reset path."
  },
  {
    "question": "What happens if I remove recovery and then genuinely forget the passcode?",
    "answer": "You cannot reset it through Settings. The remaining route is erasing the device and setting it up again, which removes Screen Time along with everything else. Back up first, and only remove recovery if someone reachable knows the code."
  },
  {
    "question": "Does this affect third-party app blockers too?",
    "answer": "Indirectly, yes. Blockers enforce their own rules, but they run on the same Screen Time framework, and a resettable Screen Time passcode weakens the layer underneath them. Closing recovery strengthens every blocker you use rather than just Apple’s own controls."
  }
];
const schema = blogPostSchema(path, faqs);

const ScreenTimePasscodeBackdoor = () => {
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
          </header>
          <p>{"Short answer: if Screen Time Passcode Recovery is set up, you can reset your own Screen Time passcode in about thirty seconds using your Apple Account, even when someone else chose the code for you. Settings, Screen Time, Change Screen Time Passcode, Forgot Passcode, sign in, done. Every restriction you configured is gone."}</p>
          <p>{"This matters because the most common advice in this space is to have a partner or friend set your passcode. That advice is incomplete, and most people following it have a lock with the key taped to the back."}</p>
          <h2>{"What Screen Time Passcode Recovery actually is"}</h2>
          <p>{"When you first create a Screen Time passcode, iOS asks for an Apple Account to use for recovery. Apple added this in iOS 13.4 and improved it in iOS 16, and it exists for a good reason: parents forget passcodes, and without recovery the only fix is erasing the device."}</p>
          <p>{"The reset path is short. Open Settings, tap Screen Time, tap Change Screen Time Passcode, tap it again, then tap Forgot Passcode. Enter the Apple Account email and password used when the passcode was set, choose a new code, and Screen Time is yours again."}</p>
          <p>{"That is Apple working as designed. It is also the hole."}</p>
          <h2>{"Why the partner-passcode advice fails"}</h2>
          <p>{"Almost every guide on making Screen Time hold says the same thing: give the passcode to someone else so you cannot change your own limits."}</p>
          <p>{"The problem is that the passcode and the recovery route are two different things. Your friend holds four digits. You hold the Apple Account that overrides those four digits. Recovery is tied to the account on the phone, which is yours, so the person holding the code has no say in the reset at all."}</p>
          <p>{"So the setup people believe is airtight comes down to whether you remember that Forgot Passcode exists at eleven at night. Most people do, eventually."}</p>
          <p>{"This is not an exotic workaround either. It is a labelled button in Settings that looks like a safety feature rather than an exit, which is exactly why it catches people."}</p>
          <h2>{"How to close it"}</h2>
          <p>{"Two options, and the first is cleaner."}</p>
          <p>{"Skip recovery when setting the passcode. When iOS prompts for a recovery Apple Account during setup, decline it. With no Apple Account attached, the Forgot Passcode option does not appear at all. If you already set it up with recovery, turn the passcode off and set it again without it."}</p>
          <p>{"You can verify which state you are in without changing anything. Go to Settings, Screen Time, Change Screen Time Passcode, and look at the screen asking for your old code. If Forgot Passcode is sitting underneath the keypad, recovery is active and your limits are resettable. If it is not there, no Apple Account was attached when the code was created."}</p>
          <p>{"Or use a passcode you genuinely do not know. Have someone set it without showing you, and skip recovery at the same time. You cannot trigger a reset for something you never knew, and there is no account path back in."}</p>
          <p>{"One honest warning before you do this. Removing recovery is a real tradeoff. If the person who holds your code becomes unavailable and you need Screen Time off, your remaining option is erasing and restoring the phone. Only close this door if you are confident about who holds the key."}</p>
          <h2>{"What this means for third-party blockers"}</h2>
          <p>{"The same ceiling applies. Every iPhone blocker runs on Apple’s Screen Time framework, so a Screen Time passcode sitting underneath a blocker is only as strong as its recovery setting."}</p>
          <p>{"If you use a blocker with a strict mode and you have also left recovery enabled, the Screen Time layer below it is still resettable. Closing recovery is what makes the whole stack hold, not the blocker on top."}</p>
          <p>{"Pause is free, so you can pair it with a properly configured Screen Time passcode and test whether the combination actually survives a bad evening."}</p>
          <p><Link to="/blog/remove-ignore-limit-screen-time">How to remove Ignore Limit on Screen Time</Link>, <Link to="/blog/screen-time-not-working">why Screen Time limits stop working</Link>, and <Link to="/blog/how-app-blockers-work-iphone">how app blockers work on iPhone</Link>.</p>
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

export default ScreenTimePasscodeBackdoor;
