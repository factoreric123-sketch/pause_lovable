import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import RemoveIgnoreLimitScreenTime from "./pages/RemoveIgnoreLimitScreenTime";
import DeleteAppBlockerBypassIphone from "./pages/DeleteAppBlockerBypassIphone";
import BestAppBlockersIphone from "./pages/BestAppBlockersIphone";
import BlockSocialMediaIphone from "./pages/BlockSocialMediaIphone";
import OpalAlternatives from "./pages/OpalAlternatives";
import BrickAlternatives from "./pages/BrickAlternatives";
import JomoAlternatives from "./pages/JomoAlternatives";
import AppBlockersAdhd from "./pages/AppBlockersAdhd";
import StopScrollingAtNight from "./pages/StopScrollingAtNight";
import AppBlockersForStudents from "./pages/AppBlockersForStudents";
import BlockRedditIphone from "./pages/BlockRedditIphone";
import BrickVsOpal from "./pages/BrickVsOpal";
import OpalVsFreedom from "./pages/OpalVsFreedom";
import HowAppBlockersWorkIphone from "./pages/HowAppBlockersWorkIphone";
import ReduceScreenTimeNewYear from "./pages/ReduceScreenTimeNewYear";
import BlockInstagramIphone from "./pages/BlockInstagramIphone";
import BlockTiktokIphone from "./pages/BlockTiktokIphone";
import NotFound from "./pages/NotFound";

const AppShell = () => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/block-instagram-iphone" element={<BlockInstagramIphone />} />
          <Route path="/blog/block-tiktok-iphone" element={<BlockTiktokIphone />} />
          <Route path="/blog/remove-ignore-limit-screen-time" element={<RemoveIgnoreLimitScreenTime />} />
          <Route path="/blog/delete-app-blocker-bypass-iphone" element={<DeleteAppBlockerBypassIphone />} />
          <Route path="/blog/best-app-blockers-iphone" element={<BestAppBlockersIphone />} />
          <Route path="/blog/block-social-media-iphone" element={<BlockSocialMediaIphone />} />
          <Route path="/blog/opal-alternatives" element={<OpalAlternatives />} />
          <Route path="/blog/brick-alternatives" element={<BrickAlternatives />} />
          <Route path="/blog/jomo-alternatives" element={<JomoAlternatives />} />
          <Route path="/blog/app-blockers-adhd" element={<AppBlockersAdhd />} />
          <Route path="/blog/stop-scrolling-at-night" element={<StopScrollingAtNight />} />
          <Route path="/blog/app-blockers-for-students" element={<AppBlockersForStudents />} />
          <Route path="/blog/block-reddit-iphone" element={<BlockRedditIphone />} />
          <Route path="/blog/brick-vs-opal" element={<BrickVsOpal />} />
          <Route path="/blog/opal-vs-freedom" element={<OpalVsFreedom />} />
          <Route path="/blog/how-app-blockers-work-iphone" element={<HowAppBlockersWorkIphone />} />
          <Route path="/blog/reduce-screen-time-new-year" element={<ReduceScreenTimeNewYear />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppShell;
