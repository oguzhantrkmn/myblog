import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Goals from './components/Goals';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-noise"></div>

      {/* Custom Cursor */}
      <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }}></div>
      <div className="cursor-outline" style={{ left: mousePos.x, top: mousePos.y }}></div>

      <main className="app-main">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Goals />
        <BlogSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
