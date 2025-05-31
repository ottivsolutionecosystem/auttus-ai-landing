
export const ValuePropsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-3xl mx-auto lg:mx-0">
      <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1">Instantâneo</div>
        <div className="text-blue-200 text-xs sm:text-sm">Resposta em segundos</div>
      </div>
      <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1">24/7</div>
        <div className="text-blue-200 text-xs sm:text-sm">Nunca para de vender</div>
      </div>
      <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1">IA Nacional</div>
        <div className="text-blue-200 text-xs sm:text-sm">Entende seu cliente</div>
      </div>
    </div>
  );
};
