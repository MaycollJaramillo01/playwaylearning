import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { usePageTitle } from '../hooks/usePageTitle'

const steps = [
  {
    number: '01',
    verb: 'Reconocer',
    title: 'Alinear el objetivo antes de movernos.',
    text: 'La misión del proceso se define con claridad. Leemos el contexto, escuchamos el reto y acordamos qué cambio importa.',
    image: '/assets/images/IMG_3693-9337109.JPG',
  },
  {
    number: '02',
    verb: 'Fortalecer',
    title: 'Entrenar lo que ya existe.',
    text: 'Las personas ya tienen capacidades en distintos niveles. Diseñamos retos para observarlas, practicarlas y ampliarlas.',
    image: '/assets/images/Copia_de_IMG_3289-9337106.JPG',
  },
  {
    number: '03',
    verb: 'Accionar',
    title: 'Llevar el aprendizaje al trabajo.',
    text: 'Los hallazgos se convierten en decisiones, acuerdos y comportamientos que acercan al objetivo y sostienen el legado.',
    image: '/assets/images/IMG_3969-9337121.JPG',
  },
]

export default function Methodology() {
  usePageTitle('Metodología Level-Up', 'Reconocer, fortalecer y accionar: el proceso de acompañamiento de PlayWay Learning.')

  return (
    <>
      <section className="page-hero methodology-hero">
        <div className="shell page-hero__grid">
          <span className="kicker">Metodología Level-Up</span>
          <h1>Tres movimientos para que el cambio no se quede en la sala.</h1>
          <p>Una estructura clara conecta objetivo, práctica y acción sin convertir la experiencia en una fórmula rígida.</p>
        </div>
      </section>

      <section className="methodology-flow">
        {steps.map((step, index) => (
          <article className="method-step" key={step.verb}>
            <div className="shell method-step__grid">
              <Reveal className="method-step__number"><span>{step.number}</span></Reveal>
              <Reveal className="method-step__copy" delay={0.06}>
                <strong>{step.verb}</strong>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </Reveal>
              <Reveal className="method-step__image" delay={0.12}>
                <SmartImage src={step.image} alt={`${step.verb} durante una experiencia PlayWay Learning`} sizes="(max-width: 760px) 100vw, 40vw" />
              </Reveal>
            </div>
            {index < steps.length - 1 && <span className="method-connector" aria-hidden="true" />}
          </article>
        ))}
      </section>

      <section className="section methodology-outcome">
        <div className="shell">
          <Reveal><p>La experiencia cambia según el equipo. La intención permanece: comprender mejor, responder distinto y actuar con propósito.</p></Reveal>
          <Link className="text-link" to="/servicios">Explorar servicios<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
