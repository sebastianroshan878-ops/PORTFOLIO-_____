import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen 
} from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering education and secondary academic milestones from accredited institutions in Kerala.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item, idx) => (
            <div key={idx} className="card education-card">
              <div>
                <div className="edu-header">
                  <div className="edu-year">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {item.duration}
                  </div>
                  <span className="edu-grade-badge">
                    {item.grade}
                  </span>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <div className="edu-institution">{item.institution}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <ul className="edu-details">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--text-accent)' }}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
