import { describe, expect, it } from "vitest";
import { blogPostSchema } from "@/lib/schema";
import { faqs } from "@/pages/IphoneDumbphoneMode";

describe("iPhone dumbphone article schema", () => {
  const graph = blogPostSchema("/blog/iphone-dumbphone-mode", faqs, true)["@graph"];

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

  it("includes the six supplied questions in one FAQPage node", () => {
    const nodes = graph.filter(node => node["@type"] === "FAQPage");
    expect(nodes).toHaveLength(1);
    expect(nodes[0]).toMatchObject({
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
    expect(faqs).toHaveLength(6);
  });
});