import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import {
  contactInfo,
  featuredServices,
  galleryItems,
  testimonials,
  workingHours,
} from '../data/siteData'

function Home() {
  const heroImages = useMemo(
    () => galleryItems.filter((item) => item.category === 'Salon Interior'),
    [],
  )
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)

  const showPreviousHero = () => {
    setActiveHeroIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1,
    )
  }

  const showNextHero = () => {
    setActiveHeroIndex((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1,
    )
  }

  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={heroImages[activeHeroIndex]?.image || '/home-hero.png'}
          alt={heroImages[activeHeroIndex]?.title || 'Aniq Salon Baghyalatha interior'}
          className="h-[62vh] w-full bg-stone-900 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/10" />
        <div className="absolute inset-0 mx-auto flex w-[92%] max-w-7xl items-end pb-8 md:pb-12">
          <div className="max-w-md rounded-2xl border border-white/20 bg-black/40 p-4 text-white backdrop-blur-sm md:p-5">
            <p className="animate-fade-up text-xs tracking-[0.28em] text-amber-300 md:text-sm">
              STYLE • BEAUTY • CONFIDENCE
            </p>
            <h1 className="animate-fade-up-delay mt-2 text-4xl font-bold leading-tight md:text-[3rem]">
              Aniq Salon Baghyalatha
            </h1>
            <Link to="/book-appointment" className="btn-primary mt-5">
              Book Appointment
            </Link>
          </div>
        </div>

        {heroImages.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-3 py-2 text-2xl text-white hover:bg-black/50"
              onClick={showPreviousHero}
              aria-label="Previous hero image"
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-3 py-2 text-2xl text-white hover:bg-black/50"
              onClick={showNextHero}
              aria-label="Next hero image"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={`hero-dot-${image.title}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeHeroIndex === index ? 'bg-amber-400' : 'bg-white/60'
                  }`}
                  onClick={() => setActiveHeroIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="section-wrap-home">
        <h2 className="section-title">Featured Services</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
        <div className="mt-6">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </section>

      <section className="section-wrap-home bg-stone-100">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-2xl">🧼</p>
            <h3 className="mt-3 font-semibold text-stone-900">Clean & Hygienic</h3>
            <p className="mt-2 text-sm text-stone-600">
              Strict hygiene standards for a safe and comfortable salon visit.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-2xl">💼</p>
            <h3 className="mt-3 font-semibold text-stone-900">
              Experienced Stylists
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Skilled professionals who personalize every look to your preference.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-2xl">💎</p>
            <h3 className="mt-3 font-semibold text-stone-900">Premium Products</h3>
            <p className="mt-2 text-sm text-stone-600">
              Quality products selected for long-lasting, salon-finish results.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-2xl">📅</p>
            <h3 className="mt-3 font-semibold text-stone-900">Easy Booking</h3>
            <p className="mt-2 text-sm text-stone-600">
              Fast appointment booking with quick phone and WhatsApp support.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap-home">
        <h2 className="section-title">Salon Glimpses</h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          A quick look at our salon interiors and transformations.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.slice(0, 4).map((item) => (
            <article
              key={`home-${item.title}`}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover transition duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold text-stone-900">{item.title}</h3>
                <p className="text-sm text-amber-700">{item.category}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/gallery" className="btn-secondary">
            Explore Full Gallery
          </Link>
        </div>
      </section>

      <section className="section-wrap-home bg-stone-100">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-wrap-home">
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
