
import { MessageCircle } from "lucide-react";

interface FloatingChatButtonProps {
  onClick: () => void;
}

export const FloatingChatButton = ({ onClick }: FloatingChatButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-auttus-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
        💬 Fale com nossa IA!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
      </div>
    </div>
  );
};
