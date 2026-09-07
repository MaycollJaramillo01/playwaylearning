import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Coaching() {
  usePageTitle('Coaching', 'Procesos confidenciales de coaching centrados en el cliente, el presente y la acción.')

  return (
    <>
      <section className="coaching-hero">
        <div className="shell coaching-hero__grid">
          <Reveal className="coaching-hero__copy">
            <span className="kicker">Coaching</span>
            <h1>Claridad para dar el paso.</h1>
            <p>Un espacio confidencial para mirar el presente, definir un objetivo y convertirlo en acción.</p>
            <Link className="button button--primary" to="/contacto?servicio=coaching">Agenda una conversación<ArrowRight aria-hidden="true" /></Link>
          </Reveal>
          <Reveal className="coaching-hero__image" delay={0.1}>
            <SmartImage src="/assets/images/IMG_3707-9337110.JPG" alt="Conversación cercana durante una experiencia de PlayWay Learning" priority sizes="(max-width: 760px) 100vw, 42vw" />
          </Reveal>
        </div>
      </section>

      <section className="section coaching-statement">
        <div className="shell">
          <Reveal><p>La meta es concreta. El proceso no necesita ruido.</p></Reveal>
          <Reveal delay={0.1}><span>Los paquetes reúnen sesiones alrededor de un objetivo específico. La duración y frecuencia se definen según la persona y el contexto.</span></Reveal>
        </div>
      </section>

      <section className="coaching-process">
        <div className="shell">
          <h2>Una conversación que avanza.</h2>
          <div className="coaching-process__line">
            <Reveal><strong>Definir el foco</strong><p>Aclaramos qué resultado buscas y por qué importa ahora.</p></Reveal>
            <Reveal delay={0.06}><strong>Observar el presente</strong><p>Reconocemos patrones que amplían o limitan posibilidades.</p></Reveal>
            <Reveal delay={0.12}><strong>Abrir opciones</strong><p>Exploramos nuevas maneras de interpretar y responder.</p></Reveal>
            <Reveal delay={0.18}><strong>Actuar y aprender</strong><p>Convertimos la conversación en compromisos observables.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section coaching-method">
        <div className="shell coaching-method__grid">
          <Reveal><h2>Cliente, presente y acción.</h2></Reveal>
          <Reveal delay={0.08}>
            <p>El enfoque se basa en World Coaching Corporation, Coaching de Acción y tendencias de Coaching de Segunda Generación.</p>
            <div className="coaching-principles"><span>Foco en el cliente</span><span>Aprendizaje experiencial</span><span>Confidencialidad</span><span>Orientación a resultados</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section coaching-when">
        <div className="shell">
          <h2>Puede ser el momento si...</h2>
          <div className="coaching-when__grid">
            <p>Estás asumiendo una nueva responsabilidad.</p>
            <p>Una decisión importante pide otra mirada.</p>
            <p>Quieres cambiar un patrón que se repite.</p>
            <p>Necesitas sostener una meta con acciones claras.</p>
          </div>
        </div>
      </section>

      <section className="section service-end service-end--quiet">
        <div className="shell">
          <h2>Tu siguiente decisión puede empezar aquí.</h2>
          <Link className="button button--primary" to="/contacto?servicio=coaching">Agenda una conversación<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
