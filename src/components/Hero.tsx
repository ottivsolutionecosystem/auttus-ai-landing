import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, MessageCircle, Car } from "lucide-react";
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
          className="absolute top-10 left-4 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-auttus-orange rounded-full animate-float flex items-center justify-center"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
        >
          <Car className="h-8 w-8 md:h-16 md:w-16 text-white" />
        </div>
        <div 
          className="absolute top-20 right-8 md:top-40 md:right-32 w-12 h-12 md:w-24 md:h-24 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '1s', transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
        >
          <Bot className="h-6 w-6 md:h-12 md:w-12 text-auttus-blue" />
        </div>
        <div 
          className="absolute bottom-20 left-1/3 w-8 h-8 md:w-16 md:h-16 bg-auttus-orange rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '2s', transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        >
          <Car className="h-4 w-4 md:h-8 md:w-8 text-white" />
        </div>

        {/* Layer 2 - Medium parallax */}
        <div 
          className="absolute top-32 left-1/2 w-10 h-10 md:w-20 md:h-20 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '0.5s', transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
        >
          <Bot className="h-5 w-5 md:h-10 md:w-10 text-auttus-blue" />
        </div>
        <div 
          className="absolute top-64 right-1/4 w-14 h-14 md:w-28 md:h-28 bg-auttus-orange rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '1.5s', transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
        >
          <Car className="h-7 w-7 md:h-14 md:w-14 text-white" />
        </div>
        <div 
          className="absolute bottom-32 right-8 w-6 h-6 md:w-12 md:h-12 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '3s', transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
        >
          <Bot className="h-3 w-3 md:h-6 md:w-6 text-auttus-blue" />
        </div>

        {/* Layer 3 - Fastest parallax */}
        <div 
          className="absolute top-48 left-8 w-6 h-6 md:w-12 md:h-12 bg-auttus-orange rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '2.5s', transform: `translate3d(0, ${scrollY * 0.5}px, 0)` }}
        >
          <Car className="h-3 w-3 md:h-6 md:w-6 text-white" />
        </div>
        <div 
          className="absolute top-80 right-1/3 w-8 h-8 md:w-16 md:h-16 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '0.8s', transform: `translate3d(0, ${scrollY * 0.45}px, 0)` }}
        >
          <Bot className="h-4 w-4 md:h-8 md:w-8 text-auttus-blue" />
        </div>
        <div 
          className="absolute bottom-48 left-1/4 w-10 h-10 md:w-20 md:h-20 bg-auttus-orange rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '1.8s', transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
        >
          <Car className="h-5 w-5 md:h-10 md:w-10 text-white" />
        </div>
        <div 
          className="absolute bottom-64 right-12 w-12 h-12 md:w-24 md:h-24 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '2.2s', transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
        >
          <Bot className="h-6 w-6 md:h-12 md:w-12 text-auttus-blue" />
        </div>

        {/* Additional scattered elements */}
        <div 
          className="absolute top-96 left-12 w-4 h-4 md:w-8 md:h-8 bg-auttus-orange rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '3.5s', transform: `translate3d(0, ${scrollY * 0.6}px, 0)` }}
        >
          <Car className="h-2 w-2 md:h-4 md:w-4 text-white" />
        </div>
        <div 
          className="absolute top-16 right-1/2 w-5 h-5 md:w-10 md:h-10 bg-white rounded-full animate-float flex items-center justify-center" 
          style={{ animationDelay: '4s', transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
        >
          <Bot className="h-2.5 w-2.5 md:h-5 md:w-5 text-auttus-blue" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-fade-in text-center lg:text-left">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 animate-pulse-soft">
                AUTTUS
              </h1>
              <p className="text-auttus-orange font-medium text-base sm:text-lg">
                Venda mais. Responda menos. Automatize tudo.
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Sua loja vendendo no{" "}
              <span className="text-auttus-orange">automático</span> com IA de verdade.
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A Auttus centraliza todos seus atendimentos e automatiza vendas com 
              inteligência artificial treinada para responder, agendar, qualificar e 
              vender por você.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-auttus-orange hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 mb-8 sm:mb-12"
            >
              Solicite sua demonstração gratuita
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-auttus-orange">98%</div>
                <div className="text-blue-200 text-xs sm:text-sm">Aumento em vendas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-auttus-orange">75%</div>
                <div className="text-blue-200 text-xs sm:text-sm">Redução de tempo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-auttus-orange">24/7</div>
                <div className="text-blue-200 text-xs sm:text-sm">Atendimento ativo</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="w-full lg:w-1/2 relative animate-slide-up lg:pl-8">
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto lg:max-w-none">
              {/* Dashboard Mockup */}
              <div className="bg-auttus-gray rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="font-semibold text-auttus-blue text-sm sm:text-base">Painel Auttus</h3>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-50 rounded-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs sm:text-sm">WhatsApp - João Silva</div>
                      <div className="text-xs text-gray-600 truncate">Interessado no Civic 2023</div>
                    </div>
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-auttus-orange flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-lg animate-fade-in" style={{ animationDelay: '1s' }}>
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs sm:text-sm">OLX - Maria Costa</div>
                      <div className="text-xs text-gray-600 truncate">Proposta enviada automaticamente</div>
                    </div>
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-auttus-orange flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-purple-50 rounded-lg animate-fade-in" style={{ animationDelay: '1.5s' }}>
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs sm:text-sm">Instagram - Pedro Lima</div>
                      <div className="text-xs text-gray-600 truncate">Agendamento realizado</div>
                    </div>
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-auttus-orange flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-auttus-orange text-white p-2 sm:p-3 rounded-full animate-float">
              <Bot className="h-4 w-4 sm:h-6 sm:w-6" />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-500 text-white p-2 sm:p-3 rounded-full animate-float" style={{ animationDelay: '1s' }}>
              <Zap className="h-4 w-4 sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
