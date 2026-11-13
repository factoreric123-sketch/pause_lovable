import Reveal from "@/components/pause/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqGroups = [
  {
    "title": "Before you download",
    "items": [
      {
        "q": "What makes Pause different from Apple Screen Time?",
        "a": "Screen Time lets you tap past a limit once you reach it, which is why limits you set for yourself rarely hold. Pause has no override button. Strict Mode locks session edits and App List changes until the session ends, so getting back in costs real effort instead of one tap."
      },
      {
        "q": "Is Pause really free? What is the catch?",
        "a": "Pause is free on the App Store with no subscription, no Pro tier and no account required. There is no paid upgrade holding back the blocking itself. The whole feature set is what you get on day one."
      },
      {
        "q": "Can you bypass Pause?",
        "a": "Casual bypassing is not practical, but no iPhone blocker is completely unbypassable. Apple keeps the phone's owner in control of the device, which means every blocker on iOS can ultimately be switched off by the person who installed it. The goal is to make getting around a block slow and deliberate rather than reflexive."
      },
      {
        "q": "Can an app blocker stop me from deleting it?",
        "a": "Only partly, and no iPhone app can protect itself permanently. A blocker can switch off app deletion while a block session is running, but that restriction applies to every app on the phone rather than just the blocker, and it ends when the session ends. Apple's stronger protection requires the parental configuration, where a second person authorises removal from their own device."
      },
      {
        "q": "Do app blockers actually work?",
        "a": "Research consistently finds that blocking reduces screen time while active, while apps that only track your usage change behaviour very little. A 2023 study published in PNAS found a mandatory pause before opening an app cut openings by roughly 57 percent over six weeks. The effect depends heavily on how hard the block is to get around."
      },
      {
        "q": "Is Pause a free alternative to Opal?",
        "a": "Yes. Both use Apple's Screen Time framework, so the blocking itself works the same way. Opal costs around $99.99 a year with its strongest mode behind the paywall, while Pause is free and needs no account. Opal offers deeper analytics if that is what you want."
      },
      {
        "q": "Why can I still open a blocked app in Safari or Chrome?",
        "a": "Blocking an app and blocking a website are separate controls on iPhone. Screen Time's website restrictions apply to Safari and do not cover third-party browsers like Chrome or Firefox at all. To close that gap you need to block the website as well as the app, and restrict any unfiltered browser you have installed."
      },
      {
        "q": "Can Pause block websites?",
        "a": "Yes. App Lists can include supported websites alongside apps. Note the browser limitation above, which applies to every iPhone blocker rather than to Pause specifically."
      },
      {
        "q": "Is Pause good for ADHD?",
        "a": "Many people with attention difficulties find blockers without overrides more useful, because the moment of decision is exactly where a one-tap escape fails. Friction Lock requires solving a challenge before access returns, which puts a deliberate step between the urge and the app."
      },
      {
        "q": "Can I block Instagram Reels but keep Instagram?",
        "a": "No, and no blocker using Apple's Screen Time framework can. iOS blocks whole apps, not features inside them, so there is no way to remove Reels while keeping DMs. Apps that manage this work by opening Instagram inside their own browser instead, which is a different approach entirely."
      },
      {
        "q": "Does Pause work on iPad or Mac?",
        "a": "Pause is built for iPhone. It runs on Apple's Screen Time framework, which works differently on iPad and Mac, so blocking set up on your iPhone does not carry across to your other Apple devices."
      },
      {
        "q": "Is Pause available on Android?",
        "a": "No. Pause is iPhone only and is built on Apple's Screen Time technology, which has no Android equivalent. There is no Android version at present."
      },
      {
        "q": "Does Pause still work on iOS 27?",
        "a": "Yes. iOS 27 renamed Apple's own controls, with Downtime becoming Screen Time Schedule and App Limits becoming Time Allowances. Those are changes to Apple's Settings app. Third-party blockers run on a separate framework, so the rename does not affect how Pause blocks."
      },
      {
        "q": "Why does Pause need Screen Time permission?",
        "a": "Pause uses Apple's Screen Time APIs to enforce blocks at the system level, which is the only way an app can actually block another app on iPhone. Without that permission there is nothing to enforce with. The permission does not give Pause access to your activity data."
      },
      {
        "q": "What data does Pause collect?",
        "a": "App Lists, schedules and session history stay on your device. There is no account, no ads and no tracking. Pause sends a minimal anonymous daily usage ping and nothing else."
      }
    ]
  },
  {
    "title": "Using Pause",
    "items": [
      {
        "q": "What is the difference between Unlocks and Strict Mode?",
        "a": "Unlocks control ordinary breaks and early exits from a running session. Strict Mode goes further and locks session editing and App List changes until the session ends."
      },
      {
        "q": "Does Pause block calls or texts?",
        "a": "No. Pause blocks the apps and websites you select. Phone service, messages and emergency calling are untouched."
      },
      {
        "q": "How many apps can I block?",
        "a": "Up to 50 apps per App List, within Apple's group limits."
      },
      {
        "q": "What if I need access in an emergency?",
        "a": "Emergency recovery is separate from unlocks. Turning unlocks off does not remove emergency recovery, so you are never locked out of your own phone."
      }
    ]
  }
];

export const faqs = faqGroups.flatMap((group) => group.items);
export const faqAnswerText = (item: (typeof faqs)[number]) => item.a;

const Faq = () => (
  <section id="faq" className="scroll-mt-20 px-6 pb-24 pt-32 md:pb-32 md:pt-40">
    <div className="mx-auto max-w-3xl">
      <Reveal initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">FAQ</span>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Questions, answered.
        </h1>
      </Reveal>

      {faqGroups.map((group) => (
        <section key={group.title} className="mt-10" aria-label={group.title}>
          <h2 className="font-display text-2xl font-semibold">{group.title}</h2>
          <Accordion type="single" collapsible className="mt-4">
            {group.items.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border/70">
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent forceMount className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  </section>
);

export default Faq;
