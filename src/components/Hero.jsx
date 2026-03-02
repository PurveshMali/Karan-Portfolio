import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const heroImgRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useGSAP(() => {
    // Hero timeline
    const tl = gsap.timeline();
    tl.fromTo('.navbar', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      .to('.reveal-text', { y: 0, duration: 1.2, ease: 'power4.out', stagger: 0.15 }, "-=0.5")
      .fromTo('.hero-subline', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.8")
      .fromTo('.hero-ctas', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
      .fromTo(heroImgRef.current, { scale: 1.1, filter: 'blur(10px)' }, { scale: 1, filter: 'blur(0px)', duration: 2, ease: 'power2.out' }, "-=2");

    // Parallax
    gsap.to(heroImgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  // Magnetic logic helper
  const addMagnetic = (ref) => {
    const btn = ref.current;
    if(!btn) return;
    const onMouseMove = (e) => {
      const position = btn.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.8, ease: 'power3.out' });
    };
    const onMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
    };
    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  };

  React.useEffect(() => {
    const cleanup1 = addMagnetic(btn1Ref);
    const cleanup2 = addMagnetic(btn2Ref);
    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
    }
  }, []);

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-bg-collage">
        <img 
          ref={heroImgRef}
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1920" 
          alt="Hero Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="reveal-wrapper"><span className="reveal-text">Stories</span></span>{' '}
          <span className="reveal-wrapper"><span className="reveal-text">That</span></span><br/>
          <span className="reveal-wrapper"><span className="reveal-text"><span>Move.</span></span></span>
        </h1>
        <p className="hero-subline">Automotive Filmmaker & Content Creator crafting powerful voice-driven visual stories.</p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary" ref={btn1Ref}>View My Work</a>
          <a href="#contact" className="btn btn-secondary" ref={btn2Ref}>Let's Collaborate</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
