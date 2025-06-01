
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
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <div className="bg-gradient-to-r from-auttus-orange to-orange-600 rounded-2xl shadow-2xl border-2 border-white p-6 text-white animate-slide-up max-w-sm w-full bg-opacity-95 backdrop-blur-sm relative">
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors duration-300 p-1 hover:bg-white hover:bg-opacity-20 rounded-full"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-3">
            <Rocket className="h-5 w-5 text-white" />
            <span className="font-bold text-base">🚀 COMECE HOJE!</span>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Transforme suas vendas agora
          </h3>
          <p className="text-sm text-orange-100">
            Setup personalizado + treinamento da equipe incluso no Professional.
          </p>
        </div>
        
        <Button 
          className="w-full bg-white text-auttus-orange hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm"
        >
          Começar agora
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-center text-xs text-orange-200 mt-2">
          ⚡ Implementação em 24 horas
        </p>
      </div>
    </div>
  );
};
