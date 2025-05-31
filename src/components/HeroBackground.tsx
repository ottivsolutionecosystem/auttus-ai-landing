
import { Bot, Car } from "lucide-react";

interface HeroBackgroundProps {
  scrollY: number;
}

export const HeroBackground = ({ scrollY }: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 opacity-10">
      {/* Layer 1 - Slowest parallax */}
      <div 
        className="absolute top-10 left-4 md:top-20 md:left-20 w-12 h-12 md:w-24 md:h-24 bg-auttus-orange rounded-full animate-float flex items-center justify-center group hover:animate-heart-beat cursor-pointer transition-all duration-500 hover:scale-110"
        style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
      >
        <Car className="h-6 w-6 md:h-12 md:w-12 text-white group-hover:animate-wiggle" />
        <div className="absolute inset-0 bg-auttus-orange rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div 
        className="absolute top-20 right-8 md:top-40 md:right-32 w-10 h-10 md:w-20 md:h-20 bg-white rounded-full animate-float flex items-center justify-center group hover:animate-heart-beat cursor-pointer transition-all duration-500 hover:scale-110" 
        style={{ animationDelay: '1s', transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      >
        <Bot className="h-5 w-5 md:h-10 md:w-10 text-auttus-blue group-hover:animate-pulse" />
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
      </div>
      
      <div 
        className="absolute bottom-20 left-1/3 w-6 h-6 md:w-12 md:h-12 bg-auttus-orange rounded-full animate-float flex items-center justify-center group hover:animate-heart-beat cursor-pointer transition-all duration-500 hover:scale-110" 
        style={{ animationDelay: '2s', transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
      >
        <Car className="h-3 w-3 md:h-6 md:w-6 text-white group-hover:animate-bounce" />
        <div className="absolute inset-0 bg-auttus-orange rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div 
        className="absolute top-32 left-1/2 w-8 h-8 md:w-16 md:h-16 bg-white rounded-full animate-float flex items-center justify-center group hover:animate-heart-beat cursor-pointer transition-all duration-500 hover:scale-110" 
        style={{ animationDelay: '0.5s', transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
      >
        <Bot className="h-4 w-4 md:h-8 md:w-8 text-auttus-blue group-hover:animate-wiggle" />
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
      </div>
      
      <div 
        className="absolute top-64 right-1/4 w-10 h-10 md:w-20 md:h-20 bg-auttus-orange rounded-full animate-float flex items-center justify-center group hover:animate-heart-beat cursor-pointer transition-all duration-500 hover:scale-110" 
        style={{ animationDelay: '1.5s', transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
      >
        <Car className="h-5 w-5 md:h-10 md:w-10 text-white group-hover:animate-pulse" />
        <div className="absolute inset-0 bg-auttus-orange rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div 
        className="absolute bottom-32 right-8 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full animate-float flex items-center justify-center group hover:animate-heart-beat cursor-pointer transition-all duration-500 hover:scale-110" 
        style={{ animationDelay: '3s', transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
      >
        <Bot className="h-2 w-2 md:h-4 md:w-4 text-auttus-blue group-hover:animate-bounce" />
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  );
};
