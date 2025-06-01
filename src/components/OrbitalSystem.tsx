
import { MessageCircle, Instagram, Car, Mail } from "lucide-react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50", orbitRadius: 30, angle: 0, speed: 20 },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50", orbitRadius: 40, angle: 60, speed: 25 },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50", orbitRadius: 36, angle: 120, speed: 22 },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50", orbitRadius: 46, angle: 180, speed: 28 },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50", orbitRadius: 32, angle: 240, speed: 18 },
  { name: "E-mail", icon: Mail, color: "text-orange-500", bg: "bg-orange-50", orbitRadius: 42, angle: 300, speed: 26 }
];

export const OrbitalSystem = () => {
  return (
    <div className="relative w-full max-w-[90vw] aspect-square max-h-[90vh] mx-auto">
      <div className="relative w-full h-full max-w-[500px] max-h-[500px] mx-auto">
        {/* Central Auttus Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
            <img 
              src="/lovable-uploads/e1ebd96e-097c-4ad3-abff-e3da1e7146aa.png" 
              alt="AUTTUS Logo" 
              className="h-8 w-auto sm:h-10 lg:h-12"
            />
          </div>
        </div>

        {/* Orbital Paths (subtle guides) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[60%] h-[60%] border border-gray-200 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[72%] h-[72%] border border-gray-200 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[84%] h-[84%] border border-gray-200 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] border border-gray-200 rounded-full opacity-5"></div>
        </div>

        {/* Orbiting Channel Icons */}
        {channels.map((channel, index) => {
          const IconComponent = channel.icon;
          const orbitStyle = {
            animation: `orbit-${index} ${channel.speed}s linear infinite`,
            transformOrigin: '50% 50%',
          };
          
          return (
            <div 
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                ...orbitStyle,
                transform: `translate(-50%, -50%) rotate(${channel.angle}deg) translateX(${channel.orbitRadius}%) rotate(-${channel.angle}deg)`,
                willChange: 'transform'
              }}
            >
              <div className={`${channel.bg} rounded-xl p-2 sm:p-3 lg:p-4 text-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange shadow-lg hover:shadow-xl group w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-center`}>
                <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${channel.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-gray-800 text-[8px] sm:text-[10px] lg:text-xs mt-1 leading-tight">{channel.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
