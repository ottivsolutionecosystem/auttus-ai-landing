
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OmnichannelSection } from "@/components/OmnichannelSection";
import { Features } from "@/components/Features";
import { ValueComparison } from "@/components/ValueComparison";
import { Testimonials } from "@/components/Testimonials";
import { Demo } from "@/components/Demo";
import { IrresistibleOffer } from "@/components/IrresistibleOffer";
import { Pricing } from "@/components/Pricing";
import { GuaranteeAndTrust } from "@/components/GuaranteeAndTrust";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { FloatingChat } from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <OmnichannelSection />
      <Features />
      <ValueComparison />
      <Testimonials />
      <Demo />
      <IrresistibleOffer />
      <Pricing />
      <GuaranteeAndTrust />
      <Footer />
      <FloatingCTA />
      <FloatingChat />
    </div>
  );
};

export default Index;
