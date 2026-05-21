import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const allPhotos = [
  { id: 1, src: '/Photos/DSC_0101 (1).jpg', title: 'Kyoto Artisans' },
  { id: 2, src: '/Photos/DSC_0419.jpg', title: 'Monsoon Aftermath' },
  { id: 3, src: '/Photos/DSC_0044.jpg', title: 'Urban Isolation' },
  { id: 4, src: '/Photos/DSC_0031.jpg', title: 'The Endless Horizon' },
  { id: 5, src: '/Photos/DSC_0049.jpg', title: 'Fields of Gold' },
  { id: 6, src: '/Photos/DSC_0154.jpg', title: 'Passing Shadows' },
  { id: 7, src: '/Photos/DSC_0182.jpg', title: 'Silhouettes at Dusk' },
  { id: 8, src: '/Photos/DSC_0211.jpg', title: 'Quiet Corners' },
  { id: 9, src: '/Photos/DSC_0221.JPG', title: 'Morning Mist' },
  { id: 10, src: '/Photos/DSC_0222.JPG', title: 'Awakening' },
  { id: 11, src: '/Photos/DSC_0431.jpg', title: 'Community Ties' },
  { id: 12, src: '/Photos/DSC_0751.jpg', title: 'The Weaver' },
  { id: 13, src: '/Photos/IMG_20210722_124209.jpg', title: 'Journey’s Pause' },
  { id: 14, src: '/Photos/IMG_20260508_182650.jpg', title: 'Vertical Rhythms' },
  { id: 15, src: '/Photos/IMG_9929.jpg', title: 'Glimpses of Solitude' }
];

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: 'var(--bg-darker)', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header">
          <motion.h1 
            className="editorial-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Complete Portfolio
          </motion.h1>
          <motion.p 
            style={{ color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A visual collage of the entire collection
          </motion.p>
        </div>

        <div className="masonry-grid">
          {allPhotos.map((img, index) => (
            <motion.div 
              key={img.id} 
              className="grid-item"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index % 10) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="grid-overlay">
                <h3 className="grid-title">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
