import { ArrowUpRight, FileDown, Menu, MessageCircle, Moon, Sun, X } from 'lucide-react'
import { cvPath, whatsappUrl } from '../data/site'

export default function Header({ theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="brand-wrapper">
          <a href="#home" className="brand-mark">
            SM<span className="brand-dot">.</span>
          </a>
          <div className="brand-tag">
            SHAHRUKH MALIK<br />
            <span style={{ color: 'var(--accent)' }}>Tech Lead · Full-Stack</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#about">About</a>
          <a href="#fleet">200+ Fleet</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={cvPath}
            download="Shahrukh_Malik_Resume.pdf"
            className="btn-header-cv"
            title="Download Shahrukh Malik Resume (PDF)"
          >
            <FileDown size={14} />
            <span>Resume (PDF)</span>
          </a>

          <a href="#contact" className="btn-header-cta">
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="menu-toggle-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#fleet" onClick={() => setMobileMenuOpen(false)}>200+ Multi-Domain Fleet</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects Showcase</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Work Experience</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Technical Skills</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Shahrukh</a>
        </div>

        <div className="mobile-actions">
          <a
            href={cvPath}
            download="Shahrukh_Malik_Resume.pdf"
            className="btn-primary"
            style={{ justifyContent: 'center' }}
          >
            <FileDown size={16} />
            <span>Download Resume (PDF)</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
            style={{ justifyContent: 'center' }}
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}
