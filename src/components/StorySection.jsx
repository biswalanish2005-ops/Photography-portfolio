import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stories = [
  { id: 1, image: '/Photos/DSC_0101 (1).jpg', label: 'Documentary Series', title: 'The Artisans of Kyoto', desc: 'An exploration into the lives of traditional craftsmen. Behind closed doors, the preservation of ancient techniques continues, captured through careful observation of their daily rituals and unmatched precision.', type: 'portrait' },
  { id: 2, image: '/Photos/DSC_0419.jpg', label: 'Cultural Portrait', title: 'Monsoon Aftermath', desc: 'Two children sitting quietly as the heavy rains subside. A moment of profound stillness and reflection amidst the lush, dripping foliage of the countryside. Their silent connection speaks volumes about resilience and innocence.', type: 'portrait' },
  { id: 3, image: '/Photos/DSC_0044.jpg', label: 'Editorial Essay', title: 'Urban Isolation', desc: 'A visual essay examining the juxtaposition of dense city architecture and human solitude. Using stark shadows and geometric frames to convey the quiet spaces we carve out within the bustling metropolis.', type: 'portrait' },
  { id: 4, image: '/Photos/DSC_0031.jpg', label: 'Landscape Study', title: 'The Endless Horizon', desc: 'A sweeping view of nature’s raw beauty. The uninterrupted vastness invites a sense of profound calm and perspective, reminding us of our small place in the grand design.', type: 'landscape' },
  { id: 5, image: '/Photos/DSC_0049.jpg', label: 'Environmental Portrait', title: 'Fields of Gold', desc: 'The fading sunlight touches the rural landscape. A documentation of the shifting seasons and the timeless rhythm of agricultural life, told through warm, enveloping light.', type: 'landscape' },
  { id: 6, image: '/Photos/DSC_0154.jpg', label: 'Street Photography', title: 'Passing Shadows', desc: 'A candid moment caught in the ebb and flow of daily life. This frame freezes the transient nature of existence, highlighting the fleeting poetry found in ordinary motion.', type: 'portrait' },
  { id: 7, image: '/Photos/DSC_0182.jpg', label: 'Visual Essay', title: 'Silhouettes at Dusk', desc: 'As the day gives way to night, the world is reduced to its essential shapes. A study of contrast and form, capturing the quiet transition between light and dark.', type: 'portrait' },
  { id: 8, image: '/Photos/DSC_0211.jpg', label: 'Documentary Series', title: 'Quiet Corners', desc: 'Hidden away from the main streets, this image discovers the charm of forgotten spaces. It is a testament to the beauty of decay and the stories held within weathered walls.', type: 'portrait' },
  { id: 9, image: '/Photos/DSC_0221.JPG', label: 'Atmospheric Landscape', title: 'Morning Mist', desc: 'A serene landscape enveloped in the early morning fog. The ethereal quality of the light transforms the scene into a living watercolor, evoking a sense of mystery and peace.', type: 'landscape' },
  { id: 10, image: '/Photos/DSC_0222.JPG', label: 'Nature Observation', title: 'Awakening', desc: 'The first light of day breaking over the horizon. A powerful representation of renewal and hope, captured in the delicate balance of dawn’s changing colors.', type: 'landscape' },
  { id: 11, image: '/Photos/DSC_0431.jpg', label: 'Cultural Observation', title: 'Community Ties', desc: 'A wide, cinematic look at a communal gathering. This photograph explores the dynamic relationships and vibrant energy that bind people together in shared spaces.', type: 'landscape' },
  { id: 12, image: '/Photos/DSC_0751.jpg', label: 'Editorial Portrait', title: 'The Weaver', desc: 'A detailed look at the hands that create. Highlighting the intricate skill and lifelong dedication of artisans who keep traditional crafts alive in a modern world.', type: 'portrait' },
  { id: 13, image: '/Photos/IMG_20210722_124209.jpg', label: 'Travel Diary', title: 'Journey’s Pause', desc: 'A moment of rest during a long journey. The expansive landscape offers a backdrop for reflection, emphasizing the profound silence found far from civilization.', type: 'landscape' },
  { id: 14, image: '/Photos/IMG_20260508_182650.jpg', label: 'Abstract Focus', title: 'Vertical Rhythms', desc: 'An exploration of vertical lines and natural textures. By focusing on the details, this image abstracts reality, inviting the viewer to appreciate the raw elements of design.', type: 'portrait' },
  { id: 15, image: '/Photos/IMG_9929.jpg', label: 'Intimate Observation', title: 'Glimpses of Solitude', desc: 'A poignant capture of a solitary figure. The composition uses negative space to amplify the sense of isolation, creating a compelling narrative of inner contemplation.', type: 'portrait' }
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
