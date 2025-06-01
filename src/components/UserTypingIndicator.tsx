
import { User } from "lucide-react";

export const UserTypingIndicator = () => {
  return (
    <div className="flex justify-end animate-fade-in">
      <div className="bg-green-500 text-white p-3 rounded-lg shadow-sm max-w-[80%]">
        <div className="flex items-center space-x-2 mb-1">
          <User className="h-3 w-3" />
          <span className="text-xs font-medium">João Silva</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};
