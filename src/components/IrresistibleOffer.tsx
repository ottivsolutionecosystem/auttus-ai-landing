
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Star, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";

export const IrresistibleOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <span className="text-white font-semibold text-sm sm:text-base">🚀 ACESSO ANTECIPADO</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Seja um dos primeiros{" "}
            <span className="bg-white text-auttus-orange px-2 sm:px-4 py-1 rounded-lg inline-block transform -rotate-2">
              50 usuários
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 leading-relaxed">
            Acesso gratuito por 60 dias + Setup personalizado + Suporte prioritário.
            Apenas para as primeiras revendas que se cadastrarem.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 text-lg">⏰ Tempo limitado para se inscrever:</h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="bg-white text-auttus-orange rounded-lg p-2 sm:p-3 font-bold text-lg sm:text-xl">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-white text-xs sm:text-sm mt-1">Dias</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-auttus-orange rounded-lg p-2 sm:p-3 font-bold text-lg sm:text-xl">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-white text-xs sm:text-sm mt-1">Horas</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-auttus-orange rounded-lg p-2 sm:p-3 font-bold text-lg sm:text-xl">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-white text-xs sm:text-sm mt-1">Min</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-auttus-orange rounded-lg p-2 sm:p-3 font-bold text-lg sm:text-xl">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-white text-xs sm:text-sm mt-1">Seg</div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex flex-col items-center space-y-2 animate-slide-up">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base">Setup Personalizado</h3>
              <p className="text-orange-100 text-xs sm:text-sm text-center">Nossa equipe configura tudo</p>
            </div>

            <div className="flex flex-col items-center space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base">60 Dias Grátis</h3>
              <p className="text-orange-100 text-xs sm:text-sm text-center">Teste completo sem compromisso</p>
            </div>

            <div className="flex flex-col items-center space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base">Suporte Prioritário</h3>
              <p className="text-orange-100 text-xs sm:text-sm text-center">Atendimento VIP durante o beta</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center space-x-4 text-white">
              <Users className="h-5 w-5" />
              <span className="text-sm">🔥 <strong>23 revendas</strong> já garantiram sua vaga</span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-white rounded-full border-2 border-orange-400"></div>
                <div className="w-8 h-8 bg-white rounded-full border-2 border-orange-400"></div>
                <div className="w-8 h-8 bg-white rounded-full border-2 border-orange-400 flex items-center justify-center text-xs text-auttus-orange font-bold">
                  +21
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-pulse-soft">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-auttus-orange hover:bg-gray-100 font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 QUERO MINHA VAGA NO BETA
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Fine Print */}
          <p className="text-orange-100 mt-4 sm:mt-6 text-sm">
            * Vagas limitadas • Sem compromisso • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};
