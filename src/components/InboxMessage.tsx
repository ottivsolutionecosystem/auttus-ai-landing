
interface InboxMessageProps {
  id: number;
  channel: string;
  sender: string;
  message: string;
  time: string;
  icon: React.ComponentType<any>;
  color: string;
  unread: boolean;
}

export const InboxMessage = ({ channel, sender, message, time, icon: IconComponent, color, unread }: InboxMessageProps) => {
  return (
    <div className="animate-fade-in border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="p-4 flex items-start space-x-3">
        <div className={`${color} bg-gray-100 rounded-full p-2 flex-shrink-0`}>
          <IconComponent className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-gray-900 truncate">{sender}</span>
            <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{time}</span>
          </div>
          <div className="text-xs text-gray-600 mb-1">
            via {channel}
          </div>
          <p className="text-sm text-gray-700 truncate">{message}</p>
        </div>
        {unread && (
          <div className="w-3 h-3 bg-auttus-orange rounded-full flex-shrink-0"></div>
        )}
      </div>
    </div>
  );
};
