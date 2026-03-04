import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Impact from './components/Impact';
import Marquee from './components/Marquee';
import FeaturedWork from './components/FeaturedWork';
import BehindTheLens from './components/BehindTheLens';
import Expertise from './components/Expertise';
import GearArsenal from './components/GearArsenal';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <GridBackground />
      <div className="film-grain"></div>
      <Navbar />

      <main id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Clients />
          <Impact />
          {/* <Marquee /> */}
          <FeaturedWork />
          <BehindTheLens />
          <Expertise />
          <GearArsenal />
          <WhyMe />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
