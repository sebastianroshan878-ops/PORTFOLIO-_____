import React from 'react';
import { 
  CheckCircle, 
  Terminal, 
  Compass, 
  Cpu, 
  Layers, 
  Globe, 
  UserCheck 
} from 'lucide-react';

export default function About({ about, languages, softSkills, personal }) {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An undergraduate software developer combining core computer science foundations with modern full-stack web engineering and applied AI.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="card about-text-card">
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Engineering Scalable Systems with Practical Impact
            </h3>

            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="about-paragraph">
                {p}
              </p>
            ))}

            <div style={{ marginTop: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Key Technical Strengths
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {about.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Soft Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Communication & Languages */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Globe size={18} style={{ color: 'var(--text-accent)' }} />
                <h3 style={{ fontSize: '1.15rem' }}>Languages Spoken</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{lang.name}</span>
                    <span className="badge badge-accent" style={{ fontSize: '0.75rem' }}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional & Soft Skills */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Compass size={18} style={{ color: 'var(--text-accent)' }} />
                <h3 style={{ fontSize: '1.15rem' }}>Professional Capabilities</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Core interpersonal and engineering habits practiced through collaborative coursework, team problem solving, and technical apprenticeships.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="badge"
                    style={{
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.825rem',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
