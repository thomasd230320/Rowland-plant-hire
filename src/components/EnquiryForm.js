'use client'
import { useState } from 'react'

export default function EnquiryForm() {
  const [status, setStatus] = useState('idle') // idle | success | error
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setErrors({})
    setStatus('success')
    setForm({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 8000)
  }

  if (status === 'success') {
    return (
      <div className="enquiry-success">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <h4>Message Sent!</h4>
        <p>Thank you, we&apos;ll be in touch shortly. Or call us on{' '}
          <a href="tel:+441865922611">01865 922611</a> for a faster response.
        </p>
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className={`form-field${errors.name ? ' form-field--error' : ''}`}>
        <label htmlFor="enq-name">Name <span aria-hidden="true">*</span></label>
        <input
          id="enq-name"
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Your name"
          aria-describedby={errors.name ? 'enq-name-err' : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="form-error" id="enq-name-err" role="alert">{errors.name}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="enq-phone">Phone <span className="form-optional">(optional)</span></label>
        <input
          id="enq-phone"
          type="tel"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          placeholder="01865 000000"
        />
      </div>

      <div className={`form-field${errors.email ? ' form-field--error' : ''}`}>
        <label htmlFor="enq-email">Email Address <span aria-hidden="true">*</span></label>
        <input
          id="enq-email"
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          placeholder="your@email.com"
          aria-describedby={errors.email ? 'enq-email-err' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="form-error" id="enq-email-err" role="alert">{errors.email}</p>}
      </div>

      <div className={`form-field${errors.message ? ' form-field--error' : ''}`}>
        <label htmlFor="enq-message">Message <span aria-hidden="true">*</span></label>
        <textarea
          id="enq-message"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="What equipment do you need? When do you need it?"
          aria-describedby={errors.message ? 'enq-msg-err' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="form-error" id="enq-msg-err" role="alert">{errors.message}</p>}
      </div>

      <button type="submit" className="form-submit">
        Send Enquiry
      </button>
    </form>
  )
}
