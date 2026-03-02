import React from 'react';

const Clients = () => {
  return (
    <section className="clients">
      <p className="clients-title">TRUSTED BY</p>
      <div className="clients-track">
        <div className="client-logo">Porsche</div>
        <div className="client-logo">BMW</div>
        <div className="client-logo">Mercedes</div>
        <div className="client-logo">Royal Enfield</div>
        <div className="client-logo">Audi</div>
        <div className="client-logo">Jeep</div>
        {/* Duplicate for infinite scroll loop */}
        <div className="client-logo">Porsche</div>
        <div className="client-logo">BMW</div>
        <div className="client-logo">Mercedes</div>
        <div className="client-logo">Royal Enfield</div>
        <div className="client-logo">Audi</div>
        <div className="client-logo">Jeep</div>
      </div>
    </section>
  );
};

export default Clients;
