
import { MessageCircle, Instagram, Calendar, Car } from "lucide-react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50" },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50" }
];

export const OmnichannelSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-auttus-blue mb-4">
            Omnichannel Real
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atenda todos os seus leads em um único lugar. Mensagens organizadas, 
            histórico unificado e IA que cuida de tudo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left - Channel Icons */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-6">
              {channels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <div 
                    key={index}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`${channel.bg} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange`}>
                      <IconComponent className={`h-12 w-12 ${channel.color} mx-auto mb-3`} />
                      <h3 className="font-semibold text-gray-800">{channel.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-auttus-gray rounded-2xl p-8 shadow-lg animate-slide-up">
              <h3 className="text-2xl font-bold text-auttus-blue mb-6">
                Linha do tempo de atendimento
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="bg-green-500 rounded-full p-2">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">09:15 - WhatsApp</div>
                    <div className="font-medium">Lead pergunta sobre Civic 2023</div>
                    <div className="text-sm text-auttus-orange">IA respondeu automaticamente</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="bg-purple-500 rounded-full p-2">
                    <Car className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">09:18 - OLX</div>
                    <div className="font-medium">Mesmo lead continua conversa</div>
                    <div className="text-sm text-auttus-orange">Histórico unificado mantido</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-auttus-orange rounded-full p-2">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">09:22 - Sistema</div>
                    <div className="font-medium">Test drive agendado</div>
                    <div className="text-sm text-auttus-orange">Lembrete automático enviado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
