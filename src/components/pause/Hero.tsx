import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { RulesScreen } from "./AppScreens";
import AppStoreBadge from "./AppStoreBadge";
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
        <span className="section-label">Screen time, on your terms</span>
        <h1 className="mt-4 font-display text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight">
          Use your phone on{" "}
          <span className="text-mint-gradient">your terms.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Create simple rules that stop distracting apps from taking over your day.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={SITE.appStoreUrl}
            className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Download for iPhone
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            See How It Works
          </a>
        </div>
        <AppStoreBadge className="mt-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      >
        <PhoneFrame label="iPhone showing the Pause Rules screen">
          <RulesScreen />
        </PhoneFrame>
      </motion.div>
    </div>
  </section>
);

export default Hero;
