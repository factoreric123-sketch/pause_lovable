import { Link } from "react-router-dom";
import Reveal from "@/components/pause/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const homeFaqs = [
  {
    question: "What makes Pause different from Apple Screen Time?",
    answer: "Screen Time lets you tap past a limit. Pause has no override button, and Strict Mode locks your rules until the session ends.",
  },
  {
    question: "Is Pause really free?",
    answer: "Yes. No subscription, no Pro tier, no account. The blocking is not behind a paywall.",
  },
  {
    question: "Can you bypass Pause?",
    answer: "Not easily, but no iPhone blocker is unbypassable. Apple keeps the phone's owner in control of the device, so the goal is making a bypass slow and deliberate rather than reflexive.",
  },
  {
    question: "Is Pause a free alternative to Opal?",
    answer: "Yes. Both use Apple's Screen Time framework, so the blocking works the same way. Opal costs around $99.99 a year with its strongest mode behind the paywall.",
  },
  {
    question: "Can Pause block websites?",
    answer: "Yes, App Lists cover supported websites as well as apps. Note that no iPhone blocker can filter inside Chrome or Firefox.",
  },
];

const HomeFaq = () => (
  <section aria-labelledby="home-faq-heading" className="border-t border-border/60 px-6 py-24">
    <div className="mx-auto max-w-3xl">
      <Reveal initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 id="home-faq-heading" className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold">
          Common questions
        </h2>
        <Link to="/faq" className="mt-4 inline-block text-primary underline underline-offset-4">
          See all questions
        </Link>
      </Reveal>
      <Accordion type="single" collapsible className="mt-8">
        {homeFaqs.map(({ question, answer }) => (
          <AccordionItem key={question} value={question} className="border-border/70">
            <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
              {question}
            </AccordionTrigger>
            <AccordionContent forceMount className="text-base leading-relaxed text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default HomeFaq;