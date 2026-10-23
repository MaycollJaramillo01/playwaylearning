import { useRef, useState } from 'react'
import { CaretLeft, CaretRight, MagnifyingGlassPlus, X } from '@phosphor-icons/react'
import { SmartImage } from '../components/SmartImage'
import { galleryRows } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

const photos = galleryRows.flat(2)

export default function Gallery() {
  usePageTitle('Galeria', 'Fotografías reales de experiencias de aprendizaje PlayWay Learning.')
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(null)
  const selected = index === null ? null : photos[index]

  const open = (image) => {
    setIndex(photos.indexOf(image))
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = (delta) => setIndex((current) => (current + delta + photos.length) % photos.length)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
  }

  return (
    <>
      <section className="page-title">
        <span className="eyebrow">Momentos PlayWay</span>
        <h1 className="title title--light title--blue">Nuestra Galeria</h1>
      </section>

      <section className="section gallery">
        <div className="shell">
          {galleryRows.map((row, rowIndex) => (
            <div key={rowIndex} className={`gallery__row gallery__row--${row.length}`}>
              {row.map((column, columnIndex) => (
                <div key={columnIndex} className="gallery__col">
                  {column.map((image) => (
                    <button key={image.src} type="button" onClick={() => open(image)} aria-label={`Ampliar: ${image.alt}`}>
                      <SmartImage src={image.src} alt={image.alt} />
                      <span className="gallery__zoom" aria-hidden="true"><MagnifyingGlassPlus size={28} weight="bold" /></span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <dialog
        className="image-dialog"
        ref={dialogRef}
        aria-label="Visor de fotos"
        onClose={() => setIndex(null)}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.target === dialogRef.current && close()}
      >
        {selected && (
          <figure>
            <img src={selected.src} alt={selected.alt} />
            <figcaption>{selected.alt}<span>{index + 1} / {photos.length}</span></figcaption>
          </figure>
        )}
        <button className="image-dialog__close" type="button" onClick={close} aria-label="Cerrar imagen"><X size={22} weight="bold" /></button>
        <button className="image-dialog__nav image-dialog__nav--prev" type="button" onClick={() => step(-1)} aria-label="Foto anterior"><CaretLeft size={24} weight="bold" /></button>
        <button className="image-dialog__nav image-dialog__nav--next" type="button" onClick={() => step(1)} aria-label="Foto siguiente"><CaretRight size={24} weight="bold" /></button>
      </dialog>
    </>
  )
}
