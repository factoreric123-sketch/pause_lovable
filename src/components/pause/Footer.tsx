import { Link } from "react-router-dom";
import icon from "@/assets/pause-icon.jpg.asset.json";
import { SITE } from "@/config/site";
import { AppleGlyph } from "./AppStoreBadge";

const Footer = () => (
  <footer className="border-t border-border/60 px-6 py-14">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={icon.url} alt="Pause app icon" className="h-8 w-8 rounded-[0.6rem]" />
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Pause helps you protect your attention without turning it into another feed.
          </p>
          <a
            href={SITE.appStoreUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <AppleGlyph className="h-4 w-4" />
            Download
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Product</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/#features" className="transition-colors hover:text-foreground">Features</Link></li>
            <li><Link to="/#insights" className="transition-colors hover:text-foreground">Insights</Link></li>
            <li><Link to="/#how-it-works" className="transition-colors hover:text-foreground">How It Works</Link></li>
            <li><Link to="/#faq" className="transition-colors hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link></li>
            <li><Link to="/privacy-policy" className="transition-colors hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-foreground">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
