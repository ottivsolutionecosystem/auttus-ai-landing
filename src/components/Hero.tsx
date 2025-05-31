
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, MessageCircle, Car, Play } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-auttus-blue via-auttus-blue to-blue-900 overflow-hidden">
      {/* Background Animation with Parallax */}
      <div className="absolute inset-0 opacity-10">
        {/* Layer 1 - Slowest parallax */}
        <div 
          className="absolute top-10 left-4 md:top-20 md:left-20 w-12 h-12 md:w-24 md:h-24 bg-auttus-orange rounded-full animate-float flex items-center justify-center"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
        >
          <Car className="h-6 w-6 md:h-12 md:w-12 text-white" />
        </div>
        <div 
          className="absolute top-20 right-8 md:top-40 md:right-32 w-10 h-10 md:w-20 md:h-20 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '1s', transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
        >
          <Bot className="h-5 w-5 md:h-10 md:w-10 text-auttus-blue" />
        </div>
        <div 
          className="absolute bottom-20 left-1/3 w-6 h-6 md:w-12 md:h-12 bg-auttus-orange rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '2s', transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        >
          <Car className="h-3 w-3 md:h-6 md:w-6 text-white" />
        </div>
        <div 
          className="absolute top-32 left-1/2 w-8 h-8 md:w-16 md:h-16 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '0.5s', transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
        >
          <Bot className="h-4 w-4 md:h-8 md:w-8 text-auttus-blue" />
        </div>
        <div 
          className="absolute top-64 right-1/4 w-10 h-10 md:w-20 md:h-20 bg-auttus-orange rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '1.5s', transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
        >
          <Car className="h-5 w-5 md:h-10 md:w-10 text-white" />
        </div>
        <div 
          className="absolute bottom-32 right-8 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '3s', transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
        >
          <Bot className="h-2 w-2 md:h-4 md:w-4 text-auttus-blue" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-fade-in text-center lg:text-left">
            {/* Logo & Beta Badge */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-4">
                <img 
                  src="/lovable-uploads/440a171d-fb9d-421f-9eda-4b66e059bbc7.png" 
                  alt="AUTTUS Logo" 
                  className="h-8 sm:h-10 lg:h-12 w-auto animate-pulse-soft"
                />
                <div className="bg-auttus-orange text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  BETA LIMITADO
                </div>
              </div>
              <p className="text-auttus-orange font-medium text-sm sm:text-base lg:text-lg">
                Responda leads em segundos, não horas
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Pare de perder vendas por{" "}
              <span className="text-auttus-orange">demora na resposta</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A primeira IA brasileira treinada especificamente para vendas automotivas. 
              Responde leads, qualifica clientes e agenda visitas automaticamente.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button 
                size="lg" 
                className="bg-auttus-orange hover:bg-orange-600 text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300"
              >
                Garantir meu beta GRÁTIS
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-auttus-blue font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Ver demonstração
              </Button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-lg sm:max-w-none mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange">Instantâneo</div>
                <div className="text-blue-200 text-xs sm:text-sm">Resposta em segundos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange">24/7</div>
                <div className="text-blue-200 text-xs sm:text-sm">Nunca para de vender</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange">IA Brasileira</div>
                <div className="text-blue-200 text-xs sm:text-sm">Entende seu cliente</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="w-full lg:w-1/2 relative animate-slide-up lg:pl-4 xl:pl-8">
            <div className="relative bg-white rounded-2xl shadow-2xl p-3 sm:p-4 lg:p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              {/* Dashboard Mockup */}
              <div className="bg-auttus-gray rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="font-semibold text-auttus-blue text-xs sm:text-sm lg:text-base">Demo - Auttus IA</h3>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-50 rounded-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs sm:text-sm">WhatsApp - João (Demo)</div>
                      <div className="text-xs text-gray-600 truncate">IA: "Olá João! Vi seu interesse no Civic. Posso agendar um test-drive?"</div>
                    </div>
                    <Bot className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-auttus-orange flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-lg animate-fade-in" style={{ animationDelay: '1s' }}>
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs sm:text-sm">OLX - Maria (Demo)</div>
                      <div className="text-xs text-gray-600 truncate">IA respondeu e qualificou automaticamente</div>
                    </div>
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-auttus-orange flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-purple-50 rounded-lg animate-fade-in" style={{ animationDelay: '1.5s' }}>
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-purple-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs sm:text-sm">Instagram - Pedro (Demo)</div>
                      <div className="text-xs text-gray-600 truncate">Agendamento confirmado para amanhã 14h</div>
                    </div>
                    <Bot className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-auttus-orange flex-shrink-0" />
                  </div>
                </div>

                {/* Demo Badge */}
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    * Interface de demonstração
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-auttus-orange text-white p-2 sm:p-3 rounded-full animate-float">
              <Bot className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-500 text-white p-2 sm:p-3 rounded-full animate-float" style={{ animationDelay: '1s' }}>
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
