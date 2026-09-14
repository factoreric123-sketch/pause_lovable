import { motion } from "framer-motion";
import { Check } from "lucide-react";

const rows = [
  ["App blocking", "yes", "Choose your distractions"],
  ["Website blocking", "yes", "Include supported websites"],
  ["Scheduled blocking", "yes", "Follow your routine"],
  ["Daily time limits", "yes", "Cap daily usage"],
  ["Daily open limits", "yes", "Limit timed passes"],
  ["Challenge before unlocking", "yes", "Pause before access"],
  ["Consecutive challenges", "yes", "Choose how many to complete"],
  ["Emergency recovery", "yes", "Separate from ordinary breaks"],
  ["Protected App List editing", "yes", "Lock choices with Strict Mode"],
  ["Session unlock settings", "yes", "Decide whether to allow breaks"],
  ["Free right now", "yes", "No payment to get started"],
] as const;

const Comparison = () => (
  <section className="border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">At a glance</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Your limits, built in.
        </h2>
      </motion.div>
      <div className="surface-card mt-12 overflow-hidden">
        <div className="grid grid-cols-[1.5fr_0.7fr_1fr] border-b border-border bg-secondary/50 px-4 py-4 text-sm font-bold sm:px-6">
          <span>Feature</span><span>Pause</span><span>What it does</span>
        </div>
        {rows.map(([feature, pause, typical]) => (
          <div key={feature} className="grid grid-cols-[1.5fr_0.7fr_1fr] items-center border-b border-border/60 px-4 py-4 text-sm last:border-b-0 sm:px-6">
            <span className="pr-3 font-semibold">{feature}</span>
            <span>{pause === "yes" && <Check className="h-5 w-5 text-accent" aria-label="Yes" />}</span>
            <span className="text-muted-foreground">{typical}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Comparison;
