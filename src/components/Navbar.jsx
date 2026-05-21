import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Portfolio', 'Films', 'Stories', 'About', 'Contact', 'FAQ', 'Blog'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/">ANISH BISWAL</Link>
      </div>
      
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            {item === 'Portfolio' ? (
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            ) : item === 'Home' ? (
              <Link to="/" className="nav-link">Home</Link>
            ) : (
              <a href={`/#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            )}
          </li>
        ))}
      </ul>

      <button 
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
