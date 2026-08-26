import { motion } from "framer-motion";
import { RULES } from "@/config/site";

const examples = [
  "Maybe you want Instagram blocked while you work.",
  "Maybe you only want 45 minutes of TikTok per day.",
  "Maybe you want to check Reddit a few times without spending an hour there.",
];

const CoreIdea = () => (
  <section id="how-it-works" className="scroll-mt-20 border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="section-label">The idea</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight">
          One limit doesn't work for everything.
        </h2>
        <div className="mt-8 space-y-2 text-lg text-muted-foreground">
          {examples.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <p className="mt-6 font-display text-2xl font-bold text-foreground">
          Create the rule that fits the distraction.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RULES.map((rule, i) => (
          <motion.a
            key={rule.id}
            href={`#${rule.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="surface-card surface-card-hover p-6"
          >
            <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
            <h3 className="mt-3 font-display text-2xl font-bold">{rule.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{rule.summary}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CoreIdea;
