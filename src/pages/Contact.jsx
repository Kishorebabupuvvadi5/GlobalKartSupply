
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Check, Globe2, Mail, Send } from 'lucide-react'
import '../CSS/Contact.css'

export default function Contact() {
  const location = useLocation()
  const initialState = location.state || {}

  const [submitted, setSubmitted] = useState(false)

  const initialForm = {
    name: '',
    email: '',
    business: '',
    model: initialState.model || 'B2B Wholesale',
    country: '',
    product: initialState.product || '',
    quantity: '',
    notes: '',
  }

  const [form, setForm] = useState(initialForm)

  function update(field, value) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  function submit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim()) return

    setSubmitted(true)
  }

  function resetForm() {
    setForm(initialForm)
    setSubmitted(false)
  }

  return (
    <main className="contact-page">
      {/* Hero */}
      {/* <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-eyebrow">
            CONTACT GLOBAL Kart SUPPLY
          </div>

          <h1>
            Let's start a
            <br />
            <span>business conversation.</span>
          </h1>

          <p>
            Tell us about your product requirements, expected quantities,
            and destination. Let's explore the right solution for your business.
          </p>

          <a href="#business-enquiry" className="contact-hero-link">
            Discuss your requirements
            <span>↓</span>
          </a>
        </div>
      </section> */}

      {/* Contact section */}
      <section className="contact-section" id="business-enquiry">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-eyebrow">
              HOW CAN WE HELP?
            </div>

            <h2>
              Share your requirements.
              <br />
              <span>Explore the next step.</span>
            </h2>

            <p className="contact-description">
              Use our business enquiry form to outline your sourcing,
              wholesale, fulfilment, or product discovery needs.
              Provide a few details so your requirements are clearly defined.
            </p>

            <div className="contact-benefit">
              <span className="contact-model-icon">
                <Mail size={21} />
              </span>

              <div>
                <strong>Business enquiries</strong>
                <p>Describe your requirements in one convenient place.</p>
              </div>
            </div>

            <div className="contact-benefit">
              <span className="contact-model-icon">
                <Globe2 size={21} />
              </span>

              <div>
                <strong>Global sourcing</strong>
                <p>Include your destination, product needs, and estimated quantity.</p>
              </div>
            </div>

            <div className="contact-highlight">
              <span className="contact-highlight-dot" />
              <div>
                <strong>Let's understand your business.</strong>
                <p>
                  Share the details that matter to your sourcing or supply
                  requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-state">
                <span className="contact-success-icon">
                  <Check size={29} />
                </span>

                <h2>Enquiry details captured</h2>

                <p>
                  Your form has been completed successfully in this
                  demonstration. No enquiry has been sent to Global Kart Supply.
                </p>

                <div className="contact-success-summary">
                  <div>
                    <span>Name</span>
                    <strong>{form.name}</strong>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>{form.email}</strong>
                  </div>

                  <div>
                    <span>Business model</span>
                    <strong>{form.model}</strong>
                  </div>

                  {form.product && (
                    <div>
                      <span>Product</span>
                      <strong>{form.product}</strong>
                    </div>
                  )}
                </div>

                <button
                  className="contact-button contact-button-secondary"
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Edit enquiry
                </button>

                <button
                  className="contact-reset-button"
                  type="button"
                  onClick={resetForm}
                >
                  Start a new enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-heading">
                  <div>
                    <h2>Business enquiry</h2>
                    <p>
                      Tell us what you are looking for.
                    </p>
                  </div>

                  <span className="contact-required-note">
                    * Required
                  </span>
                </div>

                <form onSubmit={submit}>
                  <div className="contact-form-grid">
                    <label className="contact-field">
                      <span>Full name <b>*</b></span>
                      <input
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) =>
                          update('name', event.target.value)
                        }
                        placeholder="Your full name"
                      />
                    </label>

                    <label className="contact-field">
                      <span>Email address <b>*</b></span>
                      <input
                        required
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) =>
                          update('email', event.target.value)
                        }
                        placeholder="you@company.com"
                      />
                    </label>

                    <label className="contact-field">
                      <span>Business name</span>
                      <input
                        autoComplete="organization"
                        value={form.business}
                        onChange={(event) =>
                          update('business', event.target.value)
                        }
                        placeholder="Company or organisation"
                      />
                    </label>

                    <label className="contact-field">
                      <span>Business model</span>
                      <select
                        value={form.model}
                        onChange={(event) =>
                          update('model', event.target.value)
                        }
                      >
                        <option>B2B Wholesale</option>
                        <option>B2C Shopping</option>
                        <option>Dropshipping</option>
                        <option>Global Sourcing</option>
                        <option>Supplier partnership</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <label className="contact-field">
                      <span>Destination country</span>
                      <input
                        autoComplete="country-name"
                        value={form.country}
                        onChange={(event) =>
                          update('country', event.target.value)
                        }
                        placeholder="Country or region"
                      />
                    </label>

                    <label className="contact-field">
                      <span>Approximate quantity</span>
                      <input
                        value={form.quantity}
                        onChange={(event) =>
                          update('quantity', event.target.value)
                        }
                        placeholder="e.g. 100 units"
                      />
                    </label>

                    <label className="contact-field contact-full-field">
                      <span>Product of interest</span>
                      <input
                        value={form.product}
                        onChange={(event) =>
                          update('product', event.target.value)
                        }
                        placeholder="Product name or category"
                      />
                    </label>

                    <label className="contact-field contact-full-field">
                      <span>Additional requirements</span>
                      <textarea
                        rows={5}
                        value={form.notes}
                        onChange={(event) =>
                          update('notes', event.target.value)
                        }
                        placeholder="Product specifications, target price, delivery or fulfilment needs..."
                      />
                    </label>
                  </div>

                  <button
                    className="contact-button contact-button-primary"
                    type="submit"
                  >
                    Submit demo form
                    <Send size={17} />
                  </button>

                  <p className="contact-form-disclaimer">
                    This is a frontend demonstration. Your enquiry is not
                    transmitted or stored on a server.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}