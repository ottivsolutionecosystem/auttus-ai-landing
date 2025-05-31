
import { HeroContent } from "./HeroContent";
import { HeroDashboard } from "./HeroDashboard";
import { AnimatedBackground } from "./AnimatedBackground";

export const Hero = () => {
  console.log("Hero component loaded successfully - updated");
  
  return (
    <section className="relative h-screen bg-gradient-to-br from-auttus-blue via-auttus-blue to-blue-900 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-12 sm:py-16 lg:py-20">
          <HeroContent />
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};
