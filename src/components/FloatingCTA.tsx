
import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
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
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-auttus-orange p-6 max-w-sm">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="mb-4">
          <h3 className="text-lg font-bold text-auttus-blue mb-2">
            Venda mais, com menos esforço
          </h3>
          <p className="text-sm text-gray-600">
            Deixe a Auttus trabalhar por você. Demonstração gratuita em 15 minutos.
          </p>
        </div>
        
        <Button 
          className="w-full bg-auttus-orange hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-soft"
        >
          Agende sua demonstração
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
