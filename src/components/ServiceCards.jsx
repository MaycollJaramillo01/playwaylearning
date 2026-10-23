import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { services } from '../data/content'
import { Reveal } from './Reveal'
import { SmartImage } from './SmartImage'

export function ServiceCards() {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <Reveal key={service.slug} className="service-card" delay={index * 0.08}>
          <SmartImage src={service.image} alt={service.alt} />
          <div className="service-card__body">
            <h3>{service.title.map((line) => <span key={line}>{line}</span>)}</h3>
            <p>{service.text}</p>
            <Link className="button button--navy" to={`/servicios#${service.slug}`}>
              ¡VER MÁS!<ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
