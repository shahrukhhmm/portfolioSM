import { Check, ExternalLink, Layers3, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <>
    {project && (
      <div
        className="modal-backdrop"
        onClick={() => onClose()}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="modal-content"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => onClose()}
            className="modal-close-btn"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          <div className="modal-header-img">
            <img
              src={project.image}
              alt={project.name}
            />
          </div>

          <div className="modal-body">
            <span className="modal-type-tag">{project.eyebrow}</span>
            <h3 className="modal-title">{project.name}</h3>
            <p className="modal-desc">{project.fullDescription}</p>

            <h4 className="modal-section-h4">
              <Check size={16} style={{ color: 'var(--accent)' }} />
              <span>Key Capabilities &amp; Engineering Highlights</span>
            </h4>

            <div className="modal-features-list">
              {project.highlights.map((feat, i) => (
                <div key={i} className="modal-feature-item">
                  <Check size={14} className="modal-feature-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="modal-stack-section">
              <h4 className="modal-section-h4">
                <Layers3 size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Technology Stack &amp; Libraries</span>
              </h4>
              <div className="modal-stack-pills">
                {project.stack.map(tech => (
                  <span key={tech} className="modal-stack-item">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-footer-actions">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={15} />
                </a>
              )}
              <button
                onClick={() => onClose()}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
