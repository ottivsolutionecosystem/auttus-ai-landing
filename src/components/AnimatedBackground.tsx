
export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-auttus-blue/20 via-transparent to-auttus-orange/10"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-auttus-orange/20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white/10 rounded-full animate-float"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-auttus-orange/20 to-transparent rotate-12"></div>
    </div>
  );
};
