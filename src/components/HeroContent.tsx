
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export const HeroContent = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full lg:w-1/2 animate-fade-in text-center lg:text-left">
      {/* Logo & Status */}
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4">
          <img 
            src="/lovable-uploads/d263659d-bcbc-4a4b-8ef6-a9332b55e6d3.png" 
            alt="AUTTUS Logo" 
            className="h-8 sm:h-10 lg:h-12 xl:h-16 w-auto hover:scale-105 transition-transform duration-300"
          />
          <div className="bg-green-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">ATIVO NO MERCADO</span>
            <span className="xs:hidden">ATIVO</span>
          </div>
        </div>
        <p className="text-auttus-orange font-medium text-sm sm:text-base lg:text-lg">
          Líder em automação de vendas automotivas
        </p>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
        Transforme leads em vendas com <span className="text-auttus-orange">IA especializada</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
        Resposta instantânea, qualificação inteligente e agendamentos automáticos. 
        A solução definitiva para concessionárias que querem vender mais.
      </p>

      {/* Value Props Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto lg:mx-0">
        <div className="text-center lg:text-left bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300 xs:col-span-1 sm:col-span-1">
          <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-auttus-orange mb-1">
            Instantâneo
          </div>
          <div className="text-blue-200 text-xs sm:text-sm">
            Resposta em segundos
          </div>
        </div>

        <div className="text-center lg:text-left bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
          <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-auttus-orange mb-1">
            24/7
          </div>
          <div className="text-blue-200 text-xs sm:text-sm">
            Nunca para de vender
          </div>
        </div>

        <div className="text-center lg:text-left bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300 xs:col-span-2 sm:col-span-1">
          <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-auttus-orange mb-1">
            IA Nacional
          </div>
          <div className="text-blue-200 text-xs sm:text-sm">
            Entende seu cliente
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start mb-4 sm:mb-6 lg:mb-8">
        <Button 
          size="lg" 
          className="bg-auttus-orange hover:bg-orange-600 text-white font-semibold px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg xl:text-xl rounded-lg sm:rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] min-h-[48px] sm:min-h-[56px] lg:min-h-[60px] flex items-center justify-center group w-full sm:w-auto"
          onClick={() => window.open('https://wa.me/5567997160784?text=Ol%C3%A1,%20gostaria%20de%20colocar%20a%20Auttus%20no%20meu%20neg%C3%B3cio!!', '_blank')}
        >
          <span>Começar agora</span>
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        
        <Button 
          variant="outline"
          size="lg" 
          className="border-2 border-white hover:bg-white hover:text-auttus-blue font-semibold px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg xl:text-xl rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] min-h-[48px] sm:min-h-[56px] lg:min-h-[60px] flex items-center justify-center group w-full sm:w-auto"
          style={{ color: '#092341' }}
          onClick={scrollToDemo}
        >
          <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          Ver demonstração
        </Button>
      </div>

      {/* Social Proof */}
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-blue-200">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
          <span className="text-sm sm:text-base">Implementação rápida</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
          <span className="text-sm sm:text-base">Suporte especializado</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
          <span className="text-sm sm:text-base">Resultados garantidos</span>
        </div>
      </div>
    </div>
  );
};
