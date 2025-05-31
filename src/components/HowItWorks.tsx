
import { Bot, MessageCircle, FileText, Calendar, Database, Repeat, Target, Users } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Integração com canais de atendimento",
    description: "Conecte WhatsApp, OLX, Instagram, Facebook e Webmotors em uma única plataforma automatizada"
  },
  {
    icon: Bot,
    title: "Captação e resposta automática com IA",
    description: "Nossa IA responde leads instantaneamente com linguagem natural. Sem intervenção humana necessária"
  },
  {
    icon: FileText,
    title: "Qualificação automática e envio de proposta",
    description: "IA qualifica e envia propostas personalizadas automaticamente. Vendedor não precisa se preocupar"
  },
  {
    icon: Calendar,
    title: "Agendamento automático com lembrete",
    description: "Sistema agenda visitas e test drives automaticamente. Vendedor recebe apenas os compromissos confirmados"
  },
  {
    icon: Database,
    title: "CRM alimentado automaticamente pela IA",
    description: "Todas as informações são organizadas no CRM automaticamente com lead score. Zero trabalho manual"
  },
  {
    icon: Repeat,
    title: "Follow-up inteligente totalmente automatizado",
    description: "Campanhas e follow-ups acontecem sozinhos. Vendedor só é acionado para leads prontos para fechar"
  },
  {
    icon: Target,
    title: "Remarketing automático sem esforço",
    description: "Reconecta automaticamente com leads interessados. Vendedor recebe apenas leads re-engajados"
  },
  {
    icon: Users,
    title: "Nutrição automática de leads frios",
    description: "Reativa leads dormentes automaticamente. Vendedor só atende quando há interesse real de compra"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-auttus-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            Como funciona a Auttus
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            <span className="text-auttus-orange font-semibold">Seu vendedor só precisa fechar vendas.</span> A IA faz todo o resto: atende, qualifica, agenda e alimenta o CRM automaticamente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-auttus-orange text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-auttus-blue/10 rounded-lg p-2 sm:p-3 w-fit mb-3 sm:mb-4 group-hover:bg-auttus-orange/10 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-auttus-blue group-hover:text-auttus-orange transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-auttus-blue mb-2 sm:mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
