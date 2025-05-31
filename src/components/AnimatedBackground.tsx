
export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background estático */}
      <div className="absolute inset-0 bg-gradient-to-br from-auttus-blue/30 via-transparent to-auttus-orange/5"></div>
      
      {/* Elementos decorativos estáticos */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-auttus-orange/10 rotate-45 opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/5 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 right-32 w-12 h-12 bg-gradient-to-r from-auttus-orange/10 to-transparent rotate-12 opacity-50"></div>
      
      {/* Efeito de luz sutil estático */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-auttus-orange/5 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
};
