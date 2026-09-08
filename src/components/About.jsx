import { about, profile } from '../content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div>
          <div className="section-head">
            <h2>About</h2>
          </div>
          <p className="about-copy">{about}</p>
        </div>
        <aside className="contact-box" id="contact">
          <h2>Contact</h2>
          <p>{profile.cta}</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone}`}>
              {profile.phoneLabel}
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
        </aside>
      </div>
    </section>
  )
}
