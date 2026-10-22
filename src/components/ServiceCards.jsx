import { Link } from 'react-router-dom'
import { services } from '../data/content'
import { Reveal } from './Reveal'

export function ServiceCards() {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <Reveal key={service.slug} className="service-card" delay={index * 0.08}>
          <h3>{service.title.map((line) => <span key={line}>{line}</span>)}</h3>
          <Link className="button button--navy" to={`/servicios#${service.slug}`}>¡VER MÁS!</Link>
          <span className="service-card__line" aria-hidden="true" />
        </Reveal>
      ))}
    </div>
  )
}
