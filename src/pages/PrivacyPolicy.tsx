import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/pause/Footer";
import { setCanonical, setSocialMeta } from "@/lib/canonical";
import { SITE } from "@/config/site";

const PrivacyPolicy = () => {
  useEffect(() => {
    setCanonical("/privacy-policy");
    setSocialMeta({
      title: `Privacy Policy | ${SITE.name}`,
      description: `How ${SITE.name} handles your information.`,
      path: "/privacy-policy",
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
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

        <div className="legal-content mt-8">
          <h2>Overview</h2>
          <p>
            {SITE.name} helps you block distracting apps and websites. This policy explains what stays on your device
            and the limited information connected to the app and this website.
          </p>

          <h2>Your blocking data</h2>
          <p>
            Your App Lists, schedules, and Pause session history remain on your device. Pause does not require an account
            and does not show ads.
          </p>

          <h2>Information you give us</h2>
          <p>
            If you contact us through the form on this site, we receive your name, email address and message so we can
            reply. We use it for support only.
          </p>

          <h2>Analytics</h2>
          <p>
            Pause sends one anonymous daily usage ping so we can understand approximately how many people actively use
            the app. This does not include your App Lists, schedules, or Pause session history.
          </p>

          <h2>Third parties</h2>
          <p>
            The app is distributed through the Apple App Store and uses Apple's Screen Time APIs to apply the restrictions
            you create. Apple's own privacy terms apply to your download and use of those technologies.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to delete any information you have sent us by emailing{" "}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2>Changes</h2>
          <p>If this policy changes, the updated version will be posted on this page.</p>

          <h2>Contact</h2>
          <p>
            Questions? Email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
