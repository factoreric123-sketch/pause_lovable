import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import "./index.css";

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
export { PRERENDER_ROUTES } from "./prerender-routes";
