import { motion } from "framer-motion";
import { Zap, ShieldCheck, Sun } from "lucide-react";

const flow = [
  { icon: Zap, label: "Impulse", copy: "You reach for the app without thinking." },
  { icon: ShieldCheck, label: "Rule", copy: "The decision you already made steps in." },
  { icon: Sun, label: "Back to your life", copy: "The moment passes and you keep going." },
];

const WhyItWorks = () => (
  <section className="border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Why it works</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Don't rely on willpower. <span className="text-mint-gradient">Create rules instead.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Your phone is always within reach. The apps aren't going anywhere. Instead of trying to constantly resist
          them, decide ahead of time how you want to use them. Then let your rules do the work.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {flow.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="surface-card flex flex-col items-center p-7"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <step.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">{step.label}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.copy}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItWorks;
