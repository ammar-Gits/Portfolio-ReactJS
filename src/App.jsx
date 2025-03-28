import React, { useState, useEffect, createContext } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Education from './Components/Education';
import FutureGoals from './Components/FutureGoals';

export const MobileContext = createContext(false);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-white-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto">
          <Navbar />
          <div id="home"><Hero /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="education"><Education /></div>
          <div id="experience"><Experience /></div>
          <div id="projects"><Projects /></div>
          <div id="futureGoals"><FutureGoals /></div>
          <div id="contact"><Contact /></div>
        </div>
      </div>
    </MobileContext.Provider>
  );
};

export default App;