import { motion } from "framer-motion";
import { DoorOpen, ShieldCheck } from "lucide-react";

const controls = [
  {
    icon: DoorOpen,
    name: "Unlocks",
    copy: "Choose whether to allow unlocks before starting a session. With unlocks off, there are no ordinary breaks or early exits. Emergency recovery is separate.",
  },
  {
    icon: ShieldCheck,
    name: "Strict Mode",
    copy: "Locks session editing and App List changes until the session ends, so the plan you set stays in place.",
  },
];

const HardMode = () => (
  <section id="strict-mode" className="scroll-mt-20 border-t border-border/60 px-6 py-16 md:py-20">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Strict protections</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.04] tracking-tight">
          Decide your limits before you start.
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          Choose whether you can take a break, then turn on Strict Mode to lock editing until your session ends.
        </p>
        <p className="mt-6 font-display text-xl font-bold">Your session. Your rules. Set in advance.</p>
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
