
import { Bot, Zap, MessageCircle } from "lucide-react";

export const HeroDashboard = () => {
  return (
    <div className="w-full lg:w-1/2 relative animate-slide-up lg:pl-8 xl:pl-12">
      <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-500 max-w-md sm:max-w-lg mx-auto lg:max-w-none group">
        
        {/* Dashboard Mockup */}
        <div className="bg-auttus-gray rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="font-semibold text-auttus-blue text-sm sm:text-base lg:text-lg">
              Auttus Dashboard
            </h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3 p-3 sm:p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 cursor-pointer">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base">
                  WhatsApp - João Silva
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  IA: "Oi João! Vi seu interesse no Civic. Posso agendar um test-drive?"
                </div>
              </div>
              <Bot className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0" />
            </div>
            
            <div className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 cursor-pointer">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base">
                  OLX - Maria Santos
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  IA respondeu e qualificou lead automaticamente
                </div>
              </div>
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0" />
            </div>
            
            <div className="flex items-center space-x-3 p-3 sm:p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300 cursor-pointer">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base">
                  Instagram - Pedro Costa
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Agendamento confirmado para amanhã 14h
                </div>
              </div>
              <Bot className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-auttus-orange flex-shrink-0" />
            </div>
          </div>

          {/* Status */}
          <div className="mt-4 sm:mt-6 text-center">
            <span className="text-xs sm:text-sm text-green-600 bg-green-100 px-3 py-2 rounded-lg font-medium">
              ✓ Sistema ativo - 3 leads respondidos hoje
            </span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-auttus-orange text-white p-3 sm:p-4 rounded-full animate-float shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
        <Bot className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
      <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-green-500 text-white p-3 sm:p-4 rounded-full animate-float shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '1s' }}>
        <Zap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
    </div>
  );
};
