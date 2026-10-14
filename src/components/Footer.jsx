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
          <a id="footer-resume-link" href={cvPath} download="Shahrukh_Malik_Resume.pdf">Résumé PDF</a>
        </div>

        <button
          id="footer-back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn-back-to-top"
          aria-label="Scroll back to top of page"
        >
          <span>Back to Top</span>
          <ChevronDown size={14} style={{ transform: 'rotate(180deg)' }} />
        </button>
      </div>
    </footer>
  )
}
