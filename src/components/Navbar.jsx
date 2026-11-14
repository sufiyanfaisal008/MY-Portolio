import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/skills', 'Skills'],
  ['/experience', 'Experience'],
  ['/projects', 'Projects'],
]

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (path) => {
    navigate(path)
    setMobOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname === path

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => go('/')}>SF<span>.</span></div>
          <ul className="nav-links">
            {navItems.map(([path, label]) => (
              <li key={path}>
                <button
                  className={isActive(path) ? 'active' : ''}
                  onClick={() => go(path)}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button className="nav-cta" onClick={() => go('/contact')}>Contact</button>
            </li>
            <li>
              <button
                className="theme-btn"
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                title="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
          <button className="hamburger" onClick={() => setMobOpen(true)}>☰</button>
        </div>
      </nav>

      <div className={`mob-nav${mobOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobOpen(false)}>✕</button>
        {[...navItems, ['/contact', 'Contact']].map(([path, label]) => (
          <button key={path} onClick={() => go(path)}>{label}</button>
        ))}
      </div>
    </>
  )
}
