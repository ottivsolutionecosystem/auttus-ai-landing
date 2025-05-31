
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Marcos Silva",
    role: "Revenda AutoMais",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "Vendo carros há 10 anos e nunca vi nada igual. Auttus mudou meu jogo. Agora vendo 3x mais com metade do esforço.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Gerente de Vendas",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "A IA faz o que 2 atendentes faziam antes. E faz melhor. Nosso faturamento aumentou 150% em apenas 3 meses.",
    rating: 5
  },
  {
    name: "Roberto Santos",
    role: "Proprietário - Multimarcas Santos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "Impressionante como a Auttus entende cada cliente. As respostas são tão naturais que até eu fico surpreso.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Histórias reais de transformação e crescimento
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-auttus-blue to-blue-900 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl animate-fade-in">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              {/* Avatar */}
              <div className="mb-6 md:mb-0 md:mr-6 lg:mr-8 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-auttus-orange shadow-lg mx-auto"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-auttus-orange fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Author */}
                <div>
                  <div className="font-bold text-base sm:text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-blue-200 text-sm sm:text-base">{testimonials[currentIndex].role}</div>
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
              {testimonials.map((_, index) => (
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
      </div>
    </section>
  );
};
