import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  FileText,
  ExternalLink 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ResumeModal({ personal, education, experience, skills, projects, certifications, languages, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-dialog" 
        style={{ maxWidth: '820px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={20} style={{ color: 'var(--text-accent)' }} />
            <h3 className="modal-title">Verified Resume Preview</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <a
              href={personal.resumeUrl}
              download="Sebastian_Roshan_Resume.pdf"
              className="btn btn-sm btn-primary"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <button 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border-strong)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              {personal.name.toUpperCase()}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span>{personal.phone}</span>
              <span>•</span>
              <a href={`mailto:${personal.email}`} style={{ color: 'var(--text-accent)' }}>
                {personal.email}
              </a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-accent)' }}>
                linkedin.com/in/{personal.linkedinUsername}
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '0.35rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              <span>{personal.addressDetails}</span>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-accent)' }}>
                github.com/{personal.githubUsername}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, borderBottom: '1px solid var(--border-strong)', paddingBottom: '0.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Summary
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              {personal.summary}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, borderBottom: '1px solid var(--border-strong)', paddingBottom: '0.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontWeight: 600 }}>
                      {edu.grade}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    <div>{edu.duration}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Practical Training */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, borderBottom: '1px solid var(--border-strong)', paddingBottom: '0.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Internship & Practical Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                      {exp.role} | <span style={{ color: 'var(--text-accent)' }}>{exp.company}</span>
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {exp.duration}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    {exp.companyLocation}
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, borderBottom: '1px solid var(--border-strong)', paddingBottom: '0.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Academic & Capstone Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                    {proj.title}
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.35rem' }}>
                    {proj.keyFeatures.map((kf, kfIdx) => (
                      <li key={kfIdx}>{kf}</li>
                    ))}
                    <li>
                      <strong>Technologies:</strong> {proj.technologies.join(', ')}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, borderBottom: '1px solid var(--border-strong)', paddingBottom: '0.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Technical Skills
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <div><strong>Programming Languages:</strong> Python, C, Java, JavaScript</div>
              <div><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js, Responsive Web Design</div>
              <div><strong>Frameworks/Libraries:</strong> Flask, React.js, Express.js, PyTorch, LangChain</div>
              <div><strong>Database:</strong> MySQL, MongoDB, ChromaDB</div>
              <div><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Overleaf, Streamlit</div>
              <div><strong>Core Concepts:</strong> Data Structures, OOP, DBMS, Computer Networks</div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, borderBottom: '1px solid var(--border-strong)', paddingBottom: '0.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Courses & Certifications
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {certifications.map((c, cIdx) => (
                <div key={cIdx}>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {c.title} — <span style={{ color: 'var(--text-accent)' }}>{c.issuer}</span> ({c.date})
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {c.summary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-sm btn-outline">
            Close Preview
          </button>
          <a
            href={personal.resumeUrl}
            download="Sebastian_Roshan_Resume.pdf"
            className="btn btn-sm btn-primary"
          >
            <Download size={14} />
            <span>Download Official Resume PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
