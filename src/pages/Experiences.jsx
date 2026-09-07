import { useRef, useState } from 'react'
import { X } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { gallery, testimonials } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Experiences() {
  usePageTitle('Experiencias', 'Fotografías y testimonios reales de experiencias de aprendizaje PlayWay Learning.')
  const dialogRef = useRef(null)
  const [selected, setSelected] = useState(null)

  const openImage = (image) => {
    setSelected(image)
    dialogRef.current?.showModal()
  }

  const closeImage = () => {
    dialogRef.current?.close()
    setSelected(null)
  }

  return (
    <>
      <section className="page-hero experiences-hero">
        <div className="shell page-hero__grid">
          <span className="kicker">Experiencias</span>
          <h1>La evidencia está en lo que ocurre entre las personas.</h1>
          <p>Fotografías y voces reales de equipos que se movieron, escucharon y aprendieron juntos.</p>
        </div>
      </section>

      <section className="experience-ledger">
        <div className="shell experience-grid">
          {gallery.map((image, index) => (
            <Reveal key={image.src} className={`experience-image experience-image--${index + 1}`} delay={(index % 3) * 0.05}>
              <button type="button" onClick={() => openImage(image)} aria-label={`Ampliar: ${image.label}`}>
                <SmartImage src={image.src} alt={image.alt} sizes="(max-width: 760px) 100vw, 50vw" />
              </button>
              <span>{image.label}</span>
            </Reveal>
          ))}
          <Reveal className="experience-insert"><p>Esto realmente ocurre.</p></Reveal>
        </div>
      </section>

      <section className="section voices-section">
        <div className="shell">
          <h2 className="section-title">Cuatro voces. Cuatro maneras de reconocer el cambio.</h2>
          <div className="voices-wall">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} as="blockquote" delay={(index % 2) * 0.08}>
                <p>“{item.quote}”</p>
                <cite>{item.name}<span>{item.theme}</span></cite>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <dialog className="image-dialog" ref={dialogRef} onClick={(event) => event.target === dialogRef.current && closeImage()}>
        <button type="button" onClick={closeImage} aria-label="Cerrar imagen"><X size={24} /></button>
        {selected && <img src={selected.src} alt={selected.alt} />}
      </dialog>
    </>
  )
}
