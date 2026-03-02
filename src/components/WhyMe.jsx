import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyMe = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const counters = gsap.utils.toArray('.counter');
    counters.forEach(counter => {
      ScrollTrigger.create({
        trigger: '.stats-row',
        start: 'top 80%',
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: counter.getAttribute('data-target'),
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out"
          });
        },
        once: true
      });
    });
  }, { scope: containerRef });

  return (
    <section className="why-me" ref={containerRef}>
      <div className="section-header">
        <h2>Why Work With Me</h2>
      </div>
      <div className="why-grid">
        <div className="why-col">
          <h3>Performance-Driven</h3>
          <p>Content designed to engage and convert, with cinematic pacing.</p>
        </div>
        <div className="why-col">
          <h3>Deep Passion</h3>
          <p>True understanding of automotive culture, specs, and aesthetics.</p>
        </div>
        <div className="why-col">
          <h3>Brand Focused</h3>
          <p>Stories tailored to elevate the core message of your brand.</p>
        </div>
      </div>
      
      <div className="stats-row">
        <div className="stat-item"><span className="counter" data-target="50">0</span>+ Projects</div>
        <div className="stat-item"><span className="counter" data-target="8">0</span>+ Years</div>
        <div className="stat-item"><span className="counter" data-target="5">0</span>M+ Views</div>
      </div>
    </section>
  );
};

export default WhyMe;
