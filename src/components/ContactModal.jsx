
import { useEffect, useState } from 'react'
import { Check, X, Send } from 'lucide-react'
import './ContactModal.css'

const emptyForm = {
  name: '',
  email: '',
  business: '',
  model: 'B2B Wholesale',
  product: '',
  message: '',
}

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setSubmitted(false)
    }
  }, [open])

  if (!open) return null

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

  function closeModal() {
    onClose()
  }

  return (
    <div
      className="gcs-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal()
        }
      }}
    >
      <section
        className="gcs-contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gcs-modal-title"
      >
        <button
          className="gcs-modal-close"
          type="button"
          onClick={closeModal}
          aria-label="Close contact form"
        >
          <X size={20} />
        </button>

        <div className="gcs-modal-top">
          <span className="gcs-modal-label">
            LET'S CONNECT
          </span>

          <h2 id="gcs-modal-title">
            Let's talk <span>business.</span>
          </h2>

          <p>
            Tell us what you need. We'll help you explore the right
            sourcing or commerce solution.
          </p>
        </div>

        {submitted ? (
          <div className="gcs-modal-success">
            <span className="gcs-modal-success-icon">
              <Check size={27} />
            </span>

            <h3>Thank you, {form.name}!</h3>

            <p>
              Your enquiry form is complete. This demo does not send
              or store your details.
            </p>

            <button
              type="button"
              className="gcs-modal-submit"
              onClick={closeModal}
            >
              Done
            </button>
          </div>
        ) : (
          <form
            className="gcs-modal-form"
            onSubmit={submit}
          >
            <div className="gcs-modal-fields">
              {/* Full name */}
              <label>
                <span className="gcs-modal-label-text">
                  Full name <span className="gcs-required">*</span>
                </span>

                <input
                  required
                  autoFocus
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) =>
                    update('name', event.target.value)
                  }
                  placeholder="Your name"
                />
              </label>

              {/* Work email */}
              <label>
                <span className="gcs-modal-label-text">
                  Work email <span className="gcs-required">*</span>
                </span>

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

              {/* Company name */}
              <label>
                <span className="gcs-modal-label-text">
                  Company name
                </span>

                <input
                  autoComplete="organization"
                  value={form.business}
                  onChange={(event) =>
                    update('business', event.target.value)
                  }
                  placeholder="Your business"
                />
              </label>

              {/* Enquiry type */}
              <label>
                <span className="gcs-modal-label-text">
                  Enquiry type
                </span>

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

              {/* Product or category */}
              <label className="gcs-modal-full">
                <span className="gcs-modal-label-text">
                  Product or category
                </span>

                <input
                  value={form.product}
                  onChange={(event) =>
                    update('product', event.target.value)
                  }
                  placeholder="What are you looking for?"
                />
              </label>

              {/* Message */}
              <label className="gcs-modal-full">
                <span className="gcs-modal-label-text">
                  How can we help?
                </span>

                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(event) =>
                    update('message', event.target.value)
                  }
                  placeholder="Briefly describe your requirements..."
                />
              </label>
            </div>

            <button
              className="gcs-modal-submit"
              type="submit"
            >
              Send enquiry <Send size={17} />
            </button>

          </form>
        )}
      </section>
    </div>
  )
}
