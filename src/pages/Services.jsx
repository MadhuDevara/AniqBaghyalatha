import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  contactInfo,
  filterCategories,
  menuPricing,
  categoryLabels,
  categoryIcons,
} from '../data/siteData'
import PremiumIcon from '../components/PremiumIcon'

const menuSection = {
  grooming: 'Male',
  detan: 'Female',
  facials: 'Female',
  cleanUps: 'Female',
  colours: 'Female',
  manicure: 'Female',
  pedicure: 'Female',
  oilMassage: 'Male',
  hairSpa: 'Female',
  maleKids: 'Kids',
  femaleKids: 'Kids',
}

const popularServiceNames = ['Any Hair Cut', 'Shaving / Trimming', 'Hair Wash', 'Only Face', 'Face Scrub', 'Basic Manicure']
const bestValueThreshold = 200

const allServices = Object.entries(menuPricing).flatMap(([key, items]) =>
  items.map((item) => ({
    id: `${key}-${item.name}`,
    name: item.name,
    price: parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0,
    category: categoryLabels[key] || key,
      icon: categoryIcons[key] || 'sparkles',
    section: menuSection[key] || 'Female',
  })),
)

function Services() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const filterFromUrl = searchParams.get('filter')
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [taxPercent, setTaxPercent] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  useEffect(() => {
    if (filterFromUrl && ['Male', 'Female', 'Kids'].includes(filterFromUrl)) {
      setFilter(filterFromUrl)
    } else {
      setFilter('All')
    }
  }, [filterFromUrl])

  const setFilterAndUrl = (value) => {
    setFilter(value)
    const params = new URLSearchParams()
    if (value !== 'All') params.set('filter', value)
    navigate(`/services${params.toString() ? '?' + params.toString() : ''}`, { replace: true })
  }

  const filteredServices = useMemo(() => {
    if (filter === 'All') return allServices
    return allServices.filter((s) => s.section === filter)
  }, [filter])

  const searchedServices = useMemo(() => {
    if (!searchQuery.trim()) return filteredServices
    const q = searchQuery.toLowerCase().trim()
    return allServices.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q),
    )
  }, [filteredServices, searchQuery])

  const servicesByCategory = useMemo(() => {
    const groups = {}
    searchedServices.forEach((s) => {
      if (!groups[s.category]) groups[s.category] = []
      groups[s.category].push(s)
    })
    return Object.entries(groups)
  }, [searchedServices])

  const addService = (service) => {
    setSelectedServices((prev) => {
      const existing = prev.find((i) => i.id === service.id)
      if (existing) {
        return prev.map((i) =>
          i.id === service.id ? { ...i, quantity: i.quantity + 1 } : i,
        )
      }
      return [...prev, { ...service, quantity: 1 }]
    })
  }

  const removeService = (id) => {
    setSelectedServices((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQuantity = (id, delta) => {
    setSelectedServices((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i,
        )
        .filter((i) => i.quantity > 0),
    )
  }

  const clearSelection = () => {
    setSelectedServices([])
  }

  const subtotal = useMemo(
    () => selectedServices.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [selectedServices],
  )
  const taxAmount = useMemo(() => {
    const pct = parseFloat(taxPercent) || 0
    return Math.round((subtotal * pct) / 100)
  }, [subtotal, taxPercent])
  const total = subtotal + taxAmount

  const buildMessageForSalon = () => {
    const lines = [
      '━━━━━━━━━━━━━━━━━━━━',
      '*SERVICE REQUEST*',
      '_Aniq Salon · Bhagyalatha Colony_',
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      '_Services requested:_',
      ...selectedServices.map((i) => `   • ${i.name} × ${i.quantity}  →  ₹${i.price * i.quantity}`),
      '',
      '   Subtotal  →  ₹' + subtotal,
      ...(taxPercent ? [`   Tax (${taxPercent}%)  →  ₹${taxAmount}`] : []),
      '   ─────────────────',
      `   *TOTAL  →  ₹${total}*`,
      '',
      '━━━━━━━━━━━━━━━━━━━━',
      '_Customer details:_',
      ...(customerName ? [`   Name: *${customerName}*`] : []),
      ...(customerPhone ? [`   Phone: *${customerPhone}*`] : []),
      ...(!customerName && !customerPhone ? ['   _(Not provided)_'] : []),
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      'Please confirm availability and timing. Thank you!',
    ]
    return lines.join('\n')
  }

  const handleSendToSalon = () => {
    if (selectedServices.length === 0) {
      alert('Please add at least one service.')
      return
    }
    const text = encodeURIComponent(buildMessageForSalon())
    window.open(
      `https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${text}`,
      '_blank',
    )
  }

  return (
    <main className="section-wrap py-6 md:py-8">
      <div className="flex flex-col items-start gap-3 fade-up">
        <h1 className="section-title section-title-floater">
          <span className="relative z-10">Our Services</span>
        </h1>
        <p className="max-w-2xl text-sm text-stone-200 md:text-base">
          Male, Female & Kids services. Add services to build your bill and send to the salon.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
        {/* RIGHT: Billing panel */}
        <div className="lg:order-2 lg:sticky lg:top-20 lg:self-start">
          <div className="about-card-gold-border">
            <div className="about-card-gold-border-inner billing-panel rounded-2xl border-0 p-4 shadow-xl backdrop-blur-md md:p-5">
              <h2 className="text-base font-semibold text-white">Billing</h2>
              <p className="mt-0.5 text-xs text-stone-400">Selected services</p>

              <div className="mt-3 max-h-[140px] space-y-1.5 overflow-y-auto">
                {selectedServices.length === 0 ? (
                  <p className="billing-empty-state py-6 text-center text-sm text-stone-500">
                    No services added yet
                  </p>
                ) : (
                  selectedServices.map((item) => (
                    <div
                      key={item.id}
                      className="billing-cart-item flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-stone-200">{item.name}</p>
                        <p className="text-xs text-amber-400/90">₹{item.price} each</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-stone-300 transition hover:bg-white/20 hover:text-white"
                          aria-label="Decrease"
                        >
                          −
                        </button>
                        <span className="min-w-[28px] text-center text-sm font-medium text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-stone-300 transition hover:bg-white/20 hover:text-white"
                          aria-label="Increase"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeService(item.id)}
                        className="rounded p-1.5 text-stone-500 transition hover:bg-red-500/20 hover:text-red-400"
                        aria-label="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">Subtotal</span>
                  <span className="font-medium text-stone-200">₹{subtotal}</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-stone-400">Tax %</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.5"
                    placeholder="0"
                    value={taxPercent}
                    onChange={(e) => setTaxPercent(e.target.value)}
                    className="w-20 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-white placeholder-stone-500"
                  />
                  {taxPercent && (
                    <span className="text-sm text-stone-400">= ₹{taxAmount}</span>
                  )}
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="font-semibold text-white">Total</span>
                  <span key={total} className="billing-total-amount text-lg font-bold text-amber-400">₹{total}</span>
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  placeholder="Customer Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-stone-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-stone-500"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={handleSendToSalon}
                  disabled={selectedServices.length === 0}
                  className="w-full rounded-xl border border-green-500/40 bg-green-500/10 py-2 text-sm font-medium text-green-300 transition hover:bg-green-500/20 disabled:opacity-50"
                >
                  Send to Salon via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={clearSelection}
                  disabled={selectedServices.length === 0}
                  className="w-full rounded-xl border border-white/20 bg-white/5 py-2 text-sm font-medium text-stone-200 transition hover:bg-white/10 disabled:opacity-50"
                >
                  Clear
                </button>
                <Link
                  to="/book-appointment"
                  className="block w-full rounded-xl border border-amber-500/40 bg-amber-500/10 py-2 text-center text-sm font-medium text-amber-300 transition hover:bg-amber-500/20"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT: Service list */}
        <div className="space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5 lg:order-1">
          <div className="relative">
            <input
              type="search"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 pl-10 text-stone-800 placeholder-stone-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
              <PremiumIcon name="search" size={16} />
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filterCategories.map((item) => (
              <button
                key={item}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  filter === item
                    ? 'border-amber-500 bg-amber-500/20 text-amber-800'
                    : 'border-stone-300 bg-white text-stone-600 hover:border-stone-400 hover:bg-stone-50'
                }`}
                onClick={() => setFilterAndUrl(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {servicesByCategory.length === 0 ? (
              <p className="py-8 text-center text-stone-500">
                {searchQuery ? `No services match "${searchQuery}"` : 'No services in this category'}
              </p>
            ) : (
              servicesByCategory.map(([category, services]) => (
                <div key={category}>
                  <h3 className="mb-3 flex items-center gap-2 border-b border-stone-200 pb-2 text-sm font-semibold uppercase tracking-wider text-stone-600">
                    <PremiumIcon name={services[0]?.icon} size={18} />
                    {category}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="billing-service-card relative flex flex-col gap-2 rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                      >
                        {popularServiceNames.includes(service.name) ? (
                          <span className="absolute left-3 top-3 rounded-full bg-amber-500/25 px-2 py-0.5 text-xs font-semibold text-amber-800">
                            Popular
                          </span>
                        ) : service.price <= bestValueThreshold ? (
                          <span className="absolute left-3 top-3 rounded-full bg-green-500/25 px-2 py-0.5 text-xs font-semibold text-green-800">
                            Best value
                          </span>
                        ) : null}
                        <div className="flex-1 pt-6">
                          <p className="font-semibold text-stone-900">{service.name}</p>
                          <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-600">
                            <span className="inline-flex items-center">
                              <PremiumIcon name={service.icon} size={16} />
                            </span>
                            <span>{service.category}</span>
                            <span className="font-bold text-amber-700">₹{service.price}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => addService(service)}
                          className="btn-neon-chip shrink-0 self-start sm:self-center"
                        >
                          <span className="btn-neon-chip-inner shrink-0 px-4 py-2 text-sm">
                            Add Service
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Services
