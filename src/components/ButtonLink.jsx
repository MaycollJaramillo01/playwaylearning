import { Link } from 'react-router-dom'

export function ButtonLink({ to, children, icon: Icon, variant = 'navy' }) {
  return (
    <Link className={`button button--${variant}`} to={to}>
      {Icon && <Icon size={18} weight="fill" aria-hidden="true" />}
      {children}
    </Link>
  )
}
