import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    image: '/Photos/DSC_0101 (1).jpg',
    label: 'Documentary Series',
    title: 'The Artisans of Kyoto',
    desc: 'An exploration into the lives of traditional craftsmen. Behind closed doors, the preservation of ancient techniques continues, captured through careful observation of their daily rituals and unmatched precision.',
    type: 'portrait'
  },
  {
    id: 2,
    image: '/Photos/DSC_0419.jpg',
    label: 'Cultural Portrait',
    title: 'Monsoon Aftermath',
    desc: 'Two children sitting quietly as the heavy rains subside. A moment of profound stillness and reflection amidst the lush, dripping foliage of the countryside. Their silent connection speaks volumes about resilience and innocence.',
    type: 'portrait'
  },
  {
    id: 3,
    image: '/Photos/DSC_0044.jpg',
    label: 'Editorial Essay',
    title: 'Urban Isolation',
    desc: 'A visual essay examining the juxtaposition of dense city architecture and human solitude. Using stark shadows and geometric frames to convey the quiet spaces we carve out within the bustling metropolis.',
    type: 'portrait'
  }
];

export default function StorySection() {
  return (
    <section className="story-section container" id="stories">
      {stories.map((story, index) => (
        <StoryRow key={story.id} story={story} index={index} />
      ))}
    </section>
  );
}

function StoryRow({ story, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isLandscape = story.type === 'landscape';

  return (
    <div className={`story-row ${isLandscape ? 'story-landscape' : ''}`} ref={ref}>
      <motion.div 
        className="story-image-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div 
          className="story-bg-blur" 
          style={{ backgroundImage: `url('${story.image}')` }}
        />
        <img src={story.image} alt={story.title} className="story-image" />
      </motion.div>
      
      <motion.div 
        className="story-content"
        initial={{ opacity: 0, x: isLandscape ? 0 : (index % 2 === 0 ? 30 : -30), y: isLandscape ? 30 : 0 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isLandscape ? 0 : (index % 2 === 0 ? 30 : -30), y: isLandscape ? 30 : 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="story-label">{story.label}</span>
        <h2 className="story-title editorial-title">{story.title}</h2>
        <p className="story-desc">{story.desc}</p>
        <a href="#view" className="link-cta">
          View Story <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  );
}
