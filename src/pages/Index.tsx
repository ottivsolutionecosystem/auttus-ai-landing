
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OmnichannelSection } from "@/components/OmnichannelSection";
import { Features } from "@/components/Features";
import { CRMSection } from "@/components/CRMSection";
import { ValueComparison } from "@/components/ValueComparison";
import { Testimonials } from "@/components/Testimonials";
import { Demo } from "@/components/Demo";
import { IrresistibleOffer } from "@/components/IrresistibleOffer";
import { GuaranteeAndTrust } from "@/components/GuaranteeAndTrust";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <OmnichannelSection />
      <Features />
      <CRMSection />
      <ValueComparison />
      <Testimonials />
      <Demo />
      <IrresistibleOffer />
      <GuaranteeAndTrust />
      <Footer />
    </div>
  );
};

export default Index;
