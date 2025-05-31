
import { Check, Crown, Zap, Star, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Beta Gratuito",
    price: "R$ 0",
    period: "/60 dias",
    description: "Acesso completo durante o beta",
    icon: Rocket,
    features: [
      "Omnichannel completo",
      "CRM integrado",
      "IA treinada para carros",
      "Até 1.000 conversas/mês",
      "Setup personalizado",
      "Suporte prioritário",
      "Sem compromisso"
    ],
    popular: true,
    buttonText: "Garantir vaga no beta",
    badge: "BETA",
    originalPrice: "R$ 497"
  },
  {
    name: "Starter",
    price: "R$ 297",
    period: "/mês",
    description: "Perfeito para começar (após o beta)",
    icon: Zap,
    features: [
      "Tudo do Beta",
      "Até 2.000 conversas/mês",
      "Integrações básicas",
      "Relatórios essenciais",
      "Suporte por email"
    ],
    popular: false,
    buttonText: "Reservar para depois",
    comingSoon: true
  },
  {
    name: "Pro",
    price: "R$ 597",
    period: "/mês",
    description: "Para operações maiores (após o beta)",
    icon: Crown,
    features: [
      "Tudo do Starter",
      "Campanhas automatizadas",
      "Follow-up inteligente",
      "Conversas ilimitadas",
      "API personalizada",
      "Relatórios avançados",
      "Suporte prioritário"
    ],
    popular: false,
    buttonText: "Reservar para depois",
    comingSoon: true
  }
];

export const Pricing = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            Comece gratuitamente no beta
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Teste todas as funcionalidades por 60 dias sem pagar nada. 
            Veja os preços que teremos após o lançamento oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative animate-slide-up ${
                  plan.popular 
                    ? 'transform lg:scale-105 border-2 border-auttus-orange' 
                    : 'border border-gray-200'
                } bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
                  plan.comingSoon ? 'opacity-75' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-auttus-orange text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      ACESSO ANTECIPADO
                    </div>
                  </div>
                )}

                {/* Coming Soon Badge */}
                {plan.comingSoon && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Após o Beta
                    </div>
                  </div>
                )}

                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`${plan.popular ? 'bg-auttus-orange' : 'bg-auttus-blue'} rounded-lg p-2 sm:p-3 w-fit`}>
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  {plan.badge && (
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      {plan.badge}
                    </div>
                  )}
                </div>

                {/* Plan Details */}
                <h3 className="text-xl sm:text-2xl font-bold text-auttus-blue mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  {plan.originalPrice && plan.popular && (
                    <div className="text-sm text-gray-500 line-through mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <span className="text-3xl sm:text-4xl font-bold text-auttus-blue">{plan.price}</span>
                  <span className="text-gray-500 text-sm sm:text-base">{plan.period}</span>
                  {plan.popular && (
                    <div className="text-green-600 text-sm font-semibold mt-1">
                      💰 Economia de 100% durante o beta
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-auttus-orange hover:bg-orange-600' 
                      : plan.comingSoon
                      ? 'bg-gray-400 hover:bg-gray-500'
                      : 'bg-auttus-blue hover:bg-blue-800'
                  } text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 ${
                    !plan.comingSoon ? 'transform hover:scale-105' : ''
                  } text-sm sm:text-base`}
                  disabled={plan.comingSoon}
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 animate-fade-in">
          <div className="bg-auttus-gray rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <Users className="h-12 w-12 text-auttus-orange mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-auttus-blue mb-4">
              🎯 Dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-gray-600 mb-6">
              Comece pelo beta gratuito e nossa equipe te ajuda a escolher 
              o melhor plano quando ele acabar.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-auttus-orange text-auttus-orange hover:bg-auttus-orange hover:text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300"
            >
              Falar com nossa equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
