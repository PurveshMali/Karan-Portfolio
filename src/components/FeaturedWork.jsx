import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { works } from '../utils/data';

const FeaturedWork = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openLightbox = (id) => {
    setActiveVideo(id);
  };

  const closeLightbox = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <section className="work" id="work">
        <div className="section-header">
          <h2>Featured Work</h2>
        </div>
        <div className="work-grid">
          {works.map((work) => (
            <div key={work.id} className="work-item" onClick={() => openLightbox(work.id)}>
              <img src={work.img} alt={work.title} loading="lazy" />
              <div className="work-item-overlay">
                <div className="play-icon"><Play size={40} /></div>
                <div className="work-item-info">
                  <div className="work-item-title">{work.title}</div>
                  <div className="work-item-meta">{work.brand} &bull; {work.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <div className={`lightbox ${activeVideo ? 'active' : ''}`} onClick={closeLightbox}>
        <div className="lightbox-close" onClick={closeLightbox}>&times;</div>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          {activeVideo && (
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedWork;
