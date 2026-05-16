'use client'
import { useState } from 'react'

export default function EnquiryForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '', copy: false })

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', message: '', copy: false })
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="enq-name">Name *</label>
        <input
          id="enq-name"
          type="text"
          required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Your name"
        />
      </div>
      <div className="form-field">
        <label htmlFor="enq-email">Email Address *</label>
        <input
          id="enq-email"
          type="email"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          placeholder="your@email.com"
        />
      </div>
      <div className="form-field">
        <label htmlFor="enq-message">Message *</label>
        <textarea
          id="enq-message"
          required
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="How can we help?"
        />
      </div>
      <label className="form-checkbox">
        <input
          type="checkbox"
          checked={form.copy}
          onChange={e => setForm(f => ({ ...f, copy: e.target.checked }))}
        />
        Send me a copy
      </label>
      <button type="submit" className="form-submit">
        {sent ? '✓ Message Sent!' : 'Submit Form'}
      </button>
    </form>
  )
}
