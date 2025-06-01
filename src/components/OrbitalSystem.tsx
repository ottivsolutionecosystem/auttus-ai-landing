
import { MessageCircle, Instagram, Car, Mail } from "lucide-react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50", angle: 0, speed: 30 },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50", angle: 60, speed: 30 },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50", angle: 120, speed: 30 },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50", angle: 180, speed: 30 },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50", angle: 240, speed: 30 },
  { name: "E-mail", icon: Mail, color: "text-orange-500", bg: "bg-orange-50", angle: 300, speed: 30 }
];

// Raio único para todos os elementos
const ORBIT_RADIUS = 175; // valor em percentual

export const OrbitalSystem = () => {
  return (
    <div className="relative w-full max-w-[95vw] aspect-square max-h-[95vh] mx-auto">
      <div className="relative w-full h-full max-w-[700px] max-h-[700px] sm:max-w-[800px] sm:max-h-[800px] md:max-w-[1000px] md:max-h-[1000px] lg:max-w-[1400px] lg:max-h-[1400px] xl:max-w-[1600px] xl:max-h-[1600px] mx-auto">
        
        {/* Connection Lines */}
        {channels.map((channel, index) => (
          <div 
            key={`line-${index}`}
            className="absolute top-1/2 left-1/2 origin-center"
            style={{
              animation: `single-orbit ${channel.speed}s linear infinite`,
              transform: `translate(-50%, -50%) rotate(${channel.angle}deg)`,
              willChange: 'transform'
            }}
          >
            <div 
              className="border-l-2 border-dashed border-gray-300 opacity-30"
              style={{
                height: `${ORBIT_RADIUS}%`,
                transformOrigin: 'bottom center'
              }}
            />
          </div>
        ))}

        {/* Central Auttus Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft border-2 border-gray-200">
            <img 
              src="/lovable-uploads/e1ebd96e-097c-4ad3-abff-e3da1e7146aa.png" 
              alt="AUTTUS Logo" 
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16"
            />
          </div>
        </div>

        {/* Single Orbital Path (visible guide) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div 
            className="border border-gray-200 rounded-full opacity-20"
            style={{
              width: `${ORBIT_RADIUS * 2}%`,
              height: `${ORBIT_RADIUS * 2}%`
            }}
          ></div>
        </div>

        {/* Orbiting Channel Icons - All in single orbit */}
        {channels.map((channel, index) => {
          const IconComponent = channel.icon;
          
          return (
            <div 
              key={index}
              className="absolute top-1/2 left-1/2 z-10"
              style={{
                animation: `single-orbit ${channel.speed}s linear infinite`,
                transform: `translate(-50%, -50%) rotate(${channel.angle}deg) translateX(${ORBIT_RADIUS}%) rotate(-${channel.angle}deg)`,
                willChange: 'transform'
              }}
            >
              <div className={`${channel.bg} rounded-xl p-2 sm:p-3 md:p-4 lg:p-5 text-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange shadow-lg hover:shadow-xl group w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex flex-col items-center justify-center`}>
                <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 ${channel.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-gray-800 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm mt-0.5 leading-tight">{channel.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
