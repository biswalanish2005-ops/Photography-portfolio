import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="testimonial-section" id="faq">
      <div className="container" ref={ref}>
        <motion.div 
          className="quote-icon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        >
          "
        </motion.div>
        <motion.h3 
          className="testimonial-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          "Anish didn't just take pictures; he captured the exact feeling of the moment. Every time we look at our portfolio, we are transported back to those quiet, beautiful experiences."
        </motion.h3>
        <motion.p 
          className="testimonial-author"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          — Sophia & Alexander, Editorial Campaign
        </motion.p>
      </div>
    </section>
  );
}
