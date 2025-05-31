
import { Bot, User, MessageCircle, CheckCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroDashboard = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const chatFlow = [
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Oi, vi o Civic 2024 no seu site. Ainda está disponível?',
      timestamp: '14:32'
    },
    {
      type: 'bot',
      message: 'Olá João! Sim, o Honda Civic 2024 está disponível. É um excelente modelo! Posso te fazer algumas perguntas para encontrar a melhor opção para você?',
      timestamp: '14:32'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Claro! Qual o preço?',
      timestamp: '14:33'
    },
    {
      type: 'bot',
      message: 'O Civic 2024 está a partir de R$ 145.000. Para te dar um valor mais preciso, me conta: você tem veículo para troca?',
      timestamp: '14:33'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Tenho sim, um Corolla 2020',
      timestamp: '14:34'
    },
    {
      type: 'bot',
      message: 'Perfeito! Com a troca do seu Corolla 2020, conseguimos uma condição especial. Que tal agendarmos um test-drive para você conhecer o veículo? Tenho horário disponível amanhã às 14h ou 16h.',
      timestamp: '14:34'
    },
    {
      type: 'user',
      sender: 'João Silva',
      platform: 'WhatsApp',
      message: 'Amanhã às 14h seria perfeito!',
      timestamp: '14:35'
    },
    {
      type: 'system',
      message: '✅ Lead qualificado e agendamento confirmado',
      status: 'qualified'
    }
  ];

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
      <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transition-shadow duration-300 max-w-md sm:max-w-lg mx-auto lg:max-w-none min-h-[400px] lg:h-auto lg:min-h-[400px]">
        
        {/* Chat Header */}
        <div className="bg-auttus-gray rounded-xl p-4 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-auttus-blue text-sm sm:text-base lg:text-lg">
                IA Auttus - Atendimento Ativo
              </h3>
            </div>
            <div className="text-xs text-gray-500">
              WhatsApp
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-3 h-64 lg:h-72 overflow-y-auto pb-4">
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
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                )}
                
                {msg.type === 'bot' && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-lg max-w-[80%] shadow-sm">
                      <div className="flex items-center space-x-2 mb-1">
                        <Bot className="h-3 w-3 text-auttus-orange" />
                        <span className="text-xs font-medium text-auttus-blue">IA Auttus</span>
                        <span className="text-xs text-gray-500">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-800">{msg.message}</p>
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
                    <span className="text-xs font-medium text-auttus-blue">IA Auttus</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="mt-4 sm:mt-6 text-center h-12 flex items-center justify-center">
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Tempo médio: 2min</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Taxa qualificação: 85%</span>
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
