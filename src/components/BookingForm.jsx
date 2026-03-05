import { useMemo, useState } from 'react'
import { contactInfo, services } from '../data/siteData'

const initialState = {
  name: '',
  phone: '',
  serviceType: '',
  preferredDate: '',
  preferredTime: '',
  stylist: '',
  message: '',
}

function BookingForm() {
  const [formData, setFormData] = useState(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = useMemo(
    () => services.map((service) => service.name),
    [],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const sendToWhatsApp = () => {
    const details = [
      'New Appointment Request',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.serviceType}`,
      `Date: ${formData.preferredDate}`,
      `Time: ${formData.preferredTime}`,
      `Stylist: ${formData.stylist || 'Not specified'}`,
      `Message: ${formData.message || 'No message'}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(details)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm md:p-8">
      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <input
          className="input-field md:col-span-1"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="input-field md:col-span-1"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          className="input-field md:col-span-2"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Service Type</option>
          {serviceOptions.map((service) => (
            <option value={service} key={service}>
              {service}
            </option>
          ))}
        </select>
        <input
          className="input-field"
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
        <input
          className="input-field"
          type="time"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          required
        />
        <input
          className="input-field md:col-span-2"
          name="stylist"
          placeholder="Stylist (optional)"
          value={formData.stylist}
          onChange={handleChange}
        />
        <textarea
          className="input-field md:col-span-2"
          rows="4"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="btn-primary md:col-span-2" type="submit">
          Confirm Appointment
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-emerald-700">
            Your appointment request has been submitted successfully.
          </p>
          <button className="btn-secondary mt-3" onClick={sendToWhatsApp}>
            Send Details on WhatsApp
          </button>
        </div>
      )}
    </div>
  )
}

export default BookingForm
