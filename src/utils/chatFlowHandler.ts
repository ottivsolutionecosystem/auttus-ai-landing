
import { ChatFlow } from "@/types/chat";

export const processUserInput = (
  input: string,
  flow: ChatFlow,
  addBotMessage: (text: string) => void,
  setFlow: (flow: ChatFlow | ((prev: ChatFlow) => ChatFlow)) => void
) => {
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
        setFlow(prev => ({ ...prev, step: 'completed' }));
        addBotMessage(`Redirecionando para o WhatsApp... 

Se não abriu automaticamente, clique no botão abaixo! 👇`);
      }, 3000);
      break;

    case 'finalizing':
    case 'completed':
      addBotMessage('Você já foi redirecionado para o WhatsApp! Nosso time está aguardando sua mensagem. 😊');
      break;

    default:
      addBotMessage('Desculpe, algo deu errado. Vamos recomeçar? Como posso te chamar?');
      setFlow({ step: 'greeting' });
  }
};

export const getPlaceholderText = (step: ChatFlow['step']) => {
  switch (step) {
    case 'greeting':
      return 'Digite seu nome...';
    case 'collecting_name':
      return 'Digite seu WhatsApp...';
    case 'finalizing':
      return 'Aguardando redirecionamento...';
    case 'completed':
      return '';
    default:
      return 'Digite sua mensagem...';
  }
};

export const openWhatsApp = (userName?: string) => {
  const whatsappMessage = `Olá! Sou ${userName || 'um visitante'} e me interessei pela automação de vendas da Auttus. Gostaria de receber o material exclusivo e agendar uma demonstração!`;
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
};
