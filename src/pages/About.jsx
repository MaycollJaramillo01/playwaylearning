import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { values } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('Quiénes somos', 'Conoce la visión, los valores y la forma de trabajo de PlayWay Learning.')

  return (
    <>
      <section className="about-hero">
        <div className="shell about-hero__grid">
          <Reveal className="about-hero__copy">
            <span className="kicker">Quiénes somos</span>
            <h1>Creemos en el líder que todavía está despertando.</h1>
          </Reveal>
          <Reveal className="about-hero__image" delay={0.1}>
            <SmartImage src="/assets/images/Copia_de_IMG_3454-8223442.JPG" alt="Participante sonríe durante una experiencia de PlayWay Learning" priority sizes="(max-width: 760px) 100vw, 38vw" />
          </Reveal>
          <Reveal className="about-hero__note" delay={0.16}>
            <p>El liderazgo empieza cuando una persona reconoce su capacidad de influir y elige cómo responder.</p>
          </Reveal>
        </div>
      </section>

      <section className="section about-belief">
        <div className="shell">
          <Reveal><p>Toda persona puede ejercer liderazgo.</p></Reveal>
          <Reveal delay={0.08}><span>No es una posición reservada para unos pocos. Es una práctica personal que puede transformar equipos, organizaciones y legado.</span></Reveal>
        </div>
      </section>

      <section className="about-purpose">
        <div className="shell about-purpose__grid">
          <Reveal>
            <span>Misión</span>
            <p>Despertar el líder que cada persona lleva dentro y construir un legado desde una cultura positiva, humanista y comprometida.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <span>Visión</span>
            <p>Un mundo donde el liderazgo personal hace trascender a las personas y a las organizaciones.</p>
          </Reveal>
        </div>
      </section>

      <section className="section values-section">
        <div className="shell">
          <h2 className="section-title">Lo que guía nuestra forma de trabajar.</h2>
          <div className="values-layout">
            {values.map((value, index) => (
              <Reveal key={value.name} className="value-item" delay={index * 0.06}>
                <span>0{index + 1}</span>
                <h3>{value.name}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-image-break">
        <SmartImage src="/assets/images/IMG_3992-9337122.JPG" alt="Grupo celebra al terminar una experiencia de aprendizaje" sizes="100vw" />
        <div className="shell"><p>La transformación no es un momento espectacular. Es una práctica que el equipo decide sostener.</p></div>
      </section>

      <section className="section about-practice">
        <div className="shell about-practice__grid">
          <Reveal><h2>Humanos antes que cargos.</h2></Reveal>
          <div>
            <Reveal><p>Escuchamos el reto antes de proponer la experiencia.</p></Reveal>
            <Reveal delay={0.06}><p>Diseñamos alrededor de objetivos reales.</p></Reveal>
            <Reveal delay={0.12}><p>Facilitamos espacios seguros para participar y observar.</p></Reveal>
            <Reveal delay={0.18}><p>Conectamos cada hallazgo con acciones posibles.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section about-end">
        <div className="shell">
          <h2>Conozcámonos a través de un reto real.</h2>
          <Link className="button button--primary" to="/contacto">Agenda una conversación<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
