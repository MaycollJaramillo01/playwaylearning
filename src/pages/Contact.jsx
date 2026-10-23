import { useState } from 'react'
import { EnvelopeSimple, MapPin, WhatsappLogo } from '@phosphor-icons/react'
import { ButtonLink } from '../components/ButtonLink'
import { SocialLinks } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { EMAIL, LOCATION, WHATSAPP_LABEL, WHATSAPP_URL } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '16:30', '17:00', '17:30']
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Both forms hand off to the visitor's mail app; there is no backend.
function openMail(subject, lines) {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}

function Field({ label, name, error, as = 'input', ...props }) {
  const Tag = as
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <Tag id={name} name={name} aria-invalid={Boolean(error)} aria-describedby={`${name}-error`} {...props} />
      <span id={`${name}-error`} className="field__error">{error}</span>
    </div>
  )
}

function validate(data, required) {
  const errors = {}
  for (const key of required) if (!String(data[key] ?? '').trim()) errors[key] = '¡Campo obligatorio!'
  if (data.email && !errors.email && !EMAIL_PATTERN.test(data.email)) errors.email = 'Escribe un correo válido.'
  return errors
}

function ContactForm() {
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const next = validate(data, ['name', 'email', 'phone'])
    setErrors(next)
    if (Object.keys(next).length) return
    openMail(`Información de servicios - ${data.name}`, [
      `Nombre: ${data.name}`, `E-mail: ${data.email}`, `Teléfono: ${data.phone}`, '', data.message,
    ])
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <Field label="Nombre" name="name" autoComplete="name" error={errors.name} />
      <Field label="E-mail" name="email" type="email" autoComplete="email" error={errors.email} />
      <Field label="Teléfono" name="phone" type="tel" autoComplete="tel" placeholder="+503 7861 6000" error={errors.phone} />
      <Field label="Mensaje" name="message" as="textarea" rows="4" />
      <button className="button button--navy" type="submit">Enviar</button>
    </form>
  )
}

function Booking() {
  const [errors, setErrors] = useState({})
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const today = new Date().toISOString().slice(0, 10)
  const prettyDate = date
    ? new Date(`${date}T12:00:00`).toLocaleDateString('es', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
    : 'Elige una fecha'

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const next = validate(data, ['date', 'time', 'name', 'email'])
    setErrors(next)
    if (Object.keys(next).length) return
    openMail(`Reservar una cita - ${data.date} ${data.time}`, [
      `Nombre: ${data.name}`, `E-mail: ${data.email}`, `Fecha: ${data.date}`, `Hora: ${data.time}`,
    ])
  }

  return (
    <form className="booking" noValidate onSubmit={handleSubmit}>
      <div className="booking__picker">
        <h3>Elige una fecha y hora</h3>
        <Field label="Fecha" name="date" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} error={errors.date} />
        <fieldset className="booking__slots" aria-describedby="time-error">
          <legend>Hora</legend>
          {timeSlots.map((slot) => (
            <label key={slot} className={time === slot ? 'is-active' : ''}>
              <input type="radio" name="time" value={slot} checked={time === slot} onChange={() => setTime(slot)} />
              {slot}
            </label>
          ))}
          <span id="time-error" className="field__error">{errors.time}</span>
        </fieldset>
        <small>Hora estándar central (GMT-06:00)</small>
      </div>
      <div className="booking__summary">
        <h3>Reservar una Cita<small>con Playway Learning</small></h3>
        <dl>
          <div><dt>FECHA</dt><dd>{prettyDate}</dd></div>
          <div><dt>HORA</dt><dd>{time || 'Elige una hora'}</dd></div>
        </dl>
        <Field label="Nombre" name="name" autoComplete="name" error={errors.name} />
        <Field label="E-mail" name="email" type="email" autoComplete="email" error={errors.email} />
        <button className="button button--orange" type="submit">Reservar</button>
      </div>
    </form>
  )
}

export default function Contact() {
  usePageTitle('Contacto', 'Ponte en contacto con PlayWay Learning o agenda tu cita.')

  return (
    <>
      <section className="page-title">
        <span className="eyebrow">Estamos para ayudarte</span>
        <h1 className="title title--blue">Contáctanos</h1>
      </section>

      <section className="section contact">
        <div className="shell contact__grid">
          <Reveal className="contact__copy">
            <h2 className="title title--yellow">¿Estas interesado en algún servicio?</h2>
            <p>¡Ponte en contacto para que te podamos ayudar!</p>
            <ContactForm />
          </Reveal>
          <Reveal className="contact__card" delay={0.1}>
            <SmartImage src="/assets/images/IMG_3737-9337111.JPG" alt="Facilitador de PlayWay Learning guía una dinámica de grupo" />
            <ul className="contact__info">
              <li><EnvelopeSimple aria-hidden="true" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><WhatsappLogo aria-hidden="true" /><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{WHATSAPP_LABEL}</a></li>
              <li><MapPin aria-hidden="true" />{LOCATION}</li>
            </ul>
            <SocialLinks className="contact__social" />
            <ButtonLink to="/servicios">Ver Servicios</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section appointment" id="cita">
        <div className="shell">
          <span className="eyebrow">Reserva en línea</span>
          <h2 className="title title--black">Agenda tu cita</h2>
          <Booking />
        </div>
      </section>
    </>
  )
}
