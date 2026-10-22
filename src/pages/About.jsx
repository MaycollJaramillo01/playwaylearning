import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { values } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

const valueColors = ['yellow', 'orange', 'blue']

export default function About() {
  usePageTitle('Nosotros', 'Misión, visión y valores de PlayWay Learning.')

  return (
    <>
      <section className="page-title">
        <h1 className="title title--light"><span className="text-yellow">Nuestra</span> <span className="text-orange">Misión, visión y valores</span></h1>
      </section>

      <section className="section purpose">
        <div className="shell shell--narrow">
          <Reveal>
            <h2 className="title title--light title--blue">Misión</h2>
            <p>Despertar el líder que cada persona lleva dentro y construir un legado a través de una cultura positiva, humanista y de compromiso.</p>
          </Reveal>
          <Reveal>
            <h2 className="title title--light title--yellow">Visión</h2>
            <p>Crear un mundo con personas que por medio de su liderazgo personal hagan transcender al mundo y sus organizaciones creando un legado.</p>
          </Reveal>
        </div>
      </section>

      <section className="section values">
        <div className="shell">
          <h2 className="title"><span className="text-red">Nuestros</span> <span className="text-blue">Valores</span></h2>
          <Reveal className="values__card">
            {values.map((value, index) => (
              <div key={value.name} className="value">
                <h3 className={`text-${valueColors[index]}`}>{value.name}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section split">
        <div className="shell split__grid">
          <Reveal className="split__media">
            <SmartImage src="/assets/images/Copia_de_IMG_3454-8223442.JPG" alt="Participante sonríe frente al banner My Power" />
          </Reveal>
          <Reveal className="split__copy" delay={0.1}>
            <h2 className="title title--yellow">¿Qué lograrás?</h2>
            <ol>
              <li>Líderes Fortalecidos: Tus supervisores y gerentes se convertirán en líderes inspiradores y eficaces.</li>
              <li>Habilidades Esenciales Fortalecidas: Desde la comunicación hasta la resolución de conflictos, tu equipo desarrollará las competencias esenciales para liderar con éxito utilizando habilidades blandas.</li>
              <li>Cultura de Liderazgo Positivo: Crearás un ambiente donde el liderazgo y el desarrollo personal se convierten en la norma, impulsando a tu organización hacia un futuro brillante.</li>
            </ol>
            <h3 className="split__question">¿Estás listo para el cambio?</h3>
            <p>Si estás listo para dar el siguiente paso y transformar el liderazgo en tu organización, contáctame. Juntos, haremos realidad tu visión con un enfoque innovador, dinámico y, sobre todo, divertido.</p>
          </Reveal>
        </div>
      </section>

      <section className="section split">
        <div className="shell split__grid split__grid--reverse">
          <Reveal className="split__copy">
            <h2 className="title title--light title--yellow">¿Cómo lo hacemos?</h2>
            <p>A través de nuestro acompañamiento Level-Up, la cual se basa en tres etapas clave para maximizar el potencial de tu equipo:</p>
            <ol>
              <li>Reconocemos y alineamos los objetivos</li>
              <li>Fortalecemos las habilidades</li>
              <li>Finalmente, tomamos acciones</li>
            </ol>
          </Reveal>
          <Reveal className="split__media" delay={0.1}>
            <SmartImage src="/assets/images/Copia_de_IMG_3460-8223443.JPG" alt="Participante levanta el puño durante el taller My Power" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
