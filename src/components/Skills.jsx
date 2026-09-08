import { skills } from '../content'

const groups = [
  { title: 'Core', items: skills.core },
  { title: 'Tools / libraries', items: skills.tools },
  { title: 'Backend (training)', items: skills.backend },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <h2>Skills</h2>
          <p>
            Lead with TypeScript / React / Next. NestJS is listed as training — not
            sold as production backend experience.
          </p>
        </div>
        <div className="skill-grid">
          {groups.map((group) => (
            <div className="skill-col" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
