
import { Bot, Zap, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [showTyping, setShowTyping] = useState(false);

  const messages = [
    {
      platform: "WhatsApp - João Silva",
      text: "IA: \"Oi João! Vi seu interesse no Civic. Posso agendar um test-drive?\"",
      color: "green",
      icon: Bot
    },
    {
      platform: "OLX - Maria Santos", 
      text: "IA respondeu e qualificou lead automaticamente",
      color: "blue",
      icon: Zap
    },
    {
      platform: "Instagram - Pedro Costa",
      text: "Agendamento confirmado para amanhã 14h",
      color: "purple", 
      icon: Bot
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (messages.length + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeStep < messages.length) {
      setShowTyping(true);
      setTypingText("");
      
      const message = messages[activeStep].text;
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= message.length) {
          setTypingText(message.slice(0, currentIndex));
          currentIndex++;
        } else {
          setShowTyping(false);
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [activeStep]);

  return (
    <div className="w-full lg:w-1/2 relative lg:pl-8 xl:pl-12 flex-shrink-0">
      <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transition-shadow duration-300 max-w-md sm:max-w-lg mx-auto lg:max-w-none h-auto min-h-[400px]">
        
        {/* Dashboard Mockup */}
        <div className="bg-auttus-gray rounded-xl p-4 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="font-semibold text-auttus-blue text-sm sm:text-base lg:text-lg">
              Auttus Dashboard
            </h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Chat Messages - altura fixa para evitar mudanças de layout */}
          <div className="space-y-3 sm:space-y-4 h-72 overflow-hidden">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 p-3 sm:p-4 rounded-xl transition-all duration-500 ${
                  index === activeStep 
                    ? `bg-${message.color}-100 border-l-4 border-${message.color}-500` 
                    : index < activeStep 
                      ? `bg-${message.color}-50 opacity-80` 
                      : 'bg-gray-50 opacity-40'
                }`}
              >
                <MessageCircle className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0 ${
                  index === activeStep ? `text-${message.color}-600 animate-pulse` : `text-${message.color}-400`
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm sm:text-base">
                    {message.platform}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 h-8 flex items-center">
                    {index === activeStep && showTyping ? (
                      <span>
                        {typingText}
                        <span className="animate-pulse">|</span>
                      </span>
                    ) : (
                      message.text
                    )}
                  </div>
                </div>
                <message.icon className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0 ${
                  index === activeStep ? 'text-auttus-orange animate-bounce' : 'text-auttus-orange opacity-60'
                }`} />
              </div>
            ))}
          </div>

          {/* Status - posição fixa */}
          <div className="mt-4 sm:mt-6 text-center h-12 flex items-center justify-center">
            <span className={`text-xs sm:text-sm px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeStep === messages.length 
                ? 'text-green-600 bg-green-100 animate-pulse' 
                : 'text-gray-500 bg-gray-100'
            }`}>
              {activeStep === messages.length ? (
                <>✓ Sistema ativo - {activeStep} leads respondidos hoje</>
              ) : (
                <>⚡ Processando lead {activeStep + 1}...</>
              )}
            </span>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos com posicionamento absoluto fixo */}
      <div className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-auttus-orange text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 ${
        activeStep < messages.length ? 'animate-pulse' : 'opacity-90'
      }`}>
        <Bot className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
      <div className={`absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 ${
        activeStep === messages.length ? 'animate-bounce' : 'opacity-90'
      }`}>
        <Zap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
    </div>
  );
};
