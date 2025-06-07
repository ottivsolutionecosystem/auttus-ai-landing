
import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-auttus-blue text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img 
                src="/lovable-uploads/d263659d-bcbc-4a4b-8ef6-a9332b55e6d3.png" 
                alt="AUTTUS Logo" 
                className="h-8 sm:h-10 w-auto animate-float"
              />
            </div>
            <p className="text-blue-200 mb-6 max-w-md mx-auto lg:mx-0">
              Transforme sua operação de vendas com automação inteligente. 
              Venda mais, responda menos, automatize tudo.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-blue-200 text-xs sm:text-sm mb-4 sm:mb-0">
            © 2025 Auttus by OTTIV. Todos os direitos reservados.
          </p>
          <p className="text-blue-200 text-xs sm:text-sm">
            OTTIV LTDA • CNPJ: 60.081.212/0001-72 • Campo Grande-MS
          </p>
        </div>
      </div>
    </footer>
  );
};
