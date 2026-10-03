import { Asterisk, Brain, Code2, Globe, Users } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <Asterisk size={14} />
            <span>ABOUT SHAHRUKH MALIK</span>
          </div>
          <h2 className="section-title">
            Architect’s Vision.<br />
            <span style={{ color: 'var(--accent)' }}>Lead Engineer’s Execution.</span>
          </h2>
          <p className="section-subtitle">
            Bridging high-level system architecture, cross-functional team leadership, and pragmatic full-stack code execution across enterprise and fast-paced environments.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card-left">
            <p className="about-lead-quote">
              "I turn complex architectural requirements into resilient, dependable software that stands up to production scale."
            </p>
            <p className="about-text-p">
              Over 5 years of professional software engineering, I have steered products from napkin sketches and relational database schemas through REST API development, interactive frontend interfaces, third-party integrations, and automated cloud deployments.
            </p>
            <p className="about-text-p">
              In my current technical leadership role, I manage cross-functional squads spanning developers, SEO analysts, content writers, and UI designers while maintaining continuous uptime and performance across hundreds of live domains.
            </p>

            <div className="about-tags-row">
              <span className="about-tag-pill">Full-Stack Architecture</span>
              <span className="about-tag-pill">Team Mentoring</span>
              <span className="about-tag-pill">Live Code Reviews</span>
              <span className="about-tag-pill">Technical SEO</span>
              <span className="about-tag-pill">DevOps & Cloud</span>
            </div>
          </div>

          <div className="about-pillars-grid">
            <div className="pillar-card pillar-1">
              <div className="pillar-icon">
                <Code2 size={22} />
              </div>
              <h4>Full-Stack Mastery</h4>
              <p>Deep expertise in Laravel/PHP and Node.js/MERN stacks, writing clean, maintainable, and type-safe architectures.</p>
            </div>

            <div className="pillar-card pillar-2">
              <div className="pillar-icon">
                <Globe size={22} />
              </div>
              <h4>Fleet Operations (200+)</h4>
              <p>Orchestrating large multi-domain portfolios, automated Cloudflare caching, DNS routing, and technical SEO dashboards.</p>
            </div>

            <div className="pillar-card pillar-3">
              <div className="pillar-icon">
                <Brain size={22} />
              </div>
              <h4>AI & RAG Integrations</h4>
              <p>Connecting LLMs, Retrieval-Augmented Generation, and n8n automations directly into production business workflows.</p>
            </div>

            <div className="pillar-card pillar-4">
              <div className="pillar-icon">
                <Users size={22} />
              </div>
              <h4>Technical Leadership</h4>
              <p>Sprint planning, live coding inspections, code reviews, and aligning engineering with product and marketing objectives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
