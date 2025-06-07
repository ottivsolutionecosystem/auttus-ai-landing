import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Shield, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const customerTestimonials = [
  {
    name: "Marco",
    role: "Proprietário - Prestige Motors",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "Com a Auttus, nossa equipe triplicou o número de leads qualificados. A IA realmente entende como falar com clientes de veículos. Fantástico!",
    rating: 5,
    badge: "Cliente"
  },
  {
    name: "Felipe",
    role: "Proprietário - Teca Automóveis",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "A Auttus não só responde rápido, como também agenda os test drives e envia follow-ups. Nossa conversão aumentou significativamente.",
    rating: 5,
    badge: "Cliente"
  }
];

const companyCredentials = [
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Time com 10+ anos em IA e vendas automotivas"
  },
  {
    icon: Shield,
    title: "Tecnologia Comprovada",
    description: "IA treinada especificamente para o mercado brasileiro"
  },
  {
    icon: Rocket,
    title: "Resultados Garantidos",
    description: "Desenvolvido pensando no ROI das revendas"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === customerTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === customerTestimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? customerTestimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Depoimentos reais de quem já transformou suas vendas com a Auttus
          </p>
        </div>

        {/* Testimonial Card - Fixed Height */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-auttus-blue to-blue-900 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl animate-fade-in h-80 sm:h-96 flex items-center">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full">
              {/* Avatar */}
              <div className="mb-6 md:mb-0 md:mr-6 lg:mr-8 flex-shrink-0 relative">
                <img 
                  src={customerTestimonials[currentIndex].image} 
                  alt={customerTestimonials[currentIndex].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-auttus-orange shadow-lg mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 bg-auttus-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {customerTestimonials[currentIndex].badge}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(customerTestimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-auttus-orange fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 leading-relaxed">
                  "{customerTestimonials[currentIndex].content}"
                </blockquote>
                
                {/* Author */}
                <div>
                  <div className="font-bold text-base sm:text-lg">{customerTestimonials[currentIndex].name}</div>
                  <div className="text-blue-200 text-sm sm:text-base">{customerTestimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-auttus-blue text-auttus-blue hover:bg-auttus-blue hover:text-white w-8 h-8 sm:w-10 sm:h-10"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {customerTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-auttus-orange' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-auttus-blue text-auttus-blue hover:bg-auttus-blue hover:text-white w-8 h-8 sm:w-10 sm:h-10"
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Company Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {companyCredentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-auttus-blue rounded-full p-4 w-fit mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-auttus-blue mb-2 text-lg">
                  {credential.title}
                </h3>
                <p className="text-gray-600">
                  {credential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
