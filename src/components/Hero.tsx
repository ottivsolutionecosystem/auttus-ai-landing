
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-auttus-blue via-auttus-blue to-blue-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-auttus-orange rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-auttus-orange rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2 animate-pulse-soft">
                AUTTUS
              </h1>
              <p className="text-auttus-orange font-medium text-lg">
                Venda mais. Responda menos. Automatize tudo.
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Sua loja vendendo no{" "}
              <span className="text-auttus-orange">automático</span> com IA de verdade.
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A Auttus centraliza todos seus atendimentos e automatiza vendas com 
              inteligência artificial treinada para responder, agendar, qualificar e 
              vender por você.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-auttus-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-soft"
            >
              Solicite sua demonstração gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Stats */}
            <div className="flex space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-auttus-orange">98%</div>
                <div className="text-blue-200 text-sm">Aumento em vendas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-auttus-orange">75%</div>
                <div className="text-blue-200 text-sm">Redução de tempo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-auttus-orange">24/7</div>
                <div className="text-blue-200 text-sm">Atendimento ativo</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="lg:w-1/2 relative animate-slide-up">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Dashboard Mockup */}
              <div className="bg-auttus-gray rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-auttus-blue">Painel Auttus</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">WhatsApp - João Silva</div>
                      <div className="text-xs text-gray-600">Interessado no Civic 2023</div>
                    </div>
                    <Bot className="h-5 w-5 text-auttus-orange" />
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg animate-fade-in" style={{ animationDelay: '1s' }}>
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">OLX - Maria Costa</div>
                      <div className="text-xs text-gray-600">Proposta enviada automaticamente</div>
                    </div>
                    <Zap className="h-5 w-5 text-auttus-orange" />
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg animate-fade-in" style={{ animationDelay: '1.5s' }}>
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">Instagram - Pedro Lima</div>
                      <div className="text-xs text-gray-600">Agendamento realizado</div>
                    </div>
                    <Bot className="h-5 w-5 text-auttus-orange" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-auttus-orange text-white p-3 rounded-full animate-float">
              <Bot className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full animate-float" style={{ animationDelay: '1s' }}>
              <Zap className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
