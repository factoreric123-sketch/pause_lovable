/**
 * Recreations of the four Pause rule screens, used inside PhoneFrame.
 * These are placeholder mockups built in code — real screenshots can drop
 * straight into the same frames later.
 */

const AppIcon = ({ name }: { name: string }) => (
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-app-green/12 text-sm font-bold text-app-green">
    {name.charAt(0)}
  </span>
);

const AppRow = ({ name, trailing }: { name: string; trailing?: React.ReactNode }) => (
  <div className="flex items-center gap-3 border-b border-app-line py-2.5 last:border-b-0">
    <AppIcon name={name} />
    <span className="flex-1 text-sm font-semibold">{name}</span>
    {trailing}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl bg-app-surface/70 p-4 ${className}`}>{children}</div>
);

const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-5">
    <h4 className="font-display text-2xl font-bold tracking-tight">{children}</h4>
    {sub && <p className="mt-1 text-xs text-app-muted">{sub}</p>}
  </div>
);

const Pill = ({ children, active = false }: { children: React.ReactNode; active?: boolean }) => (
  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      active ? "bg-app-green text-app-bg" : "bg-app-surface text-app-muted"
    }`}
  >
    {children}
  </span>
);

const Toggle = ({ on = true }: { on?: boolean }) => (
  <span className={`flex h-5 w-9 items-center rounded-full p-[2px] ${on ? "bg-app-green" : "bg-app-line"}`}>
    <span className={`h-4 w-4 rounded-full bg-app-bg transition-transform ${on ? "translate-x-4" : ""}`} />
  </span>
);

export const RulesScreen = () => (
  <div>
    <Title sub="4 rules active">Your rules</Title>
    <div className="space-y-3">
      {[
        { name: "Deep Work", type: "Session", detail: "45 min · 3 apps" },
        { name: "Evenings", type: "Schedule", detail: "Weekdays · 5:00 PM – 10:00 PM" },
        { name: "TikTok", type: "Time Limit", detail: "45 min per day" },
        { name: "Instagram", type: "Open Limit", detail: "10 opens per day" },
      ].map((rule) => (
        <div key={rule.name} className="rounded-2xl bg-app-surface/70 p-3.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">{rule.name}</span>
            <Pill active>{rule.type}</Pill>
          </div>
          <p className="mt-1 text-xs text-app-muted">{rule.detail}</p>
        </div>
      ))}
    </div>
    <div className="mt-5 rounded-2xl bg-app-green py-3 text-center text-sm font-bold text-app-bg">New rule</div>
  </div>
);

export const SessionScreen = () => (
  <div>
    <Title sub="Blocked until you're done">Session</Title>
    <Card className="text-center">
      <p className="font-display text-5xl font-extrabold tracking-tight">45:00</p>
      <p className="mt-1 text-xs text-app-muted">minutes</p>
      <div className="mt-4 flex justify-center gap-2">
        <Pill>15</Pill>
        <Pill>30</Pill>
        <Pill active>45</Pill>
        <Pill>90</Pill>
      </div>
    </Card>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">Blocked apps</p>
    <Card className="py-1">
      {["Instagram", "TikTok", "YouTube"].map((a) => (
        <AppRow key={a} name={a} trailing={<span className="text-xs font-semibold text-app-green">Blocked</span>} />
      ))}
    </Card>
    <div className="mt-5 rounded-2xl bg-app-green py-3 text-center text-sm font-bold text-app-bg">Start session</div>
  </div>
);

export const ScheduleScreen = () => (
  <div>
    <Title sub="Runs automatically">Schedule</Title>
    <Card>
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-app-muted">Start</span>
        <span className="font-display text-xl font-bold">5:00 PM</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm font-semibold">
        <span className="text-app-muted">End</span>
        <span className="font-display text-xl font-bold">10:00 PM</span>
      </div>
    </Card>
    <p className="mb-2 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">Repeat</p>
    <div className="flex justify-between">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <span
          key={`${d}-${i}`}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
            i < 5 ? "bg-app-green text-app-bg" : "bg-app-surface text-app-muted"
          }`}
        >
          {d}
        </span>
      ))}
    </div>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">Blocked apps</p>
    <Card className="py-1">
      {["Instagram", "TikTok", "Reddit"].map((a) => (
        <AppRow key={a} name={a} />
      ))}
    </Card>
  </div>
);

export const TimeLimitScreen = () => (
  <div>
    <Title sub="Daily allowance">Time Limit</Title>
    <Card className="text-center">
      <p className="font-display text-5xl font-extrabold tracking-tight">45</p>
      <p className="mt-1 text-xs text-app-muted">minutes per day</p>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-app-line">
        <div className="h-full w-[62%] rounded-full bg-app-green" />
      </div>
      <p className="mt-2 text-[0.7rem] text-app-muted">28 min used · 17 min left</p>
    </Card>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">Applies to</p>
    <Card className="py-1">
      <AppRow name="Instagram" trailing={<span className="text-xs font-semibold text-app-muted">45 min</span>} />
    </Card>
    <Card className="mt-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Hard Mode</span>
        <Toggle on />
      </div>
      <p className="mt-1 text-[0.7rem] text-app-muted">Harder to undo once the rule is running.</p>
    </Card>
    <p className="mt-4 text-center text-[0.7rem] text-app-muted">Blocked until tomorrow</p>
  </div>
);

export const OpenLimitScreen = () => (
  <div>
    <Title sub="Opens per day">Open Limit</Title>
    <Card className="text-center">
      <p className="font-display text-5xl font-extrabold tracking-tight">10</p>
      <p className="mt-1 text-xs text-app-muted">opens per day</p>
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`h-3 w-3 rounded-full ${i < 6 ? "bg-app-green" : "bg-app-line"}`} />
        ))}
      </div>
      <p className="mt-2 text-[0.7rem] text-app-muted">6 used today</p>
    </Card>
    <Card className="mt-4">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-app-muted">Each open lasts</span>
        <span className="font-display text-lg font-bold">5 min</span>
      </div>
    </Card>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">Applies to</p>
    <Card className="py-1">
      {["Instagram", "Reddit", "X"].map((a) => (
        <AppRow key={a} name={a} trailing={<span className="text-xs font-semibold text-app-muted">10×</span>} />
      ))}
    </Card>
  </div>
);

export const SCREENS = [
  { id: "session", label: "Session", Screen: SessionScreen },
  { id: "schedule", label: "Schedule", Screen: ScheduleScreen },
  { id: "time-limit", label: "Time Limit", Screen: TimeLimitScreen },
  { id: "open-limit", label: "Open Limit", Screen: OpenLimitScreen },
];
