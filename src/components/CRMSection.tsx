
import { Users, Target, Bell, BarChart3, Calendar, Brain, Database, Zap } from "lucide-react";

const crmFeatures = [
  {
    icon: Users,
    title: "Cadastramento Automático",
    description: "Leads são automaticamente cadastrados no CRM a partir de qualquer canal de comunicação",
    metric: "100% automatizado"
  },
  {
    icon: Target,
    title: "Funis Inteligentes",
    description: "Geração automática de funis de vendas baseados no comportamento e perfil do lead",
    metric: "+300% conversão"
  },
  {
    icon: Database,
    title: "Fichas Completas",
    description: "Histórico completo de conversas, interações e dados do lead em uma única tela",
    metric: "Visão 360°"
  },
  {
    icon: Bell,
    title: "Notificações Inteligentes",
    description: "Alertas automáticos para follow-ups, oportunidades quentes e ações importantes",
    metric: "Zero leads perdidos"
  },
  {
    icon: Brain,
    title: "Lead Scoring",
    description: "Pontuação automática de leads baseada em IA para priorizar oportunidades",
    metric: "95% precisão"
  },
  {
    icon: BarChart3,
    title: "Analytics Avançados",
    description: "Relatórios detalhados de performance, conversão e ROI em tempo real",
    metric: "Insights em tempo real"
  },
  {
    icon: Calendar,
    title: "Integração Completa",
    description: "Sincronização automática com Google Calendar, WhatsApp e outros sistemas",
    metric: "20+ integrações"
  },
  {
    icon: Zap,
    title: "Automação Total",
    description: "Fluxos automatizados que eliminam 90% do trabalho manual da sua equipe",
    metric: "90% menos trabalho"
  }
];

export const CRMSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-auttus-blue/10 text-auttus-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Database className="h-4 w-4 mr-2" />
            CRM Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-auttus-blue mb-4">
            CRM que trabalha por você
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Cadastramento automático, funis inteligentes e organização completa. 
            Seu CRM se alimenta sozinho enquanto você foca em vender.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-gradient-to-br from-auttus-gray to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-auttus-blue rounded-lg flex items-center justify-center">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Dashboard CRM</h3>
                    <p className="text-sm text-gray-500">Visão geral das vendas</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Mock Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-700">247</div>
                  <div className="text-sm text-green-600">Leads Ativos</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">89%</div>
                  <div className="text-sm text-blue-600">Taxa Conversão</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-700">R$ 2.3M</div>
                  <div className="text-sm text-orange-600">Pipeline</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">156</div>
                  <div className="text-sm text-purple-600">Vendas/Mês</div>
                </div>
              </div>

              {/* Mock Lead List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">João Silva</div>
                      <div className="text-sm text-gray-500">WhatsApp • Interessado em Civic</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-green-600">Quente • 95 pts</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Maria Costa</div>
                      <div className="text-sm text-gray-500">Instagram • Corolla 2020</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-yellow-600">Morno • 67 pts</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Pedro Santos</div>
                      <div className="text-sm text-gray-500">OLX • Procura SUV</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-600">Novo • 43 pts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {crmFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer h-full">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-auttus-blue to-blue-700 rounded-lg p-3 w-fit mb-4 group-hover:from-auttus-orange group-hover:to-orange-600 transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-auttus-blue mb-3 group-hover:text-auttus-orange transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Metric */}
                  <div className="bg-gradient-to-r from-auttus-blue/10 to-blue-100 px-3 py-2 rounded-lg">
                    <div className="text-xs font-bold text-auttus-blue">{feature.metric}</div>
                  </div>

                  {/* Hover Effect Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-auttus-orange to-orange-600"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <div className="bg-gradient-to-br from-auttus-blue to-blue-800 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Pare de perder leads por desorganização
            </h3>
            <p className="text-lg sm:text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
              Com nosso CRM inteligente, você nunca mais vai esquecer de um follow-up 
              ou perder uma oportunidade de venda.
            </p>
            <button className="bg-auttus-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Quero o CRM Inteligente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
