import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Layers, 
  Server, 
  Cpu, 
  Database, 
  Terminal, 
  Palette, 
  Search,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Code,
  Layers,
  Server,
  Cpu,
  Database,
  Terminal,
  Palette
};

export default function Skills({ skillsData }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'ai_ml', label: 'AI, ML & Vision' },
    { id: 'database', label: 'Databases' },
    { id: 'tools_core', label: 'Tools & Core CS' },
    { id: 'design_media', label: 'Design & Media' }
  ];

  const filteredCategories = useMemo(() => {
    return skillsData.categories
      .filter((cat) => (activeFilter === 'all' ? true : cat.id === activeFilter))
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const matchingItems = cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return {
          ...cat,
          items: matchingItems
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [skillsData, activeFilter, searchQuery]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Inventory</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Curated set of programming languages, web technologies, backend frameworks, and AI toolchains directly verified from my resume.
          </p>
        </div>

        {/* Controls: Filter Pills & Search Bar */}
        <div className="skills-controls">
          <div className="skills-filter-pills">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="skills-search-wrapper">
            <Search size={15} className="skills-search-icon" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
              aria-label="Search skills"
            />
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              No technologies found matching "<strong>{searchQuery}</strong>". Try clearing your search query.
            </p>
          </div>
        ) : (
          <div className="skills-categories-grid">
            {filteredCategories.map((category) => {
              const IconComponent = iconMap[category.items[0]?.icon] || Code;
              return (
                <div key={category.id} className="card skill-category-card">
                  <div className="category-card-header">
                    <IconComponent size={20} className="category-icon" />
                    <h3 className="category-title">{category.name}</h3>
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {category.items.length} skills
                    </span>
                  </div>

                  <div className="skills-list">
                    {category.items.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-row">
                        <div className="skill-row-top">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level-badge">{skill.level}</span>
                        </div>
                        <div className="skill-tags">
                          {skill.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="skill-mini-tag">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
