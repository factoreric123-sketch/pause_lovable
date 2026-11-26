import { describe, expect, it } from "vitest";
import { blogPostSchema } from "@/lib/schema";

describe("iPhone dumbphone article schema", () => {
  const graph = blogPostSchema("/blog/iphone-dumbphone-mode", [], true)["@graph"];

  it("uses 26 November 2026 for both requested dates", () => {
    expect(graph.find(node => node["@type"] === "BlogPosting")).toMatchObject({
      datePublished: "2026-11-26",
      dateModified: "2026-11-26",
    });
  });

  it("resolves article references to the site and organization in the same graph", () => {
    expect(graph.find(node => node["@type"] === "BlogPosting")).toMatchObject({
      isPartOf: { "@id": "https://pauseappblocker.com/#website" },
      publisher: { "@id": "https://pauseappblocker.com/#organization" },
      author: { "@id": "https://pauseappblocker.com/#organization" },
    });
    expect(graph.find(node => node["@type"] === "WebSite")).toMatchObject({ "@id": "https://pauseappblocker.com/#website" });
    expect(graph.find(node => node["@type"] === "Organization")).toMatchObject({ "@id": "https://pauseappblocker.com/#organization" });
  });

  it("omits FAQ schema until questions are supplied", () => {
    expect(graph.some(node => node["@type"] === "FAQPage")).toBe(false);
  });
});