
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
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none bg-black bg-opacity-30">
      <div className="bg-gradient-to-r from-auttus-orange to-orange-600 rounded-3xl shadow-2xl border-2 border-white p-8 sm:p-10 text-white animate-slide-up max-w-md sm:max-w-lg w-full mx-4 pointer-events-auto bg-opacity-95 backdrop-blur-sm">
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors duration-300 p-1 hover:bg-white hover:bg-opacity-20 rounded-full"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <Rocket className="h-7 w-7 text-white" />
            <span className="font-bold text-lg sm:text-xl">🚀 COMECE HOJE!</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Transforme suas vendas agora
          </h3>
          <p className="text-base sm:text-lg text-orange-100">
            Setup personalizado + treinamento da equipe incluso no Professional.
          </p>
        </div>
        
        <Button 
          className="w-full bg-white text-auttus-orange hover:bg-gray-100 font-semibold py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
        >
          Começar agora
          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        <p className="text-center text-sm sm:text-base text-orange-200 mt-3">
          ⚡ Implementação em 24 horas
        </p>
      </div>
    </div>
  );
};
