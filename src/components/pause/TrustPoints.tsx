import { motion } from "framer-motion";
import { BadgeCheck, CircleOff, Smartphone, UserRoundX } from "lucide-react";

const points = [
  { icon: BadgeCheck, label: "Coming to iPhone" },
  { icon: UserRoundX, label: "No account" },
  { icon: CircleOff, label: "No ads" },
  { icon: Smartphone, label: "Your block lists stay on your phone" },
];

const TrustPoints = () => (
  <section className="border-t border-border/60 px-6 py-8">
    <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((point, index) => (
        <motion.div
          key={point.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-muted-foreground"
        >
          <point.icon className="h-4 w-4 shrink-0 text-accent" />
          <span>{point.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustPoints;
