
import { AlertTriangle, Clock, Users, TrendingDown, Bot, Target, ArrowRight, Zap } from "lucide-react";

const beforePoints = [
  {
    icon: AlertTriangle,
    title: "Perda de conversões",
    description: "87% dos leads abandonam sem resposta em 5min",
    metric: "-87%"
  },
  {
    icon: Clock,
    title: "Limitação temporal",
    description: "Atendimento restrito ao horário comercial",
    metric: "8h/dia"
  },
  {
    icon: Users,
    title: "Sobrecarga operacional",
    description: "Equipe gasta 70% do tempo em tarefas repetitivas",
    metric: "-70%"
  },
  {
    icon: TrendingDown,
    title: "Follow-up inconsistente",
    description: "Apenas 23% dos leads recebem acompanhamento",
    metric: "23%"
  }
];

const afterPoints = [
  {
    icon: Bot,
    title: "IA de conversão 24/7",
    description: "Resposta instantânea com 98% de precisão",
    metric: "+98%"
  },
  {
    icon: Zap,
    title: "Automação inteligente",
    description: "Vendas ativas em todos os canais, sempre",
    metric: "24/7"
  },
  {
    icon: Target,
    title: "Foco em resultados",
    description: "Equipe trabalha apenas com leads qualificados",
    metric: "+300%"
  },
  {
    icon: TrendingUp,
    title: "Machine Learning",
    description: "Analytics preditivo para oportunidades",
    metric: "+150%"
  }
];

export const ValueComparison = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-float blur-xl" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">IA vs Manual</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-auttus-blue to-purple-700 bg-clip-text text-transparent mb-4">
            Transformação Digital em Vendas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Compare o desempenho entre processos manuais e automação inteligente
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* VS Divider */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
            <div className="bg-gradient-to-r from-red-500 to-green-500 rounded-full p-4 shadow-2xl animate-pulse-soft">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Sem Auttus */}
            <div className="animate-slide-up">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl px-6 py-3 mb-4 shadow-lg">
                  <AlertTriangle className="h-6 w-6" />
                  <h3 className="text-xl sm:text-2xl font-bold">SEM Auttus</h3>
                </div>
                <p className="text-gray-600 font-medium">Processos manuais e limitações</p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {beforePoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div 
                      key={index}
                      className="group flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-3 flex-shrink-0 shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                            {point.title}
                          </h4>
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-lg text-xs font-bold">
                            {point.metric}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Com Auttus */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl px-6 py-3 mb-4 shadow-lg">
                  <Bot className="h-6 w-6" />
                  <h3 className="text-xl sm:text-2xl font-bold">COM Auttus</h3>
                </div>
                <p className="text-gray-600 font-medium">Automação inteligente e IA</p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {afterPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div 
                      key={index}
                      className="group flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-200 hover:shadow-green-500/10 animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 flex-shrink-0 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 group-hover:animate-glow">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                            {point.title}
                          </h4>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-bold">
                            {point.metric}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-auttus-blue to-purple-700 text-white rounded-2xl p-6 sm:p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              🚀 Pronto para a transformação?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Acelere suas vendas com inteligência artificial. Resultados em 24h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
