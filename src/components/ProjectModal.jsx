import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge badge-accent" style={{ fontSize: '0.72rem', marginBottom: '0.35rem' }}>
              {project.category}
            </span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Status Alert */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--accent-emerald)' }}>Project Status:</span>
            <span style={{ color: 'var(--text-secondary)' }}>{project.status}</span>
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Project Overview
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </div>

          {/* Architecture Pipeline */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Architecture & Data Flow
            </h4>
            <div className="architecture-flow">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="flow-step">
                  <div className="flow-step-num">{idx + 1}</div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Implementation Details
            </h4>
            <ul className="highlights-list">
              {project.keyFeatures.map((feat, fIdx) => (
                <li key={fIdx}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Complete Technology Stack
            </h4>
            <div className="project-tech-stack">
              {project.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="badge badge-accent" style={{ fontSize: '0.78rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-sm btn-outline">
            Close
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            <Github size={15} />
            <span>View GitHub Repository</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
