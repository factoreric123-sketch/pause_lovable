import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/pause/Navbar";
import Hero from "@/components/pause/Hero";
import CoreIdea from "@/components/pause/CoreIdea";
import RuleSection from "@/components/pause/RuleSection";
import RulesOverview from "@/components/pause/RulesOverview";
import HardMode from "@/components/pause/HardMode";
import WhyItWorks from "@/components/pause/WhyItWorks";
import UseCases from "@/components/pause/UseCases";
import ScreenshotShowcase from "@/components/pause/ScreenshotShowcase";
import PrivacySection from "@/components/pause/PrivacySection";
import Faq, { faqs } from "@/components/pause/Faq";
import FinalCta from "@/components/pause/FinalCta";
import Footer from "@/components/pause/Footer";
import TrustPoints from "@/components/pause/TrustPoints";
import Insights from "@/components/pause/Insights";
import TimeCalculator from "@/components/pause/TimeCalculator";
import Shortcuts from "@/components/pause/Shortcuts";
import Comparison from "@/components/pause/Comparison";
import FreeCta from "@/components/pause/FreeCta";
import { PauseScreen, ScheduleScreen, TimeLimitScreen, OpenLimitScreen, FrictionLockScreen } from "@/components/pause/AppScreens";
import { setCanonical } from "@/lib/canonical";
import { SITE } from "@/config/site";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: SITE.name,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      description: SITE.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    setCanonical("/");
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 120);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        <Hero />
        <TrustPoints />
        <CoreIdea />
        <RulesOverview />

        <RuleSection
          id="pause"
          index={1}
          ruleName="Session"
          headline="Block it now."
          copy="Choose an App List and start a session. Block for a set time or leave it running until you end it. Decide whether to allow unlocks before you start."
          example={{ title: "Focus for 50 minutes", lines: ["Choose your apps", "Set your duration", "Choose whether to allow unlocks"] }}
          screen={<PauseScreen />}
        />

        <RuleSection
          id="schedule"
          index={2}
          ruleName="Schedule"
          headline="Make distraction-free time automatic."
          copy="Create recurring blocking windows for specific days and times."
          example={{ title: "Monday–Friday", lines: ["9:00 AM–12:00 PM", "Social Media"] }}
          footnote="Set it once. Pause handles the rest."
          screen={<ScheduleScreen />}
          reverse
        />

        <RuleSection
          id="time-limit"
          index={3}
          ruleName="Time Limit"
          headline="Give yourself a daily budget."
          copy="Set a maximum amount of time for distracting apps each day. Once that time is used, the apps stay blocked until the daily limit resets."
          example={{ title: "Social Media · 45 minutes", lines: ["Blocked after the budget is used"] }}
          screen={<TimeLimitScreen />}
        />

        <RuleSection
          id="open-limit"
          index={4}
          ruleName="Open Limit"
          headline="Give every check a limit."
          copy="Set a daily number of opens for your selected apps. Each open gives you a timed pass that keeps counting down even after you close the apps. Once your passes are used, access stays blocked until tomorrow."
          example={{ title: "Instagram", lines: ["3 opens per day", "5 minutes per open"] }}
          footnote="Set the pass length in advance, or choose it each time."
          screen={<OpenLimitScreen />}
          reverse
        />

        <RuleSection
          id="friction-lock"
          index={5}
          ruleName="Friction Lock"
          headline="A moment to reconsider."
          copy="Solve a math problem or type a long password to unlock your selected apps. Choose how many challenges to complete in a row and how long access lasts. The countdown continues even when the apps are closed."
          example={{ title: "Pause before opening", lines: ["Complete a challenge", "Unlock for 5 minutes"] }}
          footnote="Set the unlock duration, or choose it each time."
          screen={<FrictionLockScreen />}
        />

        <UseCases />
        <HardMode />
        <WhyItWorks />
        <ScreenshotShowcase />
        <Insights />
        <TimeCalculator />
        <Shortcuts />
        <PrivacySection />
        <Comparison />
        <FreeCta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
