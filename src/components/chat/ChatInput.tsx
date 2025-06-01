
import { Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatFlow } from "@/types/chat";

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
  flow: ChatFlow;
  placeholderText: string;
  onOpenWhatsApp: () => void;
}

export const ChatInput = ({
  inputValue,
  setInputValue,
  onSendMessage,
  onKeyPress,
  isTyping,
  flow,
  placeholderText,
  onOpenWhatsApp
}: ChatInputProps) => {
  return (
    <div className="p-4 border-t bg-white">
      {flow.step === 'completed' ? (
        <Button
          onClick={onOpenWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2"
        >
          <Phone className="h-5 w-5" />
          <span>Abrir WhatsApp</span>
        </Button>
      ) : (
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder={placeholderText}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-auttus-orange text-sm"
            disabled={isTyping}
          />
          <Button
            onClick={onSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-auttus-orange hover:bg-orange-600 p-2 rounded-xl"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
