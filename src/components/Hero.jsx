import { ArrowRight, Copy, FileText, Github, Globe2, Layers3, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react'
import { cvPath, email, whatsappUrl, linkedinUrl, githubUrl } from '../data/site'

export default function Hero({ copyToClipboard }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content-col">
          <div className="availability-pill">
            <span className="pulse-dot" />
            <span>Available for Technical Lead & Senior Full-Stack Roles</span>
          </div>

          <div className="hero-role-badge">
            <span>FULL-STACK DEVELOPER</span>
            <span className="sep">/</span>
            <span>TEAM LEAD</span>
            <span className="sep">/</span>
            <span style={{ color: 'var(--accent)' }}>CTO-LEVEL SCOPE</span>
          </div>

          <h1 className="hero-title">
            Engineering systems that scale.<br />
            <span className="hero-highlight">Leading teams</span> that deliver.
          </h1>

          <p className="hero-bio">
            I’m <strong>Shahrukh Malik</strong> — Full-Stack Developer and Technical Lead with <strong>5+ years</strong> of hands-on experience across <strong>Laravel/PHP</strong>, <strong>MERN/React</strong>, <strong>Node.js</strong>, <strong>AWS</strong>, and <strong>AI/RAG</strong> architectures. Currently orchestrating engineering operations, guiding cross-functional teams, and managing a multi-domain fleet of <strong>200+ Laravel websites</strong> in production.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={cvPath}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              title="View Comprehensive Resume PDF"
            >
              <FileText size={16} />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
              title="Direct WhatsApp Message"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="social-strip">
            <span>CONNECT DIRECTLY:</span>
            <div className="social-links-group">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="Shahrukh Malik LinkedIn"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="Shahrukh Malik GitHub"
              >
                <Github size={16} />
              </a>

              <a
                href={`mailto:${email}`}
                className="social-icon-btn"
                title={`Email ${email}`}
              >
                <Mail size={16} />
              </a>

              <button
                onClick={() => copyToClipboard(email, 'Email')}
                className="social-icon-btn"
                title="Copy Email Address"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Column with Real Portrait */}
        <div className="hero-visual-wrap">
          <div className="portrait-frame">
            <div className="portrait-img-wrap">
              <img
                src="/images/author-2.jpeg"
                alt="Shahrukh Malik — Full-Stack Developer & Technical Lead"
                loading="eager"
              />
              <div className="portrait-overlay-gradient" />
              <div className="portrait-footer-info">
                <div>
                  <div className="portrait-name">Shahrukh Malik</div>
                  <div className="portrait-loc">
                    <MapPin size={12} />
                    <span>Pakistan · Global Availability</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)' }}>
                    TECH LEAD
                  </div>
                  <div style={{ fontSize: '10px', color: '#cbd5e1' }}>5+ Years Exp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Achievement Chips */}
          <div className="floating-chip chip-fleet">
            <div className="chip-icon">
              <Globe2 size={20} />
            </div>
            <div className="chip-text">
              <strong>200+ Websites</strong>
              <small>Multi-Domain Fleet Managed</small>
            </div>
          </div>

          <div className="floating-chip chip-stack">
            <div className="chip-icon" style={{ background: 'rgba(var(--accent-rgb), 0.15)', color: 'var(--accent-cyan)' }}>
              <Layers3 size={20} />
            </div>
            <div className="chip-text">
              <strong>Laravel · MERN · AWS</strong>
              <small>AI / RAG & Cloud DevOps</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
