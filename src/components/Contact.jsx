import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact({ personal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto url to trigger user's default email client with pre-filled fields
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I am actively open to discussing software engineering opportunities, internships, and technical collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Clickable Contact Cards */}
          <div className="contact-info-list">
            {/* Email Card */}
            <div className="contact-card-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-item-label">Direct Email</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="contact-item-value"
                    title="Send Email to Sebastian"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="btn btn-sm btn-outline btn-icon"
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-card-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-item-label">Phone / WhatsApp</div>
                  <a
                    href={`tel:${personal.phoneRaw}`}
                    className="contact-item-value"
                    title="Call Sebastian Roshan"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="btn btn-sm btn-outline btn-icon"
                title="Copy Phone Number"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <Linkedin size={22} />
                </div>
                <div>
                  <div className="contact-item-label">LinkedIn Profile</div>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-value"
                  >
                    in/{personal.linkedinUsername}
                  </a>
                </div>
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline btn-icon"
                title="Open LinkedIn Profile"
                aria-label="Open LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="contact-card-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <Github size={22} />
                </div>
                <div>
                  <div className="contact-item-label">GitHub Profile</div>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-value"
                  >
                    github.com/{personal.githubUsername}
                  </a>
                </div>
              </div>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline btn-icon"
                title="Open GitHub Profile"
                aria-label="Open GitHub"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Location Card */}
            <div className="contact-card-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">
                    {personal.location}
                  </div>
                </div>
              </div>
              <span className="badge badge-outline" style={{ fontSize: '0.75rem' }}>
                Kerala, IN
              </span>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <MessageSquare size={20} style={{ color: 'var(--text-accent)' }} />
              <h3 style={{ fontSize: '1.25rem' }}>Send a Direct Message</h3>
            </div>

            {submitted && (
              <div className="form-success-alert" style={{ marginBottom: '1.25rem' }}>
                <Check size={18} />
                <span>Thank you! Your email client has been prepared. I look forward to connecting!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder="e.g. John Doe / Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Your Work Email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="Developer Role / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
