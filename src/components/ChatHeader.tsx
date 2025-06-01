
export const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <h3 className="font-semibold text-auttus-blue text-sm sm:text-base lg:text-lg">
          LetícIA - Atendimento Ativo
        </h3>
      </div>
      <div className="text-xs text-gray-500">
        WhatsApp
      </div>
    </div>
  );
};
