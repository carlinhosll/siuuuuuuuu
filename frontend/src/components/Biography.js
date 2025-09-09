import React from 'react';
import { MapPin, Calendar, Users, Globe } from 'lucide-react';

const Biography = () => {
  const bioSections = [
    {
      title: "Os Primeiros Passos",
      period: "1985 - 2002",
      content: "Nascido em Funchal, Madeira, Cristiano Ronaldo dos Santos Aveiro mostrou desde cedo sua paixão e talento excepcional para o futebol. Aos 8 anos, já jogava pelo Andorinha e aos 10, ingressou no Nacional da Madeira. Sua determinação e habilidade chamaram atenção de olheiros do Sporting CP.",
      icon: MapPin,
      color: "bg-blue-500"
    },
    {
      title: "Sporting CP - O Começo",
      period: "2002 - 2003",
      content: "Aos 17 anos, Cristiano fez sua estreia profissional no Sporting CP. Em apenas uma temporada, marcou 5 gols em 31 jogos e impressionou o mundo do futebol com sua velocidade, dribles e chute potente. Foi neste período que chamou a atenção do Manchester United.",
      icon: Calendar,
      color: "bg-green-500"
    },
    {
      title: "Manchester United - A Ascensão",
      period: "2003 - 2009",
      content: "No United, CR7 evoluiu de uma promessa para um dos melhores jogadores do mundo. Conquistou 3 Premier Leagues, 1 Champions League, 1 Copa do Mundo de Clubes e sua primeira Bola de Ouro em 2008. Marcou 118 gols em 292 jogos e se tornou ídolo global.",
      icon: Users,
      color: "bg-red-500"
    },
    {
      title: "Real Madrid - O Ápice",
      period: "2009 - 2018",
      content: "No Real Madrid, Cristiano atingiu seu auge. Em 9 temporadas, marcou 451 gols em 438 jogos, conquistou 4 Champions Leagues, 2 La Ligas e mais 4 Bolas de Ouro. Tornou-se o maior artilheiro da história do clube e consolidou seu status de lenda do futebol mundial.",
      icon: Globe,
      color: "bg-purple-500"
    }
  ];

  const personalInfo = [
    { label: "Nome Completo", value: "Cristiano Ronaldo dos Santos Aveiro" },
    { label: "Data de Nascimento", value: "5 de Fevereiro de 1985" },
    { label: "Local de Nascimento", value: "Funchal, Madeira, Portugal" },
    { label: "Altura", value: "1,87m" },
    { label: "Posição", value: "Atacante / Ponta" },
    { label: "Pé Preferido", value: "Direito" }
  ];

  return (
    <section id="biography" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">
            A Jornada de uma Lenda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde as ruas da Madeira até se tornar o maior jogador de todos os tempos, 
            conheça a história extraordinária de Cristiano Ronaldo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Personal Info Card */}
          <div className="lg:col-span-1">
            <div className="card p-8 sticky top-24">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">CR7</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Informações Pessoais
                </h3>
              </div>
              
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500 mb-1">
                      {info.label}
                    </span>
                    <span className="text-base text-gray-900 font-medium">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Biography Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {bioSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== bioSections.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
                    )}
                    
                    <div className="flex items-start space-x-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 ${section.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 card p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">
                            {section.title}
                          </h3>
                          <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-2 md:mt-0">
                            {section.period}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <div className="card p-8 md:p-12 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              "Eu não sou um jogador de futebol que dança. Eu sou um dançarino que joga futebol."
            </blockquote>
            <cite className="text-lg text-primary-600 font-medium">
              — Cristiano Ronaldo
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;