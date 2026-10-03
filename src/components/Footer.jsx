import { ChevronDown } from 'lucide-react'
import { cvPath } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          © {new Date().getFullYear()} SHAHRUKH MALIK · FULL-STACK DEVELOPER &amp; TECHNICAL LEAD
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href={cvPath} target="_blank" rel="noreferrer">Résumé PDF</a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn-back-to-top"
        >
          <span>Back to Top</span>
          <ChevronDown size={14} style={{ transform: 'rotate(180deg)' }} />
        </button>
      </div>
    </footer>
  )
}
