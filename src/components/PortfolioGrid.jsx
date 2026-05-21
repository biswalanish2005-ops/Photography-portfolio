import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="grid-overlay">
                <h3 className="grid-title">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
