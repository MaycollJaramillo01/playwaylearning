import { useRef, useState } from 'react'
import { AnimatePresence, motion as Motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { gallery, services, skills, testimonials } from '../data/content'

function ServiceExplorer() {
  const [active, setActive] = useState(0)
  const service = services[active]
  const reduceMotion = useReducedMotion()

  return (
    <div className="service-explorer">
      <div className="service-stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <Motion.div
            key={service.slug}
            className="service-stage__image"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <SmartImage src={service.image} alt={service.short} sizes="(max-width: 760px) 100vw, 48vw" />
          </Motion.div>
        </AnimatePresence>
        <div className="service-stage__meta">
          <span>{service.audience}</span>
          <span>{service.method}</span>
        </div>
      </div>
      <div className="service-options" role="tablist" aria-label="Servicios">
        {services.map((item, index) => (
          <button
            key={item.slug}
            className={active === index ? 'is-active' : ''}
            type="button"
            role="tab"
            aria-selected={active === index}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{item.kicker}</span>
            <strong>{item.name}</strong>
            <p>{item.short}</p>
            <ArrowRight size={24} aria-hidden="true" />
          </button>
        ))}
        <Link className="text-link" to={`/servicios/${service.slug}`}>Conoce {service.name}<ArrowRight aria-hidden="true" /></Link>
      </div>
    </div>
  )
}

function LevelUp() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const reduceMotion = useReducedMotion()
  const steps = [
    { verb: 'Reconocer', text: 'Hacemos visible el objetivo, el contexto y aquello que el equipo necesita mover.', image: '/assets/images/IMG_3693-9337109.JPG' },
    { verb: 'Fortalecer', text: 'Ponemos a prueba las habilidades que más importan en situaciones concretas.', image: '/assets/images/Copia_de_IMG_3289-9337106.JPG' },
    { verb: 'Accionar', text: 'Convertimos los hallazgos en decisiones capaces de sostener el cambio.', image: '/assets/images/IMG_3969-9337121.JPG' },
  ]

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(2, Math.floor(value * 3))
    setActive((current) => (current === next ? current : next))
  })

  return (
    <section className="levelup-section" ref={ref}>
      <div className="levelup-sticky">
        <div className="levelup-heading">
          <span className="kicker kicker--light">Metodología Level-Up</span>
          <h2>Del objetivo a una acción que deja huella.</h2>
          <Link className="text-link text-link--light" to="/metodologia">Ver metodología<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="levelup-visual">
          <AnimatePresence mode="wait">
            <Motion.div
              key={steps[active].verb}
              initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(8% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <SmartImage src={steps[active].image} alt={`${steps[active].verb}: experiencia de aprendizaje en equipo`} sizes="(max-width: 760px) 100vw, 38vw" />
            </Motion.div>
          </AnimatePresence>
        </div>
        <div className="levelup-steps">
          {steps.map((step, index) => (
            <div key={step.verb} className={active === index ? 'is-active' : ''}>
              <b>0{index + 1}</b>
              <h3>{step.verb}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <Motion.span className="levelup-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      </div>
    </section>
  )
}

function SkillMarquee() {
  const reduceMotion = useReducedMotion()
  const list = [...skills, ...skills]

  return (
    <section className="skills-marquee" aria-label="Habilidades que desarrollamos">
      <Motion.div
        className="skills-track"
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      >
        {list.map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}
      </Motion.div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  const item = testimonials[active]
  const reduceMotion = useReducedMotion()

  return (
    <section className="section testimonials-section">
      <div className="shell">
        <h2 className="section-title">El cambio se reconoce en la voz de quien lo vivió.</h2>
        <div className="testimonials-layout">
          <div className="testimonial-portrait">
            <AnimatePresence mode="wait">
              <Motion.div
                key={item.name}
                initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: 18 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <SmartImage src={item.portrait} alt={`Retrato de ${item.name}`} sizes="(max-width: 760px) 35vw, 24vw" />
              </Motion.div>
            </AnimatePresence>
          </div>
          <div className="testimonial-copy" aria-live="polite">
            <AnimatePresence mode="wait">
              <Motion.blockquote
                key={item.quote}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: 0.4 }}
              >
                “{item.quote}”
                <cite>{item.name}<span>{item.theme}</span></cite>
              </Motion.blockquote>
            </AnimatePresence>
            <div className="testimonial-nav" role="tablist" aria-label="Testimonios">
              {testimonials.map((person, index) => (
                <button
                  key={person.name}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-label={`Ver testimonio de ${person.name}`}
                  onClick={() => setActive(index)}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero__grid">
          <Motion.div
            className="home-hero__copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="kicker">Aprendizaje experiencial para empresas</span>
            <h1><span>Liderazgo en</span><em>movimiento.</em></h1>
            <p>Experiencias corporativas que convierten habilidades humanas en decisiones, colaboración y cultura.</p>
            <div className="hero-actions">
              <ButtonLink to="/contacto">Agenda una conversación</ButtonLink>
              <Link className="text-link" to="/servicios">Conoce los programas<ArrowRight aria-hidden="true" /></Link>
            </div>
          </Motion.div>
          <Motion.div
            className="home-hero__media"
            initial={{ opacity: 0, clipPath: 'inset(0 0 12% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <SmartImage
              src="/assets/images/Copia_de_IMG_3293-9337107.JPG"
              alt="Equipo de PlayWay Learning participa en una dinámica al aire libre"
              className="hero-photo"
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <div className="hero-shape" aria-hidden="true"><span>+</span></div>
          </Motion.div>
        </div>
      </section>

      <section className="proof-line" aria-label="Alianzas y experiencias documentadas">
        <div className="shell">
          <p>Experiencias documentadas con</p>
          <div><strong>Asesuisa CREE</strong><strong>Camarasal</strong><strong>Brújula Empresarial</strong></div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="shell">
          <Reveal><p className="manifesto-copy">Una sala puede escuchar una idea. Un equipo necesita <span>ponerla a prueba.</span></p></Reveal>
          <div className="manifesto-foot">
            <Reveal><SmartImage src="/assets/images/Copia_de_IMG_3460-8223443.JPG" alt="Participante levanta la mano durante un taller" sizes="(max-width: 760px) 45vw, 22vw" /></Reveal>
            <Reveal delay={0.1}><p>Diseñamos contextos donde las personas participan, observan y conectan lo vivido con su realidad laboral.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <Reveal><h2 className="section-title section-title--narrow">Tres formas de mover una organización.</h2></Reveal>
          <ServiceExplorer />
        </div>
      </section>

      <LevelUp />

      <section className="section skills-intro">
        <div className="shell">
          <Reveal><h2 className="section-title">Habilidades para el trabajo que realmente sucede.</h2></Reveal>
          <Reveal delay={0.08}><p>El repertorio cambia según el reto. La práctica siempre conecta con decisiones reales.</p></Reveal>
        </div>
        <SkillMarquee />
      </section>

      <section className="section journal-section">
        <div className="shell">
          <div className="journal-title">
            <Reveal><h2 className="section-title">Esto sí ocurre.</h2></Reveal>
            <Link className="text-link" to="/experiencias">Ver experiencias<ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="journal-grid">
            {gallery.slice(0, 5).map((image, index) => (
              <Reveal key={image.src} className={`journal-item journal-item--${index + 1}`} delay={index * 0.04}>
                <SmartImage src={image.src} alt={image.alt} sizes="(max-width: 760px) 100vw, 45vw" />
                <span>{image.label}</span>
              </Reveal>
            ))}
            <Reveal className="journal-statement"><p>Lo que se vive se vuelve propio.</p></Reveal>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section method-callout">
        <div className="shell method-callout__grid">
          <Reveal className="method-callout__copy">
            <h2>La metáfora abre una conversación que una instrucción no alcanza.</h2>
            <p>MetaTraining® transforma conceptos en una experiencia compartida, memorable y aplicable.</p>
            <ButtonLink to="/servicios/playground" variant="outline">Explorar Playground</ButtonLink>
          </Reveal>
          <Reveal className="method-callout__image" delay={0.1}>
            <SmartImage src="/assets/images/Copia_de_1J6A0333-8311442.JPG" alt="Facilitador dirige una experiencia frente a un grupo" sizes="(max-width: 760px) 100vw, 50vw" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
