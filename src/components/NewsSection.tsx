import React from 'react';

const newsItems = [
  {
    title: "新版本更新公告",
    excerpt: "全新游戏内容和特性即将登场，带来前所未有的游戏体验。",
    date: "2024-03-15"
  },
  {
    title: "电竞赛事预告",
    excerpt: "年度最大电竞赛事即将开启，赢取丰厚奖励。",
    date: "2024-03-14"
  }
];

export function NewsSection() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">最新资讯</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition">
              <h3 className="text-xl font-bold mb-2">{news.title}</h3>
              <p className="text-gray-300 mb-4">{news.excerpt}</p>
              <span className="text-gray-400 text-sm">{news.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}