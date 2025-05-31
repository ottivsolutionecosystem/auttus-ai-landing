
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { ValuePropsGrid } from "./ValuePropsGrid";
import { useState, useEffect } from "react";

export const HeroContent = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Pare de perder vendas por demora na resposta";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setShowCursor(false);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-fade-in text-center lg:text-left">
      {/* Logo & Status */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-4 group">
          <img 
            src="/lovable-uploads/8d1a3a7d-2eb5-454e-8e09-956437a46655.png" 
            alt="AUTTUS Logo" 
            className="h-10 sm:h-12 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-110"
          />
          <div className="bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1 animate-pulse-soft hover:animate-heart-beat cursor-pointer">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>ATIVO NO MERCADO</span>
          </div>
        </div>
        <p className="text-auttus-orange font-medium text-sm sm:text-base lg:text-lg animate-slide-right">
          Líder em automação de vendas automotivas
        </p>
      </div>

      {/* Main Title with Typewriter Effect */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
        <span className="inline-block overflow-hidden">
          {typedText}
          <span className="text-auttus-orange">
            {typedText.includes("demora na resposta") ? " demora na resposta" : ""}
          </span>
          {showCursor && <span className="animate-blink">|</span>}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        A IA brasileira especializada em vendas automotivas. 
        Responde leads, qualifica clientes e agenda visitas automaticamente.
      </p>

      {/* Value Props */}
      <div style={{ animationDelay: '1s' }}>
        <ValuePropsGrid />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-6 sm:mb-8 animate-scale-in" style={{ animationDelay: '1.5s' }}>
        <Button 
          size="lg" 
          className="bg-auttus-orange hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-orange-500/25 min-h-[60px] flex items-center justify-center group relative overflow-hidden"
        >
          <span className="relative z-10">Começar agora</span>
          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
        
        <Button 
          variant="outline"
          size="lg" 
          className="border-2 border-white text-white hover:bg-white hover:text-auttus-blue font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 backdrop-blur-sm min-h-[60px] flex items-center justify-center group hover:shadow-white/25"
        >
          <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          Ver demonstração
        </Button>
      </div>

      {/* Social Proof */}
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-blue-200 animate-slide-up" style={{ animationDelay: '2s' }}>
        <div className="flex items-center space-x-2 group">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0 group-hover:animate-heart-beat" />
          <span className="text-sm sm:text-base">Setup em 24h</span>
        </div>
        <div className="flex items-center space-x-2 group">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0 group-hover:animate-heart-beat" />
          <span className="text-sm sm:text-base">Suporte dedicado</span>
        </div>
        <div className="flex items-center space-x-2 group">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0 group-hover:animate-heart-beat" />
          <span className="text-sm sm:text-base">Garantia de resultado</span>
        </div>
      </div>
    </div>
  );
};
