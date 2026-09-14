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
    name: "Session",
    thought: "Block it now.",
    summary: "Block now for a set time or until you end the session.",
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
    summary: "Set a daily number of timed passes for your apps.",
  },
  {
    id: "friction-lock",
    name: "Friction Lock",
    thought: "Give me a moment to reconsider.",
    summary: "Complete a challenge to unlock your apps for a limited time.",
  },
] as const;
