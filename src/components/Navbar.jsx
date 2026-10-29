import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Download, 
  FileText, 
  Mail, 
  Sparkles 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar({ theme, toggleTheme, onOpenResume, personal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="brand-logo" aria-label="Sebastian Roshan Home">
            <div className="brand-badge">SR</div>
            <div className="brand-text">
              <span className="brand-name">{personal.name}</span>
              <span className="brand-role">Software Developer</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Theme Toggle, Resume Download, Mobile Menu Button */}
          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={onOpenResume}
              className="btn btn-sm btn-outline"
              title="Preview Verified Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            <a
              href={personal.resumeUrl}
              download="Sebastian_Roshan_Resume.pdf"
              className="btn btn-sm btn-primary"
              title="Download Sebastian Roshan's Resume (PDF)"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href} className="mobile-nav-item">
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            onClick={() => {
              handleLinkClick();
              onOpenResume();
            }}
            className="btn btn-outline"
            style={{ width: '100%' }}
          >
            <FileText size={16} />
            <span>Preview Resume</span>
          </button>

          <a
            href={personal.resumeUrl}
            download="Sebastian_Roshan_Resume.pdf"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={handleLinkClick}
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </>
  );
}
