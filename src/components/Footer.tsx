
import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-auttus-blue text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 animate-pulse-soft">AUTTUS</h3>
            <p className="text-blue-200 mb-6 max-w-md">
              Transforme sua operação de vendas com automação inteligente. 
              Venda mais, responda menos, automatize tudo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Sobre nós</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Carreiras</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Central de Ajuda</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Contato</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Termos de Uso</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2024 Auttus. Todos os direitos reservados.
          </p>
          <p className="text-blue-200 text-sm mt-4 md:mt-0">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};
