
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, MessageCircle, Car, Play, CheckCircle } from "lucide-react";
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-fade-in text-center lg:text-left">
            {/* Logo & Status */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-4">
                <img 
                  src="/lovable-uploads/8d1a3a7d-2eb5-454e-8e09-956437a46655.png" 
                  alt="AUTTUS Logo" 
                  className="h-10 sm:h-12 lg:h-16 w-auto"
                />
                <div className="bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>ATIVO NO MERCADO</span>
                </div>
              </div>
              <p className="text-auttus-orange font-medium text-sm sm:text-base lg:text-lg">
                Líder em automação de vendas automotivas
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Pare de perder vendas por{" "}
              <span className="text-auttus-orange">demora na resposta</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A IA brasileira especializada em vendas automotivas. 
              Responde leads, qualifica clientes e agenda visitas automaticamente.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auttus-orange mb-1">Instantâneo</div>
                <div className="text-blue-200 text-sm sm:text-base">Resposta em segundos</div>
              </div>
              <div className="text-center lg:text-left bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auttus-orange mb-1">24/7</div>
                <div className="text-blue-200 text-sm sm:text-base">Nunca para de vender</div>
              </div>
              <div className="text-center lg:text-left bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auttus-orange mb-1">IA Nacional</div>
                <div className="text-blue-200 text-sm sm:text-base">Entende seu cliente</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button 
                size="lg" 
                className="bg-auttus-orange hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Começar agora
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-auttus-blue font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Ver demonstração
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                <span className="text-sm sm:text-base">Setup em 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                <span className="text-sm sm:text-base">Suporte dedicado</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                <span className="text-sm sm:text-base">Garantia de resultado</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="w-full lg:w-1/2 relative animate-slide-up lg:pl-8 xl:pl-12">
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-md sm:max-w-lg mx-auto lg:max-w-none">
              {/* Dashboard Mockup */}
              <div className="bg-auttus-gray rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="font-semibold text-auttus-blue text-sm sm:text-base lg:text-lg">Auttus Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-green-50 rounded-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base">WhatsApp - João Silva</div>
                      <div className="text-xs sm:text-sm text-gray-600">IA: "Oi João! Vi seu interesse no Civic. Posso agendar um test-drive?"</div>
                    </div>
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-xl animate-fade-in" style={{ animationDelay: '1s' }}>
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base">OLX - Maria Santos</div>
                      <div className="text-xs sm:text-sm text-gray-600">IA respondeu e qualificou lead automaticamente</div>
                    </div>
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-purple-50 rounded-xl animate-fade-in" style={{ animationDelay: '1.5s' }}>
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base">Instagram - Pedro Costa</div>
                      <div className="text-xs sm:text-sm text-gray-600">Agendamento confirmado para amanhã 14h</div>
                    </div>
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0" />
                  </div>
                </div>

                {/* Status */}
                <div className="mt-4 sm:mt-6 text-center">
                  <span className="text-xs sm:text-sm text-green-600 bg-green-100 px-3 py-2 rounded-lg font-medium">
                    ✓ Sistema ativo - 3 leads respondidos hoje
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-auttus-orange text-white p-3 sm:p-4 rounded-full animate-float shadow-lg">
              <Bot className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-green-500 text-white p-3 sm:p-4 rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
