
import { MessageCircle, Bot } from "lucide-react";

export const FloatingIcons = () => {
  return (
    <>
      <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-auttus-orange text-white p-3 sm:p-4 rounded-full shadow-lg animate-pulse">
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
      <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg animate-bounce">
        <Bot className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
      </div>
    </>
  );
};
