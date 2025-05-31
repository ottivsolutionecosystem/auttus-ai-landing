
import { useEffect, useState } from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroDashboard } from "./HeroDashboard";
import { AnimatedBackground } from "./AnimatedBackground";
import { useScrollProgress } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollProgress = useScrollProgress();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-auttus-blue via-auttus-blue to-blue-900 overflow-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-auttus-orange to-orange-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mouse Follower Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 107, 0, 0.1) 0%, transparent 50%)`
        }}
      />

      <AnimatedBackground />
      <HeroBackground scrollY={scrollY} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
          <HeroContent />
          <HeroDashboard />
        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-in z-20">
        <div className="bg-auttus-orange text-white px-6 py-3 rounded-full shadow-2xl animate-glow cursor-pointer hover:scale-105 transition-transform duration-300">
          <span className="font-semibold">🚀 Comece agora - Setup em 24h</span>
        </div>
      </div>
    </section>
  );
};
