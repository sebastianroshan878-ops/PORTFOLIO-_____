import React from 'react';
import { 
  Award, 
  Calendar, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Credentials & Specializations</span>
          </div>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Industry-recognized certifications and intensive hands-on technical programs verified from my resume.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="card cert-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="badge badge-accent" style={{ fontSize: '0.75rem' }}>
                  {cert.status}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>

              <p className="cert-summary">
                {cert.summary}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontSize: '0.8rem', fontWeight: 600 }}>
                <CheckCircle size={15} />
                <span>Verified Academic Record</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
