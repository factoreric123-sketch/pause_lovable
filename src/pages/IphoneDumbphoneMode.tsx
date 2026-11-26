import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PostDates from "@/components/pause/PostDates";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { blogPostSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const path = "/blog/iphone-dumbphone-mode";
const { title, description, headline } = getRoute(path);
export const faqs = [
  {
    question: "Can you turn an iPhone into a real dumbphone?",
    answer: "Not fully. You cannot remove the hardware or the operating system, so an iPhone stays an iPhone underneath. Assistive Access gets closest by replacing the interface and gating everything else behind a passcode, but the device remains capable of far more than a dumbphone.",
  },
  {
    question: "What is Assistive Access?",
    answer: "An iOS accessibility feature introduced in iOS 17, designed to make iPhone easier to use for people with cognitive disabilities. It replaces the standard interface with large buttons and a short list of apps you choose. Find it at Settings, Accessibility, Assistive Access.",
  },
  {
    question: "Can you leave Assistive Access whenever you want?",
    answer: "Only with its passcode, which is separate from your device passcode and is required both to exit and to change the settings. That makes it stricter than most blocking apps. If somebody else holds that passcode, leaving early stops being a decision you can make alone.",
  },
  {
    question: "Is there a Dumb Phone Mode built into iOS?",
    answer: "No. Apple has no feature by that name. Some articles use the phrase to describe Assistive Access, and there is also a separate third-party iPhone app called Dumb Phone, which is where much of the confusion comes from. The built-in feature is Assistive Access.",
  },
  {
    question: "What do you lose in Assistive Access?",
    answer: "Any app you did not allow becomes unavailable, and the interface changes substantially. Apple also notes that some features, including app access permissions and privacy information, behave differently inside it. It is a significant change to how the phone works rather than a cosmetic one.",
  },
  {
    question: "Is Assistive Access better than an app blocker?",
    answer: "They solve different problems. Assistive Access suits people who want the phone itself largely gone. An app blocker suits the more common case, where two or three apps cost you hours and the rest of the phone is genuinely useful. Most people asking this question are in the second group.",
  },
];
const schema = blogPostSchema(path, faqs, true);

const IphoneDumbphoneMode = () => {
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
            <h1>{headline}</h1>
            <PostDates path={path} showModified className="mt-4" />
          </header>
          <p className="blog-callout">{"Not completely, but you can get closer than most people realise. Apple's Assistive Access strips the iPhone down to a few large buttons and locks everything else behind a separate passcode. It is the strictest option built into iOS, it was designed for accessibility rather than self-control, and for most people it goes further than they actually want."}</p>
          <h2>{"What Assistive Access actually is"}</h2>
          <p>{"Apple describes it as a distinctive iOS experience that makes it easier for people with cognitive disabilities to use iPhone independently. It arrived in iOS 17."}</p>
          <p>{"Set it up at Settings, Accessibility, Assistive Access, then Set Up Assistive Access. You choose which apps stay available, pick a simplified grid or row layout, and the interface becomes large buttons and very little else."}</p>
          <p>{"Worth saying plainly: this is an accessibility feature. Using it for self-control is off-label rather than wrong, and it helps to know that going in."}</p>
          <h2>{"The passcode is the part that matters"}</h2>
          <p>{"Assistive Access has its own passcode, separate from your device passcode, and it is required to exit Assistive Access or change its settings."}</p>
          <p>{"That is a genuinely strong lock, and stronger than most app blockers can manage, because leaving the stripped-down mode is itself gated. If someone else sets that passcode, you have built something closer to a real commitment than anything a blocking app offers."}</p>
          <h2>{"What you give up"}</h2>
          <p>{"The honest version is that this is not a light touch."}</p>
          <p>{"Your iPhone stops working like an iPhone. Apps you did not allow are unavailable rather than merely hidden. Apple also notes that some features, including app access permissions and privacy information, work differently inside Assistive Access."}</p>
          <p>{"And it is not really a dumbphone either. Allowing WhatsApp, Spotify, maps and whatever your job requires gets you a simplified iPhone, not a Nokia. Many people who ask this question discover that what they wanted was the simplicity, not the loss of function."}</p>
          <h2>{"The lighter versions"}</h2>
          <p>{"If full Assistive Access is too much, three smaller changes do a surprising amount."}</p>
          <p>{"Grayscale, at Settings, Accessibility, Display and Text Size, Color Filters. A colourless screen is noticeably less pulling, especially for feeds."}</p>
          <p>{"App Library only, at Settings, Home Screen and App Library. New apps stop landing on your Home Screen, and you can move your worst offenders off it."}</p>
          <p>{"A Focus mode with a stripped-back Home Screen page, which gives you a boring phone during work hours and a normal one afterwards."}</p>
          <h2>{"Who this actually suits"}</h2>
          <p>{"Assistive Access suits people who have decided the phone itself is the problem and want it mostly gone."}</p>
          <p>{"If instead there are two or three apps costing you hours while the rest of the phone is fine, locking down everything is the wrong tool. A blocker removes those apps during the hours that matter and leaves the rest alone. Pause is free, so it is worth trying that before rebuilding your phone around an accessibility feature."}</p>
          <section className="mt-14 border-t border-border pt-8" aria-labelledby="dumbphone-faq">
            <h2 id="dumbphone-faq">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent forceMount className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IphoneDumbphoneMode;
