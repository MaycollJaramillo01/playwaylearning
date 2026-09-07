import { ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Página no encontrada', 'La página solicitada no existe.')

  return (
    <section className="not-found">
      <div>
        <span>404</span>
        <h1>Esta ruta no lleva a una experiencia.</h1>
        <Link className="button button--primary" to="/"><ArrowLeft aria-hidden="true" />Volver al inicio</Link>
      </div>
    </section>
  )
}
