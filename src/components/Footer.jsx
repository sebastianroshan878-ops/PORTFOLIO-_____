import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Heart, 
  FileText 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer({ personal, onOpenResume }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container footer-content">
          <div className="brand-badge" style={{ width: '48px', height: '48px', fontSize: '1.3rem' }}>
            SR
          </div>

          <div>
            <h3 className="footer-brand">{personal.name}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
              Full Stack Web Developer & AI / Machine Learning Engineer
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Kannur, Kerala, India • Vimal Jyothi Engineering College
            </p>
          </div>

          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#contact" className="footer-link">Contact</a>
            <button 
              onClick={onOpenResume} 
              className="footer-link" 
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Resume
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="social-link"
              title="Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${personal.phoneRaw}`}
              className="social-link"
              title="Phone"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} {personal.name}. Built with React & modern web standards. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Back-To-Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to Top"
        title="Back to Top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
