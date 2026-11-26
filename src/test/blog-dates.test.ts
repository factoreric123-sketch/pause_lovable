import { describe, it, expect } from "vitest";
import { BLOG_POSTS, getRoute } from "@/prerender-routes";
import { blogIndexSchema, blogPostSchema } from "@/lib/schema";
import { formatBlogDate } from "@/lib/blog-dates";

// Approved first-added commit dates (UTC), with approved genuine-edit dates.
const approvedDates = [
  ["/blog/iphone-dumbphone-mode", "2026-11-26", "2026-11-26"],
  ["/blog/block-x-twitter-iphone", "2026-11-24", "2026-11-24"],
  ["/blog/block-youtube-iphone", "2026-11-23", "2026-11-23"],
  [
    "/blog/screen-time-passcode-backdoor",
    "2026-11-20",
    "2026-11-20"
  ],
  [
    "/blog/iphone-screen-time-wrong",
    "2026-11-17",
    "2026-11-17"
  ],
  [
    "/blog/delete-or-block-instagram",
    "2026-11-16",
    "2026-11-16"
  ],
  [
    "/blog/how-much-screen-time-too-much",
    "2026-11-13",
    "2026-11-13"
  ],
  [
    "/blog/blocked-app-still-works-in-browser",
    "2026-11-11",
    "2026-11-11"
  ],
  [
    "/blog/phone-instead-of-reading",
    "2026-11-10",
    "2026-11-10"
  ],
  [
    "/blog/do-app-blockers-work",
    "2026-11-09",
    "2026-11-09"
  ],
  [
    "/blog/screen-time-not-working",
    "2026-11-02",
    "2026-11-02"
  ],
  [
    "/blog/app-blocker-you-cant-delete",
    "2026-11-05",
    "2026-11-05"
  ],
  [
    "/blog/block-instagram-iphone",
    "2026-10-29",
    "2026-10-29"
  ],
  [
    "/blog/block-tiktok-iphone",
    "2026-10-30",
    "2026-10-30"
  ],
  [
    "/blog/stop-checking-phone-at-work",
    "2026-10-31",
    "2026-10-31"
  ],
  [
    "/blog/remove-ignore-limit-screen-time",
    "2026-09-22",
    "2026-10-01"
  ],
  [
    "/blog/delete-app-blocker-bypass-iphone",
    "2026-09-24",
    "2026-10-02"
  ],
  [
    "/blog/best-app-blockers-iphone",
    "2026-09-27",
    "2026-10-01"
  ],
  [
    "/blog/block-social-media-iphone",
    "2026-09-30",
    "2026-11-23"
  ],
  [
    "/blog/opal-alternatives",
    "2026-10-02",
    "2026-10-02"
  ],
  [
    "/blog/brick-alternatives",
    "2026-10-05",
    "2026-10-05"
  ],
  [
    "/blog/jomo-alternatives",
    "2026-10-07",
    "2026-10-07"
  ],
  [
    "/blog/app-blockers-adhd",
    "2026-10-10",
    "2026-10-10"
  ],
  [
    "/blog/stop-scrolling-at-night",
    "2026-10-12",
    "2026-10-12"
  ],
  [
    "/blog/app-blockers-for-students",
    "2026-10-14",
    "2026-10-14"
  ],
  [
    "/blog/block-reddit-iphone",
    "2026-10-19",
    "2026-10-19"
  ],
  [
    "/blog/brick-vs-opal",
    "2026-10-20",
    "2026-10-20"
  ],
  [
    "/blog/opal-vs-freedom",
    "2026-10-22",
    "2026-10-22"
  ],
  [
    "/blog/how-app-blockers-work-iphone",
    "2026-10-24",
    "2026-10-24"
  ],
  [
    "/blog/reduce-screen-time-new-year",
    "2026-10-26",
    "2026-10-26"
  ]
] as const;

describe("approved blog dates", () => {
  it.each(approvedDates)("%s uses its approved publication and modification dates", (path, published, modified) => {
    const route = getRoute(path);
    expect(route.datePublished).toBe(published);
    expect(route.dateModified).toBe(modified);
    const post = blogPostSchema(path, [])["@graph"].find(node => node["@type"] === "BlogPosting");
    expect(post).toMatchObject({ datePublished: published, dateModified: modified });
  });

  it("covers all 30 current posts without unverified dates", () => {
    expect(BLOG_POSTS.map(post => post.path).sort()).toEqual(approvedDates.map(([path]) => path).sort());
  });

  it("formats dates consistently without shifting the UTC day", () => {
    expect(formatBlogDate("2026-11-14")).toBe("14 November 2026");
    expect(formatBlogDate("2026-09-22")).toBe("22 September 2026");
  });

  it("orders the index newest first with consecutive positions 1 to 30", () => {
    const collection = blogIndexSchema()["@graph"].find(node => node["@type"] === "CollectionPage");
    if (!collection || !("mainEntity" in collection) || !collection.mainEntity) throw new Error("Missing blog collection");
    const items = collection.mainEntity.itemListElement;
    const expected = [...approvedDates].sort((a, b) => b[1].localeCompare(a[1]));
    expect(items.map(item => item.url)).toEqual(expected.map(([path]) => `https://pauseappblocker.com${path}`));
    expect(items.map(item => item.position)).toEqual(Array.from({ length: 30 }, (_, index) => index + 1));
  });
  it("links the blog collection to its site and organization with two breadcrumb levels", () => {
    const graph = blogIndexSchema()["@graph"];
    const collection = graph.find(node => node["@type"] === "CollectionPage");
    expect(collection).toMatchObject({
      isPartOf: { "@id": "https://pauseappblocker.com/#website" },
      publisher: { "@id": "https://pauseappblocker.com/#organization" },
    });
    expect(graph.find(node => node["@type"] === "WebSite")).toMatchObject({ "@id": "https://pauseappblocker.com/#website" });
    expect(graph.find(node => node["@type"] === "Organization")).toMatchObject({ "@id": "https://pauseappblocker.com/#organization" });
    expect(graph.find(node => node["@type"] === "BreadcrumbList")).toMatchObject({
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pauseappblocker.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://pauseappblocker.com/blog" },
      ],
    });
  });
});
