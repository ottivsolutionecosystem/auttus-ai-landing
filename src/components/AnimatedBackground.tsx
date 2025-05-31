
export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background with subtle movement */}
      <div className="absolute inset-0 bg-gradient-to-br from-auttus-blue/30 via-transparent to-auttus-orange/5 animate-gradient-y"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-auttus-orange/10 rotate-45 animate-float opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/5 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 right-32 w-12 h-12 bg-gradient-to-r from-auttus-orange/10 to-transparent rotate-12 animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      
      {/* Soft light effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-auttus-orange/5 rounded-full blur-3xl animate-pulse opacity-30"></div>
    </div>
  );
};
