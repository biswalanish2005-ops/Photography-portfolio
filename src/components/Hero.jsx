import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img 
        src="/Photos/hero.jpg" 
        alt="Cinematic Photography" 
        className="hero-bg" 
      />
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Frames That Tell Stories
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Documenting authentic emotions with a cinematic editorial lens
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Link to="/portfolio" className="btn-outline">
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
