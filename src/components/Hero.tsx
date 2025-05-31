
import { HeroContent } from "./HeroContent";
import { HeroDashboard } from "./HeroDashboard";
import { AnimatedBackground } from "./AnimatedBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-auttus-blue via-auttus-blue to-blue-900 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
          <HeroContent />
          <HeroDashboard />
        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="bg-auttus-orange text-white px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
          <span className="font-semibold">🚀 Comece agora - Setup em 24h</span>
        </div>
      </div>
    </section>
  );
};
