
import { Bot, MessageCircle, FileText, Calendar, Database, Repeat } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Integração com canais de atendimento",
    description: "Conecte WhatsApp, OLX, Instagram, Facebook e Webmotors em uma única plataforma"
  },
  {
    icon: Bot,
    title: "Captação e resposta automática com IA",
    description: "Nossa IA responde leads instantaneamente com linguagem natural e personalizada"
  },
  {
    icon: FileText,
    title: "Qualificação do lead e envio de proposta",
    description: "IA qualifica automaticamente e envia propostas personalizadas baseadas no perfil"
  },
  {
    icon: Calendar,
    title: "Agendamento automático com lembrete",
    description: "Sistema agenda visitas e test drives, enviando lembretes automáticos"
  },
  {
    icon: Database,
    title: "Registro completo no CRM com lead score",
    description: "Todas as informações são organizadas no CRM com pontuação inteligente"
  },
  {
    icon: Repeat,
    title: "Follow-up inteligente + campanhas automatizadas",
    description: "Campanhas segmentadas e follow-ups baseados no comportamento do lead"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-auttus-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-auttus-blue mb-4">
            Como funciona a Auttus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em apenas 6 etapas simples, transforme completamente sua operação de vendas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-auttus-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-auttus-blue/10 rounded-lg p-3 w-fit mb-4 group-hover:bg-auttus-orange/10 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-auttus-blue group-hover:text-auttus-orange transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-auttus-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Arrow */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-8">
          <div className="flex items-center space-x-4 opacity-30">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-0.5 bg-auttus-orange"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
