import { useEffect } from "react";
import Navbar from "@/components/pause/Navbar";
import Faq, { faqs, faqAnswerText } from "@/components/pause/Faq";
import FinalCta from "@/components/pause/FinalCta";
import Footer from "@/components/pause/Footer";
import { setCanonical, resetCanonical, setSocialMeta, resetSocialMeta } from "@/lib/canonical";
import { faqPageSchema } from "@/lib/schema";
import { getRoute } from "@/prerender-routes";

const schema = faqPageSchema(faqs.map((f) => ({ question: f.q, answer: faqAnswerText(f) })));
const meta = getRoute("/faq");

const FaqPage = () => {
  useEffect(() => {
    setCanonical("/faq");
    setSocialMeta({ title: meta.title, description: meta.description, path: "/faq", type: "website" });
    return () => {
      resetCanonical();
      resetSocialMeta();
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
