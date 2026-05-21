import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about-section container" id="about" ref={ref}>
      <div className="about-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/Photos/DSC_0221.JPG" 
            alt="Portrait of the Photographer" 
            className="about-image" 
          />
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="editorial-title">The Artist</h2>
          <p>
            I believe that the most compelling photographs are the ones that tell a story without saying a word. The fleeting expressions, the quiet reflections, the cultural nuances — these are the elements that make up the tapestry of our shared human experience.
          </p>
          <p>
            My approach is deeply rooted in documentary storytelling and cinematic observation. I strive to blend into the background to capture the world authentically, turning fleeting, overlooked moments into powerful visual essays that resonate on an emotional level.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <img src="/Photos/DSC_0160 (1).jpg" alt="Signature" style={{ maxHeight: '80px', opacity: 0.8 }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
