import { useState, useEffect } from 'react'

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const marker = window.scrollY + 120
      let current = 'home'
      for (const [id] of [...navItems, ['contact', 'Contact']]) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    scrollToSection(id)
    setMobOpen(false)
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => go('home')} aria-label="Go to home">SF<span>.</span></button>
          <ul className="nav-links">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <button className={active === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>
              </li>
            ))}
            <li><button className={`nav-cta${active === 'contact' ? ' active' : ''}`} onClick={() => go('contact')}>Contact</button></li>
            <li>
              <button
                className="theme-btn"
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                title="Toggle theme"
                aria-label="Toggle color theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
          <button className="hamburger" onClick={() => setMobOpen(true)} aria-label="Open navigation">☰</button>
        </div>
      </nav>

      <div className={`mob-nav${mobOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobOpen(false)} aria-label="Close navigation">✕</button>
        {[...navItems, ['contact', 'Contact']].map(([id, label]) => (
          <button key={id} onClick={() => go(id)}>{label}</button>
        ))}
      </div>
    </>
  )
}
