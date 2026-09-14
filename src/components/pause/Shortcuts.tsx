import { motion } from "framer-motion";
import { Mic, Zap } from "lucide-react";

const Shortcuts = () => (
  <section className="border-t border-border/60 px-6 py-24">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Siri + Shortcuts</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.04] tracking-tight">
          Pause without opening Pause.
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          Use Siri and Shortcuts to quickly control Pause from your iPhone.
        </p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: Mic, label: "Start Pause." },
          { icon: Zap, label: "Take a break in Pause." },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="surface-card p-6"
          >
            <item.icon className="h-5 w-5 text-accent" />
            <p className="mt-5 font-display text-xl font-bold">“{item.label}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Shortcuts;