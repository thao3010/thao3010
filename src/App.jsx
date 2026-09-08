import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import { profile } from './content'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
      </main>
      <footer className="wrap site-footer">
        <span>
          {profile.name} · {profile.location}
        </span>
        <span>Content sourced from CV — no metrics beyond what is documented.</span>
      </footer>
    </>
  )
}
