import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import {
  contactInfo,
  featuredServices,
  testimonials,
  workingHours,
} from '../data/siteData'

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80"
          alt="Aniq Salon Baghyalatha interior"
          className="h-[65vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 mx-auto flex w-[92%] max-w-7xl flex-col items-start justify-center text-white">
          <p className="animate-fade-up text-sm tracking-[0.3em] text-amber-300">
            STYLE • BEAUTY • CONFIDENCE
          </p>
          <h1 className="animate-fade-up-delay mt-3 max-w-2xl text-4xl font-bold md:text-6xl">
            Aniq Salon Baghyalatha
          </h1>
          <Link to="/book-appointment" className="btn-primary mt-6">
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="section-title">Featured Services</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </section>

      <section className="section-wrap bg-stone-100">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-semibold text-stone-900">
              Working Hours
            </h3>
            {workingHours.map((item) => (
              <p className="mt-3 text-stone-700" key={item.day}>
                {item.day}: {item.time}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-secondary" href={`tel:${contactInfo.phone}`}>
                Call Now
              </a>
              <a
                className="btn-secondary"
                href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <iframe
            title="Aniq Salon Baghyalatha map"
            src={contactInfo.mapEmbedUrl}
            className="h-72 w-full rounded-2xl border border-stone-200 md:h-full"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}

export default Home
