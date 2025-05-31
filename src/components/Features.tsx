
import { Bot, Database, Repeat, Phone, Mail, Calendar } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "IA SDR treinada com linguagem natural",
    description: "Inteligência artificial que conversa como um vendedor experiente, entende contexto e responde de forma humana e persuasiva."
  },
  {
    icon: Database,
    title: "CRM com ficha inteligente e notificações",
    description: "Sistema completo que organiza leads, histórico de conversas e dispara notificações inteligentes para sua equipe."
  },
  {
    icon: Repeat,
    title: "Follow-up automático com lógica condicional",
    description: "Campanhas que se adaptam ao comportamento do lead, enviando a mensagem certa no momento ideal."
  },
  {
    icon: Phone,
    title: "Ligações automáticas com voz natural",
    description: "Sistema de voz AI que liga para leads, apresenta produtos e agenda visitas com qualidade humana."
  },
  {
    icon: Mail,
    title: "Disparo de campanhas segmentadas",
    description: "Envie campanhas personalizadas baseadas no perfil, interesse e estágio do funil de cada lead."
  },
  {
    icon: Calendar,
    title: "Integração com Google Calendar",
    description: "Sincronização automática de agendamentos, lembretes e disponibilidade da sua equipe comercial."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-auttus-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-auttus-blue mb-4">
            Funcionalidades que transformam vendas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada funcionalidade foi pensada para maximizar conversões e otimizar seu tempo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 cursor-pointer">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-auttus-blue to-blue-700 rounded-lg p-4 w-fit mb-6 group-hover:from-auttus-orange group-hover:to-orange-600 transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-auttus-blue mb-4 group-hover:text-auttus-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-auttus-orange to-orange-600"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
