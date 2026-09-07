import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { usePageTitle } from '../hooks/usePageTitle'

const topics = ['Liderazgo personal', 'Cultura organizacional', 'Equipos de alto desempeño', 'Autoconciencia', 'Comunicación', 'Cambio y adaptabilidad']

export default function MetaConferences() {
  usePageTitle('MetaConferencias', 'Conferencias experienciales sobre liderazgo, desarrollo humano y cultura organizacional.')

  return (
    <div className="meta-page">
      <section className="meta-hero">
        <SmartImage src="/assets/images/Copia_de_1J6A0333-8311442.JPG" alt="Speaker de PlayWay Learning conversa con una audiencia" priority sizes="100vw" />
        <div className="meta-hero__veil" />
        <div className="shell meta-hero__copy">
          <span className="kicker kicker--light">Ideas en escena</span>
          <h1>Meta<wbr />Conferencias</h1>
          <p>Una idea se recuerda cuando también se vive.</p>
          <Link className="button button--inverse" to="/contacto?servicio=metaconferencias">Cuéntanos del evento<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section meta-intro">
        <div className="shell">
          <Reveal><h2>La audiencia no permanece al margen.</h2></Reveal>
          <Reveal delay={0.08}><p>Contenido, metáfora y participación convierten el escenario en un espacio de reflexión colectiva.</p></Reveal>
        </div>
      </section>

      <section className="meta-topics">
        <div className="shell">
          <h2>Conversaciones que tocan la realidad.</h2>
          <div>
            {topics.map((topic) => <Reveal key={topic} as="span">{topic}</Reveal>)}
          </div>
        </div>
      </section>

      <section className="meta-evidence">
        <div className="shell meta-evidence__grid">
          <Reveal className="meta-evidence__image"><SmartImage src="/assets/images/IMG_3963-9337121.JPG" alt="Vista amplia de una audiencia durante una experiencia" sizes="(max-width: 760px) 100vw, 58vw" /></Reveal>
          <Reveal className="meta-evidence__copy" delay={0.1}>
            <span>Experiencia documentada</span>
            <h2>Las cinco máscaras del ego que te impiden ser un líder.</h2>
            <p>Webinar sobre control, perfeccionismo, complacencia, rigidez y evitación, facilitado por Jorge Henríquez.</p>
          </Reveal>
        </div>
      </section>

      <section className="section meta-format">
        <div className="shell">
          <Reveal><h2>Diseñada alrededor de tu audiencia.</h2></Reveal>
          <Reveal delay={0.08}><p>El tema, la duración y la dinámica responden al contexto del evento y a la conversación que la organización necesita activar.</p></Reveal>
          <Link className="button button--inverse" to="/contacto?servicio=metaconferencias">Agenda una conversación<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  )
}
