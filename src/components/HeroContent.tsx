
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-fade-in text-center lg:text-left">
      {/* Logo & Status */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-4">
          <img 
            src="/lovable-uploads/8d1a3a7d-2eb5-454e-8e09-956437a46655.png" 
            alt="AUTTUS Logo" 
            className="h-10 sm:h-12 lg:h-16 w-auto hover:scale-105 transition-transform duration-300"
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
        Transforme leads em vendas com <span className="text-auttus-orange">IA especializada</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
        Resposta instantânea, qualificação inteligente e agendamentos automáticos. 
        A solução definitiva para concessionárias que querem vender mais.
      </p>

      {/* Value Props Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-3xl mx-auto lg:mx-0">
        <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1">
            Instantâneo
          </div>
          <div className="text-blue-200 text-xs sm:text-sm">
            Resposta em segundos
          </div>
        </div>

        <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1">
            24/7
          </div>
          <div className="text-blue-200 text-xs sm:text-sm">
            Nunca para de vender
          </div>
        </div>

        <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1">
            IA Nacional
          </div>
          <div className="text-blue-200 text-xs sm:text-sm">
            Entende seu cliente
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-6 sm:mb-8">
        <Button 
          size="lg" 
          className="bg-auttus-orange hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] min-h-[60px] flex items-center justify-center group"
        >
          <span>Começar agora</span>
          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        
        <Button 
          variant="outline"
          size="lg" 
          className="border-2 border-white text-white hover:bg-white hover:text-auttus-blue font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] min-h-[60px] flex items-center justify-center group"
        >
          <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          Ver demonstração
        </Button>
      </div>

      {/* Social Proof */}
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-blue-200">
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
