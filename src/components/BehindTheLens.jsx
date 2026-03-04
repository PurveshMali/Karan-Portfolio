import React from 'react';

const BehindTheLens = () => {
  return (
    <section className="bts" id="bts">
      <div className="section-header">
        <h2>Behind The Lens</h2>
      </div>
      <div className="bts-gallery">
        <div className="bts-item">
          <img src="public/images/bts_edit_bay_1772605940388.png" alt="BTS Shooting Car" loading="lazy" />
        </div>
        <div className="bts-item">
          <img src="public/images/bts_fpv_drone_1772605956169.png" alt="BTS Edit Bay" loading="lazy" />
        </div>
        <div className="bts-item">
          <img src="public/images/bts_shooting_car_1772605918501.png" alt="BTS FPV Drone" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default BehindTheLens;
