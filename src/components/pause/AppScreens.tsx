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
  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${active ? "bg-app-green text-app-bg" : "bg-app-surface text-app-muted"}`}>
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
    <Title sub="5 protections active">Your App Lists</Title>
    <div className="space-y-3">
      {[
        { name: "Deep Work", type: "Session", detail: "45 min · 3 apps + 2 websites" },
        { name: "Evenings", type: "Schedule", detail: "Weekdays · 5:00 PM–10:00 PM" },
        { name: "TikTok", type: "Time Limit", detail: "45 min per day" },
        { name: "Instagram", type: "Open Limit", detail: "3 opens per day" },
        { name: "Social Media", type: "Friction Lock", detail: "Solve 3 challenges" },
      ].map((rule) => (
        <div key={rule.name} className="rounded-2xl bg-app-surface/70 p-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-bold">{rule.name}</span>
            <Pill active>{rule.type}</Pill>
          </div>
          <p className="mt-1 text-xs text-app-muted">{rule.detail}</p>
        </div>
      ))}
    </div>
  </div>
);

export const BlockScreen = ({ quote = "Not everything deserves your attention." }: { quote?: string }) => (
  <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-app-green text-2xl font-extrabold text-app-bg">Ⅱ</div>
    <p className="mt-8 max-w-[210px] font-display text-2xl font-bold leading-tight">{quote}</p>
    <p className="mt-4 text-xs text-app-muted">Blocked by Pause</p>
  </div>
);

export const PauseScreen = () => (
  <div>
    <Title sub="Block immediately">Session</Title>
    <Card className="text-center">
      <p className="font-display text-5xl font-extrabold tracking-tight">45:00</p>
      <p className="mt-1 text-xs text-app-muted">minutes</p>
      <div className="mt-4 flex justify-center gap-2"><Pill>15</Pill><Pill>30</Pill><Pill active>45</Pill><Pill>90</Pill></div>
    </Card>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">App List</p>
    <Card className="py-1">
      {["Instagram", "TikTok", "reddit.com"].map((name) => <AppRow key={name} name={name} trailing={<span className="text-xs font-semibold text-app-green">Blocked</span>} />)}
    </Card>
    <div className="mt-5 rounded-2xl bg-app-green py-3 text-center text-sm font-bold text-app-bg">Start Pause</div>
  </div>
);

export const ScheduleScreen = () => (
  <div>
    <Title sub="Runs automatically">Schedule</Title>
    <Card>
      <div className="flex items-center justify-between text-sm font-semibold"><span className="text-app-muted">Start</span><span className="font-display text-xl font-bold">9:00 AM</span></div>
      <div className="mt-3 flex items-center justify-between text-sm font-semibold"><span className="text-app-muted">End</span><span className="font-display text-xl font-bold">12:00 PM</span></div>
    </Card>
    <p className="mb-2 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">Monday–Friday</p>
    <div className="flex justify-between">
      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <span key={`${day}-${index}`} className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index < 5 ? "bg-app-green text-app-bg" : "bg-app-surface text-app-muted"}`}>{day}</span>)}
    </div>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">App List</p>
    <Card className="py-1"><AppRow name="Social Media" /></Card>
  </div>
);

export const TimeLimitScreen = () => (
  <div>
    <Title sub="Daily budget">Time Limit</Title>
    <Card className="text-center">
      <p className="font-display text-5xl font-extrabold tracking-tight">45</p><p className="mt-1 text-xs text-app-muted">minutes per day</p>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-app-line"><div className="h-full w-[62%] rounded-full bg-app-green" /></div>
      <p className="mt-2 text-[0.7rem] text-app-muted">28 min used · 17 min left</p>
    </Card>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">App List</p>
    <Card className="py-1"><AppRow name="Social Media" trailing={<span className="text-xs font-semibold text-app-muted">45 min</span>} /></Card>
    <Card className="mt-4"><div className="flex items-center justify-between"><span className="text-sm font-semibold">Strict Mode</span><Toggle /></div></Card>
  </div>
);

export const OpenLimitScreen = () => (
  <div>
    <Title sub="Opens per day">Open Limit</Title>
    <Card className="text-center">
      <p className="font-display text-5xl font-extrabold tracking-tight">3</p><p className="mt-1 text-xs text-app-muted">opens per day</p>
      <div className="mt-4 flex justify-center gap-2">{Array.from({ length: 3 }).map((_, index) => <span key={index} className={`h-3 w-3 rounded-full ${index < 1 ? "bg-app-green" : "bg-app-line"}`} />)}</div>
      <p className="mt-2 text-[0.7rem] text-app-muted">2 remaining</p>
    </Card>
    <Card className="mt-4"><div className="flex items-center justify-between text-sm font-semibold"><span className="text-app-muted">Each open lasts</span><span className="font-display text-lg font-bold">5 min</span></div></Card>
    <p className="mb-1 mt-5 text-[0.65rem] font-bold uppercase tracking-widest text-app-muted">App List</p>
    <Card className="py-1"><AppRow name="Instagram" trailing={<span className="text-xs font-semibold text-app-muted">3×</span>} /></Card>
  </div>
);

export const FrictionLockScreen = () => (
  <div>
    <Title sub="Solve to continue">Friction Lock</Title>
    <Card className="text-center">
      <p className="text-xs font-semibold uppercase text-app-muted">Challenge 1 of 3</p>
      <p className="mt-7 font-display text-4xl font-extrabold">47 + 68</p>
      <div className="mt-6 rounded-xl border border-app-line bg-app-bg px-4 py-3 text-left text-sm text-app-muted">Answer</div>
      <div className="mt-4 rounded-xl bg-app-green py-3 text-sm font-bold text-app-bg">Check answer</div>
    </Card>
    <Card className="mt-4"><div className="flex items-center justify-between"><span className="text-sm font-semibold">Math challenge</span><Toggle /></div><p className="mt-2 text-[0.7rem] text-app-muted">A wrong answer creates a fresh problem.</p></Card>
    <Card className="mt-4"><p className="text-sm font-semibold">Password challenge</p><p className="mt-2 break-all font-mono text-[0.7rem] text-app-muted">G7p!2Lq9#vK4sR8mX1zB</p></Card>
  </div>
);

export const InsightsScreen = ({ period = "Week" }: { period?: string }) => {
  const bars = [34, 58, 46, 72, 62, 86, 68];
  return (
    <div>
      <Title sub={`${period} view`}>Protected time</Title>
      <Card>
        <p className="font-display text-4xl font-extrabold">8h 24m</p><p className="mt-1 text-xs text-app-muted">protected this {period.toLowerCase()}</p>
        <div className="mt-8 flex h-32 items-end gap-2">{bars.map((height, index) => <div key={index} className="flex-1 rounded-t-md bg-app-green/30" style={{ height: `${height}%` }}><div className="h-2 rounded-t-md bg-app-green" /></div>)}</div>
      </Card>
      <div className="mt-4 grid grid-cols-2 gap-3"><Card><p className="text-xs text-app-muted">Protected periods</p><p className="mt-1 font-display text-2xl font-bold">12</p></Card><Card><p className="text-xs text-app-muted">History</p><p className="mt-1 font-display text-2xl font-bold">1 year</p></Card></div>
    </div>
  );
};

export const SCREENS = [
  { id: "pause", label: "Session", Screen: PauseScreen },
  { id: "schedule", label: "Schedule", Screen: ScheduleScreen },
  { id: "time-limit", label: "Time Limit", Screen: TimeLimitScreen },
  { id: "open-limit", label: "Open Limit", Screen: OpenLimitScreen },
  { id: "friction-lock", label: "Friction Lock", Screen: FrictionLockScreen },
];
