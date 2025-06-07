import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatTypingIndicator } from "./ChatTypingIndicator";
import { ChatStatusBar } from "./ChatStatusBar";
import { FloatingIcons } from "./FloatingIcons";
import { UserTypingIndicator } from "./UserTypingIndicator";

export const HeroDashboard = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const chatFlow = [
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Oi! Esse carro aqui que vocês anunciaram tá disponível ainda? www.auttus.io/corolla2020',
      timestamp: '09:15'
    },
    {
      type: 'bot',
      message: 'Bom dia! 😊\nDeixa eu confirmar aqui rapidinho pra você se ele ainda tá disponível, só um segundinho… 👀',
      timestamp: '09:15'
    },
    {
      type: 'bot',
      message: 'Tá disponível sim!\nTemos 3 interessados nele, mas ainda ninguém fechou.\nVocê quer vir dar uma olhada pessoalmente?',
      timestamp: '09:16'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Quero sim! Tô pensando em dar meu onix na troca e financiar o restante.',
      timestamp: '09:17'
    },
    {
      type: 'bot',
      message: 'Qual o ano e o modelo do seu onix?',
      timestamp: '09:17'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: '2020 é o Plus.',
      timestamp: '09:18'
    },
    {
      type: 'bot',
      message: 'Ótimo! Antes da sua visita, posso adiantar aqui uma pré-análise de crédito.\nEla é bem simples e não interfere no seu score, tá?\n\nMe passa seu CPF rapidinho só pra gente fazer a consulta?',
      timestamp: '09:18'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: '111.555.666-33',
      timestamp: '09:19'
    },
    {
      type: 'bot',
      message: 'Humm… nessa análise aqui o sistema não liberou o crédito, mas isso acontece às vezes.\nVocê teria outra pessoa, um familiar, amigo, pra gente simular?',
      timestamp: '09:20'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Pode ser no da minha esposa, é 222.333.444-55',
      timestamp: '09:21'
    },
    {
      type: 'bot',
      message: 'Agora sim! ✅\nAqui consta crédito pré-aprovado. Isso já ajuda bastante pra agilizar sua visita!\nPerfeito, já anotei tudo aqui 📝\n\nAgora, o ideal é você vir até a loja.\nLá o vendedor avalia seu carro direitinho, conversa com você e juntos vão montar a melhor parcela e as melhores condições de financiamento, na hora.\n\nPodemos agendar um horário?',
      timestamp: '09:22'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Pode sim.',
      timestamp: '09:23'
    },
    {
      type: 'bot',
      message: 'Tenho horários disponíveis amanhã:\n⏰ 10h, 14h ou 16h\nQual fica melhor pra você?',
      timestamp: '09:23'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: '14h.',
      timestamp: '09:24'
    },
    {
      type: 'bot',
      message: 'Agendado!\n📅 Amanhã às 14h\n📍 Loja da Auttus – Av. 26 de Agosto, Campo Grande – MS\n\nPode vir tranquilo, vamos te receber com tudo pronto.\nE 30 min antes eu te lembro aqui, combinado?',
      timestamp: '09:24'
    },
    {
      type: 'system',
      message: '✅ Lead qualificado e agendamento confirmado',
      status: 'qualified'
    }
  ];

  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (visibleMessages.length > 0) {
      requestAnimationFrame(() => {
        scrollChatToBottom();
      });
    }
  }, [visibleMessages.length]);

  useEffect(() => {
    if (isTyping || isUserTyping) {
      requestAnimationFrame(() => {
        scrollChatToBottom();
      });
    }
  }, [isTyping, isUserTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < chatFlow.length) {
        const currentMessage = chatFlow[currentMessageIndex];
        
        if (currentMessage.type === 'user') {
          setIsUserTyping(true);
          
          setTimeout(() => {
            setVisibleMessages(prev => [...prev, currentMessage]);
            setCurrentMessageIndex(prev => prev + 1);
            setIsUserTyping(false);
          }, 1500);
        } else {
          setIsTyping(true);
          
          setTimeout(() => {
            setVisibleMessages(prev => [...prev, currentMessage]);
            setCurrentMessageIndex(prev => prev + 1);
            setIsTyping(false);
          }, currentMessage.type === 'bot' ? 2000 : 1000);
        }
      } else {
        setTimeout(() => {
          setVisibleMessages([]);
          setCurrentMessageIndex(0);
        }, 3000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMessageIndex]);

  return (
    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end order-2 lg:order-2">
      <div className="relative bg-white rounded-2xl shadow-xl p-4 lg:p-6 xl:p-8 transition-shadow duration-300 w-full max-w-md lg:max-w-lg xl:max-w-xl h-[500px] lg:h-[550px] xl:h-[600px]">
        <div className="bg-auttus-gray rounded-xl p-4 lg:p-6 h-full flex flex-col">
          <div className="bg-gradient-to-r from-auttus-orange to-orange-600 text-white p-4 flex items-center justify-between rounded-t-xl -m-4 lg:-m-6 mb-4 lg:mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-base">Assistente Auttus</h3>
                <p className="text-sm opacity-90">🟢 Online agora</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto space-y-3 pb-4 isolated-scroll"
            style={{ 
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {visibleMessages.map((msg, index) => (
              <div key={index} className="animate-fade-in">
                <ChatMessage message={msg} />
              </div>
            ))}
            
            {isUserTyping && <UserTypingIndicator />}
            {isTyping && <ChatTypingIndicator />}
            
            <div ref={messagesEndRef} />
          </div>

          <ChatStatusBar />
        </div>
      </div>
      
      <FloatingIcons />
    </div>
  );
};
