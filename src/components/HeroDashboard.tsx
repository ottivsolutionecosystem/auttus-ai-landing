
import { Bot, User, MessageCircle, CheckCircle, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const HeroDashboard = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  };

  useEffect(() => {
    if (visibleMessages.length > 0) {
      // Pequeno delay para garantir que a mensagem foi renderizada
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < chatFlow.length) {
        setIsTyping(true);
        
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, chatFlow[currentMessageIndex]]);
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(false);
        }, chatFlow[currentMessageIndex].type === 'bot' ? 2000 : 1000);
      } else {
        // Reiniciar o ciclo após 3 segundos
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
        
        {/* Chat Header */}
        <div className="bg-auttus-gray rounded-xl p-4 sm:p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-auttus-blue text-sm sm:text-base lg:text-lg">
                LetícIA - Atendimento Ativo
              </h3>
            </div>
            <div className="text-xs text-gray-500">
              WhatsApp
            </div>
          </div>
          
          {/* Chat Messages - Área com scroll */}
          <div className="flex-1 overflow-y-auto space-y-3 pb-4 scroll-smooth">
            {visibleMessages.map((msg, index) => (
              <div key={index} className="animate-fade-in">
                {msg.type === 'user' && (
                  <div className="flex justify-end">
                    <div className="bg-green-500 text-white p-3 rounded-lg max-w-[80%] shadow-sm">
                      <div className="flex items-center space-x-2 mb-1">
                        <User className="h-3 w-3" />
                        <span className="text-xs font-medium">{msg.sender}</span>
                        <span className="text-xs opacity-75">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                    </div>
                  </div>
                )}
                
                {msg.type === 'bot' && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-lg max-w-[80%] shadow-sm">
                      <div className="flex items-center space-x-2 mb-1">
                        <Bot className="h-3 w-3 text-auttus-orange" />
                        <span className="text-xs font-medium text-auttus-blue">LetícIA</span>
                        <span className="text-xs text-gray-500">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-800 whitespace-pre-line">{msg.message}</p>
                    </div>
                  </div>
                )}
                
                {msg.type === 'system' && (
                  <div className="flex justify-center">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs font-medium flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>{msg.message}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <Bot className="h-3 w-3 text-auttus-orange" />
                    <span className="text-xs font-medium text-auttus-blue">LetícIA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Elemento invisível para marcar o final das mensagens */}
            <div ref={messagesEndRef} />
          </div>

          {/* Status Bar */}
          <div className="mt-4 sm:mt-6 text-center h-12 flex items-center justify-center">
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Qualificação: 9min</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Lead agendado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-auttus-orange text-white p-3 sm:p-4 rounded-full shadow-lg animate-pulse">
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
      <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg animate-bounce">
        <Bot className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
    </div>
  );
};
