
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-auttus-blue mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho da sua operação. Sem surpresas, sem letras miúdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative animate-slide-up ${
                  plan.popular 
                    ? 'transform scale-105 border-2 border-auttus-orange' 
                    : 'border border-gray-200'
                } bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-auttus-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`${plan.popular ? 'bg-auttus-orange' : 'bg-auttus-blue'} rounded-lg p-3 w-fit mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Plan Details */}
                <h3 className="text-2xl font-bold text-auttus-blue mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-auttus-blue">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-auttus-orange hover:bg-orange-600' 
                      : 'bg-auttus-blue hover:bg-blue-800'
                  } text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">
            Não tem certeza qual plano escolher? Fale com nossos especialistas.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-auttus-orange text-auttus-orange hover:bg-auttus-orange hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Falar com consultor
          </Button>
        </div>
      </div>
    </section>
  );
};
