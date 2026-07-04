import { useState } from 'react'
import PageHeader from '../../components/shared/PageHeader.jsx'
import './JoinPartner.css'

const steps = ['Business Type', 'Contact Details', 'Location', 'Review & Submit']

const initialForm = {
  businessType: '',
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
}

export default function JoinPartner() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: POST to partner-intake endpoint once available
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mv-page">
        <PageHeader
          eyebrow="Experience · Luckshana"
          title="Application received"
          description={`Thanks, ${form.contactName || 'partner'} — our team will review ${form.businessName || 'your business'} and follow up by email within 3 business days.`}
        />
      </div>
    )
  }

  return (
    <div className="mv-page">
      <PageHeader
        eyebrow="Experience · Luckshana"
        title="Join as Partner"
        description="List your temple stay, shop, or tour service on MandirVaas. This intake takes about 3 minutes."
      />

      <ol className="mv-step-tracker" aria-label="Form progress">
        {steps.map((label, i) => (
          <li key={label} className={i === step ? 'is-active' : i < step ? 'is-done' : ''}>
            <span className="mv-step-index">{i + 1}</span>
            <span className="mv-step-label">{label}</span>
          </li>
        ))}
      </ol>

      <form className="mv-card mv-partner-form" onSubmit={handleSubmit}>
        {step === 0 && (
          <fieldset>
            <legend>What kind of business are you registering?</legend>
            <div className="mv-radio-row">
              {['Accommodation', 'Tour Operator', 'Shop / Vendor', 'Other'].map((type) => (
                <label key={type} className="mv-radio-pill">
                  <input
                    type="radio"
                    name="businessType"
                    value={type}
                    checked={form.businessType === type}
                    onChange={update('businessType')}
                  />
                  {type}
                </label>
              ))}
            </div>
            <label className="mv-field">
              Business name
              <input type="text" value={form.businessName} onChange={update('businessName')} required />
            </label>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend>How should we reach you?</legend>
            <label className="mv-field">
              Contact name
              <input type="text" value={form.contactName} onChange={update('contactName')} required />
            </label>
            <label className="mv-field">
              Email
              <input type="email" value={form.email} onChange={update('email')} required />
            </label>
            <label className="mv-field">
              Phone
              <input type="tel" value={form.phone} onChange={update('phone')} required />
            </label>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend>Where are you based?</legend>
            <label className="mv-field">
              City
              <input type="text" value={form.city} onChange={update('city')} required />
            </label>
            <label className="mv-field">
              State
              <input type="text" value={form.state} onChange={update('state')} required />
            </label>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend>Review your details</legend>
            <dl className="mv-review-list">
              <dt>Business type</dt><dd>{form.businessType || '—'}</dd>
              <dt>Business name</dt><dd>{form.businessName || '—'}</dd>
              <dt>Contact</dt><dd>{form.contactName || '—'} · {form.email || '—'} · {form.phone || '—'}</dd>
              <dt>Location</dt><dd>{form.city || '—'}, {form.state || '—'}</dd>
            </dl>
          </fieldset>
        )}

        <div className="mv-form-nav">
          {step > 0 && (
            <button type="button" className="mv-btn mv-btn-outline" onClick={back}>
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button type="button" className="mv-btn mv-btn-primary" onClick={next}>
              Continue
            </button>
          ) : (
            <button type="submit" className="mv-btn mv-btn-primary">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
