import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { BlockScreen } from "./AppScreens";

const quotes = ["The urge will pass.", "You opened this for a reason. Was it a good one?", "Your attention is expensive."];

const ScreenshotShowcase = () => (
  <section className="overflow-hidden border-t border-border/60 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-label">The block screen</span>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
          A better thing to see than another feed.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          When Pause blocks an app, the shield can show a simple quote instead of dropping you into another screen full of distractions.
        </p>
      </motion.div>

      <div className="scrollbar-hide -mx-6 mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-6">
        {quotes.map((quote, i) => (
          <motion.div
            key={quote}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="shrink-0 snap-center"
          >
            <PhoneFrame label={`Pause block screen reading: ${quote}`}>
              <BlockScreen quote={quote} />
            </PhoneFrame>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScreenshotShowcase;
