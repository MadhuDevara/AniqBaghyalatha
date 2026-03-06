import ServiceCard from '../components/ServiceCard'
import { premiumServices, services } from '../data/siteData'

function Services() {
  return (
    <main className="section-wrap">
      <h1 className="section-title">Our Services</h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Premium salon services tailored to your style, comfort, and confidence.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-semibold text-stone-900">Premium Services</h2>
        <p className="mt-3 text-stone-700">{premiumServices.join(', ')}</p>
        <p className="mt-2 text-sm text-stone-600">* Conditions apply.</p>
      </div>
    </main>
  )
}

export default Services
