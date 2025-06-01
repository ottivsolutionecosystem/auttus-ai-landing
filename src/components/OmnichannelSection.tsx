import { MessageCircle, Instagram, Calendar, Car, Phone, Inbox, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50", orbitRadius: 150, angle: 0, speed: 20 },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50", orbitRadius: 200, angle: 60, speed: 25 },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50", orbitRadius: 180, angle: 120, speed: 22 },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50", orbitRadius: 230, angle: 180, speed: 28 },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50", orbitRadius: 160, angle: 240, speed: 18 },
  { name: "E-mail", icon: Mail, color: "text-orange-500", bg: "bg-orange-50", orbitRadius: 210, angle: 300, speed: 26 }
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
          {/* Left - Orbital System */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center">
            <div className="relative w-[500px] h-[500px] lg:w-[550px] lg:h-[550px]">
              {/* Central Auttus Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-auttus-blue rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
                  <img 
                    src="/lovable-uploads/8d1a3a7d-2eb5-454e-8e09-956437a46655.png" 
                    alt="AUTTUS Logo" 
                    className="h-12 w-auto lg:h-14 filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Orbital Paths (subtle guides) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[300px] h-[300px] border border-gray-200 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-gray-200 rounded-full opacity-15"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-gray-200 rounded-full opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] border border-gray-200 rounded-full opacity-5"></div>
              </div>

              {/* Orbiting Channel Icons */}
              {channels.map((channel, index) => {
                const IconComponent = channel.icon;
                const orbitStyle = {
                  animation: `orbit-${index} ${channel.speed}s linear infinite`,
                  transformOrigin: `${250}px ${250}px`, // Center point
                };
                
                return (
                  <div 
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      ...orbitStyle,
                      transform: `translate(-50%, -50%) rotate(${channel.angle}deg) translateX(${channel.orbitRadius}px) rotate(-${channel.angle}deg)`,
                      willChange: 'transform'
                    }}
                  >
                    <div className={`${channel.bg} rounded-xl p-3 lg:p-4 text-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange shadow-lg hover:shadow-xl group`}>
                      <IconComponent className={`h-6 w-6 lg:h-8 lg:w-8 ${channel.color} mx-auto mb-1 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="font-semibold text-gray-800 text-xs lg:text-sm">{channel.name}</h3>
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

      <style jsx>{`
        @keyframes orbit-0 {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        @keyframes orbit-1 {
          from { transform: translate(-50%, -50%) rotate(60deg) translateX(200px) rotate(-60deg); }
          to { transform: translate(-50%, -50%) rotate(420deg) translateX(200px) rotate(-420deg); }
        }
        @keyframes orbit-2 {
          from { transform: translate(-50%, -50%) rotate(120deg) translateX(180px) rotate(-120deg); }
          to { transform: translate(-50%, -50%) rotate(480deg) translateX(180px) rotate(-480deg); }
        }
        @keyframes orbit-3 {
          from { transform: translate(-50%, -50%) rotate(180deg) translateX(230px) rotate(-180deg); }
          to { transform: translate(-50%, -50%) rotate(540deg) translateX(230px) rotate(-540deg); }
        }
        @keyframes orbit-4 {
          from { transform: translate(-50%, -50%) rotate(240deg) translateX(160px) rotate(-240deg); }
          to { transform: translate(-50%, -50%) rotate(600deg) translateX(160px) rotate(-600deg); }
        }
        @keyframes orbit-5 {
          from { transform: translate(-50%, -50%) rotate(300deg) translateX(210px) rotate(-300deg); }
          to { transform: translate(-50%, -50%) rotate(660deg) translateX(210px) rotate(-660deg); }
        }
      `}</style>
    </section>
  );
};
