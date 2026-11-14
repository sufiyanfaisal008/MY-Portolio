import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    if (location !== displayLocation) {
      setDisplayLocation(location)
      setAnimKey(k => k + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <div key={animKey} className="page-enter">
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('sf-theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('sf-theme', theme) } catch {}
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="page-wrap">
        <AnimatedRoutes />
      </div>
      <Footer />
    </>
  )
}
