
import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-auttus-blue text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 animate-pulse-soft">AUTTUS</h3>
            <p className="text-blue-200 mb-6 max-w-md mx-auto sm:mx-0">
              Transforme sua operação de vendas com automação inteligente. 
              Venda mais, responda menos, automatize tudo.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="#" 
                className="bg-green-500 hover:bg-green-600 p-2 sm:p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="#" 
                className="bg-pink-500 hover:bg-pink-600 p-2 sm:p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Sobre nós</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Carreiras</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Imprensa</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Central de Ajuda</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Contato</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Termos de Uso</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-blue-200 text-xs sm:text-sm mb-4 sm:mb-0">
            © 2024 Auttus. Todos os direitos reservados.
          </p>
          <p className="text-blue-200 text-xs sm:text-sm">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};
