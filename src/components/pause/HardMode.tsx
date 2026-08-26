import { motion } from "framer-motion";
import { Lock, RotateCcw } from "lucide-react";

const controls = [
  {
    icon: Lock,
    name: "Hard Mode",
    copy: "Turn it on while creating a rule to make the rule harder to undo once it is running.",
  },
  {
    icon: RotateCcw,
    name: "Disable Resets",
    copy: "Stop yourself from resetting a rule to get your time or opens back early.",
  },
];

const HardMode = () => (
  <section className="border-t border-border/60 px-6 py-24">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Enforcement</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.04] tracking-tight">
          For when you know you'll try to cheat.
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          Turn on stricter controls when creating a rule to make it harder to undo your decision in the moment.
        </p>
      </motion.div>

      <div className="space-y-4">
        {controls.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="surface-card flex items-start gap-4 p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <c.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-1.5 text-muted-foreground">{c.copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HardMode;
