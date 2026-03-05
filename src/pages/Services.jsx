import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteData'

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
    </main>
  )
}

export default Services
