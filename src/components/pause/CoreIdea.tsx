import { motion } from "framer-motion";
const examples = [
  "Then comes the override button.",
  "The extra five minutes.",
  "The changed settings.",
  "The exception you promise you'll only use once.",
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
        <span className="section-label">The hard part</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight">
          Blocking an app is easy.<br />Not unblocking it is the hard part.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">Most screen-time tools work until you actually want the app.</p>
        <div className="mt-6 space-y-2 text-lg text-muted-foreground">
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
        <p className="mt-8 font-display text-2xl font-bold text-foreground">
          Your 10:47 PM self shouldn't get to overrule your 9:00 AM self in one tap.
        </p>
        <p className="mt-5 text-lg text-muted-foreground">Pause is designed around that exact moment. It makes the rules you chose harder to undo impulsively.</p>
      </motion.div>
    </div>
  </section>
);

export default CoreIdea;
