import { motion } from "framer-motion";
import { Check } from "lucide-react";

const rows = [
  ["Blocks apps", "yes", "yes"],
  ["Blocks websites", "yes", "Often"],
  ["Scheduled blocking", "yes", "yes"],
  ["Daily time limits", "yes", "Varies"],
  ["Daily open limits", "yes", "Varies"],
  ["Challenge before opening", "yes", "Varies"],
  ["Up to 10 challenges in a row", "yes", "Rare"],
  ["Budgeted Emergency Exits", "yes", "Often unlimited"],
  ["Protected App List editing", "yes", "Varies"],
  ["Deletion protection during active restrictions", "yes", "Varies"],
  ["Free right now", "yes", "Often paid"],
] as const;

const Comparison = () => (
  <section className="border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Comparison</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Built to be harder to cheat.
        </h2>
      </motion.div>
      <div className="surface-card mt-12 overflow-hidden">
        <div className="grid grid-cols-[1.5fr_0.7fr_1fr] border-b border-border bg-secondary/50 px-4 py-4 text-sm font-bold sm:px-6">
          <span>Feature</span><span>Pause</span><span>Typical blocker</span>
        </div>
        {rows.map(([feature, pause, typical]) => (
          <div key={feature} className="grid grid-cols-[1.5fr_0.7fr_1fr] items-center border-b border-border/60 px-4 py-4 text-sm last:border-b-0 sm:px-6">
            <span className="pr-3 font-semibold">{feature}</span>
            <span>{pause === "yes" && <Check className="h-5 w-5 text-accent" aria-label="Yes" />}</span>
            <span className="text-muted-foreground">{typical === "yes" ? <Check className="h-5 w-5" aria-label="Yes" /> : typical}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Comparison;