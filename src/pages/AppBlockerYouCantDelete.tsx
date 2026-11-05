import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/app-blocker-you-cant-delete";
const { title, description } = getRoute(path);
const faqs = [
  {
    question: "Is there an app blocker that can't be turned off on iPhone?",
    answer: "No. Every iPhone app blocker runs on a Screen Time permission you granted and can revoke in Settings, and every one can be deleted once a session ends. Apple built iOS so the phone's owner outranks every app on it. Any app claiming to be unbypassable is either describing strict mode loosely or is not being straight with you.",
  },
  {
    question: "Can an app stop me from uninstalling it on iPhone?",
    answer: "Yes, temporarily. Using Apple's FamilyControls framework, a blocker can switch off app deletion while a block session is running. The catch is that this disables deletion for every app on your phone, not just that one, and it stops working when the session ends.",
  },
  {
    question: "Why can't I delete any apps on my iPhone?",
    answer: "In most cases an app blocker has deletion blocking turned on, or the restriction is set under Settings, Screen Time, Content and Privacy Restrictions, iTunes and App Store Purchases, Deleting Apps. Set it to Allow and deletion returns. On a work or school phone, an MDM profile may be the cause instead.",
  },
  {
    question: "How do I stop myself from deleting my app blocker?",
    answer: "Use a blocker with uninstall protection, then add a Screen Time passcode that someone else chooses. The passcode is the part that matters, because without it you can revoke the blocker's permission in Settings and remove it the moment the session ends.",
  },
  {
    question: "Does deleting an app blocker remove its restrictions?",
    answer: "Usually yes. Deleting the app removes its Screen Time shield and your apps become available again. Restrictions you set directly in Apple's Screen Time settings are separate and stay in place.",
  },
  {
    question: "What is strict mode in an app blocker?",
    answer: "Strict mode is a setting that prevents you editing or ending a block while it runs. Implementations vary: some lock your rules, some block the Settings app, some switch off app deletion. None of them remove your ability to revoke Screen Time permission afterwards.",
  },
];
const schema = blogPostSchema(path, faqs);

const AppBlockerYouCantDelete = () => {
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
          <p>Short answer: partly. An iPhone app blocker can stop you deleting it, but only while a block session is active, and only by switching off app deletion across your entire phone. It cannot stop you revoking its Screen Time permission in Settings. No app blocker on iOS is impossible to turn off.</p>
          <p>That is the honest answer, and most pages searching for an app blocker you can't delete either skip it or stop halfway. Here is what each layer of protection actually does, and the exact point where each one breaks.</p>
          <h2>Why deleting the blocker is the most common bypass</h2>
          <p>The pattern is familiar. You install an app blocker, set your limits, and it works for a week. Then at 11pm you hold down the icon, tap Delete App, and Instagram is back in four seconds. Reinstalling the blocker tomorrow costs nothing.</p>
          <p><Link to="/blog/delete-app-blocker-bypass-iphone">Deleting the app blocker is the easiest bypass on iPhone</Link>, which is why "uninstall protection" and "strict mode" exist at all.</p>
          <h2>Layer 1: blocking app deletion</h2>
          <p>Apple's FamilyControls framework, the same system every iPhone app blocker runs on, allows an app to switch off app deletion on the device. Apple's own developer forum confirms it: individual apps can be marked non removable through a properly configured FamilyControls app.</p>
          <p>This is what blockers call Strict Mode, Locked Mode, or Uninstall Protection. It genuinely works. But it carries two limitations that almost nobody writes down.</p>
          <p>It blocks deletion of every app, not just the blocker. Freedom's own support documentation states this plainly: uninstall protection will block deletion of all apps from the device. If you try to clear storage mid session, you cannot.</p>
          <p>It only runs during an active session. The moment your block ends, deletion comes back. Freedom documents this too. An app blocker you can't delete is really an app blocker you can't delete right now.</p>
          <p>This is also why Apple's support forums fill up with people asking why they suddenly cannot delete anything on their iPhone. The answer is usually a blocker they installed and forgot about.</p>
          <h2>Layer 2: the Screen Time permission</h2>
          <p>This is the layer that defeats everything above it.</p>
          <p>Every app blocker on iPhone works because you granted it Screen Time access. That permission lives in Settings, under Screen Time, and you can take it back whenever you like. Revoke it and the blocking stops, even with the blocker still installed and a session still running.</p>
          <p>Some apps counter this by blocking the Settings app itself during a session. That slows you down. It does not stop you, because turning the phone off and on, or waiting for the session to end, returns access.</p>
          <p>If you are looking for an app blocker you can't turn off, this permission is the reason one does not exist.</p>
          <h2>Layer 3: the Screen Time passcode</h2>
          <p>A Screen Time passcode is the only layer that creates a real lock, and only under one condition: someone else has to set it.</p>
          <p>A passcode you chose yourself is an unlock button with four extra taps. A passcode your partner or a friend chose, with Block at End of Limit switched on, means getting past your own restrictions requires asking another human being. That is friction a blocker alone cannot produce.</p>
          <h2>Layer 4: the factory reset</h2>
          <p>Nothing survives erasing the phone. Every restriction, passcode and blocker goes with it.</p>
          <p>Worth knowing, but in practice it costs hours of setup and restoring from backup. For most people that is friction enough.</p>
          <h2>What to actually look for in an app blocker</h2>
          <p>Judge an iPhone app blocker by how many layers it covers, and be suspicious of any that claims to be unbypassable.</p>
          <p>A strong setup covers deletion blocking during sessions, a strict mode that prevents editing rules mid session, and a Screen Time passcode held by someone else. That combination does not make blocking impossible to defeat. It makes defeating it slow and deliberate instead of a reflex, which is the real goal.</p>
          <p>Pause runs on <Link to="/blog/how-app-blockers-work-iphone">the same Screen Time framework as every other iPhone blocker</Link> and is free, so you can test how far its strict mode holds before committing to a paid subscription elsewhere.</p>
          <p><a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-accent hover:text-foreground">Download Pause free for iPhone <ArrowRight className="h-4 w-4" /></a></p>
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

export default AppBlockerYouCantDelete;
