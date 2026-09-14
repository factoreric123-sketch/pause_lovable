export const SITE = {
  name: "Pause",
  tagline: "Use your phone on your terms.",
  description:
    "Pause is a free iPhone app and website blocker built to make the limits you set harder to undo impulsively.",
  // TODO: replace with the live App Store listing once available.
  appStoreUrl: "#",
  contactEmail: "hello@getdetach.app",
};

export const RULES = [
  {
    id: "pause",
    name: "Pause",
    thought: "Block it now.",
    summary: "Choose an App List and start blocking immediately.",
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
  {
    id: "friction-lock",
    name: "Friction Lock",
    thought: "Make opening it annoying on purpose.",
    summary: "Complete a challenge before a protected app opens.",
  },
] as const;
