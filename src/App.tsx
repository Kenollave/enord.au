import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Rentals from "./pages/Rentals";
import Inspections from "./pages/Inspections";
import Photography from "./pages/Photography";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AerialPhotography from "./pages/blog/AerialPhotography";
import DroneTechnology from "./pages/blog/DroneTechnology";
import DroneRegulations from "./pages/blog/DroneRegulations";
import RealEstateTips from "./pages/blog/RealEstateTips";
import IndustrialInspections from "./pages/blog/IndustrialInspections";
import ChoosingDrone from "./pages/blog/ChoosingDrone";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/rentals" element={<Rentals />} />
          <Route path="/services/inspections" element={<Inspections />} />
          <Route path="/services/photography" element={<Photography />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/aerial-photography-tips" element={<AerialPhotography />} />
          <Route path="/blog/drone-technology-trends" element={<DroneTechnology />} />
          <Route path="/blog/drone-regulations" element={<DroneRegulations />} />
          <Route path="/blog/real-estate-tips" element={<RealEstateTips />} />
          <Route path="/blog/industrial-inspections" element={<IndustrialInspections />} />
          <Route path="/blog/choosing-drone" element={<ChoosingDrone />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
