
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Trophy, RefreshCw, CheckCircle, Star } from "lucide-react";

export const IrresistibleOffer = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-auttus-blue relative overflow-hidden">
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
            <Shield className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">🛡️ GARANTIA TOTAL</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="bg-auttus-orange text-white px-2 sm:px-4 py-1 rounded-lg inline-block transform -rotate-2 mb-2">
              30 DIAS
            </span>
            <br />
            com Resultado Garantido
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 leading-relaxed">
            Teste nossa solução por 30 dias. Se não aumentarmos suas vendas e 
            melhorarmos seu atendimento, devolvemos 100% do seu investimento.
          </p>

          {/* Guarantee Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="flex flex-col items-center space-y-4 animate-slide-up">
              <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl">Resultados Comprovados</h3>
              <p className="text-blue-100 text-sm sm:text-base text-center">
                Aumento médio de 40% nas vendas nos primeiros 30 dias
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl">100% Seguro</h3>
              <p className="text-blue-100 text-sm sm:text-base text-center">
                Sem contratos de fidelidade. Cancele quando quiser
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <RefreshCw className="h-8 w-8 sm:h-10 sm:w-10 text-blue-300" />
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl">Dinheiro de Volta</h3>
              <p className="text-blue-100 text-sm sm:text-base text-center">
                Reembolso total em até 24h se não ficar satisfeito
              </p>
            </div>
          </div>

          {/* Guarantee Seal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <h3 className="text-white font-bold text-xl sm:text-2xl">GARANTIA INCONDICIONAL</h3>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
            <p className="text-blue-100 text-base sm:text-lg">
              Se em 30 dias você não estiver <strong>completamente satisfeito</strong> com os resultados, 
              devolvemos 100% do seu investimento. Sem perguntas, sem burocracias.
            </p>
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <span className="text-sm sm:text-base">
                <strong>98% de satisfação</strong> • Mais de 100 empresas atendidas
              </span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="text-white italic text-lg mb-3">
              "Em 15 dias já vi o retorno do investimento. A garantia me deu confiança para testar."
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-auttus-orange rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Cristian</div>
                <div className="text-blue-200 text-sm">CEO, CNA Motors</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-pulse-soft">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-auttus-orange text-white hover:bg-orange-600 font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 TESTAR 30 DIAS SEM RISCO
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Fine Print */}
          <p className="text-blue-200 mt-4 sm:mt-6 text-sm">
            * Garantia válida por 30 dias • Reembolso total • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};
