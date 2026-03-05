import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RevenueCalculatorResults from "./pages/RevenueCalculatorResults";
import GovernanceScorecardResults from "./pages/GovernanceScorecardResults";
import Resources from "./pages/Resources";
import ResourceCapture from "./pages/ResourceCapture";
import ResourceDownload from "./pages/ResourceDownload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/revenue-calculator-results" element={<RevenueCalculatorResults />} />
          <Route path="/governance-scorecard-results" element={<GovernanceScorecardResults />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceCapture />} />
          <Route path="/download/:slug" element={<ResourceDownload />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
