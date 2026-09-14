import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { BlockScreen } from "./AppScreens";
import { SITE } from "@/config/site";

const Hero = () => (
  <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
    <div
      className="pointer-events-none absolute inset-x-0 -top-40 h-[500px]"
      style={{ background: "radial-gradient(ellipse 50% 60% at 50% 40%, hsl(var(--accent) / 0.12), transparent 70%)" }}
      aria-hidden="true"
    />
    <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="section-label">Strict by design</span>
        <h1 className="mt-4 font-display text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight">
          Put down the phone.<br />
          <span className="text-mint-gradient">For real this time.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Pause blocks distracting apps and websites, and makes your limits harder to undo when your willpower disappears.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={SITE.appStoreUrl}
            className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Get Pause Free
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">Free on iPhone. No account required.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      >
        <PhoneFrame label="iPhone showing a Pause block screen">
          <BlockScreen />
        </PhoneFrame>
      </motion.div>
    </div>
  </section>
);

export default Hero;
