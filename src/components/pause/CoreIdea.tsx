const steps = [
  { title: "Choose your apps", copy: "Allow Screen Time access, then create an App List with the apps and supported websites you want to block." },
  { title: "Choose your rule", copy: "Start a session, set a schedule, cap daily minutes or opens, or add a challenge before access." },
  { title: "Make time for your day", copy: "Decide whether to allow unlocks. Turn on Strict Mode to lock session editing until it ends." },
];
const CoreIdea = () => (
  <section id="how-it-works" className="scroll-mt-20 border-t border-border/60 px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <span className="section-label">How it works</span>
      <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">A little setup. More space in your day.</h2>
      <ol className="mt-10 grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
            <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
            <p className="mt-3 text-muted-foreground">{step.copy}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
export default CoreIdea;
