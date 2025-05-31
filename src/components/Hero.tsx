import { HeroContent } from "./HeroContent";
import { HeroDashboard } from "./HeroDashboard";
import { AnimatedBackground } from "./AnimatedBackground";

export const Hero = () => {
  console.log("Hero component loaded successfully - updated");
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-auttus-blue via-auttus-blue to-blue-900 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
          <HeroContent />
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};
