import { useEffect, useState } from 'react'

const revealSelectors = [
  '.hero-text', '.hero-photo', '.sec-label', '.sec-title', '.sec-sub',
  '.about-grid', '.skill-groups', '.tl-item', '.proj-card', '.sc',
  '.cinfo-card', '.phone-wrap', 'footer',
].join(',')

export default function MotionEffects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 769px)')
    let clickTimer

    const setPointerMode = () => root.classList.toggle('has-custom-cursor', pointerQuery.matches)
    setPointerMode()
    pointerQuery.addEventListener?.('change', setPointerMode)

    const cursor = document.querySelector('.custom-cursor')
    const cursorRing = document.querySelector('.custom-cursor-ring')
    let frame = 0
    const moveCursor = (event) => {
      if (!cursor || !cursorRing) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = `${event.clientX}px`
        const y = `${event.clientY}px`
        cursor.style.left = x
        cursor.style.top = y
        cursorRing.style.left = x
        cursorRing.style.top = y
      })
    }
    const updateHover = (event) => {
      root.classList.toggle('cursor-hover', Boolean(event.target.closest('a, button, [role="button"], input, textarea, select, summary')))
    }
    const clickCursor = () => {
      root.classList.add('cursor-click')
      window.clearTimeout(clickTimer)
      clickTimer = window.setTimeout(() => root.classList.remove('cursor-click'), 220)
    }
    const hideCursor = () => root.classList.remove('cursor-visible')
    const showCursor = () => root.classList.add('cursor-visible')

    window.addEventListener('pointermove', moveCursor, { passive: true })
    document.addEventListener('pointerover', updateHover, { passive: true })
    document.addEventListener('pointerdown', clickCursor, { passive: true })
    document.addEventListener('pointerenter', showCursor)
    document.addEventListener('pointerleave', hideCursor)

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      root.style.setProperty('--scroll-progress', `${progress}%`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    const revealItems = document.querySelectorAll(revealSelectors)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('motion-visible')
          instance.unobserve(entry.target)
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })
      revealItems.forEach((item, index) => {
        item.classList.add('motion-reveal')
        item.style.setProperty('--reveal-delay', `${(index % 5) * 65}ms`)
        observer.observe(item)
      })
      window.__portfolioRevealObserver = observer
    } else {
      revealItems.forEach((item) => item.classList.add('motion-visible'))
    }

    const loaderTimer = window.setTimeout(() => setLoading(false), 1050)

    return () => {
      window.clearTimeout(loaderTimer)
      window.clearTimeout(clickTimer)
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', moveCursor)
      document.removeEventListener('pointerover', updateHover)
      document.removeEventListener('pointerdown', clickCursor)
      document.removeEventListener('pointerenter', showCursor)
      document.removeEventListener('pointerleave', hideCursor)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      pointerQuery.removeEventListener?.('change', setPointerMode)
      window.__portfolioRevealObserver?.disconnect()
      delete window.__portfolioRevealObserver
      root.classList.remove('has-custom-cursor', 'cursor-hover', 'cursor-visible', 'cursor-click')
      root.style.removeProperty('--scroll-progress')
    }
  }, [])

  return (
    <>
      <div className={`site-loader${loading ? ' is-loading' : ' is-loaded'}`} aria-hidden="true">
        <div className="loader-content">
          <div className="loader-mark">SF<span>.</span></div>
          <div className="loader-caption">Crafting digital experiences</div>
          <div className="loader-track"><span /></div>
          <div className="loader-status"><span>PORTFOLIO</span><span>2026</span></div>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="custom-cursor" aria-hidden="true" />
      <div className="custom-cursor-ring" aria-hidden="true"><span>VIEW</span></div>
    </>
  )
}
