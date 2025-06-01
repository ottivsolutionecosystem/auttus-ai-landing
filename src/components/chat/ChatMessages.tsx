
import { useRef, useEffect } from "react";
import { Bot } from "lucide-react";
import { Message } from "@/types/chat";

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export const ChatMessages = ({ messages, isTyping }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 h-full">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[85%] p-2.5 rounded-xl text-sm ${
              message.sender === 'user'
                ? 'bg-auttus-orange text-white rounded-br-sm'
                : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
            }`}
          >
            <div className="flex items-start space-x-2">
              {message.sender === 'bot' && (
                <Bot className="h-3.5 w-3.5 mt-0.5 text-auttus-orange flex-shrink-0" />
              )}
              <p className="whitespace-pre-line leading-relaxed">{message.text}</p>
            </div>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-white text-gray-800 p-2.5 rounded-xl rounded-bl-sm shadow-sm max-w-[85%]">
            <div className="flex items-center space-x-2">
              <Bot className="h-3.5 w-3.5 text-auttus-orange" />
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
