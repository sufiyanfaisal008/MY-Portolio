import { GithubIcon, ExtLinkIcon } from './icons'

const projects = [
  {
    icon: '🏢',
    title: 'PolarAPT',
    badge: 'b-prod',
    badgeTxt: 'Production',
    desc: 'Production website developed during Saylani internship. Worked on UI development, API integration and feature delivery for live users.',
    stack: ['Next.js', 'React.js', 'Node.js', 'MongoDB'],
    link: null,
    gh: null,
  },
  {
    icon: '👥',
    title: 'HCM Lite',
    badge: 'b-live',
    badgeTxt: '● Live',
    desc: 'Full-stack Human Capital Management app, live on Vercel. Features CRUD operations, auth, server-side routing and REST APIs with connected database.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
    link: 'https://hcm-lite-orcin.vercel.app',
    gh: 'https://github.com/sufiyanfaisal008',
  },
  {
    icon: '🤖',
    title: 'AI Calling & Interview Agents',
    badge: 'b-team',
    badgeTxt: 'Team',
    desc: 'Production-level AI systems: voice calling agents and AI-driven interview platforms. Real-time voice workflows, webhooks and frontend-backend integration.',
    stack: ['NestJS', 'Webhooks', 'Real-time', 'AI APIs'],
    link: null,
    gh: null,
  },
  {
    icon: '💻',
    title: 'Responsive Web Portfolio',
    badge: null,
    badgeTxt: null,
    desc: 'Multiple responsive websites with clean layouts, interactive UI, form handling and mobile-friendly design. Well-organized GitHub repos with consistent commits.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub'],
    link: null,
    gh: 'https://github.com/sufiyanfaisal008',
  },
]

export default function Projects() {
  return (
    <section className="sec">
      <div className="sec-in">
        <div className="sec-label fi">What I've Built</div>
        <h2 className="sec-title fi fi-2">Projects</h2>
        <p className="sec-sub fi fi-3">
          A selection of real projects — from production apps to full-stack experiments.
        </p>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div key={p.title} className={`proj-card fi fi-${i + 2}`}>
              <div className="proj-top">
                <div className="proj-icon">{p.icon}</div>
                <div className="proj-links">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="plink" title="Live">
                      <ExtLinkIcon />
                    </a>
                  )}
                  {p.gh && (
                    <a href={p.gh} target="_blank" rel="noopener noreferrer" className="plink" title="GitHub">
                      <GithubIcon s={18} />
                    </a>
                  )}
                </div>
              </div>
              {p.badge && (
                <span className={`pbadge ${p.badge}`} style={{ width: 'fit-content' }}>
                  {p.badgeTxt}
                </span>
              )}
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-stack">
                {p.stack.map(s => <span key={s} className="stag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
