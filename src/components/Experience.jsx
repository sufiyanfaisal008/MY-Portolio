export default function Experience() {
  return (
    <section className="sec exp-bg" id="experience">
      <div className="sec-in">
        <div className="sec-label fi">Work History</div>
        <h2 className="sec-title fi fi-2">Experience</h2>
        <p className="sec-sub fi fi-3">
          Hands-on experience building production-level systems at a real internship.
        </p>
        <div className="timeline fi fi-3">
          <div className="tl-item">
            <div className="tl-dot" />
            <div className="exp-card">
              <div className="exp-head">
                <div>
                  <div className="exp-role">Intern — Full-Stack Web Developer</div>
                  <div className="exp-co">Saylani Bootcamp · Pakistan</div>
                </div>
                <div className="exp-badge">🟢 Present</div>
              </div>
              <ul className="exp-list">
                <li>
                  Working on a live production website, <strong>PolarAPT</strong>,
                  building and shipping features in a real team environment.
                </li>
                <li>
                  Contributing to <strong>AI voice calling agents</strong> and AI
                  interview systems — including webhook/API integrations and
                  real-time workflows.
                </li>
                <li>
                  Applying full-stack practices with Next.js, React.js, NestJS,
                  Node.js, Express.js and MongoDB following version control and
                  iterative development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
