
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
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-2xl ${
              message.sender === 'user'
                ? 'bg-auttus-orange text-white rounded-br-sm'
                : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
            }`}
          >
            <div className="flex items-start space-x-2">
              {message.sender === 'bot' && (
                <Bot className="h-4 w-4 mt-1 text-auttus-orange flex-shrink-0" />
              )}
              <p className="text-sm whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-sm shadow-md max-w-[80%]">
            <div className="flex items-center space-x-2">
              <Bot className="h-4 w-4 text-auttus-orange" />
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
