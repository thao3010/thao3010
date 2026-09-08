import { metrics, profile } from '../content'

export default function Hero() {
  return (
    <section id="top">
      <div className="wrap hero">
        <div>
          <p className="eyebrow">
            {profile.location} · Mid Frontend · Fresher Backend
          </p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role} · Vinova Pte. Ltd. · 2022–present</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Book an interview
            </a>
            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <aside className="hero-aside">
          <strong>Currently open to roles</strong>
          <p>{profile.cta}</p>
        </aside>
      </div>
      <div className="wrap">
        <dl className="metrics">
          {metrics.map((item) => (
            <div className="metric" key={item.label}>
              <dt>
                <b>{item.value}</b>
              </dt>
              <dd>
                <span>{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
