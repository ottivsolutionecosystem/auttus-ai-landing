
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
    <div className="w-full flex justify-center py-12 bg-gradient-to-b from-transparent to-orange-50">
      <div className="bg-gradient-to-r from-auttus-orange to-orange-600 rounded-3xl shadow-2xl border-2 border-white p-8 sm:p-10 text-white animate-scale-in max-w-md sm:max-w-lg w-full mx-4 bg-opacity-95 backdrop-blur-sm relative">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300 p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="h-8 w-8 text-white" />
            <span className="font-bold text-xl sm:text-2xl">🚀 COMECE HOJE!</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Transforme suas vendas agora
          </h3>
          <p className="text-lg text-orange-100">
            Setup personalizado + treinamento da equipe incluso no Professional.
          </p>
        </div>
        
        <Button 
          className="w-full bg-white text-auttus-orange hover:bg-gray-100 font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
        >
          Começar agora
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        <p className="text-center text-base text-orange-200 mt-4">
          ⚡ Implementação em 24 horas
        </p>
      </div>
    </div>
  );
};
