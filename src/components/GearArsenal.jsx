import React from 'react';

const GearArsenal = () => {
  return (
    <section className="gear" id="gear">
      <div className="section-header">
        <h2>The Toolkit</h2>
      </div>
      <div className="gear-list">
        <div className="gear-category">
          <h3>Cameras</h3>
          <ul>
            <li>Sony FX3 Cinema Line</li>
            <li>RED Komodo 6K</li>
          </ul>
        </div>
        <div className="gear-category">
          <h3>Lenses</h3>
          <ul>
            <li>Sigma Art 24-70mm f/2.8</li>
            <li>Sirui Anamorphic Set</li>
          </ul>
        </div>
        <div className="gear-category">
          <h3>Motion & Audio</h3>
          <ul>
            <li>DJI RS 3 Pro Gimbal</li>
            <li>Custom FPV Cinema Drones</li>
            <li>Sennheiser MKH 416</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GearArsenal;
