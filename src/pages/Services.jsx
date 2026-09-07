import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { services } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Services() {
  usePageTitle('Servicios', 'Capacitación corporativa, coaching y MetaConferencias para fortalecer liderazgo, equipos y cultura.')

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero__grid">
          <span className="kicker">Servicios</span>
          <h1>La experiencia correcta para el reto que tienes enfrente.</h1>
          <p>Trabajamos con organizaciones, líderes y equipos. El formato cambia; el aprendizaje siempre llega a la acción.</p>
        </div>
      </section>

      <section className="service-catalog">
        <div className="shell">
          {services.slice(0, 2).map((service, index) => (
            <article className={`catalog-row catalog-row--${index + 1}`} key={service.slug}>
              <Reveal className="catalog-image">
                <SmartImage src={service.image} alt={service.short} sizes="(max-width: 760px) 100vw, 48vw" />
              </Reveal>
              <Reveal className="catalog-copy" delay={0.08}>
                <span>{service.kicker}</span>
                <h2>{service.name}</h2>
                <p>{service.short}</p>
                <dl>
                  <div><dt>Para</dt><dd>{service.audience}</dd></div>
                  <div><dt>Aporta</dt><dd>{service.benefit}</dd></div>
                  <div><dt>Método</dt><dd>{service.method}</dd></div>
                </dl>
                <Link className="text-link" to={`/servicios/${service.slug}`}>Conoce {service.name}<ArrowRight aria-hidden="true" /></Link>
              </Reveal>
            </article>
          ))}
        </div>
        <article className="catalog-feature">
          <SmartImage src={services[2].image} alt={services[2].short} sizes="100vw" />
          <div className="shell catalog-feature__overlay">
            <span>{services[2].kicker}</span>
            <h2>{services[2].name}</h2>
            <p>{services[2].short}</p>
            <Link className="button button--inverse" to="/servicios/metaconferencias">Ver MetaConferencias<ArrowRight aria-hidden="true" /></Link>
          </div>
        </article>
      </section>

      <section className="section service-choice">
        <div className="shell">
          <Reveal><h2 className="section-title section-title--narrow">No necesitas elegir antes de conversar.</h2></Reveal>
          <Reveal delay={0.08}><p>Partimos del objetivo y el contexto. Después definimos el formato que mejor puede movilizarlo.</p></Reveal>
          <Link className="button button--primary" to="/contacto">Agenda una conversación<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
