import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Code2, 
  CheckCircle, 
  Building2 
} from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Background</span>
          </div>
          <h2 className="section-title">Internships & Professional Training</h2>
          <p className="section-subtitle">
            Accredited internships and hands-on professional apprenticeships reflecting real engineering practices and domain immersion.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item) => (
            <div key={item.id} className="card experience-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{item.role}</h3>
                  <div className="exp-company">
                    <Building2 size={16} />
                    <span>{item.company}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {item.companyLocation}
                    </span>
                  </div>
                </div>

                <div className="exp-badge-group">
                  <span className="badge badge-accent">{item.badge}</span>
                  <span className="exp-duration">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {item.duration}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>

              <ul className="exp-bullets">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
