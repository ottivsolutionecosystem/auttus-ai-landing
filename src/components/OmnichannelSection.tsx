
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            Omnichannel Real
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Atenda todos os seus leads em um único lugar. Mensagens organizadas, 
            histórico unificado e IA que cuida de tudo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left - Channel Icons */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto lg:max-w-none">
              {channels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <div 
                    key={index}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`${channel.bg} rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange`}>
                      <IconComponent className={`h-8 w-8 sm:h-12 sm:w-12 ${channel.color} mx-auto mb-2 sm:mb-3`} />
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{channel.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="bg-auttus-gray rounded-2xl p-6 sm:p-8 shadow-lg animate-slide-up">
              <h3 className="text-xl sm:text-2xl font-bold text-auttus-blue mb-4 sm:mb-6">
                Linha do tempo de atendimento
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="bg-green-500 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-1">
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-500">09:15 - WhatsApp</div>
                    <div className="font-medium text-sm sm:text-base">Lead pergunta sobre Civic 2023</div>
                    <div className="text-xs sm:text-sm text-auttus-orange">IA respondeu automaticamente</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="bg-purple-500 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-1">
                    <Car className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-500">09:18 - OLX</div>
                    <div className="font-medium text-sm sm:text-base">Mesmo lead continua conversa</div>
                    <div className="text-xs sm:text-sm text-auttus-orange">Histórico unificado mantido</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-auttus-orange rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-500">09:22 - Sistema</div>
                    <div className="font-medium text-sm sm:text-base">Test drive agendado</div>
                    <div className="text-xs sm:text-sm text-auttus-orange">Lembrete automático enviado</div>
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
