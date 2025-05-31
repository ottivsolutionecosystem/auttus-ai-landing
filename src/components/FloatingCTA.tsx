
import { useState, useEffect } from "react";
import { ArrowRight, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling 50% of the viewport
      if (scrollPosition > windowHeight * 0.5 && !isHidden) {
        setIsVisible(true);
      } else if (scrollPosition <= windowHeight * 0.5) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const handleClose = () => {
    setIsHidden(true);
    setIsVisible(false);
  };

  if (!isVisible || isHidden) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-slide-up max-w-xs sm:max-w-sm">
      <div className="bg-gradient-to-r from-auttus-orange to-orange-600 rounded-2xl shadow-2xl border-2 border-white p-4 sm:p-6 text-white">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-3">
            <Rocket className="h-5 w-5 text-white" />
            <span className="font-bold text-sm sm:text-base">🚀 COMECE HOJE!</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold mb-2">
            Transforme suas vendas agora
          </h3>
          <p className="text-xs sm:text-sm text-orange-100">
            Setup personalizado + treinamento da equipe incluso no Professional.
          </p>
        </div>
        
        <Button 
          className="w-full bg-white text-auttus-orange hover:bg-gray-100 font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
        >
          Começar agora
          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>

        <p className="text-center text-xs text-orange-200 mt-2">
          ⚡ Implementação em 24 horas
        </p>
      </div>
    </div>
  );
};
