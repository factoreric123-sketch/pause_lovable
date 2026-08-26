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
import { SessionScreen, ScheduleScreen, TimeLimitScreen, OpenLimitScreen } from "@/components/pause/AppScreens";
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
        <CoreIdea />

        <RuleSection
          id="session"
          index={1}
          ruleName="Session"
          headline="Block it for now."
          copy="Choose the apps you want blocked and start a session for a set amount of time."
          example={{ title: "45 minutes", lines: ["Instagram", "TikTok", "YouTube"] }}
          listTitle="Perfect for"
          list={[
            "Studying",
            "Working",
            "Reading",
            "Going to the gym",
            "Spending time with friends",
            "Anytime you want your phone to stop being a distraction",
          ]}
          screen={<SessionScreen />}
        />

        <RuleSection
          id="schedule"
          index={2}
          ruleName="Schedule"
          headline="Make distraction-free time automatic."
          copy="Choose when apps should be blocked and the rule runs automatically on the days you select."
          example={{ title: "Weekdays · 5:00 PM → 10:00 PM", lines: ["Instagram", "TikTok", "Reddit"] }}
          listTitle="Common schedules"
          list={["Work · 9 AM – 5 PM", "Morning · Wake up – 9 AM", "Wind Down · 10 PM – Morning"]}
          footnote="Set it once. Let it happen automatically."
          screen={<ScheduleScreen />}
          reverse
        />

        <RuleSection
          id="time-limit"
          index={3}
          ruleName="Time Limit"
          headline="Enjoy it. Just not all day."
          copy="Choose how much time you're willing to spend in an app each day. Once you've used your allowance, the app gets blocked."
          example={{ title: "Instagram · 45 minutes per day", lines: ["Then blocked until tomorrow"] }}
          footnote="You don't have to delete it. Just give it a limit."
          screen={<TimeLimitScreen />}
        />

        <RuleSection
          id="open-limit"
          index={4}
          ruleName="Open Limit"
          headline="Stop checking without thinking."
          copy="Limit how many times you can open an app each day, and how long each open lasts."
          example={{ title: "Instagram · 10 opens per day", lines: ["5 minutes per open"] }}
          listTitle="Built for the apps you check on autopilot"
          list={["Instagram", "Reddit", "X", "Email", "News"]}
          footnote="Make every open intentional."
          screen={<OpenLimitScreen />}
          reverse
        />

        <RulesOverview />
        <HardMode />
        <WhyItWorks />
        <UseCases />
        <ScreenshotShowcase />
        <PrivacySection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
