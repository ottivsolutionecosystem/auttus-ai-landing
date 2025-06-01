
import { MessageCircle, Instagram, Car, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { OrbitalSystem } from "./OrbitalSystem";
import { InboxInterface } from "./InboxInterface";
import { OrbitalStyles } from "./OrbitalStyles";

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
            <OrbitalSystem />
          </div>

          {/* Right - Inbox Interface */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <InboxInterface visibleMessages={visibleMessages} inboxRef={inboxRef} />
          </div>
        </div>
      </div>

      <OrbitalStyles />
    </section>
  );
};
