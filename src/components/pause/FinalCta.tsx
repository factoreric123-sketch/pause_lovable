import { motion } from "framer-motion";
import AppStoreBadge from "./AppStoreBadge";
import { SITE } from "@/config/site";

const FinalCta = () => (
  <section className="relative overflow-hidden border-t border-border/60 px-6 py-28 text-center md:py-36">
    <div
      className="pointer-events-none absolute inset-0"
      style={{ background: "radial-gradient(ellipse 45% 55% at 50% 55%, hsl(var(--accent) / 0.14), transparent 70%)" }}
      aria-hidden="true"
    />
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-3xl"
    >
      <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.02] tracking-tight">
        Set the rule. <span className="text-mint-gradient">Get back to your life.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
        Spend less time fighting your phone and more time using it intentionally.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href={SITE.appStoreUrl}
          className="rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Download for iPhone
        </a>
        <AppStoreBadge />
      </div>
    </motion.div>
  </section>
);

export default FinalCta;
