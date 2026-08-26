import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const PrivacySection = () => (
  <section className="border-t border-border/60 px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="surface-card mx-auto max-w-3xl p-10 text-center"
    >
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
        <Lock className="h-5 w-5" />
      </span>
      <h2 className="mt-6 font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold tracking-tight">
        Your habits are your business.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Your rules describe how you want to use your own phone, so we keep the product as simple and private as the
        rules themselves. Full details are in our privacy policy.
      </p>
      <a
        href="/privacy-policy"
        className="mt-7 inline-block rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"
      >
        Read the privacy policy
      </a>
    </motion.div>
  </section>
);

export default PrivacySection;
