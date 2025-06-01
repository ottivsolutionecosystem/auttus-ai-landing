
import { Inbox } from "lucide-react";
import { useEffect, useRef } from "react";
import { InboxMessage } from "./InboxMessage";

interface InboxInterfaceProps {
  visibleMessages: any[];
  inboxRef: React.RefObject<HTMLDivElement>;
}

export const InboxInterface = ({ visibleMessages, inboxRef }: InboxInterfaceProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-slide-up">
      {/* Inbox Header */}
      <div className="bg-auttus-blue text-white p-4 flex items-center space-x-3">
        <div className="w-10 h-10 bg-auttus-orange rounded-full flex items-center justify-center">
          <Inbox className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">Auttus Inbox</h3>
          <p className="text-xs opacity-90">{visibleMessages.length} mensagens não lidas</p>
        </div>
      </div>

      {/* Inbox Messages */}
      <div ref={inboxRef} className="h-80 overflow-y-auto bg-white">
        {visibleMessages.map((msg) => (
          <InboxMessage key={msg.id} {...msg} />
        ))}
        
        {visibleMessages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <Inbox className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm">Inbox vazio</p>
            <p className="text-xs text-gray-400">Aguardando mensagens...</p>
          </div>
        )}
      </div>

      {/* Inbox Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>LetícIA organizando automaticamente</span>
          <span className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Online</span>
          </span>
        </div>
      </div>
    </div>
  );
};
