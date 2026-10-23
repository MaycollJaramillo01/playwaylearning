import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion, useMotionValueEvent, useScroll } from 'motion/react'
import {
  CalendarCheck, CaretUp, Check, EnvelopeSimple, House, Image, InstagramLogo, LinkedinLogo, List, MapPin, Phone, TiktokLogo, UsersThree, WhatsappLogo, X,
} from '@phosphor-icons/react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { EMAIL, LOCATION, WHATSAPP_LABEL, WHATSAPP_URL, socials } from '../data/content'
import { ButtonLink } from './ButtonLink'

const navItems = [
  { label: 'Inicio', to: '/', icon: House },
  { label: 'Contáctanos', to: '/contacto', icon: Phone },
  { label: 'Servicios', to: '/servicios', icon: Check },
  { label: 'Galeria', to: '/galeria', icon: Image },
  { label: 'Quiénes somos', to: '/nosotros', icon: UsersThree },
]

const socialIcons = { Instagram: InstagramLogo, LinkedIn: LinkedinLogo, TikTok: TiktokLogo }

function useScrolledPast(offset) {
  const [past, setPast] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > offset
    setPast((current) => (current === next ? current : next))
  })

  return past
}

function Logo() {
  return (
    <Link className="logo" to="/" aria-label="PlayWay Learning, inicio">
      <span className="logo__main">Play<span>Way</span></span>
      <span className="logo__sub">LEARNING</span>
    </Link>
  )
}

export function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socials.map((social) => {
        const Icon = socialIcons[social.name]
        return <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}><Icon size={18} weight="bold" /></a>
      })}
    </div>
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
  const scrolled = useScrolledPast(24)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
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

function ClosingCta() {
  return (
    <section className="closing-cta">
      <div className="shell closing-cta__inner">
        <div>
          <h2>¿Listo para transformar tu equipo?</h2>
          <p>Conversemos sobre el reto de tu organización y diseñemos juntos la experiencia.</p>
        </div>
        <div className="closing-cta__actions">
          <ButtonLink to="/contacto#cita" icon={CalendarCheck} variant="orange">Agenda una cita</ButtonLink>
          <a className="button button--ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsappLogo size={18} weight="fill" aria-hidden="true" />Escríbenos
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>Aprendizaje Interactivo | Desarrollo Personal | Creatividad sin Límites</p>
          <SocialLinks className="footer-social" />
        </div>
        <nav aria-label="Navegación de pie">
          <h2>Explora</h2>
          {navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </nav>
        <div>
          <h2>Contacto</h2>
          <a href={`mailto:${EMAIL}`}><EnvelopeSimple aria-hidden="true" />{EMAIL}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsappLogo aria-hidden="true" />{WHATSAPP_LABEL}</a>
          <span><MapPin aria-hidden="true" />{LOCATION}</span>
        </div>
      </div>
      <p className="footer__bottom">© {new Date().getFullYear()} PlayWay Learning. Todos los derechos reservados.</p>
    </footer>
  )
}

function FloatingButtons() {
  const showTop = useScrolledPast(400)

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
      {pathname !== '/contacto' && <ClosingCta />}
      <Footer />
      <FloatingButtons />
    </>
  )
}
