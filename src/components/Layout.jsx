import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowRight, InstagramLogo, LinkedinLogo, List, TiktokLogo, X } from '@phosphor-icons/react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ButtonLink } from './ButtonLink'

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Quiénes somos', to: '/quienes-somos' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Metodología', to: '/metodologia' },
  { label: 'Experiencias', to: '/experiencias' },
]

function Wordmark() {
  return (
    <Link className="wordmark" to="/" aria-label="PlayWay Learning, inicio">
      <span>PLAY</span><b>/</b><span>WAY</span>
    </Link>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > 36
    setCompact((current) => (current === next ? current : next))
  })

  useEffect(() => setMenuOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <div className="header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <ButtonLink to="/contacto">Agenda una conversación</ButtonLink>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="mobile-menu"
            id="mobile-navigation"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Navegación móvil">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to}>{item.label}<ArrowRight aria-hidden="true" /></NavLink>
              ))}
              <NavLink to="/contacto">Contacto<ArrowRight aria-hidden="true" /></NavLink>
            </nav>
            <a href="mailto:Info@playwaylearning.com">Info@playwaylearning.com</a>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-callout">
        <p>El próximo movimiento de tu equipo puede empezar con una conversación.</p>
        <ButtonLink to="/contacto" variant="inverse">Agenda una conversación</ButtonLink>
      </div>
      <div className="footer-grid">
        <div><Wordmark /><p>Aprendizaje experiencial para liderazgo, equipos y cultura.</p></div>
        <nav aria-label="Navegación de pie">
          {navItems.slice(1).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          <Link to="/contacto">Contacto</Link>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com/playwaylearning/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramLogo /></a>
          <a href="https://www.linkedin.com/company/playwaylearning/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinLogo /></a>
          <a href="https://www.tiktok.com/@playway.learning" target="_blank" rel="noreferrer" aria-label="TikTok"><TiktokLogo /></a>
        </div>
        <div className="footer-meta">
          <a href="mailto:Info@playwaylearning.com">Info@playwaylearning.com</a>
          <span>Santa Tecla, El Salvador</span>
          <span>© {new Date().getFullYear()} PlayWay Learning</span>
        </div>
      </div>
    </footer>
  )
}

export function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
