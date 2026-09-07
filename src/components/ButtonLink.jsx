import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function ButtonLink({ to, children, variant = 'primary', external = false }) {
  const className = `button button--${variant}`
  const content = <>{children}<ArrowUpRight size={17} weight="bold" aria-hidden="true" /></>

  if (external) {
    return <a className={className} href={to} target="_blank" rel="noreferrer">{content}</a>
  }

  return <Link className={className} to={to}>{content}</Link>
}
