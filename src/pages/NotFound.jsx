import { House } from '@phosphor-icons/react'
import { ButtonLink } from '../components/ButtonLink'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Página no encontrada', 'La página solicitada no existe.')

  return (
    <section className="section not-found">
      <span>404</span>
      <h1 className="title title--blue">Esta página no existe.</h1>
      <ButtonLink to="/" icon={House}>Volver al inicio</ButtonLink>
    </section>
  )
}
