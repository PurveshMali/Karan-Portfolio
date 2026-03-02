import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.impact-left h2', 
      { x: -50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
    );
    gsap.fromTo('.impact-right', 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
    );
  }, { scope: containerRef });

  return (
    <section className="impact" id="impact" ref={containerRef}>
      <div className="impact-split">
        <div className="impact-left">
          <h2>I Don't Just Shoot Vehicles.<br/><span>I Bring Machines To Life.</span></h2>
        </div>
        <div className="impact-right">
          <p>Passion for cars & bikes fuels every frame. I blend creative storytelling, voiceover-driven narratives, and cinematic editing to create brand-focused content that resonates and performs.</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
