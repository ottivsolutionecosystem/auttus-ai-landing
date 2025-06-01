
import { Bot, User, CheckCircle } from "lucide-react";

interface ChatMessageProps {
  message: {
    type: 'user' | 'bot' | 'system';
    sender?: string;
    platform?: string;
    message: string;
    timestamp?: string;
    status?: string;
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  if (message.type === 'user') {
    return (
      <div className="flex justify-end">
        <div className="bg-green-500 text-white p-3 rounded-lg max-w-[80%] shadow-sm">
          <div className="flex items-center space-x-2 mb-1">
            <User className="h-3 w-3" />
            <span className="text-xs font-medium">{message.sender}</span>
            <span className="text-xs opacity-75">{message.timestamp}</span>
          </div>
          <p className="text-sm whitespace-pre-line">{message.message}</p>
        </div>
      </div>
    );
  }

  if (message.type === 'bot') {
    return (
      <div className="flex justify-start">
        <div className="bg-white border border-gray-200 p-3 rounded-lg max-w-[80%] shadow-sm">
          <div className="flex items-center space-x-2 mb-1">
            <Bot className="h-3 w-3 text-auttus-orange" />
            <span className="text-xs font-medium text-auttus-blue">LetícIA</span>
            <span className="text-xs text-gray-500">{message.timestamp}</span>
          </div>
          <p className="text-sm text-gray-800 whitespace-pre-line">{message.message}</p>
        </div>
      </div>
    );
  }

  if (message.type === 'system') {
    return (
      <div className="flex justify-center">
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs font-medium flex items-center space-x-2">
          <CheckCircle className="h-4 w-4" />
          <span>{message.message}</span>
        </div>
      </div>
    );
  }

  return null;
};
