import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqs = [
  {
    q: "How does it work?",
    a: "You choose the apps that distract you and create one of four types of rules: a Session, a Schedule, a Time Limit or an Open Limit. The rule then controls when and how much you can use those apps.",
  },
  {
    q: "What's a Session?",
    a: "A Session blocks the apps you pick for a set amount of time, starting the moment you begin it. Good for studying, working or being with people.",
  },
  {
    q: "What's a Schedule?",
    a: "A Schedule blocks apps between the times you choose on the days you choose, and it runs automatically. Set it once and it repeats.",
  },
  {
    q: "What's a Time Limit?",
    a: "A Time Limit is a daily allowance. Choose how many minutes you're willing to spend in an app each day, and once you've used them the app is blocked.",
  },
  {
    q: "What's an Open Limit?",
    a: "An Open Limit caps how many times you can open an app each day, so checking it becomes a decision instead of a habit.",
  },
  {
    q: "What happens when I reach my limit?",
    a: "The app is blocked for the rest of the day and resets the next day.",
  },
  { q: "Can I block multiple apps?", a: "Yes. A single rule can cover as many apps as you want." },
  {
    q: "Can I create multiple rules?",
    a: "Yes. You can run different rules for different apps at the same time.",
  },
  {
    q: "Can I make a rule harder to disable?",
    a: "Yes. When creating a rule you can turn on stricter controls such as Hard Mode or Disable Resets to make the rule harder to undo in the moment.",
  },
  { q: "Does it work on iPhone?", a: "Yes. The app is currently available for iPhone." },
  { q: "Is Android available?", a: "Not yet." },
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
