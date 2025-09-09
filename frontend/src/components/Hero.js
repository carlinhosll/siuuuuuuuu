import React from 'react';
import { Trophy, Target, Award, Star } from 'lucide-react';

const Hero = () => {
  const achievements = [
    { icon: Trophy, label: 'Títulos', value: '35+' },
    { icon: Target, label: 'Gols', value: '892+' },
    { icon: Award, label: 'Bola de Ouro', value: '5x' },
    { icon: Star, label: 'Partidas', value: '1200+' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-400 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-primary-300 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary-500 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in">
            <span className="block text-white">CRISTIANO</span>
            <span className="block bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
              RONALDO
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            O MAIOR DE TODOS OS TEMPOS
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Uma lenda viva do futebol mundial. Cinco Bolas de Ouro, mais de 800 gols e uma carreira que redefiniu o que significa ser extraordinário.
          </p>

          {/* Achievement cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.label}
                  className="card bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 animate-slide-up"
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  <Icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{animationDelay: '1s'}}>
            <button 
              onClick={() => document.querySelector('#biography').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4 bg-primary-500 hover:bg-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              Descobrir a Lenda
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;