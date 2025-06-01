
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatFlow {
  step: 'greeting' | 'collecting_name' | 'collecting_phone' | 'finalizing' | 'completed';
  userName?: string;
  userPhone?: string;
}

export const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! 👋 Sou a assistente virtual da Auttus. Que bom te ver por aqui! Como posso te chamar?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [flow, setFlow] = useState<ChatFlow>({ step: 'greeting' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simular delay de digitação
    setTimeout(() => {
      processUserInput(currentInput);
      setIsTyping(false);
    }, 1500);
  };

  const processUserInput = (input: string) => {
    switch (flow.step) {
      case 'greeting':
        const name = input.trim();
        setFlow(prev => ({ ...prev, step: 'collecting_name', userName: name }));
        addBotMessage(`Prazer em conhecer você, ${name}! 😊 

Nossa IA revolucionária automatiza vendas 24/7, qualifica leads e agenda reuniões automaticamente. Empresas como a sua aumentaram em 300% suas conversões!

Para te enviar um material exclusivo e agendar uma demonstração gratuita, qual é o seu WhatsApp?`);
        break;

      case 'collecting_name':
        const phone = input.trim();
        // Validação básica de telefone
        const phoneRegex = /^[\d\s\(\)\-\+]+$/;
        if (!phoneRegex.test(phone) || phone.length < 10) {
          addBotMessage('Ops! Parece que o número não está no formato correto. Pode tentar novamente? Por exemplo: (11) 99999-9999 ou 11999999999');
          return;
        }

        setFlow(prev => ({ ...prev, step: 'finalizing', userPhone: phone }));
        addBotMessage(`Perfeito, ${flow.userName}! 🎉

Vou te enviar agora mesmo:
✅ E-book exclusivo: "Como Automatizar Vendas com IA"
✅ Acesso ao nosso case de sucesso  
✅ Demonstração personalizada gratuita

Em alguns segundos você será redirecionado para o WhatsApp onde nosso time especializado vai te atender pessoalmente!`);

        // Redirecionar para WhatsApp após 3 segundos
        setTimeout(() => {
          const whatsappMessage = `Olá! Sou ${flow.userName} e me interessei pela automação de vendas da Auttus. Gostaria de receber o material exclusivo e agendar uma demonstração!`;
          const whatsappNumber = "5511999999999"; // Substitua pelo número real
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappUrl, '_blank');
          
          setFlow(prev => ({ ...prev, step: 'completed' }));
          addBotMessage(`Redirecionando para o WhatsApp... 

Se não abriu automaticamente, clique no botão abaixo! 👇`);
        }, 3000);
        break;

      case 'completed':
        addBotMessage('Você já foi redirecionado para o WhatsApp! Nosso time está aguardando sua mensagem. 😊');
        break;

      default:
        addBotMessage('Desculpe, algo deu errado. Vamos recomeçar? Como posso te chamar?');
        setFlow({ step: 'greeting' });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getPlaceholderText = () => {
    switch (flow.step) {
      case 'greeting':
        return 'Digite seu nome...';
      case 'collecting_name':
        return 'Digite seu WhatsApp...';
      default:
        return 'Digite sua mensagem...';
    }
  };

  const openWhatsApp = () => {
    const whatsappMessage = `Olá! Sou ${flow.userName} e me interessei pela automação de vendas da Auttus.`;
    const whatsappNumber = "5511999999999"; // Substitua pelo número real
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Botão Flutuante */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-auttus-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
            💬 Fale com nossa IA!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        </div>
      )}

      {/* Janela do Chat */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-auttus-orange to-orange-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente Auttus</h3>
                  <p className="text-sm opacity-90">🟢 Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-auttus-orange text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <Bot className="h-4 w-4 mt-1 text-auttus-orange flex-shrink-0" />
                      )}
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-sm shadow-md max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-auttus-orange" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              {flow.step === 'completed' ? (
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Abrir WhatsApp</span>
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={getPlaceholderText()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-auttus-orange text-sm"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-auttus-orange hover:bg-orange-600 p-2 rounded-xl"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
