import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Code, 
  ExternalLink,
  FileText
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero({ personal, stats, onOpenResume }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Main Introduction & CTAs */}
          <div className="hero-content">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>{personal.availability}</span>
            </div>

            <div>
              <h1 className="hero-name">
                {personal.name}
              </h1>
              <div className="hero-role-wrapper">
                <span>{personal.role}</span>
              </div>
            </div>

            <p className="hero-bio">
              {personal.summary}
            </p>

            <div className="hero-meta-badges">
              <span className="badge">
                <MapPin size={13} style={{ color: 'var(--text-accent)' }} />
                <span>{personal.location}</span>
              </span>
              <span className="badge">
                <GraduationCap size={13} style={{ color: 'var(--text-accent)' }} />
                <span>Vimal Jyothi Engineering College (S7 CSE)</span>
              </span>
              <span className="badge">
                <Code size={13} style={{ color: 'var(--text-accent)' }} />
                <span>MERN Stack & Applied AI</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href={personal.resumeUrl} 
                download="Sebastian_Roshan_Resume.pdf" 
                className="btn btn-secondary"
                title="Download Sebastian Roshan's Official Resume"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-outline">
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Social Icons */}
            <div className="hero-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Sebastian Roshan on GitHub"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Sebastian Roshan on LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="social-link"
                title="Email Sebastian Roshan"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              <a
                href={`tel:${personal.phoneRaw}`}
                className="social-link"
                title="Call Sebastian Roshan"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Right: Interactive Terminal Code Card */}
          <div className="hero-visual">
            <div className="code-terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">developer_profile.json</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>UTF-8</span>
              </div>
              <div className="terminal-body">
                <div><span className="code-comment">// Verified Developer Credentials</span></div>
                <div><span className="code-keyword">const</span> <span className="code-var">candidate</span> = &#123;</div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-prop">name:</span> <span className="code-str">"{personal.name}"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-prop">education:</span> <span className="code-str">"B.Tech CSE (S7, 2023-Present)"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-prop">college:</span> <span className="code-str">"Vimal Jyothi Engineering College"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-prop">location:</span> <span className="code-str">"Kannur, Kerala"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-prop">primaryStack:</span> [
                  <div style={{ paddingLeft: '1rem' }}>
                    <span className="code-str">"React.js"</span>, <span className="code-str">"Node.js"</span>, <span className="code-str">"MongoDB"</span>,
                    <br />
                    <span className="code-str">"Python"</span>, <span className="code-str">"LangChain"</span>, <span className="code-str">"PyTorch"</span>
                  </div>
                  <span style={{ paddingLeft: '0.5rem' }}>],</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-prop">specialization:</span> <span className="code-str">"Full Stack + AI & Vision"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-prop">status:</span> <span className="code-str" style={{ color: '#38bdf8' }}>"Available For Opportunities"</span>
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Stats Strip */}
        <div className="stats-strip">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-note">{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
