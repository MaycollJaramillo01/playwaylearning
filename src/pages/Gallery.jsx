import { useRef, useState } from 'react'
import { X } from '@phosphor-icons/react'
import { SmartImage } from '../components/SmartImage'
import { galleryRows } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Gallery() {
  usePageTitle('Galeria', 'Fotografías reales de experiencias de aprendizaje PlayWay Learning.')
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
      <section className="page-title page-title--ruled">
        <h1 className="title title--light title--blue">Nuestra Galeria</h1>
      </section>

      <section className="section gallery">
        <div className="shell">
          {galleryRows.map((row, rowIndex) => (
            <div key={rowIndex} className={`gallery__row gallery__row--${row.length}`}>
              {row.map((column, columnIndex) => (
                <div key={columnIndex} className="gallery__col">
                  {column.map((image) => (
                    <button key={image.src} type="button" onClick={() => openImage(image)} aria-label={`Ampliar: ${image.alt}`}>
                      <SmartImage src={image.src} alt={image.alt} />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <dialog className="image-dialog" ref={dialogRef} onClose={() => setSelected(null)} onClick={(event) => event.target === dialogRef.current && closeImage()}>
        <button type="button" onClick={closeImage} aria-label="Cerrar imagen"><X size={24} /></button>
        {selected && <img src={selected.src} alt={selected.alt} />}
      </dialog>
    </>
  )
}
