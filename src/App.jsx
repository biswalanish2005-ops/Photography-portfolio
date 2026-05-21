import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import PortfolioGrid from './components/PortfolioGrid';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StorySection />
      <PortfolioGrid />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;
