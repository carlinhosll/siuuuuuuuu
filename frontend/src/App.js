import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Statistics from './components/Statistics';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Quiz from './components/Quiz';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Statistics />
        <Timeline />
        <Gallery />
        <Videos />
        <Quiz />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;