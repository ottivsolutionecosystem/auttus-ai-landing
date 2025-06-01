import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatHeader } from "./ChatHeader";
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

  // Função de scroll suave que não interfere com a página
  const scrollToBottomSmooth = () => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      const targetScroll = container.scrollHeight - container.clientHeight;
      
      // Usar requestAnimationFrame para scroll mais suave
      const smoothScroll = () => {
        const currentScroll = container.scrollTop;
        const distance = targetScroll - currentScroll;
        
        if (Math.abs(distance) > 1) {
          container.scrollTop = currentScroll + distance * 0.15;
          requestAnimationFrame(smoothScroll);
        } else {
          container.scrollTop = targetScroll;
        }
      };
      
      requestAnimationFrame(smoothScroll);
    }
  };

  // Effect para scroll automático quando novas mensagens aparecem
  useEffect(() => {
    if (visibleMessages.length > 0) {
      // Delay para permitir que a mensagem seja renderizada
      const scrollTimeout = setTimeout(() => {
        scrollToBottomSmooth();
      }, 150);
      
      return () => clearTimeout(scrollTimeout);
    }
  }, [visibleMessages.length]);

  // Effect para scroll quando indicador de digitação aparece
  useEffect(() => {
    if (isTyping || isUserTyping) {
      const scrollTimeout = setTimeout(() => {
        scrollToBottomSmooth();
      }, 100);
      
      return () => clearTimeout(scrollTimeout);
    }
  }, [isTyping, isUserTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < chatFlow.length) {
        const currentMessage = chatFlow[currentMessageIndex];
        
        if (currentMessage.type === 'user') {
          // Mostrar que João está digitando
          setIsUserTyping(true);
          
          setTimeout(() => {
            setVisibleMessages(prev => [...prev, currentMessage]);
            setCurrentMessageIndex(prev => prev + 1);
            setIsUserTyping(false);
          }, 1500); // João digita por 1.5 segundos
        } else {
          // Mensagem do bot ou sistema
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
    <div className="w-full lg:w-1/2 relative lg:pl-8 xl:pl-12 flex-shrink-0 mt-8 lg:mt-0">
      <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transition-shadow duration-300 max-w-md sm:max-w-lg mx-auto lg:max-w-none h-[500px] lg:h-[600px]">
        <div className="bg-auttus-gray rounded-xl p-4 sm:p-6 h-full flex flex-col">
          <ChatHeader />
          
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto space-y-3 pb-4"
            style={{ 
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'auto' // Removemos smooth para evitar conflitos
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
