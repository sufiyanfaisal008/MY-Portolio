const groups = [
  {
    title: 'Frontend',
    tags: ['Next.js', 'React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs'],
  },
  {
    title: 'Database & Tools',
    tags: ['MongoDB', 'Authentication', 'Git & GitHub', 'VS Code', 'Vercel', 'npm'],
  },
  {
    title: 'Core Concepts',
    tags: ['CRUD Operations', 'API Integration', 'Form Handling', 'Frontend–Backend Integration', 'Webhook / Real-time'],
  },
]

export default function Skills() {
  return (
    <section className="sec">
      <div className="sec-in">
        <div className="sec-label fi">What I Know</div>
        <h2 className="sec-title fi fi-2">Technical Skills</h2>
        <p className="sec-sub fi fi-3">
          My toolbox for building full-stack applications — from frontend interfaces
          to backend APIs and databases.
        </p>
        <div className="skill-groups">
          {groups.map((g, gi) => (
            <div key={g.title} className={`fi fi-${gi + 2}`}>
              <div className="sg-title">{g.title}</div>
              <div className="tags">
                {g.tags.map(name => (
                  <span key={name} className="tag">{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
