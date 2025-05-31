
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OmnichannelSection } from "@/components/OmnichannelSection";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Demo } from "@/components/Demo";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <OmnichannelSection />
      <Features />
      <Testimonials />
      <Demo />
      <Pricing />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
