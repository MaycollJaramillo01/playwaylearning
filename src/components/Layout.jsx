import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion, useMotionValueEvent, useScroll } from 'motion/react'
import {
  CalendarCheck, CaretUp, Check, House, Image, InstagramLogo, LinkedinLogo, List, Phone, TiktokLogo, UsersThree, WhatsappLogo, X,
} from '@phosphor-icons/react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { EMAIL, WHATSAPP_URL, socials } from '../data/content'

const navItems = [
  { label: 'Inicio', to: '/', icon: House },
  { label: 'Contáctanos', to: '/contacto', icon: Phone },
  { label: 'Servicios', to: '/servicios', icon: Check },
  { label: 'Galeria', to: '/galeria', icon: Image },
  { label: 'Quiénes somos', to: '/nosotros', icon: UsersThree },
]

const socialIcons = { Instagram: InstagramLogo, LinkedIn: LinkedinLogo, TikTok: TiktokLogo }

function Logo() {
  return (
    <Link className="logo" to="/" aria-label="PlayWay Learning, inicio">
      <span className="logo__main">Play<span>Way</span></span>
      <span className="logo__sub">LEARNING</span>
    </Link>
  )
}

function Pills({ onNavigate }) {
  return (
    <>
      {navItems.map((item) => (
        <NavLink key={item.to} className="pill" to={item.to} end onClick={onNavigate}>
          <item.icon size={16} weight="fill" aria-hidden="true" />{item.label}
        </NavLink>
      ))}
      <Link className="pill pill--cta" to="/contacto#cita" onClick={onNavigate}>
        <CalendarCheck size={16} weight="fill" aria-hidden="true" />Agenda una cita
      </Link>
    </>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
        <Logo />
        <nav className="desktop-nav" aria-label="Navegación principal"><Pills /></nav>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <Motion.nav
            className="mobile-menu"
            id="mobile-navigation"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Pills onNavigate={() => setMenuOpen(false)} />
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-social">
        {socials.map(({ name, href }) => {
          const Icon = socialIcons[name]
          return <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon size={16} weight="bold" /></a>
        })}
      </div>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </footer>
  )
}

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > 400
    setShowTop((current) => (current === next ? current : next))
  })

  return (
    <>
      <a className="whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">
        <WhatsappLogo size={34} weight="fill" />
      </a>
      <button
        className={`top-button ${showTop ? 'is-visible' : ''}`}
        type="button"
        aria-label="Volver arriba"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <CaretUp size={22} weight="bold" />
      </button>
    </>
  )
}

export function Layout({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
