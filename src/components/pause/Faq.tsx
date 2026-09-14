import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Can I download Pause yet?",
    a: "Not yet. Pause is in development for iPhone. Contact us if you have questions about launch or availability.",
  },
  {
    q: "Is Pause available on Android?",
    a: "Pause is being developed for iPhone, using Apple's Screen Time technology. An Android version is not currently available.",
  },
  {
    q: "Can Pause block websites too?",
    a: "Yes. App Lists can include supported websites as well as apps.",
  },
  {
    q: "Will Pause block my calls or texts?",
    a: "Pause is designed to block the apps and websites you select, not your phone service.",
  },
  {
    q: "Why does Pause need Screen Time permission?",
    a: "Pause uses Apple's Screen Time APIs to apply the app and website restrictions you create. Without Screen Time permission, Pause cannot enforce those blocks.",
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
  { q: "What's the difference between unlocks and Strict Mode?", a: "Unlocks determine whether you can take ordinary breaks or leave a session early. Strict Mode locks session editing and App List changes until the session ends. Choose both before you start." },
];

const Faq = () => (
  <section id="faq" className="scroll-mt-20 border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">FAQ</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Questions, answered.
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((item) => (
          <AccordionItem key={item.q} value={item.q} className="border-border/70">
            <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Faq;
