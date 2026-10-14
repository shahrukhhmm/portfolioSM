import { Copy, ExternalLink, FileDown, Github, Globe, Linkedin, Mail, MessageCircle, MessageSquare, Phone, Send } from 'lucide-react'
import { cvPath, email, phone, phoneRaw, whatsappUrl, linkedinUrl, githubUrl, livePortfolioUrl } from '../data/site'

export default function Contact({ copyToClipboard, showToast }) {
  const handleContactSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name') || ''
    const userEmail = form.get('email') || ''
    const subject = encodeURIComponent(form.get('subject') || `Project inquiry from ${name}`)
    const message = encodeURIComponent(`Hi Shahrukh,\n\n${form.get('message')}\n\nBest regards,\n${name} (${userEmail})`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`
    showToast('Opening your email client...')
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <div className="contact-section-inner">
          <div className="contact-info-col">
            <div className="eyebrow">
              <MessageSquare size={14} />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Let’s Build Something<br />
              <span style={{ color: 'var(--accent)' }}>Exceptional Together.</span>
            </h2>
            <p className="contact-desc">
              Whether you need a seasoned technical lead to steer complex software architecture, a senior full-stack engineer to build scalable web applications, or guidance scaling a multi-domain fleet — I’m ready to collaborate.
            </p>

            <div className="contact-quick-cards">
              <div className="quick-contact-box">
                <div className="quick-contact-meta">
                  <div className="quick-contact-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="quick-contact-title">EMAIL DIRECTLY</span>
                    <a href={`mailto:${email}`} className="quick-contact-val">
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={() => copyToClipboard(email, 'Email')}
                  className="copy-btn"
                  title="Copy Email"
                  aria-label="Copy email address to clipboard"
                >
                  <Copy size={13} />
                  <span>Copy</span>
                </button>
              </div>

              <div className="quick-contact-box">
                <div className="quick-contact-meta">
                  <div className="quick-contact-icon" style={{ background: 'var(--success-soft)', color: 'var(--success)' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="quick-contact-title">WHATSAPP / PHONE</span>
                    <a href={`tel:${phoneRaw}`} className="quick-contact-val">
                      {phone}
                    </a>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="copy-btn"
                  style={{ color: 'var(--success)', borderColor: 'var(--success-border)' }}
                >
                  <MessageCircle size={13} />
                  <span>Chat</span>
                </a>
              </div>

              <div className="quick-contact-box">
                <div className="quick-contact-meta">
                  <div className="quick-contact-icon" style={{ background: 'rgba(var(--accent-rgb), 0.15)', color: 'var(--accent-cyan)' }}>
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="quick-contact-title">NETLIFY PORTFOLIO</span>
                    <a
                      href={livePortfolioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="quick-contact-val"
                    >
                      shahrukhmm-portfolio.netlify.app
                    </a>
                  </div>
                </div>
                <a
                  href={livePortfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="copy-btn"
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="social-links-group" style={{ marginTop: 'auto' }}>
              <a
                id="contact-linkedin-link"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: '12px', padding: '8px 14px' }}
                aria-label="Visit Shahrukh Malik LinkedIn profile"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                id="contact-github-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: '12px', padding: '8px 14px' }}
                aria-label="Visit Shahrukh Malik GitHub profile"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                id="contact-resume-download-link"
                href={cvPath}
                download="Shahrukh_Malik_Resume.pdf"
                className="btn-secondary"
                style={{ fontSize: '12px', padding: '8px 14px' }}
                title="Download Shahrukh Malik Resume (PDF)"
                aria-label="Download Shahrukh Malik Resume PDF"
              >
                <FileDown size={14} />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">YOUR NAME</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">YOUR EMAIL</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">SUBJECT / TOPIC</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Senior Full-Stack / Technical Lead Opportunity"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">PROJECT DETAILS / MESSAGE</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your product, timeline, or engineering goals..."
                  className="form-control"
                />
              </div>

              <button id="contact-submit-btn" type="submit" className="btn-submit-message" aria-label="Send message via email">
                <span>Send Message via Email</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
