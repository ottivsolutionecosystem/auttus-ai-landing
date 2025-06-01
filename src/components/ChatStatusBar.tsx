
import { Clock, CheckCircle } from "lucide-react";

export const ChatStatusBar = () => {
  return (
    <div className="mt-4 sm:mt-6 text-center h-12 flex items-center justify-center">
      <div className="flex items-center space-x-4 text-xs text-gray-600">
        <div className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>Qualificação: 9min</span>
        </div>
        <div className="flex items-center space-x-1">
          <CheckCircle className="h-3 w-3 text-green-500" />
          <span>Lead agendado</span>
        </div>
      </div>
    </div>
  );
};
