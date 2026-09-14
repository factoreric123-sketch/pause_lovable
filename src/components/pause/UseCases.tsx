import { motion } from "framer-motion";

const cases = [
  { title: "Social Media", rule: "Apps + websites", detail: "Instagram, TikTok, reddit.com" },
  { title: "Work", rule: "Apps + websites", detail: "Keep the workday clear of detours." },
  { title: "Night", rule: "Apps + websites", detail: "Protect the hours before sleep." },
  { title: "Deep Focus", rule: "Apps + websites", detail: "Put every usual distraction in one place." },
  { title: "Morning", rule: "Apps + websites", detail: "Start the day before opening the feeds." },
];

const UseCases = () => (
  <section className="border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">App Lists</span>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Block the distraction, wherever it hides.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Create App Lists for different parts of your life. Each one can contain both apps and supported websites.</p>
        <p className="mt-7 font-display text-2xl font-bold">Reddit in Safari is still Reddit.</p>
        <p className="mt-3 max-w-2xl text-muted-foreground">Pause can block distracting websites too, so switching from an app to the browser doesn't become an easy workaround.</p>
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
