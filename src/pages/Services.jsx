import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { contactInfo, premiumServices, services } from '../data/siteData'

const filterCategories = ['All', 'Hair', 'Skin', 'Bridal', 'Grooming']

const getServiceCategory = (service) => {
  if (service.category === 'Haircuts') {
    return service.name.includes('Beard') ? 'Grooming' : 'Hair'
  }
  if (service.category === 'Bridal Looks') {
    return 'Bridal'
  }
  if (service.category === 'Makeup') {
    return 'Skin'
  }
  return 'Grooming'
}

function Services() {
  const navigate = useNavigate()
  const [selectedServiceName, setSelectedServiceName] = useState(null)
  const [category, setCategory] = useState('All')
  const selectedService = services.find(
    (service) => service.name === selectedServiceName,
  )
  const filteredServices = useMemo(() => {
    if (category === 'All') return services
    return services.filter((service) => getServiceCategory(service) === category)
  }, [category])

  useEffect(() => {
    if (!selectedService) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedServiceName(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedService])

  const openWhatsAppForService = (service) => {
    const message = [
      'Hi Aniq Salon,',
      `I am interested in ${service.name}.`,
      `Please share available slots and details.`,
    ].join('\n')
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const goToBooking = (service) => {
    navigate(`/book-appointment?service=${encodeURIComponent(service.name)}`)
  }

  return (
    <main className="section-wrap">
      <h1 className="section-title">Our Services</h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Premium salon services tailored to your style, comfort, and confidence.
      </p>

      <div className="mt-8 mb-8 flex flex-wrap gap-3">
        {filterCategories.map((item) => (
          <button
            key={item}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              category === item
                ? 'border-black bg-black text-white'
                : 'border-gray-300 bg-white text-[#6B6B6B] hover:border-gray-500 hover:bg-black/70 hover:text-white'
            }`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {filteredServices.map((service) => (
          <div
            key={service.name}
            className="text-left"
          >
            <ServiceCard
              compact
              showBookButton
              onCardClick={() => setSelectedServiceName(service.name)}
              {...service}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6">
        <h2 className="text-2xl font-semibold text-stone-900">Premium Services</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {premiumServices.map((service) => (
            <span
              key={service}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-[#222222]"
            >
              {service}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-stone-600">* Conditions apply.</p>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedServiceName(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Service details"
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-black/10 bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl">{selectedService.icon}</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-900">
                  {selectedService.name}
                </h2>
              </div>
              <button
                className="rounded-full border border-stone-300 px-3 py-1 text-stone-600 hover:border-stone-400 hover:text-stone-900"
                onClick={() => setSelectedServiceName(null)}
                aria-label="Close service details"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-stone-700">{selectedService.description}</p>
            <p className="mt-3 text-sm text-stone-600">
              Estimated duration: {selectedService.duration}
            </p>
            <p className="mt-1 font-medium text-[#6B6B6B]">
              Starts from ₹{selectedService.price} onwards
            </p>
            <p className="mt-2 text-xs text-stone-500">* Conditions apply.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="btn-primary"
                onClick={() => goToBooking(selectedService)}
              >
                Book Appointment
              </button>
              <button
                className="btn-secondary"
                onClick={() => openWhatsAppForService(selectedService)}
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Services
