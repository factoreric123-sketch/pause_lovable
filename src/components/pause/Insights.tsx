import { useState } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { InsightsScreen } from "./AppScreens";

const periods = ["Day", "Week", "Month", "Year"] as const;

const Insights = () => {
  const [period, setPeriod] = useState<(typeof periods)[number]>("Week");

  return (
    <section id="insights" className="scroll-mt-20 border-t border-border/60 px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">Insights</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.04] tracking-tight">
            See how much time you're protecting.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            Pause shows your protected time so you can see what your decisions add up to. Historical charts reveal
            longer-term trends across weeks, months, and years.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-border p-1" aria-label="Insight period">
            {periods.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPeriod(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  period === item ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Viewing: {period}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <PhoneFrame label="iPhone showing Pause protected-time insights">
            <InsightsScreen period={period} />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;