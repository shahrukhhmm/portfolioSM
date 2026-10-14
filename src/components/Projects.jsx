import { useMemo, useState } from 'react'
import { Eye, FolderGit2, Search, X } from 'lucide-react'
import { projects, categoryOptions } from '../data/projects'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return projects.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory
      if (!query) return matchesCategory
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.stack.some(s => s.toLowerCase().includes(query)) ||
        item.eyebrow.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <>
    <section id="projects" className="section-pad">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <FolderGit2 size={14} />
            <span>PROJECT PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Selected Work &amp; Production Systems
          </h2>
          <p className="section-subtitle">
            Explore {projects.length} production systems across SaaS platforms, IoT telemetry, AI directories, business CRMs, and e-commerce platforms. Click any project to inspect its architecture and features.
          </p>
        </div>

        {/* Controls: Category Filter Pills & Live Search */}
        <div className="work-controls-bar">
          <div className="category-filter-pills" role="tablist">
            {categoryOptions.map(cat => {
              const count = cat === 'All'
                ? projects.length
                : projects.filter(p => p.category === cat).length

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                >
                  <span>{cat}</span>
                  <span className="category-count">({count})</span>
                </button>
              )
            })}
          </div>

          <div className="search-box-wrap">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((item, index) => (
            <article
              key={item.id}
              className="project-card"
              onClick={() => setSelectedProject(item)}
            >
              <div className="project-thumb-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="project-thumb-overlay" />
                <span className="project-badge-type">{item.category}</span>
                <div className="project-quick-view" title="View details">
                  <Eye size={16} />
                </div>
              </div>

              <div className="project-card-body">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', marginBottom: '6px' }}>
                  {item.eyebrow}
                </div>
                <h3 className="project-title">{item.name}</h3>
                <p className="project-summary">{item.summary}</p>

                <div className="project-stack-wrap">
                  {item.stack.slice(0, 4).map(st => (
                    <span key={st} className="stack-tag">{st}</span>
                  ))}
                  {item.stack.length > 4 && (
                    <span className="stack-tag">+{item.stack.length - 4}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '16px', marginBottom: '12px' }}>No projects found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
