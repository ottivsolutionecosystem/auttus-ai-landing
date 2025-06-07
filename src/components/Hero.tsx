
import { HeroContent } from "./HeroContent";
import { HeroDashboard } from "./HeroDashboard";
import { AnimatedBackground } from "./AnimatedBackground";

export const Hero = () => {
  console.log("Hero component loaded successfully - updated");
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-auttus-blue via-auttus-blue to-blue-900 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-8 sm:py-12 lg:py-16 xl:py-20 gap-8 lg:gap-8 xl:gap-12">
          <HeroContent />
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};
