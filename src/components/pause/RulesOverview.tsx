import { motion } from "framer-motion";
import { RULES } from "@/config/site";

const RulesOverview = () => (
  <section id="features" className="scroll-mt-20 border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <span className="section-label">Five ways to block</span>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight">
          One app. Five ways to stop.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">Different habits need different kinds of friction. Pick the one that fits.</p>
      </motion.div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {RULES.map((rule, i) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className={`surface-card surface-card-hover relative overflow-hidden p-8 ${rule.id === "friction-lock" ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl"
              style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.35), transparent 70%)" }}
              aria-hidden="true"
            />
            <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
            <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight">{rule.name}</h3>
            <p className="mt-4 font-display text-lg font-bold text-foreground/90">{rule.thought}</p>
            <p className="mt-2 text-muted-foreground">{rule.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RulesOverview;
