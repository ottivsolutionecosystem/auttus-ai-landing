
import { MessageCircle, Instagram, Car, Mail } from "lucide-react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50", orbitRadius: 25, angle: 0, speed: 20 },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50", orbitRadius: 40, angle: 60, speed: 25 },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50", orbitRadius: 55, angle: 120, speed: 22 },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50", orbitRadius: 70, angle: 180, speed: 28 },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50", orbitRadius: 85, angle: 240, speed: 18 },
  { name: "E-mail", icon: Mail, color: "text-orange-500", bg: "bg-orange-50", orbitRadius: 100, angle: 300, speed: 26 }
];

export const OrbitalSystem = () => {
  return (
    <div className="relative w-full max-w-[95vw] aspect-square max-h-[95vh] mx-auto">
      <div className="relative w-full h-full max-w-[800px] max-h-[800px] sm:max-w-[900px] sm:max-h-[900px] lg:max-w-[1000px] lg:max-h-[1000px] mx-auto">
        
        {/* Connection Lines */}
        {channels.map((channel, index) => (
          <div 
            key={`line-${index}`}
            className="absolute top-1/2 left-1/2 origin-center"
            style={{
              animation: `orbit-${index} ${channel.speed}s linear infinite`,
              transform: `translate(-50%, -50%) rotate(${channel.angle}deg)`,
              willChange: 'transform'
            }}
          >
            <div 
              className="border-l-2 border-dashed border-gray-300 opacity-30"
              style={{
                height: `${channel.orbitRadius}%`,
                transformOrigin: 'bottom center'
              }}
            />
          </div>
        ))}

        {/* Central Auttus Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft border-2 border-gray-200">
            <img 
              src="/lovable-uploads/e1ebd96e-097c-4ad3-abff-e3da1e7146aa.png" 
              alt="AUTTUS Logo" 
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
            />
          </div>
        </div>

        {/* Orbital Paths (subtle guides) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[50%] h-[50%] border border-gray-200 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gray-200 rounded-full opacity-8"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-gray-200 rounded-full opacity-6"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-gray-200 rounded-full opacity-4"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[170%] h-[170%] border border-gray-200 rounded-full opacity-3"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border border-gray-200 rounded-full opacity-2"></div>
        </div>

        {/* Orbiting Channel Icons */}
        {channels.map((channel, index) => {
          const IconComponent = channel.icon;
          
          return (
            <div 
              key={index}
              className="absolute top-1/2 left-1/2 z-10"
              style={{
                animation: `orbit-${index} ${channel.speed}s linear infinite`,
                transform: `translate(-50%, -50%) rotate(${channel.angle}deg) translateX(${channel.orbitRadius}%) rotate(-${channel.angle}deg)`,
                willChange: 'transform'
              }}
            >
              <div className={`${channel.bg} rounded-xl p-3 sm:p-4 lg:p-5 text-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange shadow-lg hover:shadow-xl group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center`}>
                <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ${channel.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-gray-800 text-[8px] sm:text-[10px] md:text-xs lg:text-sm mt-1 leading-tight">{channel.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
