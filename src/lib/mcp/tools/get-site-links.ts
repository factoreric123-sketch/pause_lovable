import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_site_links",
  title: "Get site links",
  description: "Return the key public URLs on getdetach.app so assistants can link users to the right page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const links = {
      home: "https://getdetach.app/",
      contact: "https://getdetach.app/contact",
      privacy_policy: "https://getdetach.app/privacy-policy",
      terms: "https://getdetach.app/terms",
      app_store: null,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(links, null, 2) }],
      structuredContent: links,
    };
  },
});
