import { useState } from "react";
import { motion } from "framer-motion";

const TimeCalculator = () => {
  const [hours, setHours] = useState(2);
  const format = (value: number) => Math.round(value).toLocaleString();

  return (
    <section className="border-t border-border/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">The arithmetic</span>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
            A little less scrolling adds up fast.
          </h2>
        </motion.div>

        <div className="surface-card mt-12 grid gap-8 p-7 md:grid-cols-[1.1fr_1.9fr] md:p-10">
          <div>
            <label htmlFor="daily-reduction" className="font-display text-xl font-bold">
              If you cut {hours} {hours === 1 ? "hour" : "hours"} a day...
            </label>
            <input
              id="daily-reduction"
              type="range"
              min="0.5"
              max="4"
              step="0.5"
              value={hours}
              onChange={(event) => setHours(Number(event.target.value))}
              className="mt-7 w-full accent-accent"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>30 min</span>
              <span>4 hours</span>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "a week", value: hours * 7 },
              { label: "a month", value: hours * 30 },
              { label: "a year", value: hours * 365 },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-secondary p-5 text-center">
                <p className="font-display text-3xl font-extrabold text-accent">{format(item.value)}</p>
                <p className="mt-1 text-sm text-muted-foreground">hours {item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Example based on your chosen daily reduction.</p>
      </div>
    </section>
  );
};

export default TimeCalculator;