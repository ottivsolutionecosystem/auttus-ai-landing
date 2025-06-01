
import { useState } from "react";
import { Message, ChatFlow } from "@/types/chat";
import { processUserInput, getPlaceholderText, openWhatsApp } from "@/utils/chatFlowHandler";
import { ChatHeader } from "./chat/ChatHeader";
import { ChatMessages } from "./chat/ChatMessages";
import { ChatInput } from "./chat/ChatInput";
import { FloatingChatButton } from "./chat/FloatingChatButton";

export const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! 👋 Sou a assistente virtual da Auttus. Que bom te ver por aqui! Como posso te chamar?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [flow, setFlow] = useState<ChatFlow>({ step: 'greeting' });

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simular delay de digitação
    setTimeout(() => {
      processUserInput(currentInput, flow, addBotMessage, setFlow);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleOpenWhatsApp = () => {
    openWhatsApp(flow.userName);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão Flutuante - Sempre visível */}
      <FloatingChatButton onClick={toggleChat} />

      {/* Balão do Chat - Aparece próximo ao botão */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in border border-gray-200"
          style={{
            position: 'fixed !important',
            bottom: '80px !important',
            right: '24px !important',
            zIndex: 2147483647,
            pointerEvents: 'auto'
          }}
        >
          <ChatHeader onClose={() => setIsOpen(false)} />
          <div className="flex-1 min-h-0">
            <ChatMessages messages={messages} isTyping={isTyping} />
          </div>
          <ChatInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSendMessage={handleSendMessage}
            onKeyPress={handleKeyPress}
            isTyping={isTyping}
            flow={flow}
            placeholderText={getPlaceholderText(flow.step)}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        </div>
      )}
    </>
  );
};
