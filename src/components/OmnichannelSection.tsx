
import { MessageCircle, Instagram, Calendar, Car, Phone, Inbox, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50" },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50" },
  { name: "E-mail", icon: Mail, color: "text-orange-500", bg: "bg-orange-50" }
];

const inboxMessages = [
  {
    id: 1,
    channel: "WhatsApp",
    sender: "João Silva",
    message: "Oi! Tenho interesse no Civic 2023. Ainda está disponível?",
    time: "14:23",
    icon: MessageCircle,
    color: "text-green-500",
    unread: true
  },
  {
    id: 2,
    channel: "OLX",
    sender: "Maria Santos",
    message: "Gostaria de saber mais sobre o financiamento do Corolla",
    time: "14:25",
    icon: Car,
    color: "text-purple-500",
    unread: true
  },
  {
    id: 3,
    channel: "Instagram",
    sender: "Carlos Lima",
    message: "Vi o story do HRV, posso agendar test drive?",
    time: "14:27",
    icon: Instagram,
    color: "text-pink-500",
    unread: true
  },
  {
    id: 4,
    channel: "Facebook",
    sender: "Ana Costa",
    message: "Qual o valor à vista do Fit que vocês anunciaram?",
    time: "14:29",
    icon: MessageCircle,
    color: "text-blue-500",
    unread: true
  },
  {
    id: 5,
    channel: "Webmotors",
    sender: "Pedro Oliveira",
    message: "Aceita troca por moto no Onix Plus?",
    time: "14:31",
    icon: Car,
    color: "text-red-500",
    unread: true
  },
  {
    id: 6,
    channel: "E-mail",
    sender: "Luisa Ferreira",
    message: "Solicito proposta detalhada para aquisição do Civic Touring",
    time: "14:33",
    icon: Mail,
    color: "text-orange-500",
    unread: true
  }
];

export const OmnichannelSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const inboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < inboxMessages.length) {
        setVisibleMessages(prev => [...prev, inboxMessages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        // Reset after showing all messages
        setTimeout(() => {
          setVisibleMessages([]);
          setCurrentMessageIndex(0);
        }, 3000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentMessageIndex]);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (inboxRef.current && visibleMessages.length > 0) {
      inboxRef.current.scrollTop = inboxRef.current.scrollHeight;
    }
  }, [visibleMessages]);

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

          {/* Right - Inbox Interface */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-slide-up">
              {/* Inbox Header */}
              <div className="bg-auttus-blue text-white p-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-auttus-orange rounded-full flex items-center justify-center">
                  <Inbox className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Auttus Inbox</h3>
                  <p className="text-xs opacity-90">{visibleMessages.length} mensagens não lidas</p>
                </div>
              </div>

              {/* Inbox Messages */}
              <div ref={inboxRef} className="h-80 overflow-y-auto bg-white">
                {visibleMessages.map((msg) => (
                  <div key={msg.id} className="animate-fade-in border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="p-4 flex items-start space-x-3">
                      <div className={`${msg.color} bg-gray-100 rounded-full p-2 flex-shrink-0`}>
                        <msg.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900 truncate">{msg.sender}</span>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{msg.time}</span>
                        </div>
                        <div className="text-xs text-gray-600 mb-1">
                          via {msg.channel}
                        </div>
                        <p className="text-sm text-gray-700 truncate">{msg.message}</p>
                      </div>
                      {msg.unread && (
                        <div className="w-3 h-3 bg-auttus-orange rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                  </div>
                ))}
                
                {visibleMessages.length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    <Inbox className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Inbox vazio</p>
                    <p className="text-xs text-gray-400">Aguardando mensagens...</p>
                  </div>
                )}
              </div>

              {/* Inbox Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>LetícIA organizando automaticamente</span>
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Online</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
