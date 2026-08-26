export const SITE = {
  name: "Pause",
  tagline: "Use your phone on your terms.",
  description:
    "Pause is an iPhone app that lets you create simple rules — Session, Schedule, Time Limit and Open Limit — for the apps that distract you.",
  // TODO: replace with the live App Store listing once available.
  appStoreUrl: "#",
  contactEmail: "hello@getdetach.app",
};

export const RULES = [
  {
    id: "session",
    name: "Session",
    thought: "I don't want this right now.",
    summary: "Block apps for a set amount of time.",
  },
  {
    id: "schedule",
    name: "Schedule",
    thought: "I don't want this during certain hours.",
    summary: "Automatically block apps based on your routine.",
  },
  {
    id: "time-limit",
    name: "Time Limit",
    thought: "I only want this for a little while each day.",
    summary: "Set a daily usage allowance.",
  },
  {
    id: "open-limit",
    name: "Open Limit",
    thought: "I want to stop checking this constantly.",
    summary: "Limit how many times an app can be opened.",
  },
] as const;
