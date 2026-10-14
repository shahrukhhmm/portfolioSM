import { Check, ShieldCheck } from 'lucide-react'

export default function Fleet() {
  return (
    <section id="fleet" className="container">
      <div className="fleet-spotlight">
        <div className="fleet-inner-grid">
          <div>
            <div className="fleet-badge">
              <ShieldCheck size={14} />
              <span>ENTERPRISE INFRASTRUCTURE SPOTLIGHT</span>
            </div>
            <h2 className="fleet-title">
              Orchestrating 200+ Laravel Websites &amp; Cross-Functional Teams
            </h2>
            <p className="fleet-desc">
              Managing a fleet of over 200 active domain-based websites requires disciplined DevOps, automated caching strategies, and seamless coordination between technical and non-technical stakeholders.
            </p>

            <div className="fleet-capabilities-list">
              <div className="fleet-capability-item">
                <Check size={16} className="fleet-cap-icon" />
                <div>
                  <strong>Custom SEO Content Placement Dashboard:</strong> Engineered an internal platform enabling content and SEO teams to deploy and update targeted metadata, schema markups, and articles across domains instantly.
                </div>
              </div>

              <div className="fleet-capability-item">
                <Check size={16} className="fleet-cap-icon" />
                <div>
                  <strong>Cloudflare & DNS Automation:</strong> Programmatic cache purging, SSL management, edge routing, and firewall security hardening across all production domains.
                </div>
              </div>

              <div className="fleet-capability-item">
                <Check size={16} className="fleet-cap-icon" />
                <div>
                  <strong>Cross-Functional Squad Leadership:</strong> Managing sprint tasks, conducting live code checks, and aligning developers, content writers, SEO specialists, and graphic designers under a unified delivery roadmap.
                </div>
              </div>
            </div>
          </div>

          <div className="fleet-visual-card">
            <div className="fleet-stat-row">
              <div className="fleet-sub-stat">
                <strong>200+</strong>
                <span>Active Live Domains</span>
              </div>
              <div className="fleet-sub-stat">
                <strong>99.9%</strong>
                <span>Uptime & Performance</span>
              </div>
              <div className="fleet-sub-stat">
                <strong>4 Teams</strong>
                <span>Dev · SEO · Content · UI</span>
              </div>
              <div className="fleet-sub-stat">
                <strong>1 Console</strong>
                <span>Centralized Dashboard</span>
              </div>
            </div>

            <div className="fleet-terminal-box">
              <div className="term-line-green">$ cluster --status --all-domains</div>
              <div>[SYSTEM] 200+ Laravel domains connected.</div>
              <div className="term-line-lime">[CDN] Cloudflare edge cache synced: 100%</div>
              <div className="term-line-cyan">[SEO] Dynamic content deployment active.</div>
              <div>[MONITOR] Security WAF & SSL certificates verified.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
