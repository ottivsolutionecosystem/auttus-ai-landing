
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou a IA da Auttus. Como posso te ajudar hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular resposta da IA
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('preço') || input.includes('valor') || input.includes('custo')) {
      return 'Nossos planos começam a partir de R$ 97/mês. Gostaria de agendar uma demonstração gratuita para ver como a Auttus pode transformar suas vendas?';
    }
    
    if (input.includes('demo') || input.includes('demonstração')) {
      return 'Perfeito! Nossa demonstração dura apenas 15 minutos e você verá como automatizar suas vendas. Clique no botão "Agende sua demonstração" para escolher o melhor horário.';
    }
    
    if (input.includes('whatsapp') || input.includes('instagram') || input.includes('facebook')) {
      return 'Sim! A Auttus integra com WhatsApp, Instagram, Facebook, site e muito mais. Centralizamos todos seus atendimentos em uma única plataforma omnichannel.';
    }
    
    if (input.includes('funciona') || input.includes('como')) {
      return 'A Auttus funciona assim: conectamos em seus canais, nossa IA atende e qualifica leads 24/7, agenda reuniões automaticamente e você só precisa focar em fechar vendas!';
    }
    
    if (input.includes('ia') || input.includes('inteligência artificial')) {
      return 'Nossa IA é treinada especificamente para vendas. Ela entende o contexto, qualifica leads, responde dúvidas e até agenda reuniões - tudo no seu tom de voz!';
    }
    
    return 'Entendo sua dúvida! A Auttus automatiza todo o processo de vendas com IA. Quer agendar uma demo rápida de 15 minutos para ver na prática como funciona?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-auttus-orange hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window - Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="w-full h-full max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-md flex flex-col">
            {/* Header */}
            <div className="bg-auttus-orange bg-opacity-90 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold text-xl">IA Auttus</h3>
                  <p className="text-sm opacity-90">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-auttus-orange bg-opacity-90 text-white'
                        : 'bg-gray-100 bg-opacity-90 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {message.sender === 'bot' && (
                        <Bot className="h-6 w-6 mt-1 text-auttus-orange" />
                      )}
                      {message.sender === 'user' && (
                        <User className="h-6 w-6 mt-1" />
                      )}
                      <p className="text-lg">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 bg-opacity-90 text-gray-800 p-4 rounded-lg max-w-[70%]">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-6 w-6 text-auttus-orange" />
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-8 border-t border-gray-200 border-opacity-50 bg-white bg-opacity-50">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-auttus-orange text-lg bg-white bg-opacity-80"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-auttus-orange hover:bg-orange-600 p-4 text-lg"
                >
                  <Send className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
