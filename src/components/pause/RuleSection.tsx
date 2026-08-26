import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

interface RuleSectionProps {
  id: string;
  index: number;
  ruleName: string;
  headline: string;
  copy: string;
  example?: { title: string; lines: string[] };
  listTitle?: string;
  list?: string[];
  footnote?: string;
  screen: React.ReactNode;
  reverse?: boolean;
}

const RuleSection = ({
  id,
  index,
  ruleName,
  headline,
  copy,
  example,
  listTitle,
  list,
  footnote,
  screen,
  reverse = false,
}: RuleSectionProps) => (
  <section id={id} className="scroll-mt-20 border-t border-border/60 px-6 py-24 md:py-28">
    <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={reverse ? "md:order-2" : ""}
      >
        <span className="section-label">
          Rule {index} — {ruleName}
        </span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.04] tracking-tight">
          {headline}
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">{copy}</p>

        {example && (
          <div className="surface-card mt-8 max-w-sm p-5">
            <p className="font-display text-xl font-bold text-accent">{example.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {example.lines.map((line) => (
                <span key={line} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  {line}
                </span>
              ))}
            </div>
          </div>
        )}

        {list && (
          <div className="mt-8">
            {listTitle && <p className="mb-3 text-sm font-semibold text-foreground">{listTitle}</p>}
            <ul className="flex flex-wrap gap-2">
              {list.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {footnote && <p className="mt-8 font-display text-xl font-semibold text-foreground">{footnote}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={reverse ? "md:order-1" : ""}
      >
        <PhoneFrame label={`iPhone showing the Pause ${ruleName} screen`}>{screen}</PhoneFrame>
      </motion.div>
    </div>
  </section>
);

export default RuleSection;
