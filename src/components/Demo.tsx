
import { Play, MessageCircle, FileText, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Demo = () => {
  return (
    <section className="py-20 bg-auttus-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-auttus-blue mb-4">
            Veja a Auttus em ação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstração completa: da captação do lead até o fechamento da venda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Video Placeholder */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="relative bg-gradient-to-br from-auttus-blue to-blue-900 rounded-2xl p-8 shadow-2xl animate-slide-up">
              <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4">
                <Button 
                  size="lg" 
                  className="bg-auttus-orange hover:bg-orange-600 text-white rounded-full p-6 transform hover:scale-110 transition-all duration-300"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Demo Interativa - 3 minutos
                </h3>
                <p className="text-blue-200">
                  Veja como um lead se transforma em venda automaticamente
                </p>
              </div>
            </div>
          </div>

          {/* Demo Steps */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-auttus-orange rounded-full p-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-auttus-blue mb-2">
                    1. Lead chega pelo WhatsApp
                  </h4>
                  <p className="text-gray-600">
                    Cliente interessado em um veículo envia mensagem perguntando sobre disponibilidade e preço
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-auttus-orange rounded-full p-3">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-auttus-blue mb-2">
                    2. IA qualifica e envia proposta
                  </h4>
                  <p className="text-gray-600">
                    Nossa IA entende a necessidade, qualifica o lead e envia uma proposta personalizada em segundos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-auttus-orange rounded-full p-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-auttus-blue mb-2">
                    3. Agendamento automático
                  </h4>
                  <p className="text-gray-600">
                    Cliente interessado? A IA agenda automaticamente um test drive na melhor data disponível
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="bg-green-500 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-auttus-blue mb-2">
                    4. Venda concluída
                  </h4>
                  <p className="text-gray-600">
                    Com follow-up inteligente e lembretes automáticos, a conversão de leads aumenta drasticamente
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-auttus-blue hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
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
