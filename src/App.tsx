import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import PhotoGallery from "./pages/PhotoGallery";
import ConfessionPage from "./pages/ConfessionPage";
import LoveGame from "./pages/LoveGame";
import IntentionPage from "./pages/IntentionPage";
import PromisePage from "./pages/PromisePage";
import WhyILoveYouPage from "./pages/WhyILoveYouPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/confession" element={<ConfessionPage />} />
          <Route path="/love-game" element={<LoveGame />} />
          <Route path="/intentions" element={<IntentionPage />} />
          <Route path="/promises" element={<PromisePage />} />
          <Route path="/why-i-love-you" element={<WhyILoveYouPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
