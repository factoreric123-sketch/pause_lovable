import Reveal from "@/components/pause/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export const faqs = [
  {
    q: "How is Pause different from Apple Screen Time?",
    a: "Screen Time offers \"Ignore Limit for Today,\" which dismisses your limit in one tap. Pause has no override button. Strict Mode locks session editing and App List changes until a session ends, so the limit you set in advance is the one that holds.",
  },
  {
    q: "Can you bypass Pause?",
    a: "Not casually. Pause removes the one-tap escape, and Strict Mode locks session settings until the session ends. No iPhone blocker is truly unbypassable, because Apple keeps the device owner in control of their phone. The goal is making the exit cost more than the scroll is worth.",
  },
  {
    q: "Is Screen Time enough, or do I need an app blocker?",
    a: "Screen Time was built for parents managing a child's device, where one person holds the passcode and another lives under the rules. When you set your own passcode, every restriction comes with its own key. A dedicated blocker removes the one-tap escape.",
  },
  {
    q: "Is Pause a good free alternative to Opal?",
    a: "Opal costs roughly $19.99 a month or $99.99 a year, with a limited free tier. Pause is free on the App Store with no account required. Opal has deeper analytics; Pause focuses on enforcement without an in-app pause button.",
  },
  {
    q: "Where can I download Pause?",
    a: "Pause is available free on the App Store for iPhone.",
  },
  {
    q: "Is Pause available on Android?",
    a: "Pause is available for iPhone and uses Apple's Screen Time technology. An Android version is not currently available.",
  },
  {
    q: "Can Pause block websites too?",
    a: "Yes. App Lists can include supported websites as well as apps.",
    link: { to: "/blog/block-social-media-iphone", text: "See how to block social media apps and websites on iPhone." },
  },
  {
    q: "Is Pause good for ADHD?",
    a: "Many people with attention difficulties prefer blockers without an override, because the failure point is impulse rather than intention. Friction Lock requires solving a challenge before access returns, which puts a deliberate step between the urge and the app.",
  },
  {
    q: "Why does Pause need Screen Time permission?",
    a: "Pause uses Apple's Screen Time APIs to apply the app and website restrictions you create. Without Screen Time permission, Pause cannot enforce those blocks.",
    link: { to: "/blog/remove-ignore-limit-screen-time", text: "Read more about Screen Time's Ignore Limit option." },
  },
  { q: "What's the difference between unlocks and Strict Mode?", a: "Unlocks determine whether you can take ordinary breaks or leave a session early. Strict Mode locks session editing and App List changes until the session ends. Choose both before you start." },
  {
    q: "Will Pause block my calls or texts?",
    a: "Pause is designed to block the apps and websites you select, not your phone service.",
  },
  {
    q: "How many apps can I add?",
    a: "Apple currently limits app selections within a group. Pause supports up to 50 selected apps per App List.",
  },
  {
    q: "Can I get out of a block in an emergency?",
    a: "Emergency recovery is separate from ordinary unlocks. Turning unlocks off removes regular breaks and early exits from a session; it does not remove emergency recovery.",
  },
  {
    q: "Does Pause collect my data?",
    a: "Your App Lists, schedules, and Pause session history remain on your device. Pause does not require an account and does not show ads. It sends a minimal anonymous daily usage ping so we can understand overall active usage.",
  },
];

export const faqAnswerText = (item: (typeof faqs)[number]) => `${item.a}${"link" in item && item.link ? ` ${item.link.text}` : ""}`;

const Faq = () => (
  <section id="faq" className="scroll-mt-20 border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-3xl">
      <Reveal initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">FAQ</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Questions, answered.
        </h2>
      </Reveal>

      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((item) => (
          <AccordionItem key={item.q} value={item.q} className="border-border/70">
            <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent forceMount className="text-base leading-relaxed text-muted-foreground">
              {item.a}{"link" in item && item.link ? <> <Link to={item.link.to} className="text-accent underline underline-offset-4 hover:text-foreground">{item.link.text}</Link></> : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Faq;
