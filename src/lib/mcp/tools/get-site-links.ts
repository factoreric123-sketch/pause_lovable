import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_site_links",
  title: "Get site links",
  description: "Return the key public URLs on pauseappblocker.com so assistants can link users to the right page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const links = {
      home: "https://pauseappblocker.com/",
      blog: "https://pauseappblocker.com/blog",
      remove_ignore_limit_guide: "https://pauseappblocker.com/blog/remove-ignore-limit-screen-time",
      opal_alternatives: "https://pauseappblocker.com/blog/opal-alternatives",
      brick_alternatives: "https://pauseappblocker.com/blog/brick-alternatives",
      jomo_alternatives: "https://pauseappblocker.com/blog/jomo-alternatives",
      app_blockers_adhd: "https://pauseappblocker.com/blog/app-blockers-adhd",
      stop_scrolling_at_night: "https://pauseappblocker.com/blog/stop-scrolling-at-night",
      app_blockers_for_students: "https://pauseappblocker.com/blog/app-blockers-for-students",
      how_app_blockers_work_iphone: "https://pauseappblocker.com/blog/how-app-blockers-work-iphone",
      opal_vs_freedom: "https://pauseappblocker.com/blog/opal-vs-freedom",
      brick_vs_opal: "https://pauseappblocker.com/blog/brick-vs-opal",
      block_reddit_iphone: "https://pauseappblocker.com/blog/block-reddit-iphone",
      contact: "https://pauseappblocker.com/contact",
      privacy_policy: "https://pauseappblocker.com/privacy-policy",
      terms: "https://pauseappblocker.com/terms",
      app_store: "https://apps.apple.com/us/app/pause-app-blocker/id6805745768",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(links, null, 2) }],
      structuredContent: links,
    };
  },
});
