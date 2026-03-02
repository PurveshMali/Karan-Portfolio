import React, { useRef } from 'react';
import { Film, Camera, MonitorPlay, Mic } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { expertises } from '../utils/data';

gsap.registerPlugin(ScrollTrigger);

// Map string icons from data.js to React Components
const iconMap = {
  Film: <Film size={32} />,
  Camera: <Camera size={32} />,
  MonitorPlay: <MonitorPlay size={32} />,
  Mic: <Mic size={32} />
};

const Expertise = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.expertise-card', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: 'top 70%' 
        } 
      }
    );
  }, { scope: containerRef });

  return (
    <section className="expertise" id="expertise" ref={containerRef}>
      <div className="section-header">
        <h2>Expertise</h2>
      </div>
      <div className="expertise-grid">
        {expertises.map((exp, index) => (
          <div key={index} className="expertise-card">
            <div className="expertise-icon">{iconMap[exp.icon]}</div>
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
