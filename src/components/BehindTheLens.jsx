import React from 'react';

const BehindTheLens = () => {
  return (
    <section className="bts" id="bts">
      <div className="section-header">
        <h2>Behind The Lens</h2>
      </div>
      <div className="bts-gallery">
        <div className="bts-item">
          <img src="https://images.unsplash.com/photo-1590130838116-2fd1ff3b6842?auto=format&fit=crop&q=80&w=800" alt="BTS Shooting Car" loading="lazy" />
        </div>
        <div className="bts-item">
          <img src="https://images.unsplash.com/photo-1574717024453-354056badcab?auto=format&fit=crop&q=80&w=800" alt="BTS Edit Bay" loading="lazy" />
        </div>
        <div className="bts-item">
          <img src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=800" alt="BTS FPV Drone" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default BehindTheLens;
