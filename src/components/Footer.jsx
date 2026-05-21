import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-title editorial-title">Let's Tell Your Story Beautifully</h2>
          <a href="mailto:hello@anishbiswal.com" className="btn-outline">
            Inquire Now
          </a>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Anish Biswal Photography
          </div>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Vimeo</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
