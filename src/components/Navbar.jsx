import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const btnRef = useRef(null);

  // Magnetic Button Logic for the Contact button
  useEffect(() => {
    const btn = btnRef.current;
    
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
    <nav className="navbar">
      <div className="logo">KARAN GADE</div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#expertise">Expertise</a>
        <a href="#contact" className="btn btn-outline" ref={btnRef}>Let's Talk</a>
      </div>
    </nav>
  );
};

export default Navbar;
