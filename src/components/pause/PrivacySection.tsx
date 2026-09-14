import { motion } from "framer-motion";
import { CircleOff, Smartphone, UserRoundX, Waves } from "lucide-react";

const points = [
  { icon: UserRoundX, title: "No account required", copy: "You don't need to create a profile just to block Instagram." },
  { icon: CircleOff, title: "No ads", copy: "Pause isn't replacing one distraction with another." },
  { icon: Smartphone, title: "Your blocking data stays on your phone", copy: "Your App Lists, schedules, and Pause session history remain on your device." },
  { icon: Waves, title: "Minimal anonymous usage measurement", copy: "Pause sends one anonymous daily usage ping so we can understand approximately how many people actively use the app." },
];

const PrivacySection = () => (
  <section className="border-t border-border/60 px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-6xl"
    >
      <span className="section-label">Privacy</span>
      <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold tracking-tight">
        Your attention isn't another product to monetize.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">{points.map((point) => <div key={point.title} className="surface-card p-6"><point.icon className="h-5 w-5 text-accent" /><h3 className="mt-4 font-display text-xl font-bold">{point.title}</h3><p className="mt-2 text-muted-foreground">{point.copy}</p></div>)}</div>
      <a
        href="/privacy-policy"
        className="mt-8 inline-block rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"
      >
        Read the privacy policy
      </a>
    </motion.div>
  </section>
);

export default PrivacySection;
