export const SITE = {
  name: "Pause",
  tagline: "Use your phone on your terms.",
  description:
    "Pause is an upcoming iPhone app and website blocker. Set focus sessions, daily limits, and challenges before access.",
  // Replace the contact destination when the App Store listing is live.
  appStoreUrl: "/contact",
  ctaLabel: "Ask about launch",
};

export const RULES = [
  {
    id: "pause",
    name: "Session",
    thought: "Block it now.",
    summary: "Block your App List for a set time or until you end the session. Choose whether to allow unlocks before starting.",
  },
  {
    id: "schedule",
    name: "Schedule",
    thought: "I don't want this during certain hours.",
    summary: "Block your App List on the days and times you choose. Set up a routine for work, evenings, or mornings.",
  },
  {
    id: "time-limit",
    name: "Time Limit",
    thought: "I only want this for a little while each day.",
    summary: "Set a daily usage allowance. Your selected apps stay blocked once you reach it, until the daily reset.",
  },
  {
    id: "open-limit",
    name: "Open Limit",
    thought: "I want to stop checking this constantly.",
    summary: "Set a daily number of timed passes. Each pass keeps counting down when apps are closed. Once used up, access stays blocked until tomorrow.",
  },
  {
    id: "friction-lock",
    name: "Friction Lock",
    thought: "Give me a moment to reconsider.",
    summary: "Solve math problems or type a long password to unlock your apps. Choose the number of challenges and access duration; the timer continues when apps close.",
  },
] as const;
