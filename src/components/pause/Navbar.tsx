import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import icon from "@/assets/pause-bars.png";
import { SITE } from "@/config/site";

const links = [
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Features", to: "/#features" },
  { label: "Strict Mode", to: "/#strict-mode" },
  { label: "FAQ", to: "/#faq" },
  { label: "Blog", to: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <img src={icon} alt="Pause logo" className="h-8 w-auto" />
          {SITE.name}
        </Link>

        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <Link key={l.label} to={l.to} className="transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.appStoreUrl}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {SITE.ctaLabel}
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={SITE.appStoreUrl}
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                {SITE.ctaLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
