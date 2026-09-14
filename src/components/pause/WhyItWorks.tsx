import { motion } from "framer-motion";
import { Clock3, ListPlus } from "lucide-react";

const flow = [
  { icon: Clock3, label: "Choose when access returns.", copy: "Set a session duration, a daily limit, or a timed unlock before you need it." },
  { icon: ListPlus, label: "Keep your app choices in place.", copy: "Strict Mode locks App List changes until your session ends." },
];

const WhyItWorks = () => (
  <section className="border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Follow through</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Give your plan a chance to stick.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Make the decision once, before the urge to check. Pause applies the limits you chose while you get on with your day.
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
