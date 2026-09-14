import { motion } from "framer-motion";
import { DoorOpen, ShieldCheck } from "lucide-react";

const controls = [
  {
    icon: DoorOpen,
    name: "Emergency Exits",
    copy: "Choose a limited number of exits and control how slowly they refill. For example: 2 Emergency Exits, with the next exit replenishing in 7 days.",
  },
  {
    icon: ShieldCheck,
    name: "Strict Mode",
    copy: "Adds protection against disabling your own system, including deleting Pause while restrictions are active.",
  },
];

const HardMode = () => (
  <section className="border-t border-border/60 px-6 py-24">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Strict protections</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.04] tracking-tight">
          A blocker shouldn't come with an unlimited quit button.
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          Pause gives you a way out when you genuinely need one, without turning that escape hatch into another habit.
        </p>
        <p className="mt-6 font-display text-xl font-bold">An escape hatch you can use twice. Not twice an hour.</p>
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
