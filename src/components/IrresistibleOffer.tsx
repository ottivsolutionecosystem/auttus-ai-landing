
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Star } from "lucide-react";

export const IrresistibleOffer = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-auttus-orange to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Gift className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">🧲 OFERTA ESPECIAL</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Comece HOJE e receba{" "}
            <span className="bg-white text-auttus-orange px-2 sm:px-4 py-1 rounded-lg inline-block transform -rotate-2">
              30 dias GRÁTIS
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 leading-relaxed">
            Teste a Auttus por 1 mês completo sem pagar nada. 
            Se não aumentar suas vendas, devolvemos 100% do seu dinheiro.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex flex-col items-center space-y-2 animate-slide-up">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base">Setup Gratuito</h3>
              <p className="text-orange-100 text-xs sm:text-sm text-center">Configuramos tudo para você</p>
            </div>

            <div className="flex flex-col items-center space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base">30 Dias Grátis</h3>
              <p className="text-orange-100 text-xs sm:text-sm text-center">Teste completo sem compromisso</p>
            </div>

            <div className="flex flex-col items-center space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base">Bônus Exclusivos</h3>
              <p className="text-orange-100 text-xs sm:text-sm text-center">Templates prontos inclusos</p>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-pulse-soft">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-auttus-orange hover:bg-gray-100 font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 QUERO MEUS 30 DIAS GRÁTIS
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Urgency */}
          <p className="text-orange-100 mt-4 sm:mt-6 text-sm sm:text-base">
            ⏰ Oferta limitada • Apenas para os próximos 100 cadastros
          </p>
        </div>
      </div>
    </section>
  );
};
