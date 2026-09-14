import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_product_info",
  title: "Get product info",
  description:
    "Return current details about Pause, the free iPhone app and website blocker.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Pause",
      tagline: "A strict app and website blocker built to make your limits harder to undo impulsively.",
      price: "Free right now",
      platform: "iPhone only",
      account_required: false,
      ads: false,
      blocking_methods: ["Pause", "Schedule", "Time Limit", "Open Limit", "Friction Lock"],
      app_store_url: null,
      website: "https://getdetach.app",
      support_email: "hello@getdetach.app",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
