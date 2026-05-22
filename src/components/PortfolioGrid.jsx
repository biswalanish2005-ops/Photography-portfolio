import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const gridImages = [
  { id: 1, src: '/Photos/DSC_0154.jpg', title: 'Monsoon Echoes' },
  { id: 2, src: '/Photos/DSC_0222.JPG', title: 'First Light' },
  { id: 3, src: '/Photos/DSC_0211.jpg', title: 'Urban Textures' },
  { id: 4, src: '/Photos/IMG_20210722_124209.jpg', title: 'Silent Observers' },
  { id: 5, src: '/Photos/DSC_0751.jpg', title: 'Woven Threads' },
  { id: 6, src: '/Photos/DSC_0431.jpg', title: 'The Festival' },
  { id: 7, src: '/Photos/IMG_9929.jpg', title: 'Quiet Solitude' },
];

export default function PortfolioGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="editorial-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
          >
            Curated Moments
          </motion.h2>
          <motion.p 
            style={{ color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A Selection of Timeless Frames
          </motion.p>
        </div>

        <div className="masonry-grid" ref={ref}>
          {gridImages.map((img, index) => (
            <motion.div 
              key={img.id} 
              className="grid-item"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPhoto(img)}
            >
              <motion.img 
                layoutId={`photo-grid-${img.id}`}
                src={img.src} 
                alt={img.title} 
                loading="lazy" 
              />
              <div className="grid-overlay">
                <h3 className="grid-title">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="popup-container">
              <div className="popup-content-wrapper" onClick={(e) => e.stopPropagation()}>
                <div className="popup-image-container">
                  <motion.img 
                    layoutId={`photo-grid-${selectedPhoto.id}`}
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="popup-image"
                    transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  />
                </div>
                
                <motion.div 
                  className="popup-caption-panel"
                  initial={{ opacity: 0, x: 40, y: 15 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 25, y: 5 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="popup-photo-meta">Curated Frame • Archive {selectedPhoto.id}</span>
                  <h3>{selectedPhoto.title}</h3>
                  <p className="popup-photo-desc">
                    Captured with cinematic editorial lenses, focusing on natural light, texture, and authentic human or landscape geometries.
                  </p>
                  <button className="popup-close-btn" onClick={() => setSelectedPhoto(null)}>
                    Close
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
