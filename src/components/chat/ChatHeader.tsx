
import { Bot, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-auttus-orange to-orange-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <Bot className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold">Assistente Auttus</h3>
          <p className="text-sm opacity-90">🟢 Online agora</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-200 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  );
};
