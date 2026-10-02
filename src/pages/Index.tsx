import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/pause/Navbar";
import Hero from "@/components/pause/Hero";
import CoreIdea from "@/components/pause/CoreIdea";
import RulesOverview from "@/components/pause/RulesOverview";
import HardMode from "@/components/pause/HardMode";
import PrivacySection from "@/components/pause/PrivacySection";
import Faq, { faqs, faqAnswerText } from "@/components/pause/Faq";
import FinalCta from "@/components/pause/FinalCta";
import Footer from "@/components/pause/Footer";
import TrustPoints from "@/components/pause/TrustPoints";
import { setCanonical } from "@/lib/canonical";
import { homeSchema } from "@/lib/schema";
import StrictBlockerIntro from "@/components/pause/StrictBlockerIntro";

const schema = homeSchema(faqs.map((f) => ({ question: f.q, answer: faqAnswerText(f) })));
const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    setCanonical("/");
    if (hash) {
      const timer = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 120);
      return () => clearTimeout(timer);
    }
  }, [hash]);
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        <Hero />
        <TrustPoints />
        <StrictBlockerIntro />
        <CoreIdea />
        <RulesOverview />
        <HardMode />
        <PrivacySection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
