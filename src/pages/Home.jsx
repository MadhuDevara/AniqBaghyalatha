import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TestimonialCard from '../components/TestimonialCard'
import {
  contactInfo,
  galleryItems,
  premiumServices,
  testimonials,
  workingHours,
} from '../data/siteData'

const premiumServiceDetails = {
  Keratin: {
    description:
      'Keratin treatment smooths frizz, adds shine, and makes daily hair management easier.',
    usage:
      'Best for dry, frizzy, or chemically treated hair that needs softness and controlled texture.',
  },
  Botox: {
    description:
      'Hair Botox is a deep conditioning repair treatment that restores softness and improves hair health.',
    usage:
      'Ideal for damaged, dull, and brittle hair from heat styling, coloring, or pollution exposure.',
  },
  'Nano Plastia': {
    description:
      'Nano Plastia is an advanced smoothing treatment that straightens and nourishes without harsh finish.',
    usage:
      'Suitable for clients wanting long-lasting smoothness with a natural look and reduced puffiness.',
  },
  'Bio-Plastia': {
    description:
      'Bio-Plastia combines organic nourishment with texture control for silky, polished hair.',
    usage:
      'Recommended for frizzy and uneven hair textures that need clean, premium smoothing care.',
  },
  'Hair Smoothing': {
    description:
      'Hair smoothing reduces volume and frizz while keeping hair soft, manageable, and glossy.',
    usage:
      'Great for daily styling convenience and for people who want neat, salon-finish hair.',
  },
  Straightening: {
    description:
      'Hair straightening gives a sleek, straight finish and reduces styling effort for weeks.',
    usage:
      'Best for curly or wavy hair clients who prefer a straight, tidy, low-maintenance appearance.',
  },
  Perming: {
    description:
      'Perming adds curls or waves with long-lasting texture and shape definition.',
    usage:
      'Useful for people wanting volume and style transformation without daily curling routines.',
  },
  'Hair Fall & Anti Dandruff Spa': {
    description:
      'A scalp-focused spa treatment to reduce hair fall, calm dandruff, and improve scalp balance.',
    usage:
      'Recommended for weak roots, flaky scalp, or hair-thinning concerns needing regular care.',
  },
}

function Home() {
  const heroImages = useMemo(
    () => galleryItems.filter((item) => item.category === 'Salon Interior'),
    [],
  )
  const homeGalleryItems = useMemo(
    () => [
      {
        title: 'Precision Haircut',
        category: 'Haircuts',
        image:
          galleryItems.find((item) => item.title === 'Classic Layer Cut')?.image ||
          '/home-hero.png',
      },
      {
        title: 'Beard Styling',
        category: 'Grooming',
        image:
          'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Hair Coloring',
        category: 'Hair Color',
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Facial Glow',
        category: 'Facials',
        image:
          'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    [],
  )
  const aboutImage =
    heroImages[0]?.image || galleryItems.find((item) => item.category === 'Salon Interior')?.image
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null)
  const [selectedPremiumService, setSelectedPremiumService] = useState(premiumServices[0])

  useEffect(() => {
    if (heroImages.length === 0) return

    const interval = setInterval(() => {
      setActiveHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

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

  const closeGalleryPreview = () => setSelectedGalleryIndex(null)

  const showPreviousGalleryImage = () => {
    setSelectedGalleryIndex((prev) =>
      prev === null ? null : (prev - 1 + homeGalleryItems.length) % homeGalleryItems.length,
    )
  }

  const showNextGalleryImage = () => {
    setSelectedGalleryIndex((prev) =>
      prev === null ? null : (prev + 1) % homeGalleryItems.length,
    )
  }

  useEffect(() => {
    if (selectedGalleryIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeGalleryPreview()
      if (event.key === 'ArrowLeft') showPreviousGalleryImage()
      if (event.key === 'ArrowRight') showNextGalleryImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedGalleryIndex, homeGalleryItems.length])

  return (
    <main>
      <section className="home-hero relative overflow-hidden">
        <img
          key={heroImages[activeHeroIndex]?.image}
          src={heroImages[activeHeroIndex]?.image || '/home-hero.png'}
          alt={heroImages[activeHeroIndex]?.title || 'Aniq Salon Baghyalatha'}
          className="h-[75vh] w-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/10" />
        <div className="absolute inset-0 mx-auto flex w-[92%] max-w-7xl items-end pb-8 md:pb-12">
          <div className="max-w-md rounded-2xl border border-white/20 bg-black/40 p-4 text-white backdrop-blur-sm md:p-5">
            <p className="ui-label animate-fade-up text-xs text-amber-300 md:text-sm">
              S T Y L E • B E A U T Y • C O N F I D E N C E
            </p>
            <h1 className="animate-fade-up-delay mt-2 text-4xl font-bold leading-tight md:text-[3rem]">
              Aniq Salon Baghyalatha
            </h1>
            <p className="ui-label mt-2 text-xs font-medium text-amber-200 md:text-sm">
              Unisex Beauty Salon | Hair | Beauty | Tattoo Studio
            </p>
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

      <section className="section-wrap-home fade-up">
        <div className="grid items-center gap-7 rounded-3xl border border-black/10 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
          <img
            src={aboutImage || '/home-hero.png'}
            alt="Aniq Salon interior"
            className="h-72 w-full rounded-2xl object-cover shadow-sm"
          />
          <div>
            <p className="ui-label text-xs font-semibold text-[#6B6B6B]">
              ABOUT ANIQ SALON
            </p>
            <h2 className="section-title mt-2">Salon Care With Professional Touch</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A4A4A] md:text-base">
              Aniq Salon Baghyalatha offers modern haircuts, expert beard grooming, skin care,
              bridal looks, and premium styling under one roof. Our focus is clean service,
              experienced stylists, and a calm customer-first experience that helps you look your
              best for every occasion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
              <Link to="/book-appointment" className="btn-primary">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap-home fade-up">
        <h2 className="section-title section-title-floater">Premium Services</h2>
        <div className="mt-8 rounded-3xl border border-black/10 bg-white p-5 shadow-sm md:p-7">
          <div className="flex flex-wrap gap-2.5">
            {premiumServices.map((service) => (
              <button
                key={service}
                className={`rounded-full border border-black/10 px-3 py-1 text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  selectedPremiumService === service
                    ? 'bg-black/75 text-white'
                    : 'bg-white text-[#222222] hover:bg-black/75 hover:text-white'
                }`}
                onClick={() => setSelectedPremiumService(service)}
              >
                {service}
              </button>
            ))}
          </div>
          {selectedPremiumService && premiumServiceDetails[selectedPremiumService] && (
            <div className="mt-4 rounded-2xl border border-black/10 bg-[#F7F7F7] p-4">
              <h3 className="text-lg font-semibold text-[#222222]">{selectedPremiumService}</h3>
              <p className="mt-2 text-sm text-[#4A4A4A]">
                {premiumServiceDetails[selectedPremiumService].description}
              </p>
              <p className="mt-2 text-sm text-[#4A4A4A]">
                <span className="font-semibold text-[#222222]">Usage:</span>{' '}
                {premiumServiceDetails[selectedPremiumService].usage}
              </p>
            </div>
          )}
          <p className="mt-3 text-sm text-[#6B6B6B]">* Conditions apply.</p>
        </div>
      </section>

      <section className="section-wrap-home fade-up rounded-3xl bg-[#ECECEC]/70">
        <h2 className="section-title section-title-floater">Why Choose Us</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="glass-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xl">
              🧼
            </div>
            <h3 className="mt-3 font-semibold text-stone-900">Clean & Hygienic</h3>
            <p className="mt-2 text-sm text-stone-600">
              Strict hygiene standards for a safe and comfortable salon visit.
            </p>
          </article>
          <article className="glass-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xl">
              💼
            </div>
            <h3 className="mt-3 font-semibold text-stone-900">
              Experienced Stylists
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Skilled professionals who personalize every look to your preference.
            </p>
          </article>
          <article className="glass-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xl">
              💎
            </div>
            <h3 className="mt-3 font-semibold text-stone-900">Premium Products</h3>
            <p className="mt-2 text-sm text-stone-600">
              Quality products selected for long-lasting, salon-finish results.
            </p>
          </article>
          <article className="glass-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xl">
              📅
            </div>
            <h3 className="mt-3 font-semibold text-stone-900">Easy Booking</h3>
            <p className="mt-2 text-sm text-stone-600">
              Fast appointment booking with quick phone and WhatsApp support.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap-home fade-up gallery">
        <h2 className="section-title section-title-floater">Our Work / Gallery</h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          Real transformations in haircuts, beard styling, coloring, facials, and salon grooming.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeGalleryItems.map((item, index) => (
            <article
              key={`home-${item.title}`}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-100/70 hover:shadow-xl"
            >
              <button
                className="block w-full overflow-hidden"
                onClick={() => setSelectedGalleryIndex(index)}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full cursor-zoom-in object-cover"
                  loading="lazy"
                />
              </button>
              <div className="p-4">
                <h3 className="font-semibold text-stone-900">{item.title}</h3>
                <p className="text-sm text-[#6B6B6B]">{item.category}</p>
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

      <section className="section-wrap-home fade-up rounded-3xl bg-[#ECECEC]/70">
        <h2 className="section-title section-title-floater">Customer Reviews</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} rating={5} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-wrap-home fade-up">
        <div className="rounded-3xl bg-black px-6 py-10 text-center text-white md:px-10">
          <p className="ui-label text-xs font-semibold text-white/70">
            READY FOR YOUR NEXT LOOK?
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Book Your Salon Appointment Today
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 md:text-base">
            Connect with our team for slots, service guidance, and personalized styling support.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center rounded-full bg-[#c59d5f] px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a67c3b] hover:shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              className="inline-flex items-center justify-center rounded-full border border-[#d4b076] bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c59d5f] hover:text-black hover:shadow-lg"
              href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-wrap-home">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black p-6 text-white shadow-lg">
            <h3 className="text-2xl font-semibold text-white">
              Working Hours
            </h3>
            {workingHours.map((item) => (
              <p className="mt-3 text-white/80" key={item.day}>
                {item.day}: {item.time}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#c59d5f] px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a67c3b] hover:shadow-lg"
                href={`tel:${contactInfo.phoneLink}`}
              >
                Call Now
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d4b076] bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c59d5f] hover:text-black hover:shadow-lg"
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

      {selectedGalleryIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={closeGalleryPreview}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/25"
            onClick={closeGalleryPreview}
            aria-label="Close preview"
          >
            ×
          </button>

          <button
            className="absolute left-3 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/25 md:left-8"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousGalleryImage()
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={homeGalleryItems[selectedGalleryIndex].image}
              alt={homeGalleryItems[selectedGalleryIndex].title}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
            <div className="mt-3 text-center">
              <p className="text-sm text-stone-200">
                {homeGalleryItems[selectedGalleryIndex].title}
              </p>
              <Link to="/book-appointment" className="btn-primary mt-3">
                Book This Style
              </Link>
            </div>
          </div>

          <button
            className="absolute right-3 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/25 md:right-8"
            onClick={(event) => {
              event.stopPropagation()
              showNextGalleryImage()
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}

export default Home
