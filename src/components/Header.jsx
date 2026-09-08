import { useState } from 'react'
import { profile } from '../content'

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo" href="#top" onClick={close}>
          {profile.name}
          <span>{profile.role}</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav open' : 'nav'}>
          <a href="#work" onClick={close}>
            Work
          </a>
          <a href="#skills" onClick={close}>
            Skills
          </a>
          <a href="#about" onClick={close}>
            About
          </a>
          <a className="cta-link" href="#contact" onClick={close}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
