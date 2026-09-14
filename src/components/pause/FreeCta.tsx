import { motion } from "framer-motion";
import { SITE } from "@/config/site";

const FreeCta = () => (
  <section className="border-t border-border/60 px-6 py-24 text-center">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl">
      <span className="section-label">Free right now</span>
      <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight">
        Your screen time doesn't need another subscription.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
        Pause is free right now. Get the full app and start building limits that are actually difficult to ignore.
      </p>
      <a href={SITE.appStoreUrl} className="mt-8 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
        Get Pause Free
      </a>
      <p className="mt-3 text-sm text-muted-foreground">Available for iPhone.</p>
    </motion.div>
  </section>
);

export default FreeCta;