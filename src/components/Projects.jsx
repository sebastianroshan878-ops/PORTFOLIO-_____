import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Info 
} from 'lucide-react';
import { Github } from './Icons';

export default function Projects({ projects, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Computer Vision & AI', 'Generative AI & Full Stack'];

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Recruiter-ready real projects developed during my B.Tech Computer Science curriculum and specialization programs.
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card project-card">
              <div>
                {/* Header */}
                <div className="project-card-header">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <span className="project-status-badge">
                    {project.status.split('(')[0].trim()}
                  </span>
                </div>

                {/* Tagline / Summary */}
                <p className="project-description" style={{ marginTop: '0.85rem' }}>
                  {project.description}
                </p>

                {/* Key Engineering Features */}
                <div className="project-highlights-box" style={{ marginTop: '1.25rem' }}>
                  <div className="highlights-title">
                    <Sparkles size={14} style={{ color: 'var(--text-accent)' }} />
                    <span>Technical Highlights & Architecture</span>
                  </div>
                  <ul className="highlights-list">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Actions */}
              <div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Technologies & Libraries
                  </div>
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="badge badge-accent" style={{ fontSize: '0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-sm btn-primary"
                  >
                    <Info size={15} />
                    <span>System Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                    title="View Sebastian's GitHub Repositories"
                  >
                    <Github size={15} />
                    <span>GitHub Repos</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
