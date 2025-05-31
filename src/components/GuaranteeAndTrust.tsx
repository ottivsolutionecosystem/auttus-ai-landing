
import { Shield, RefreshCw, Lock, Users, Award, CheckCircle } from "lucide-react";

const guarantees = [
  {
    icon: RefreshCw,
    title: "Garantia de 30 dias",
    description: "Não ficou satisfeito? Devolvemos 100% do seu dinheiro sem perguntas"
  },
  {
    icon: Shield,
    title: "Dados 100% seguros",
    description: "Criptografia de nível bancário e conformidade com LGPD"
  },
  {
    icon: Users,
    title: "Suporte especializado",
    description: "Equipe dedicada para te ajudar em cada passo"
  }
];

const trustIndicators = [
  {
    icon: Award,
    title: "500+ empresas confiam",
    description: "Revendas de todo Brasil"
  },
  {
    icon: CheckCircle,
    title: "99.9% de uptime",
    description: "Sistema sempre funcionando"
  },
  {
    icon: Lock,
    title: "Certificações SSL",
    description: "Segurança máxima"
  }
];

export const GuaranteeAndTrust = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-auttus-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            🛡️ Sua tranquilidade é nossa prioridade
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Investir na Auttus é uma decisão sem riscos. Veja todas as garantias que oferecemos.
          </p>
        </div>

        {/* Garantias */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-auttus-blue text-center mb-8 sm:mb-12">
            Nossas Garantias
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div 
                  key={index}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-auttus-blue to-blue-700 rounded-full p-4 sm:p-6 w-fit mx-auto mb-4 sm:mb-6 group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300">
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-lg sm:text-xl font-bold text-auttus-blue mb-3 sm:mb-4">
                      {guarantee.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicadores de Confiança */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-auttus-blue text-center mb-8 sm:mb-12">
            Por que confiar na Auttus?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="bg-auttus-orange rounded-full p-3 sm:p-4 w-fit mx-auto mb-3 sm:mb-4">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-auttus-blue mb-2 text-sm sm:text-base">
                      {indicator.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8 sm:mt-12 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-semibold text-sm sm:text-base">
              Empresa certificada e licenciada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
