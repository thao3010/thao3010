import { archive, featured, learning } from '../content'

function CaseStudy({ project }) {
  return (
    <article className="case" id={project.id}>
      <div className="case-index" aria-hidden="true">
        {project.index}
      </div>
      <div>
        <h3>{project.name}</h3>
        <p className="case-meta">
          {project.domain} · {project.period}
        </p>
        <ul className="stack-list">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <dl className="star">
          <dt>Situation</dt>
          <dd>{project.situation}</dd>
          <dt>Task</dt>
          <dd>{project.task}</dd>
          <dt>Action</dt>
          <dd>{project.action}</dd>
          <dt>Result</dt>
          <dd>{project.result}</dd>
        </dl>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Featured projects</h2>
          <p>
            Three cases with measurable impact from my CV. Other projects show agency
            breadth without diluting the featured work.
          </p>
        </div>
        {featured.map((project) => (
          <CaseStudy key={project.id} project={project} />
        ))}

        <div className="section-head" style={{ marginTop: 48 }}>
          <h2>Archive</h2>
        </div>
        <div className="archive-grid">
          {archive.map((item) =>
            item.href ? (
              <a
                className="card"
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{item.name}</h3>
                <p className="domain">{item.domain}</p>
                <p>{item.note}</p>
              </a>
            ) : (
              <div className="card" key={item.name}>
                <h3>{item.name}</h3>
                <p className="domain">{item.domain}</p>
                <p>{item.note}</p>
              </div>
            ),
          )}
        </div>

        <div className="learn">
          <p className="domain">{learning.type}</p>
          <h3>{learning.name}</h3>
          <p>{learning.note}</p>
          <p>
            <a href={learning.href} target="_blank" rel="noreferrer">
              github.com/thao3010/learn-nestjs
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
