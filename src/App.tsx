import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import useTracking from "./hooks/useTracking";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Schedule from "./pages/Schedule.tsx";
import Consultation from "./pages/Consultation.tsx";
import PPF from "./pages/services/PPF.tsx";
import Ceramic from "./pages/services/Ceramic.tsx";
import PaintCorrection from "./pages/services/PaintCorrection.tsx";
import Detail from "./pages/services/Detail.tsx";
import Tints from "./pages/services/Tints.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import PortfolioMake from "./pages/PortfolioMake.tsx";
import Reviews from "./pages/Reviews.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const TrackingBridge = () => {
  useTracking();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrackingBridge />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ppf" element={<PPF />} />
          <Route path="/services/ceramic" element={<Ceramic />} />
          <Route path="/services/paint-correction" element={<PaintCorrection />} />
          <Route path="/services/detail" element={<Detail />} />
          <Route path="/services/tints" element={<Tints />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/book" element={<Schedule />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:make" element={<PortfolioMake />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
