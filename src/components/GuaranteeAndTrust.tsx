
import { Shield, RefreshCw, Lock, Users, Award, CheckCircle, Code, Zap, Heart } from "lucide-react";

const guarantees = [
  {
    icon: RefreshCw,
    title: "Garantia de 30 dias",
    description: "Se não aumentar suas vendas em 30 dias, devolvemos 100% do valor"
  },
  {
    icon: Shield,
    title: "Dados 100% seguros",
    description: "Criptografia de nível bancário e conformidade com LGPD"
  },
  {
    icon: Users,
    title: "Suporte especializado",
    description: "Equipe brasileira especializada em vendas automotivas"
  }
];

const trustIndicators = [
  {
    icon: Code,
    title: "Tecnologia líder",
    description: "IA de última geração especializada"
  },
  {
    icon: Zap,
    title: "99.9% de disponibilidade",
    description: "Sistema sempre funcionando"
  },
  {
    icon: Heart,
    title: "Desenvolvido no Brasil",
    description: "Para o mercado brasileiro"
  }
];

const teamInfo = [
  {
    name: "Guilherme Sanches",
    role: "CEO",
    experience: "8 anos estruturando e escalando negócios"
  },
  {
    name: "Adriano Dias",
    role: "CTO",
    experience: "25 anos como desenvolvedor de tecnologia"
  }
];

const achievements = [
  {
    number: "100+",
    label: "Revendas atendidas"
  },
  {
    number: "50k+",
    label: "Leads processados mensalmente"
  },
  {
    number: "98%",
    label: "Taxa de satisfação"
  }
];

export const GuaranteeAndTrust = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-auttus-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-auttus-blue mb-4">
            🏆 Por que escolher a Auttus?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A confiança de centenas de revendas e a expertise de quem entende o mercado brasileiro.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in bg-white rounded-xl p-6 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-auttus-orange mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* OTTIV Company Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-auttus-blue text-center mb-8 sm:mb-12">
            Sobre a OTTIV
          </h3>
          
          <div className="bg-gradient-to-br from-auttus-blue to-blue-700 rounded-2xl p-6 sm:p-8 text-white mb-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-4">
                Especialista em Tecnologia Comercial
              </h4>
              <p className="text-blue-100 leading-relaxed mb-6">
                A OTTIV é uma empresa brasileira especializada em desenvolver soluções de automação 
                com inteligência artificial para operações comerciais. Com foco no mercado automotivo, 
                criamos tecnologias que transformam a forma como empresas interagem com seus clientes 
                e gerenciam suas vendas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-auttus-orange font-bold text-lg mb-1">8+ anos</div>
                  <div className="text-blue-200 text-sm">Experiência em automação</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-auttus-orange font-bold text-lg mb-1">100%</div>
                  <div className="text-blue-200 text-sm">Focada no Brasil</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-auttus-orange font-bold text-lg mb-1">IA Própria</div>
                  <div className="text-blue-200 text-sm">Desenvolvida internamente</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-auttus-blue text-center mb-8 sm:mb-12">
            Liderança Experiente
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-8">
            {teamInfo.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-auttus-blue to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-auttus-blue mb-2">{member.name}</h4>
                <p className="text-auttus-orange font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 bg-white rounded-lg p-4 max-w-2xl mx-auto">
              <strong>Nossa missão:</strong> Ajudar empresas brasileiras a vender mais através de 
              automação inteligente, permitindo que vendedores foquem no que fazem de melhor: fechar negócios.
            </p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-auttus-blue text-center mb-8 sm:mb-12">
            Nossos Compromissos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div 
                  key={index}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-auttus-blue to-blue-700 rounded-full p-4 sm:p-6 w-fit mx-auto mb-4 sm:mb-6 group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300">
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-lg sm:text-xl font-bold text-auttus-blue mb-3 sm:mb-4">
                      {guarantee.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-auttus-blue text-center mb-8 sm:mb-12">
            Tecnologia confiável
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="bg-auttus-orange rounded-full p-3 sm:p-4 w-fit mx-auto mb-3 sm:mb-4">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-auttus-blue mb-2 text-sm sm:text-base">
                      {indicator.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Badge */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white border-2 border-auttus-orange rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Shield className="h-5 w-5 text-auttus-orange" />
            <span className="text-auttus-blue font-semibold text-sm sm:text-base">
              🇧🇷 OTTIV - Empresa brasileira de tecnologia comercial
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            OTTIV LTDA • CNPJ: 60.081.212/0001-72 • Sede: Campo Grande-MS
          </p>
        </div>
      </div>
    </section>
  );
};
