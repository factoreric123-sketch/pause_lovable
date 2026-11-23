import { describe, expect, it } from "vitest";
import { homeSchema } from "@/lib/schema";
import { homeFaqs } from "@/components/pause/HomeFaq";

describe("homepage FAQ graph", () => {
  it("contains exactly one FAQPage with five answers and resolved site references", () => {
    const graph = homeSchema(homeFaqs)["@graph"];
    const nodes = graph.filter(node => node["@type"] === "FAQPage");
    expect(nodes).toHaveLength(1);
    const faq = nodes[0] as ReturnType<typeof homeSchema>["@graph"][number] & {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[];
      isPartOf: { "@id": string };
      publisher: { "@id": string };
    };
    expect(faq.mainEntity).toHaveLength(5);
    expect(faq.mainEntity.map(item => ({ question: item.name, answer: item.acceptedAnswer.text }))).toEqual(homeFaqs);
    expect(graph.find(node => node["@id"] === faq.isPartOf["@id"])?.["@type"]).toBe("WebSite");
    expect(graph.find(node => node["@id"] === faq.publisher["@id"])?.["@type"]).toBe("Organization");
  });
});