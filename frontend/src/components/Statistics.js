import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart3, TrendingUp, Award, Target } from 'lucide-react';

const Statistics = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('career');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
        const response = await axios.get(`${backendUrl}/api/stats`);
        setStats(response.data);
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
        // Fallback data
        setStats({
          career_stats: {
            total_goals: 892,
            total_assists: 245,
            total_matches: 1207,
            trophies: 35,
            ballon_dor: 5,
            uefa_best_player: 3
          },
          club_stats: [
            { club: "Sporting CP", period: "2002-2003", goals: 5, matches: 31, trophies: 0 },
            { club: "Manchester United", period: "2003-2009", goals: 118, matches: 292, trophies: 9 },
            { club: "Real Madrid", period: "2009-2018", goals: 451, matches: 438, trophies: 15 },
            { club: "Juventus", period: "2018-2021", goals: 101, matches: 134, trophies: 5 },
            { club: "Manchester United", period: "2021-2022", goals: 27, matches: 54, trophies: 0 },
            { club: "Al Nassr", period: "2023-presente", goals: 68, matches: 75, trophies: 2 }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section id="statistics" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-center h-64">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  const careerHighlights = [
    { icon: Target, label: 'Total de Gols', value: stats.career_stats.total_goals, color: 'text-red-500' },
    { icon: TrendingUp, label: 'Assistências', value: stats.career_stats.total_assists, color: 'text-blue-500' },
    { icon: BarChart3, label: 'Jogos', value: stats.career_stats.total_matches, color: 'text-green-500' },
    { icon: Award, label: 'Troféus', value: stats.career_stats.trophies, color: 'text-purple-500' }
  ];

  const majorAwards = [
    { title: 'Bola de Ouro', count: stats.career_stats.ballon_dor, years: '2008, 2013, 2014, 2016, 2017' },
    { title: 'UEFA Melhor Jogador', count: stats.career_stats.uefa_best_player, years: '2014, 2016, 2017' },
    { title: 'Champions League', count: 5, years: '2008, 2014, 2016, 2017, 2018' },
    { title: 'Eurocopa', count: 1, years: '2016' }
  ];

  return (
    <section id="statistics" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">
            Números Extraordinários
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma carreira definida por recordes quebrados e marcos históricos que redefinirão o futebol para sempre.
          </p>
        </div>

        {/* Career Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {careerHighlights.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('career')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'career' 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Por Clube
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'awards' 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Principais Prêmios
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'career' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.club_stats.map((club, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{club.club}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {club.period}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">{club.goals}</div>
                    <div className="text-xs text-gray-600">Gols</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{club.matches}</div>
                    <div className="text-xs text-gray-600">Jogos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{club.trophies}</div>
                    <div className="text-xs text-gray-600">Troféus</div>
                  </div>
                </div>

                {/* Goals per match ratio */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Média de gols/jogo:</span>
                    <span className="font-bold text-primary-600">
                      {(club.goals / club.matches).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'awards' && (
          <div className="grid md:grid-cols-2 gap-8">
            {majorAwards.map((award, index) => (
              <div key={index} className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  {award.count}x
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {award.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Anos:</strong> {award.years}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Fun Facts */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Curiosidades Impressionantes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">39</div>
              <p className="text-gray-700">Anos de idade e ainda marcando gols históricos</p>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">600M+</div>
              <p className="text-gray-700">Seguidores nas redes sociais</p>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">200M€</div>
              <p className="text-gray-700">Contrato com Al Nassr por ano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;