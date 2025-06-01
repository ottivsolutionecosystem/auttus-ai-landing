
import { MessageCircle, Instagram, Car, Mail } from "lucide-react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50", orbitRadius: 25, angle: 0, speed: 20 },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50", orbitRadius: 35, angle: 60, speed: 25 },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50", orbitRadius: 45, angle: 120, speed: 22 },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50", orbitRadius: 55, angle: 180, speed: 28 },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50", orbitRadius: 65, angle: 240, speed: 18 },
  { name: "E-mail", icon: Mail, color: "text-orange-500", bg: "bg-orange-50", orbitRadius: 75, angle: 300, speed: 26 }
];

export const OrbitalSystem = () => {
  return (
    <div className="relative w-full max-w-[90vw] aspect-square max-h-[90vh] mx-auto">
      <div className="relative w-full h-full max-w-[400px] max-h-[400px] sm:max-w-[500px] sm:max-h-[500px] lg:max-w-[600px] lg:max-h-[600px] mx-auto">
        
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
              className="w-0.5 sm:w-1 bg-gradient-to-t from-gray-300 to-transparent opacity-30"
              style={{
                height: `${channel.orbitRadius}%`,
                transformOrigin: 'bottom center'
              }}
            />
          </div>
        ))}

        {/* Central Auttus Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft border-2 border-gray-200">
            <img 
              src="/lovable-uploads/e1ebd96e-097c-4ad3-abff-e3da1e7146aa.png" 
              alt="AUTTUS Logo" 
              className="h-6 w-auto sm:h-8 md:h-10 lg:h-12"
            />
          </div>
        </div>

        {/* Orbital Paths (subtle guides) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[50%] h-[50%] border border-gray-200 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-gray-200 rounded-full opacity-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-gray-200 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-gray-200 rounded-full opacity-8"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-gray-200 rounded-full opacity-6"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-gray-200 rounded-full opacity-4"></div>
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
              <div className={`${channel.bg} rounded-xl p-2 sm:p-3 lg:p-4 text-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange shadow-lg hover:shadow-xl group w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-center`}>
                <IconComponent className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${channel.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-gray-800 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs mt-0.5 sm:mt-1 leading-tight">{channel.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
