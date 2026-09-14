import { motion } from "framer-motion";
import { Clock3, ListPlus } from "lucide-react";

const flow = [
  { icon: Clock3, label: "Changing the rules takes work.", copy: "Wait 30 seconds, then type “I choose to change my plan” before changing an active rule." },
  { icon: ListPlus, label: "Your rules can get stricter. Not weaker.", copy: "Add apps during an active block, but don't quietly remove protected apps from the App List." },
];

const WhyItWorks = () => (
  <section className="border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Anti-weasel protections</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Pause knows the tricks you'll try.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Thirty seconds is a long time when you're making an impulsive decision. Pause protects the plan you made before the urge arrived.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
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
