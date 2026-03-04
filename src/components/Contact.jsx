import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    
    const onMouseMove = (e) => {
      const position = btn.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.8,
        ease: 'power3.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Let's Build Something That <span>Moves People.</span></h2>
        <a href="mailto:hello@karangade.com" className="btn btn-primary btn-large" ref={btnRef}>Start a Project</a>
        <div className="social-links">
          <a href="https://www.instagram.com/thekarangade/" className="social-link">Instagram</a>
          <a href="https://www.youtube.com/@Thekarangade" className="social-link">YouTube</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
