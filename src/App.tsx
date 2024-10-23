import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedGames } from './components/FeaturedGames';
import { NewsSection } from './components/NewsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <FeaturedGames />
      <NewsSection />
    </div>
  );
}

export default App;