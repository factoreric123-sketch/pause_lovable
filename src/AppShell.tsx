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
          <Route path="/blog/remove-ignore-limit-screen-time" element={<RemoveIgnoreLimitScreenTime />} />
          <Route path="/blog/delete-app-blocker-bypass-iphone" element={<DeleteAppBlockerBypassIphone />} />
          <Route path="/blog/best-app-blockers-iphone" element={<BestAppBlockersIphone />} />
          <Route path="/blog/block-social-media-iphone" element={<BlockSocialMediaIphone />} />
          <Route path="/blog/opal-alternatives" element={<OpalAlternatives />} />
          <Route path="/blog/brick-alternatives" element={<BrickAlternatives />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppShell;
