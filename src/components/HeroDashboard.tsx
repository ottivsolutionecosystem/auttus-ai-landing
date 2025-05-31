
import { Bot, Zap, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroDashboard = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setActiveMessage(prev => (prev + 1) % 3);
        setIsTyping(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:w-1/2 relative animate-slide-up lg:pl-8 xl:pl-12">
      <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform rotate-1 hover:rotate-0 transition-all duration-500 max-w-md sm:max-w-lg mx-auto lg:max-w-none group hover:shadow-auttus-orange/10 hover:shadow-3xl">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-auttus-orange/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        {/* Dashboard Mockup */}
        <div className="bg-auttus-gray rounded-xl p-4 sm:p-6 relative z-10">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="font-semibold text-auttus-blue text-sm sm:text-base lg:text-lg group-hover:text-auttus-orange transition-colors duration-300">
              Auttus Dashboard
            </h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-3 sm:space-y-4">
            <div className={`flex items-center space-x-3 p-3 sm:p-4 bg-green-50 rounded-xl transition-all duration-500 transform ${activeMessage === 0 ? 'scale-105 bg-green-100 shadow-lg' : 'hover:scale-102'} cursor-pointer group/message`}>
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0 group-hover/message:animate-bounce" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base group-hover/message:text-green-700 transition-colors duration-300">
                  WhatsApp - João Silva
                </div>
                <div className="text-xs sm:text-sm text-gray-600 group-hover/message:text-gray-700 transition-colors duration-300">
                  IA: "Oi João! Vi seu interesse no Civic. Posso agendar um test-drive?"
                </div>
              </div>
              <Bot className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0 group-hover/message:animate-wiggle" />
            </div>
            
            <div className={`flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-xl transition-all duration-500 transform ${activeMessage === 1 ? 'scale-105 bg-blue-100 shadow-lg' : 'hover:scale-102'} cursor-pointer group/message`}>
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600 flex-shrink-0 group-hover/message:animate-bounce" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base group-hover/message:text-blue-700 transition-colors duration-300">
                  OLX - Maria Santos
                </div>
                <div className="text-xs sm:text-sm text-gray-600 group-hover/message:text-gray-700 transition-colors duration-300">
                  IA respondeu e qualificou lead automaticamente
                </div>
              </div>
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0 group-hover/message:animate-pulse" />
            </div>
            
            <div className={`flex items-center space-x-3 p-3 sm:p-4 bg-purple-50 rounded-xl transition-all duration-500 transform ${activeMessage === 2 ? 'scale-105 bg-purple-100 shadow-lg' : 'hover:scale-102'} cursor-pointer group/message`}>
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600 flex-shrink-0 group-hover/message:animate-bounce" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base group-hover/message:text-purple-700 transition-colors duration-300">
                  Instagram - Pedro Costa
                </div>
                <div className="text-xs sm:text-sm text-gray-600 group-hover/message:text-gray-700 transition-colors duration-300">
                  Agendamento confirmado para amanhã 14h
                </div>
              </div>
              <Bot className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0 group-hover/message:animate-wiggle" />
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-xl animate-fade-in">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-gray-500">IA está digitando...</span>
              </div>
            )}
          </div>

          {/* Status */}
          <div className="mt-4 sm:mt-6 text-center">
            <span className="text-xs sm:text-sm text-green-600 bg-green-100 px-3 py-2 rounded-lg font-medium animate-pulse-soft hover:animate-heart-beat cursor-pointer transition-all duration-300 hover:shadow-lg">
              ✓ Sistema ativo - 3 leads respondidos hoje
            </span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements with enhanced animations */}
      <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-auttus-orange text-white p-3 sm:p-4 rounded-full animate-float shadow-lg group hover:animate-heart-beat cursor-pointer">
        <Bot className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 group-hover:animate-wiggle" />
        <div className="absolute inset-0 bg-auttus-orange rounded-full animate-ping opacity-20"></div>
      </div>
      <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-green-500 text-white p-3 sm:p-4 rounded-full animate-float shadow-lg group hover:animate-heart-beat cursor-pointer" style={{ animationDelay: '1s' }}>
        <Zap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 group-hover:animate-pulse" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  );
};
