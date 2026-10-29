import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sr_portfolio_theme') || 'dark';
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sr_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Background Decorator Elements */}
      <div className="grid-background" aria-hidden="true"></div>
      <div className="ambient-glow ambient-glow-1" aria-hidden="true"></div>
      <div className="ambient-glow ambient-glow-2" aria-hidden="true"></div>

      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
        personal={portfolioData.personal}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          personal={portfolioData.personal}
          stats={portfolioData.stats}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <About
          about={portfolioData.about}
          languages={portfolioData.languages}
          softSkills={portfolioData.softSkills}
          personal={portfolioData.personal}
        />

        <Skills
          skillsData={portfolioData.skills}
        />

        <Projects
          projects={portfolioData.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Experience
          experience={portfolioData.experience}
        />

        <Education
          education={portfolioData.education}
        />

        <Certifications
          certifications={portfolioData.certifications}
        />

        <Contact
          personal={portfolioData.personal}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Interactive Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {resumeModalOpen && (
        <ResumeModal
          personal={portfolioData.personal}
          education={portfolioData.education}
          experience={portfolioData.experience}
          skills={portfolioData.skills}
          projects={portfolioData.projects}
          certifications={portfolioData.certifications}
          languages={portfolioData.languages}
          onClose={() => setResumeModalOpen(false)}
        />
      )}
    </div>
  );
}
