
import { Bot } from "lucide-react";

export const ChatTypingIndicator = () => {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 mb-1">
          <Bot className="h-3 w-3 text-auttus-orange" />
          <span className="text-xs font-medium text-auttus-blue">LetícIA</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};
