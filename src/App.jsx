import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import { Education, Skills, Projects, Contact } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center bg-black/80">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Fauzi Rahmat Febrian • Built with love in green, blue, and black</p>
      </footer>
    </div>
  );
}

export default App;
