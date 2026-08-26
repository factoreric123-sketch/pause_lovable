import { motion } from "framer-motion";

const cases = [
  { title: "Focus at work", rule: "Schedule", detail: "Block social apps from 9–5." },
  { title: "Stop TikTok binges", rule: "Time Limit", detail: "Allow 30 minutes per day." },
  { title: "Stop checking Instagram", rule: "Open Limit", detail: "Allow 10 opens per day." },
  { title: "Get through a study session", rule: "Session", detail: "Block distractions for 90 minutes." },
  { title: "Stop scrolling before bed", rule: "Schedule", detail: "Block social apps starting at 10 PM." },
];

const UseCases = () => (
  <section className="border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Use cases</span>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          A rule for every distraction.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="surface-card surface-card-hover p-6"
          >
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {c.rule}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
            <p className="mt-1.5 text-muted-foreground">{c.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
