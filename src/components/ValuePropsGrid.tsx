
export const ValuePropsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-3xl mx-auto lg:mx-0">
      <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm group hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-auttus-orange/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1 group-hover:animate-wiggle">
            Instantâneo
          </div>
          <div className="text-blue-200 text-xs sm:text-sm group-hover:text-blue-100 transition-colors duration-300">
            Resposta em segundos
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-auttus-orange/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
      </div>

      <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm group hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1 group-hover:animate-heart-beat">
            24/7
          </div>
          <div className="text-blue-200 text-xs sm:text-sm group-hover:text-blue-100 transition-colors duration-300">
            Nunca para de vender
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
      </div>

      <div className="text-center lg:text-left bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm group hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-auttus-orange mb-1 group-hover:animate-pulse">
            IA Nacional
          </div>
          <div className="text-blue-200 text-xs sm:text-sm group-hover:text-blue-100 transition-colors duration-300">
            Entende seu cliente
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
      </div>
    </div>
  );
};
