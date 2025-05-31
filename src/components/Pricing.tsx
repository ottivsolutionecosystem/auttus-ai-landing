
import { Check, Crown, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "R$ 297",
    period: "/mês",
    description: "Perfeito para começar a automatizar",
    icon: Zap,
    features: [
      "Omnichannel completo",
      "CRM integrado",
      "Até 1.000 conversas/mês",
      "Suporte por email",
      "Integrações básicas"
    ],
    popular: false,
    buttonText: "Começar agora"
  },
  {
    name: "Pro",
    price: "R$ 597",
    period: "/mês",
    description: "O mais popular entre revendas",
    icon: Crown,
    features: [
      "Tudo do Starter",
      "IA SDR completa",
      "Campanhas automatizadas",
      "Follow-up inteligente",
      "Até 5.000 conversas/mês",
      "Suporte prioritário",
      "Relatórios avançados"
    ],
    popular: true,
    buttonText: "Mais popular"
  },
  {
    name: "Performance",
    price: "R$ 997",
    period: "/mês",
    description: "Para operações de alto volume",
    icon: Star,
    features: [
      "Tudo do Pro",
      "Ligações automáticas",
      "Agendamento avançado",
      "Conversas ilimitadas",
      "Suporte 24/7",
      "Onboarding personalizado",
      "API personalizada",
      "Consultor dedicado"
    ],
    popular: false,
    buttonText: "Máxima performance"
  }
];

export const Pricing = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Escolha o plano ideal para o tamanho da sua operação. Sem surpresas, sem letras miúdas.
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
                } bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-auttus-orange text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`${plan.popular ? 'bg-auttus-orange' : 'bg-auttus-blue'} rounded-lg p-2 sm:p-3 w-fit mb-4 sm:mb-6`}>
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>

                {/* Plan Details */}
                <h3 className="text-xl sm:text-2xl font-bold text-auttus-blue mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl font-bold text-auttus-blue">{plan.price}</span>
                  <span className="text-gray-500 text-sm sm:text-base">{plan.period}</span>
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
                      : 'bg-auttus-blue hover:bg-blue-800'
                  } text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 animate-fade-in">
          <p className="text-sm sm:text-base text-gray-600 mb-4 px-4">
            Não tem certeza qual plano escolher? Fale com nossos especialistas.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-auttus-orange text-auttus-orange hover:bg-auttus-orange hover:text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300"
          >
            Falar com consultor
          </Button>
        </div>
      </div>
    </section>
  );
};
