import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import Clubs from "./pages/Clubs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CSA from "./pages/CSA";
import CSI from "./pages/CSI";
import COE from "./pages/COE";
import Registration from "./pages/Registration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/certificates" element={<Layout><Certificates /></Layout>} />
          <Route path="/clubs" element={<Layout><Clubs /></Layout>} />
          <Route path="/CSA" element={<Layout><CSA /></Layout>} />
          <Route path="/CSI" element={<Layout><CSI /></Layout>} />
          <Route path="/COE" element={<Layout><COE /></Layout>} />
          <Route path="/Registration" element={<Layout><Registration /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
