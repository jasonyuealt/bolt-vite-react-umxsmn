import React from 'react';
import { Flame, Users, Trophy } from 'lucide-react';

const games = [
  {
    title: "星际探险",
    image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&q=80",
    players: "50K+",
    rating: 4.8
  },
  {
    title: "魔法世界",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    players: "100K+",
    rating: 4.9
  },
  {
    title: "赛车传说",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
    players: "80K+",
    rating: 4.7
  }
];

export function FeaturedGames() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">热门游戏</h2>
        <Flame className="w-6 h-6 text-orange-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300">
            <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{game.title}</h3>
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{game.players}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span>{game.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}