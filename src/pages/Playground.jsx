import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { skills } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Playground() {
  usePageTitle('Playground', 'Programa corporativo de seis módulos basado en MetaTraining® y aprendizaje experiencial.')

  return (
    <>
      <section className="playground-hero">
        <div className="playground-hero__media">
          <SmartImage src="/assets/images/Copia_de_IMG_3293-9337107.JPG" alt="Equipo participa en una dinámica Playground al aire libre" priority sizes="100vw" />
        </div>
        <div className="shell playground-hero__copy">
          <span className="kicker kicker--light">Capacitación corporativa</span>
          <h1>Playground</h1>
          <p>Se aprende jugando. Se transforma haciendo.</p>
          <Link className="button button--inverse" to="/contacto?servicio=playground">Diseñemos la experiencia<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section playground-intro">
        <div className="shell playground-intro__grid">
          <Reveal><span className="display-stat">6</span><p>módulos conectados por un objetivo común.</p></Reveal>
          <Reveal delay={0.08}><h2 className="section-title">Saber no siempre cambia la manera de actuar.</h2></Reveal>
          <Reveal delay={0.14}><p>Playground convierte habilidades humanas en comportamientos visibles. El equipo participa, observa y conecta lo vivido con su trabajo cotidiano.</p></Reveal>
        </div>
      </section>

      <section className="playground-sequence">
        <div className="shell">
          <h2>La experiencia ocurre en cuatro momentos.</h2>
          <div className="sequence-grid">
            <Reveal><span>01</span><h3>Alinear</h3><p>Definimos el reto y el resultado que necesita la organización.</p></Reveal>
            <Reveal delay={0.06}><span>02</span><h3>Experimentar</h3><p>El grupo enfrenta situaciones diseñadas para hacer visibles sus hábitos.</p></Reveal>
            <Reveal delay={0.12}><span>03</span><h3>Reflexionar</h3><p>La facilitación convierte la actividad en comprensión compartida.</p></Reveal>
            <Reveal delay={0.18}><span>04</span><h3>Aplicar</h3><p>Cada hallazgo se traduce en decisiones posibles en el trabajo.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section metatraining">
        <div className="shell metatraining__grid">
          <Reveal className="metatraining__copy">
            <span className="kicker">MetaTraining®</span>
            <h2>La metáfora crea un lenguaje común.</h2>
            <p>No es un evento temático. La ambientación y el juego están al servicio del aprendizaje, guiados por facilitadores con experiencia pedagógica.</p>
            <p>La metodología fue diseñada por Glenda Mejiah y cuenta con respaldo de profesionales de más de diez naciones.</p>
          </Reveal>
          <div className="metatraining__images">
            <Reveal><SmartImage src="/assets/images/Copia_de_IMG_3257-9337106.JPG" alt="Facilitador guía un reto experiencial" sizes="(max-width: 760px) 100vw, 34vw" /></Reveal>
            <Reveal delay={0.12}><SmartImage src="/assets/images/Copia_de_IMG_3460-8223443.JPG" alt="Participante responde durante una experiencia Playground" sizes="(max-width: 760px) 45vw, 18vw" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section playground-skills">
        <div className="shell">
          <Reveal><h2 className="section-title">El repertorio que el equipo pone en juego.</h2></Reveal>
          <div className="skill-matrix">
            {skills.map((skill, index) => <span key={skill} style={{ '--i': index }}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="playground-proof">
        <div className="shell playground-proof__grid">
          <Reveal><SmartImage src="/assets/images/PlayWay-_Fondo_blanco_3-9504680.jpg" alt="Retrato de Ada Hueso de Vega" sizes="(max-width: 760px) 38vw, 20vw" /></Reveal>
          <Reveal delay={0.08}>
            <blockquote>“Todos tenemos algo que aportar. Podemos dar paso a quien tiene la capacidad y avanzar juntos hacia una meta común.”</blockquote>
            <cite>Ada Hueso de Vega<br /><span>Colaboración</span></cite>
          </Reveal>
        </div>
      </section>

      <section className="section service-end">
        <div className="shell">
          <h2>¿Qué necesita practicar tu equipo?</h2>
          <Link className="button button--primary" to="/contacto?servicio=playground">Agenda una conversación<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
