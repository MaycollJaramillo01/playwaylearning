import { Compass, Crown, Eye, Sun, Target } from '@phosphor-icons/react'
import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { values } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

const valueStyles = [
  { color: 'yellow', icon: Compass },
  { color: 'orange', icon: Crown },
  { color: 'blue', icon: Sun },
]

export default function About() {
  usePageTitle('Nosotros', 'Misión, visión y valores de PlayWay Learning.')

  return (
    <>
      <section className="page-title">
        <span className="eyebrow">Quiénes somos</span>
        <h1 className="title title--light"><span className="text-yellow">Nuestra</span> <span className="text-orange">Misión, visión y valores</span></h1>
      </section>

      <section className="section purpose">
        <div className="shell purpose__grid">
          <Reveal className="purpose__card">
            <span className="icon-badge icon-badge--blue"><Target size={28} weight="duotone" aria-hidden="true" /></span>
            <h2 className="title title--light title--blue">Misión</h2>
            <p>Despertar el líder que cada persona lleva dentro y construir un legado a través de una cultura positiva, humanista y de compromiso.</p>
          </Reveal>
          <Reveal className="purpose__card" delay={0.08}>
            <span className="icon-badge icon-badge--yellow"><Eye size={28} weight="duotone" aria-hidden="true" /></span>
            <h2 className="title title--light title--yellow">Visión</h2>
            <p>Crear un mundo con personas que por medio de su liderazgo personal hagan transcender al mundo y sus organizaciones creando un legado.</p>
          </Reveal>
        </div>
      </section>

      <section className="section values">
        <div className="shell">
          <h2 className="title"><span className="text-red">Nuestros</span> <span className="text-blue">Valores</span></h2>
          <div className="values__grid">
            {values.map((value, index) => {
              const { color, icon: Icon } = valueStyles[index]
              return (
                <Reveal key={value.name} className={`value value--${color}`} delay={index * 0.08}>
                  <span className={`icon-badge icon-badge--${color}`}><Icon size={28} weight="duotone" aria-hidden="true" /></span>
                  <h3 className={`text-${color}`}>{value.name}</h3>
                  <p>{value.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section split">
        <div className="shell split__grid">
          <Reveal className="split__media">
            <SmartImage src="/assets/images/Copia_de_IMG_3454-8223442.JPG" alt="Participante sonríe frente al banner My Power" className="framed" />
          </Reveal>
          <Reveal className="split__copy" delay={0.1}>
            <h2 className="title title--yellow">¿Qué lograrás?</h2>
            <ol className="numbered">
              <li><strong>Líderes Fortalecidos:</strong> Tus supervisores y gerentes se convertirán en líderes inspiradores y eficaces.</li>
              <li><strong>Habilidades Esenciales Fortalecidas:</strong> Desde la comunicación hasta la resolución de conflictos, tu equipo desarrollará las competencias esenciales para liderar con éxito utilizando habilidades blandas.</li>
              <li><strong>Cultura de Liderazgo Positivo:</strong> Crearás un ambiente donde el liderazgo y el desarrollo personal se convierten en la norma, impulsando a tu organización hacia un futuro brillante.</li>
            </ol>
            <div className="split__callout">
              <h3>¿Estás listo para el cambio?</h3>
              <p>Si estás listo para dar el siguiente paso y transformar el liderazgo en tu organización, contáctame. Juntos, haremos realidad tu visión con un enfoque innovador, dinámico y, sobre todo, divertido.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section split">
        <div className="shell split__grid">
          <Reveal className="split__copy">
            <h2 className="title title--light title--yellow">¿Cómo lo hacemos?</h2>
            <p>A través de nuestro acompañamiento Level-Up, la cual se basa en tres etapas clave para maximizar el potencial de tu equipo:</p>
            <ol className="numbered">
              <li>Reconocemos y alineamos los objetivos</li>
              <li>Fortalecemos las habilidades</li>
              <li>Finalmente, tomamos acciones</li>
            </ol>
            <ButtonLink to="/servicios">Conoce el proceso Level-Up</ButtonLink>
          </Reveal>
          <Reveal className="split__media" delay={0.1}>
            <SmartImage src="/assets/images/Copia_de_IMG_3460-8223443.JPG" alt="Participante levanta el puño durante el taller My Power" className="framed framed--left" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
