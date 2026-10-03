import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import './styles/index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import About from './components/About'
import Fleet from './components/Fleet'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    showToast(`Copied ${label} to clipboard`)
  }

  return (
    <div className="portfolio-app">
      <div className="ambient-glow" />

      {toastMessage && (
        <div className="toast-alert" role="status">
          <Check size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero copyToClipboard={copyToClipboard} />
        <Metrics />
        <About />
        <Fleet />
        <Projects />
        <Experience />
        <Skills />
        <Contact copyToClipboard={copyToClipboard} showToast={showToast} />
      </main>
      <Footer />
    </div>
  )
}
