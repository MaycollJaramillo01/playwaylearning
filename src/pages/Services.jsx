import { Phone } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ServiceCards } from '../components/ServiceCards'
import { SmartImage } from '../components/SmartImage'
import { countries, levelUp, strengths } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

const countryColors = ['yellow', 'orange', 'red', 'blue']

function Band({ id, children }) {
  return (
    <div className="band" id={id}>
      <h2>{children}</h2>
    </div>
  )
}

export default function Services() {
  usePageTitle('Servicios', 'Capacitación corporativa Playground, paquetes de coaching y MetaConferencias con el proceso Level-Up.')

  return (
    <>
      <section className="page-title">
        <span className="eyebrow">Nuestro método</span>
        <h1 className="title title--blue">PROCESO DE ACOMPAÑAMIENTO: LEVEL-UP</h1>
      </section>

      <section className="section level-up">
        <ol className="shell level-up__grid">
          {levelUp.map((step, index) => (
            <li key={step.name}>
              <Reveal className="step" delay={index * 0.08}>
                <span className="step__number">{index + 1}</span>
                <h2>{step.name}</h2>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="section services-home">
        <div className="shell">
          <h2 className="title title--gray">Nuestros Servicios</h2>
          <ServiceCards />
        </div>
      </section>

      <Band id="playground">Programa con enfoque en habilidades blandas</Band>

      <section className="section service-detail">
        <div className="shell shell--narrow">
          <h2 className="title title--orange">Capacitación corporativa</h2>
          <p className="tag">“Playground”</p>
          <p>Bienvenidos al programa de seis módulos para pulir esas habilidades humanas que toda persona necesita para auto-liderarse y liderar a su equipo hacia el éxito.</p>

          <h2 className="title title--blue">Metodología</h2>
          <p>MetaTraining®: una chispa de innovación en el campo de la educación experiencial, diseñada por Glenda Mejiah y respaldada por profesionales de más de 10 naciones.</p>
          <p>Nuestro punto fuerte es la metáfora, una herramienta de aprendizaje que ha sido adoptada por LEGO SERIOUS PLAY®, TetraMap®, PNL, coaching y otros métodos contemporáneos. La metáfora no solo colorea nuestras conversaciones, sino que también teje una realidad compartida, incitando cambios profundos en la cultura organizacional y amplificando los mensajes clave.</p>
          <p>Pero no confundas MetaTraining® con un simple evento temático. En MetaTraining®, los desafíos educativos son dirigidos por educadores experimentados en el arte de la metáfora. Aquí, el aprendizaje es la estrella del espectáculo, impulsado por una programación neurolingüística que crea experiencias inolvidables y, lo más importante, transformadoras.</p>
          <img className="metatraining-logo" src="/assets/images/unnamed-0476935.png" alt="Logo de MetaTraining" loading="lazy" />
        </div>
      </section>

      <section className="section strengths">
        <div className="shell">
          <h2 className="title title--yellow">Nuestras fortalezas</h2>
          <div className="strengths__grid">
            {strengths.map((text, index) => (
              <Reveal key={text} delay={(index % 3) * 0.08}>
                <strong>{index + 1}</strong>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Band id="coaching">Paquetes de Coaching:<br />Alcanzar Metas y Obtener Resultados.</Band>

      <section className="section service-detail">
        <div className="shell shell--narrow">
          <p>Un paquete de coaching es un conjunto de sesiones de coaching diseñadas para ayudar a un cliente a alcanzar un objetivo específico. Los paquetes de coaching pueden variar en términos de duración, frecuencia y precio.</p>
          <h2 className="title title--xl title--red">Metodología</h2>
          <p>World Coaching Corporation (WCC) utiliza una metodología de coaching basada en el Coaching de Acción y alineada a la nueva tendencia del Coaching de Segunda Generación. Esta metodología se centra en el cliente, el presente, la acción, el aprendizaje experiencial y la confidencialidad.</p>
        </div>
      </section>

      <Band id="metaconferencias">MetaConferencias</Band>

      <section className="section meta">
        <div className="shell">
          <h2 className="title"><span className="text-blue">Meta</span><span className="text-orange">Conferencias</span></h2>
          <div className="meta__cta">
            <Link className="button button--navy button--stacked" to="/contacto">
              <Phone size={18} weight="fill" aria-hidden="true" />
              <span>Contáctanos<small>Para más información</small></span>
            </Link>
          </div>
          <div className="meta__strip">
            <SmartImage src="/assets/images/Copia_de_IMG_3257-9337106.JPG" alt="Facilitador conversa con un grupo al aire libre" />
            <SmartImage src="/assets/images/Copia_de_IMG_3289-9337106.JPG" alt="Participantes con capas en una dinámica" />
            <SmartImage src="/assets/images/Copia_de_1J6A0333-8311442.JPG" alt="Conferencista frente a la audiencia" />
          </div>
        </div>
      </section>

      <section className="section countries">
        <div className="shell">
          <h2 className="title title--blue">También</h2>
          <p className="title title--md title--orange">Contamos con facilitadores certificados en los siguientes países:</p>
          <ul className="countries__grid">
            {countries.map(([name, code], index) => (
              <li key={code} className={`text-${countryColors[index % countryColors.length]}`}>
                <img src={`https://flagcdn.com/w160/${code}.png`} alt="" loading="lazy" />
                <h3>{name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
