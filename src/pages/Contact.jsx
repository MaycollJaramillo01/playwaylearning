import { useMemo, useState } from 'react'
import { ArrowRight, Check, EnvelopeSimple, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useSearchParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { usePageTitle } from '../hooks/usePageTitle'

const initialErrors = { name: '', company: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  usePageTitle('Contacto', 'Agenda una conversación con PlayWay Learning sobre liderazgo, equipos y cultura.')
  const [searchParams] = useSearchParams()
  const initialService = useMemo(() => searchParams.get('servicio') || '', [searchParams])
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState(initialErrors)

  const validate = (data) => {
    const next = { ...initialErrors }
    if (!data.name.trim()) next.name = 'Escribe tu nombre.'
    if (!data.company.trim()) next.company = 'Escribe el nombre de tu empresa.'
    if (!data.email.trim()) next.email = 'Escribe tu correo.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Escribe un correo válido.'
    if (!data.phone.trim()) next.phone = 'Escribe un teléfono.'
    if (!data.service) next.service = 'Selecciona un servicio.'
    if (!data.message.trim()) next.message = 'Cuéntanos brevemente el reto.'
    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    if (!validate(data)) {
      setStatus('error')
      return
    }

    setStatus('loading')
    const subject = encodeURIComponent(`Conversación sobre ${data.service}`)
    const body = encodeURIComponent(`Nombre: ${data.name}\nEmpresa: ${data.company}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nServicio: ${data.service}\n\nMensaje:\n${data.message}`)
    window.setTimeout(() => {
      setStatus('ready')
      window.location.href = `mailto:Info@playwaylearning.com?subject=${subject}&body=${body}`
    }, 500)
  }

  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <Reveal className="contact-copy">
          <span className="kicker">Contacto</span>
          <h1>Hablemos del reto, no del paquete.</h1>
          <p>Cuéntanos qué necesita mover tu organización. El correo se preparará en tu aplicación para que puedas revisarlo antes de enviarlo.</p>
          <div className="contact-direct">
            <a href="mailto:Info@playwaylearning.com"><EnvelopeSimple />Info@playwaylearning.com</a>
            <div>
              <a href="https://www.instagram.com/playwaylearning/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramLogo /></a>
              <a href="https://www.linkedin.com/company/playwaylearning/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinLogo /></a>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.1}>
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby="name-error" />
              <span id="name-error">{errors.name}</span>
            </div>
            <div className="form-field">
              <label htmlFor="company">Empresa</label>
              <input id="company" name="company" autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby="company-error" />
              <span id="company-error">{errors.company}</span>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby="email-error" />
              <span id="email-error">{errors.email}</span>
            </div>
            <div className="form-field">
              <label htmlFor="phone">Teléfono</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby="phone-error" />
              <span id="phone-error">{errors.phone}</span>
            </div>
            <div className="form-field form-field--wide">
              <label htmlFor="service">Servicio de interés</label>
              <select id="service" name="service" defaultValue={initialService} aria-invalid={Boolean(errors.service)} aria-describedby="service-error">
                <option value="">Selecciona una opción</option>
                <option value="playground">Playground</option>
                <option value="coaching">Coaching</option>
                <option value="metaconferencias">MetaConferencias</option>
                <option value="por-definir">Quiero definirlo con ustedes</option>
              </select>
              <span id="service-error">{errors.service}</span>
            </div>
            <div className="form-field form-field--wide">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" aria-invalid={Boolean(errors.message)} aria-describedby="message-error" />
              <span id="message-error">{errors.message}</span>
            </div>
            <div className="form-submit">
              <button className="button button--primary" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Preparando correo...' : 'Preparar correo'}
                {status === 'ready' ? <Check aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
              </button>
              <p className={`form-status is-${status}`} role="status">
                {status === 'error' && 'Revisa los campos señalados.'}
                {status === 'ready' && 'El mensaje está listo en tu aplicación de correo.'}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
