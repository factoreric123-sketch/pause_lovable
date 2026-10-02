// JSON-LD builders. Rendered inline by pages, so prerendering bakes them into static HTML.
import { SITE as SITE_CONFIG } from "@/config/site";
import { getRoute, BLOG_POSTS } from "@/prerender-routes";

export const ORIGIN = "https://pauseappblocker.com";
export const LOGO_URL = `${ORIGIN}/android-chrome-512x512.png`;
const abs = (path: string) => (path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`);
const ids = {
  organization: `${ORIGIN}/#organization`,
  website: `${ORIGIN}/#website`,
  software: `${ORIGIN}/#software-application`,
  faq: `${ORIGIN}/#faq`,
};
const org = { "@type": "Organization", "@id": ids.organization, name: "Pause", url: `${ORIGIN}/`, logo: LOGO_URL };

export interface Faq { question: string; answer: string }

export const faqPage = (faqs: Faq[], id?: string) => ({
  "@type": "FAQPage",
  ...(id ? { "@id": id } : {}),
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});

export const homeSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": ids.software,
      name: "Pause",
      operatingSystem: "iOS",
      applicationCategory: "ProductivityApplication",
      description: SITE_CONFIG.description,
      url: `${ORIGIN}/`,
      installUrl: SITE_CONFIG.appStoreUrl,
      downloadUrl: SITE_CONFIG.appStoreUrl,
      provider: { "@id": ids.organization },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    org,
    {
      "@type": "WebSite",
      "@id": ids.website,
      name: "Pause",
      url: `${ORIGIN}/`,
      publisher: { "@id": ids.organization },
      mainEntity: { "@id": ids.software },
    },
    faqPage(faqs, ids.faq),
  ],
});

export const blogPostSchema = (path: string, faqs: Faq[]) => {
  const r = getRoute(path);
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: r.headline,
        description: r.description,
        datePublished: r.datePublished,
        dateModified: r.dateModified,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        url,
        image: LOGO_URL,
        author: org,
        publisher: org,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${ORIGIN}/blog` },
          { "@type": "ListItem", position: 3, name: r.headline, item: url },
        ],
      },
      faqPage(faqs),
    ],
  };
};

export const blogIndexSchema = () => {
  const r = getRoute("/blog");
  const posts = [...BLOG_POSTS].sort((a, b) => (b.datePublished ?? "").localeCompare(a.datePublished ?? ""));
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: r.title,
    description: r.description,
    url: abs("/blog"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: abs(p.path),
        name: p.headline,
      })),
    },
  };
};
