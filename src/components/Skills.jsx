import { Check, Cpu } from 'lucide-react'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <Cpu size={14} />
            <span>SKILL MATRIX</span>
          </div>
          <h2 className="section-title">
            Technical Competencies &amp; Toolkit
          </h2>
          <p className="section-subtitle">
            A comprehensive view of technologies, frameworks, cloud services, and tools applied across production environments.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map(cat => {
            const Icon = cat.icon
            return (
              <div key={cat.title} className="skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                </div>

                <div className="skill-items-list">
                  {cat.skills.map(sk => (
                    <span key={sk} className="skill-pill">
                      <Check size={12} style={{ color: 'var(--accent)' }} />
                      <span>{sk}</span>
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
