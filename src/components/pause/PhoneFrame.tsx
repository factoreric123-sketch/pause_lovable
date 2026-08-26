import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

const PhoneFrame = ({ children, className = "", label }: PhoneFrameProps) => (
  <div className={`relative mx-auto w-[270px] sm:w-[300px] ${className}`}>
    <div
      className="absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.22), transparent 70%)" }}
      aria-hidden="true"
    />
    <div
      className="rounded-[3rem] border border-foreground/15 bg-secondary p-[10px]"
      style={{ boxShadow: "var(--shadow-float)" }}
      role="img"
      aria-label={label ?? "iPhone showing the Pause app"}
    >
      <div className="relative overflow-hidden rounded-[2.4rem] bg-app-bg">
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-app-fg/90" aria-hidden="true" />
        <div className="flex items-center justify-between px-6 pt-3 text-[0.65rem] font-semibold text-app-fg">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-3 rounded-[2px] bg-app-fg/70" />
            <span className="inline-block h-2.5 w-5 rounded-[3px] border border-app-fg/60" />
          </span>
        </div>
        <div className="min-h-[520px] px-4 pb-8 pt-6 text-app-fg">{children}</div>
        <div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-app-fg/30" aria-hidden="true" />
      </div>
    </div>
  </div>
);

export default PhoneFrame;
