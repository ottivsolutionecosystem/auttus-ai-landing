
import { X, Check, Clock, Bot, TrendingUp, Users } from "lucide-react";

const beforePoints = [
  {
    icon: X,
    title: "Perda de leads",
    description: "Clientes desistem quando não respondem rápido"
  },
  {
    icon: Clock,
    title: "Atendimento limitado",
    description: "Só funciona no horário comercial"
  },
  {
    icon: Users,
    title: "Equipe sobrecarregada",
    description: "Vendedores gastam tempo com tarefas repetitivas"
  },
  {
    icon: X,
    title: "Follow-up manual",
    description: "Esquece de acompanhar leads importantes"
  }
];

const afterPoints = [
  {
    icon: Check,
    title: "Captura 100% dos leads",
    description: "Resposta automática em segundos"
  },
  {
    icon: Bot,
    title: "Vendas 24/7",
    description: "IA trabalha enquanto você dorme"
  },
  {
    icon: TrendingUp,
    title: "Equipe focada em fechar",
    description: "Vendedores só lidam com leads qualificados"
  },
  {
    icon: Check,
    title: "Follow-up inteligente",
    description: "Nunca mais perde uma oportunidade"
  }
];

export const ValueComparison = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            📊 Antes da Auttus vs Com a Auttus
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Veja a transformação que a Auttus traz para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Antes */}
          <div className="animate-slide-up">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">
                😤 ANTES da Auttus
              </h3>
              <p className="text-gray-600">Problemas que todo vendedor enfrenta</p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {beforePoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-red-50 rounded-xl border border-red-100 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-red-500 rounded-lg p-2 sm:p-3 flex-shrink-0">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Depois */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                🚀 COM a Auttus
              </h3>
              <p className="text-gray-600">Resultados que você vai alcançar</p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {afterPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-green-50 rounded-xl border border-green-100 animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="bg-green-500 rounded-lg p-2 sm:p-3 flex-shrink-0">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
