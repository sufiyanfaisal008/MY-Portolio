const stats = [
  ['4+', 'Projects Shipped'],
  ['6+', 'Tech Stack'],
  ['1', 'Live Internship'],
  ['∞', 'Drive to Learn'],
]

export default function About() {
  return (
    <section className="sec about-bg">
      <div className="sec-in">
        <div className="sec-label fi">Who I Am</div>
        <h2 className="sec-title fi fi-2">About Me</h2>
        <div className="about-grid">
          <div className="fi fi-2">
            <p className="about-p">
              I'm a <strong>junior full-stack web developer</strong> from Pakistan,
              passionate about building real-world digital products. I work across the
              entire stack — from crafting responsive, pixel-perfect interfaces to
              designing clean REST APIs.
            </p>
            <p className="about-p">
              Currently interning at <strong>Saylani Bootcamp</strong>, I work on live
              production websites and contribute to cutting-edge AI systems — including{' '}
              <strong>AI voice calling agents</strong> and{' '}
              <strong>AI-driven interview platforms</strong>.
            </p>
            <p className="about-p">
              I believe in writing clean, maintainable code, following proper Git
              workflows, and continuously leveling up my skills to ship products that
              actually matter.
            </p>
          </div>
          <div className="stats">
            {stats.map(([n, l], i) => (
              <div key={l} className={`stat fi fi-${i + 2}`}>
                <span className="stat-n">{n}</span>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
