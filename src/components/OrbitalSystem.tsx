
import { MessageCircle, Instagram, Car, Mail } from "lucide-react";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50", orbitRadius: 150, angle: 0, speed: 20 },
  { name: "OLX", icon: Car, color: "text-purple-500", bg: "bg-purple-50", orbitRadius: 200, angle: 60, speed: 25 },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50", orbitRadius: 180, angle: 120, speed: 22 },
  { name: "Facebook", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50", orbitRadius: 230, angle: 180, speed: 28 },
  { name: "Webmotors", icon: Car, color: "text-red-500", bg: "bg-red-50", orbitRadius: 160, angle: 240, speed: 18 },
  { name: "E-mail", icon: Mail, color: "text-orange-500", bg: "bg-orange-50", orbitRadius: 210, angle: 300, speed: 26 }
];

export const OrbitalSystem = () => {
  return (
    <div className="relative w-[500px] h-[500px] lg:w-[550px] lg:h-[550px]">
      {/* Central Auttus Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-auttus-blue rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
          <img 
            src="/lovable-uploads/8d1a3a7d-2eb5-454e-8e09-956437a46655.png" 
            alt="AUTTUS Logo" 
            className="h-12 w-auto lg:h-14 filter brightness-0 invert"
          />
        </div>
      </div>

      {/* Orbital Paths (subtle guides) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] h-[300px] border border-gray-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-gray-200 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-gray-200 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] border border-gray-200 rounded-full opacity-5"></div>
      </div>

      {/* Orbiting Channel Icons */}
      {channels.map((channel, index) => {
        const IconComponent = channel.icon;
        const orbitStyle = {
          animation: `orbit-${index} ${channel.speed}s linear infinite`,
          transformOrigin: `${250}px ${250}px`,
        };
        
        return (
          <div 
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              ...orbitStyle,
              transform: `translate(-50%, -50%) rotate(${channel.angle}deg) translateX(${channel.orbitRadius}px) rotate(-${channel.angle}deg)`,
              willChange: 'transform'
            }}
          >
            <div className={`${channel.bg} rounded-xl p-3 lg:p-4 text-center hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-auttus-orange shadow-lg hover:shadow-xl group`}>
              <IconComponent className={`h-6 w-6 lg:h-8 lg:w-8 ${channel.color} mx-auto mb-1 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="font-semibold text-gray-800 text-xs lg:text-sm">{channel.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
