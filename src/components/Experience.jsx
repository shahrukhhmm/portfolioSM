import { Award, Briefcase, Check, FileDown, GraduationCap } from 'lucide-react'
import { cvPath } from '../data/site'
import { experienceList } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <Briefcase size={14} />
            <span>CAREER PROGRESSION</span>
          </div>
          <h2 className="section-title">
            Professional Experience
          </h2>
          <p className="section-subtitle">
            A comprehensive chronicle of technical leadership, full-stack development, and production ownership over the last 5+ years.
          </p>
        </div>

        <div className="experience-layout">
          {/* Timeline Feed */}
          <div className="timeline-feed">
            {experienceList.map(job => (
              <div key={job.id} className="timeline-card">
                <div className="timeline-marker-dot" />
                <div className="timeline-card-inner">
                  <div className="timeline-top-row">
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className={`timeline-period-badge ${job.current ? 'current' : ''}`}>
                      {job.period}
                    </div>
                  </div>

                  <div className="timeline-company-row">
                    <span>{job.company}</span>
                    <span style={{ color: 'var(--text-muted)' }}>·</span>
                    <span className="company-loc">{job.location}</span>
                    {job.scope && (
                      <>
                        <span style={{ color: 'var(--text-muted)' }}>·</span>
                        <span style={{ color: 'var(--accent-cyan)', fontSize: '11px' }}>{job.scope}</span>
                      </>
                    )}
                  </div>

                  <div className="timeline-bullets">
                    {job.highlights.map((bullet, i) => (
                      <div key={i} className="timeline-bullet-item">
                        <Check size={14} className="bullet-icon" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="timeline-stack-row">
                    {job.tags.map(tag => (
                      <span key={tag} className="stack-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar: Education & Quick Info */}
          <aside className="experience-sidebar">
            <div className="sidebar-box">
              <h3 className="sidebar-box-title">
                <GraduationCap size={18} style={{ color: 'var(--accent)' }} />
                <span>Education</span>
              </h3>

              <div className="edu-entry">
                <div className="edu-degree">Bachelor of Science in Computer Science (BSCS)</div>
                <div className="edu-school">Allama Iqbal Open University</div>
                <div className="edu-date">Sep 2019 – Jun 2023 · Pakistan</div>
              </div>

              <div className="edu-entry">
                <div className="edu-degree">Intermediate in Computer Science (ICS)</div>
                <div className="edu-school">Rawalpindi College of Commerce</div>
                <div className="edu-date">Sep 2017 – Jun 2019 · Rawalpindi</div>
              </div>
            </div>

            <div className="sidebar-box" style={{ background: 'var(--bg-card-subtle)' }}>
              <h3 className="sidebar-box-title">
                <Award size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span>Core Profile Summary</span>
              </h3>
              <p style={{ fontSize: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                <strong>Role:</strong> Full-Stack Developer &amp; Technical Lead<br />
                <strong>Experience:</strong> 5+ Years<br />
                <strong>Primary Stack:</strong> Laravel, PHP, Node.js, React, MERN, AWS, DevOps<br />
                <strong>Leadership:</strong> 200+ multi-domain website portfolio, code audits, cross-functional team coordination.
              </p>
              <a
                href={cvPath}
                download="Shahrukh_Malik_Resume.pdf"
                className="btn-header-cv"
                style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
              >
                <FileDown size={14} />
                <span>Download Executive Résumé (PDF)</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
