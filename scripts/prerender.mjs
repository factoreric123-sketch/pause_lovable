// Post-build: render each route to static HTML with route-specific head tags.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE = "https://pauseappblocker.com";
const dist = path.resolve("dist");
const { render, PRERENDER_ROUTES } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const r of PRERENDER_ROUTES) {
  const url = r.path === "/" ? `${SITE}/` : `${SITE}${r.path}`;
  const t = esc(r.title), d = esc(r.description);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${d}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${r.type}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />\n    <link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
    .replace('<div id="root"></div>', `<div id="root">${render(r.path)}</div>`);
  const out = r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  if (r.path !== "/") fs.writeFileSync(path.join(dist, `${r.path}.html`), html);
  console.log("prerendered", r.path);
}
fs.rmSync(path.resolve("dist-ssr"), { recursive: true, force: true });
