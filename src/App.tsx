// GitHub sync test - 2026-04-14
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FrankPage from "./pages/FrankPage.tsx";
import PhilippePage from "./pages/PhilippePage.tsx";
import ReadMorePage from "./pages/ReadMorePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/frank" element={<FrankPage />} />
          <Route path="/philippe" element={<PhilippePage />} />
          <Route path="/las-mer" element={<ReadMorePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
