import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { SCREENS } from "./AppScreens";

const ScreenshotShowcase = () => (
  <section className="overflow-hidden border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">Inside the app</span>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          Screen time rules that actually fit your life.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Session, Schedule, Time Limit, Open Limit. Pick the one that matches the distraction and you're done.
        </p>
      </motion.div>

      <div className="scrollbar-hide -mx-6 mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-6">
        {SCREENS.map(({ id, label, Screen }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="shrink-0 snap-center"
          >
            <PhoneFrame label={`iPhone showing the Pause ${label} screen`}>
              <Screen />
            </PhoneFrame>
            <p className="mt-6 text-center font-display text-lg font-semibold">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScreenshotShowcase;
