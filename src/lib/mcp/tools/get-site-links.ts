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
      contact: "https://pauseappblocker.com/contact",
      privacy_policy: "https://pauseappblocker.com/privacy-policy",
      terms: "https://pauseappblocker.com/terms",
      app_store: null,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(links, null, 2) }],
      structuredContent: links,
    };
  },
});
