
import { Play, MessageCircle, FileText, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Demo = () => {
  return (
    <section id="demo-section" className="py-12 sm:py-16 lg:py-20 bg-auttus-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            Veja a Auttus em ação
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Demonstração completa: da captação do lead até o fechamento da venda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8 lg:gap-12">
          {/* Video Placeholder */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-auttus-blue to-blue-900 rounded-2xl p-6 sm:p-8 shadow-2xl animate-slide-up">
              <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4">
                <Button 
                  size="lg" 
                  className="bg-auttus-orange hover:bg-orange-600 text-white rounded-full p-4 sm:p-6 transform hover:scale-110 transition-all duration-300"
                >
                  <Play className="h-6 w-6 sm:h-8 sm:w-8" />
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Demo Interativa - 3 minutos
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">
                  Veja como um lead se transforma em venda automaticamente
                </p>
              </div>
            </div>
          </div>

          {/* Demo Steps */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-auttus-orange rounded-full p-2 sm:p-3 flex-shrink-0 mt-1">
                  <MessageCircle className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-auttus-blue mb-1 sm:mb-2">
                    1. Lead chega pelo WhatsApp
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Cliente interessado em um veículo envia mensagem perguntando sobre disponibilidade e preço
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-auttus-orange rounded-full p-2 sm:p-3 flex-shrink-0 mt-1">
                  <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-auttus-blue mb-1 sm:mb-2">
                    2. IA qualifica e envia proposta
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Nossa IA entende a necessidade, qualifica o lead e envia uma proposta personalizada em segundos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-auttus-orange rounded-full p-2 sm:p-3 flex-shrink-0 mt-1">
                  <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-auttus-blue mb-1 sm:mb-2">
                    3. Agendamento automático
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Cliente interessado? A IA agenda automaticamente um test drive na melhor data disponível
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="bg-green-500 rounded-full p-2 sm:p-3 flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-auttus-blue mb-1 sm:mb-2">
                    4. Venda concluída
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Com follow-up inteligente e lembretes automáticos, a conversão de leads aumenta drasticamente
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-auttus-blue hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5567997160784?text=Ol%C3%A1,%20gostaria%20de%20colocar%20a%20Auttus%20no%20meu%20neg%C3%B3cio!!', '_blank')}
              >
                Quero ver isso funcionando na minha loja
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
