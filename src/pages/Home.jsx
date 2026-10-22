import { motion as Motion, useReducedMotion } from 'motion/react'
import { CalendarCheck } from '@phosphor-icons/react'
import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { ServiceCards } from '../components/ServiceCards'
import { SmartImage } from '../components/SmartImage'
import { testimonials } from '../data/content'
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
      </Motion.div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="shell">
        <h2 className="title title--black">Testimonios</h2>
        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} className="testimonial" delay={index * 0.08}>
              <img src={item.portrait} alt={`Retrato de ${item.name}`} loading="lazy" />
              <h3>{item.name}</h3>
              <p>{item.quote}</p>
              <span className="testimonial__stars" role="img" aria-label="5 de 5 estrellas">★★★★★</span>
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

      <section className="section about-intro">
        <div className="shell about-intro__grid">
          <Reveal className="about-intro__copy">
            <h2 className="title title--light title--orange">¿Quiénes somos y Cómo podemos ayudarte?</h2>
            <p>¡Bienvenidos a PlayWay Learning, donde todas las persona son líderes, la vida y los negocios son un juego infinito, y donde crecer y aprender es divertido!</p>
            <p>Estamos aquí para transformar tu equipo de manera significativa y duradera. Nuestra misión es empoderar personas y despertar los líderes que cada uno lleva por dentro con un enfoque sólido en habilidades blandas.</p>
            <p>Nuestra visión es crear un mundo con personas que por medio de su liderazgo personal hagan transcender al mundo y sus organizaciones creando su propio legado.</p>
          </Reveal>
          <Reveal className="about-intro__media" delay={0.1}>
            <SmartImage src="/assets/images/1J6A0094-8311442.jpg" alt="Jorge Henríquez, facilitador de PlayWay Learning, con capa naranja" />
            <ButtonLink to="/contacto#cita" icon={CalendarCheck} variant="navy-square">Agenda una cita</ButtonLink>
          </Reveal>
        </div>
        <hr className="divider" />
      </section>

      <Testimonials />

      <section className="section services-home">
        <div className="shell">
          <h2 className="title title--xl title--black">Nuestros <span className="text-blue">servicios</span></h2>
          <ServiceCards />
        </div>
      </section>
    </>
  )
}
