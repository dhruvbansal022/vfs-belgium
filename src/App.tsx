
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VerificationResult from "./pages/VerificationResult";
import SmartUpload from "./pages/SmartUpload";
import Upload from "./pages/Upload";
import AddressPage from "./pages/AddressPage";
import NotFound from "./pages/NotFound";
// We will not import the App.css file as it may be causing styling conflicts

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/verification-result" element={<VerificationResult />} />
          <Route path="/smart-upload" element={<SmartUpload />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/address" element={<AddressPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
