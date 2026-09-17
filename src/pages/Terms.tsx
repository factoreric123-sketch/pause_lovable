import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/pause/Footer";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";

const Terms = () => {
  useEffect(() => {
    setCanonical("/terms");
    setSocialMeta({
      title: `Terms & Conditions | ${SITE.name}`,
      description: `The terms that apply when you use ${SITE.name}.`,
      path: "/terms",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 pb-20 pt-24">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

        <div className="legal-content mt-8">
          <h2>Using the app</h2>
          <p>
            {SITE.name} is an iPhone app that lets you create restrictions for selected apps and websites. You are
            responsible for the App Lists and limits you set and for how you use your device.
          </p>

          <h2>Availability</h2>
          <p>
            The app is currently available for iPhone through the Apple App Store. We may update, change or discontinue
            features over time.
          </p>

          <h2>No guarantees</h2>
          <p>
            The app is provided as is. We do not guarantee that a rule will prevent every possible way of reaching a
            blocked app, and we are not liable for any outcome of using or not using the app.
          </p>

          <h2>Current availability</h2>
          <p>Pause is free right now. Features, availability, and pricing may change in the future.</p>

          <h2>Intellectual property</h2>
          <p>
            The {SITE.name} name, app, and this website, including their design and content, belong to us and may not be
            copied without permission.
          </p>

          <h2>Changes to these terms</h2>
          <p>We may update these terms. Continued use of the app means you accept the current version.</p>

          <h2>Contact</h2>
          <p>
            Questions? Use our <Link to="/contact">contact form</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
