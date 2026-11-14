import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import photo from '../assets/photo.jpg'

const roles = [
  'Full-Stack Web Developer',
  'Next.js / React Developer',
  'Node.js / NestJS Engineer',
  'Building AI-Powered Apps',
]

function useTyping(words) {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      const w = words[wi]
      if (!del) {
        setText(w.slice(0, ci + 1))
        if (ci + 1 === w.length) { setDel(true); return }
        setCi(c => c + 1)
      } else {
        setText(w.slice(0, ci - 1))
        if (ci - 1 === 0) {
          setDel(false)
          setWi(i => (i + 1) % words.length)
          setCi(0)
          return
        }
        setCi(c => c - 1)
      }
    }, del ? 55 : 85)
    return () => clearTimeout(t)
  }, [text, del, ci, wi, words])

  return text
}

export default function Home() {
  const navigate = useNavigate()
  const typed = useTyping(roles)

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="grid-bg" />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="eyebrow fi">Available for opportunities</div>
          <h1 className="hero-name fi fi-2">
            Sufiyan<br /><span className="c">Faisal</span>
          </h1>
          <div className="hero-role fi fi-3">
            {typed}<span className="cursor">|</span>
          </div>
          <p className="hero-desc fi fi-4">
            Full-stack web developer skilled in{' '}
            <strong>Next.js, React.js, NestJS, Node.js</strong> and{' '}
            <strong>MongoDB</strong>. Currently interning at Saylani, building
            production-level apps and AI-powered systems.
          </p>
          <div className="hero-actions fi fi-5">
            <button className="btn-p" onClick={() => navigate('/projects')}>
              View Projects →
            </button>
            <button className="btn-s" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-photo fi fi-2">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div className="orbit orbit-1"><div className="orbit-dot" /></div>
            <div className="orbit orbit-2"><div className="orbit-dot2" /></div>
            <div className="photo-frame">
              <img src={photo} alt="Sufiyan Faisal coding" />
              <div className="photo-corner tl" />
              <div className="photo-corner tr" />
              <div className="photo-corner bl" />
              <div className="photo-corner br" />
              <div className="photo-code">
                <span style={{ color: '#7c3aed' }}>const</span>{' '}
                <span style={{ color: '#00d4ff' }}>dev</span> = {'{'}<br />
                &nbsp;&nbsp;name: <span style={{ color: '#06d6a0' }}>"Sufiyan"</span>,<br />
                &nbsp;&nbsp;stack: <span style={{ color: '#06d6a0' }}>"Full-Stack"</span><br />
                {'}'}
              </div>
            </div>
            <div className="badge">
              <span className="dot-g" />Open to Work
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
