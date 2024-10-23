import React from 'react';
import { Gamepad2, Search } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              GameVerse
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-purple-400 transition">主页</a>
            <a href="#" className="hover:text-purple-400 transition">游戏</a>
            <a href="#" className="hover:text-purple-400 transition">新闻</a>
            <a href="#" className="hover:text-purple-400 transition">社区</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-full transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              登录
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}