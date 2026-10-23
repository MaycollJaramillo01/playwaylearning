import { motion as Motion, useReducedMotion } from 'motion/react'
import { ArrowRight, CalendarCheck, Quotes } from '@phosphor-icons/react'
import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { ServiceCards } from '../components/ServiceCards'
import { SmartImage } from '../components/SmartImage'
import { stats, testimonials } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero">
      <SmartImage
        src="/assets/images/IMG_3992-9337122.JPG"
        alt="Equipo de PlayWay Learning celebra frente al banner BOOM"
        className="hero__photo"
        priority
      />
      <div className="hero__panel" aria-hidden="true" />
      <svg className="hero__lines" viewBox="0 0 1366 530" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-10 70 C 60 20, 150 60, 120 110 C 95 150, 30 120, 70 85 C 120 40, 250 70, 320 -10" stroke="#e95b0d" />
        <path d="M1150 -10 C 1170 70, 1250 110, 1380 150" stroke="#e95b0d" />
        <path d="M-10 470 C 120 420, 260 450, 330 540" stroke="#fff" />
        <path d="M1180 520 C 1170 470, 1220 455, 1240 485 C 1255 510, 1215 525, 1205 495 C 1200 470, 1290 455, 1380 450" stroke="#fff" />
      </svg>
      <Motion.div
        className="hero__copy"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1>BIENVENIDOS</h1>
        <p className="hero__lead">A NUESTRO ESPACIO DE CRECIMIENTO Y CREATIVIDAD</p>
        <p className="hero__tags">Aprendizaje Interactivo | Desarrollo Personal | Creatividad sin Límites</p>
        <div className="hero__actions">
          <ButtonLink to="/contacto#cita" icon={CalendarCheck} variant="orange">Agenda una cita</ButtonLink>
          <ButtonLink to="/servicios" variant="ghost">Nuestros servicios</ButtonLink>
        </div>
      </Motion.div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats" aria-label="PlayWay Learning en cifras">
      <div className="shell stats__card">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="shell">
        <span className="eyebrow">Lo que dicen los participantes</span>
        <h2 className="title title--black">Testimonios</h2>
        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} className="testimonial" delay={(index % 2) * 0.08}>
              <Quotes className="testimonial__mark" size={40} weight="fill" aria-hidden="true" />
              <p>{item.quote}</p>
              <div className="testimonial__author">
                <img src={item.portrait} alt={`Retrato de ${item.name}`} loading="lazy" />
                <div>
                  <h3>{item.name}</h3>
                  <span className="testimonial__stars" role="img" aria-label="5 de 5 estrellas">★★★★★</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle('Inicio', 'Aprendizaje interactivo, desarrollo personal y creatividad sin límites para equipos y organizaciones.')

  return (
    <>
      <Hero />
      <Stats />

      <section className="section about-intro">
        <div className="shell about-intro__grid">
          <Reveal className="about-intro__copy">
            <span className="eyebrow">PlayWay Learning</span>
            <h2 className="title title--light title--orange">¿Quiénes somos y Cómo podemos ayudarte?</h2>
            <p className="lead">¡Bienvenidos a PlayWay Learning, donde todas las persona son líderes, la vida y los negocios son un juego infinito, y donde crecer y aprender es divertido!</p>
            <p>Estamos aquí para transformar tu equipo de manera significativa y duradera. Nuestra misión es empoderar personas y despertar los líderes que cada uno lleva por dentro con un enfoque sólido en habilidades blandas.</p>
            <p>Nuestra visión es crear un mundo con personas que por medio de su liderazgo personal hagan transcender al mundo y sus organizaciones creando su propio legado.</p>
            <ButtonLink to="/nosotros" variant="link">Conoce más sobre nosotros<ArrowRight size={16} weight="bold" aria-hidden="true" /></ButtonLink>
          </Reveal>
          <Reveal className="about-intro__media" delay={0.1}>
            <SmartImage src="/assets/images/1J6A0094-8311442.jpg" alt="Jorge Henríquez, facilitador de PlayWay Learning, con capa naranja" className="framed" />
            <ButtonLink to="/contacto#cita" icon={CalendarCheck} variant="navy-square">Agenda una cita</ButtonLink>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <section className="section services-home">
        <div className="shell">
          <span className="eyebrow">Lo que hacemos</span>
          <h2 className="title title--xl title--black">Nuestros <span className="text-blue">servicios</span></h2>
          <ServiceCards />
        </div>
      </section>
    </>
  )
}
