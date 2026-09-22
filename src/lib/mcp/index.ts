import { defineMcp } from "@lovable.dev/mcp-js";
import getProductInfo from "./tools/get-product-info";
import getSiteLinks from "./tools/get-site-links";

export default defineMcp({
  name: "pause-mcp",
  title: "Pause",
  version: "0.1.0",
  instructions:
    "Public tools for pauseappblocker.com. Use `get_product_info` for current Pause features and availability; use `get_site_links` for canonical page URLs.",
  tools: [getProductInfo, getSiteLinks],
});
