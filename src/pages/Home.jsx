import React from 'react';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import Testimonial from '../components/Testimonial';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <Testimonial />
      <About />
    </>
  );
}
