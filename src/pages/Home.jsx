import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TestimonialCard from '../components/TestimonialCard'
import PremiumIcon from '../components/PremiumIcon'
import {
  contactInfo,
  galleryItems,
  heroTrustBadges,
  premiumServices,
  testimonials,
  workingHours,
} from '../data/siteData'

const premiumServiceDetails = {
  Keratin: {
    description: 'Keratin treatment smooths frizz, adds shine, and makes daily hair management easier.',
    usage: 'Best for dry, frizzy, or chemically treated hair that needs softness and controlled texture.',
  },
  Botox: {
    description: 'Hair Botox is a deep conditioning repair treatment that restores softness and improves hair health.',
    usage: 'Ideal for damaged, dull, and brittle hair from heat styling, coloring, or pollution exposure.',
  },
  'Nano Plastia': {
    description: 'Nano Plastia is an advanced smoothing treatment that straightens and nourishes without harsh finish.',
    usage: 'Suitable for clients wanting long-lasting smoothness with a natural look and reduced puffiness.',
  },
  'Bio-Plastia': {
    description: 'Bio-Plastia combines organic nourishment with texture control for silky, polished hair.',
    usage: 'Recommended for frizzy and uneven hair textures that need clean, premium smoothing care.',
  },
  'Hair Smoothing': {
    description: 'Hair smoothing reduces volume and frizz while keeping hair soft, manageable, and glossy.',
    usage: 'Great for daily styling convenience and for people who want neat, salon-finish hair.',
  },
  Straightening: {
    description: 'Hair straightening gives a sleek, straight finish and reduces styling effort for weeks.',
    usage: 'Best for curly or wavy hair clients who prefer a straight, tidy, low-maintenance appearance.',
  },
  Perming: {
    description: 'Perming adds curls or waves with long-lasting texture and shape definition.',
    usage: 'Useful for people wanting volume and style transformation without daily curling routines.',
  },
  'Hair Fall & Anti Dandruff Spa': {
    description: 'A scalp-focused spa treatment to reduce hair fall, calm dandruff, and improve scalp balance.',
    usage: 'Recommended for weak roots, flaky scalp, or hair-thinning concerns needing regular care.',
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

    // Prevent background scroll while the preview is open.
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeGalleryPreview()
      if (event.key === 'ArrowLeft') showPreviousGalleryImage()
      if (event.key === 'ArrowRight') showNextGalleryImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
    }
  }, [selectedGalleryIndex, homeGalleryItems.length])

  return (
    <main>
      <section className="home-hero relative min-h-[60vh] overflow-hidden">
        <img
          key={heroImages[activeHeroIndex]?.image}
          src={heroImages[activeHeroIndex]?.image || '/home-hero.png'}
          alt={heroImages[activeHeroIndex]?.title || 'Aniq Salon Baghyalatha'}
          className="absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

        <div className="hero-content-wrapper relative flex min-h-[60vh] w-full items-center border-2 border-amber-400/60 px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="hero-glass-card max-w-xl px-5 py-5 text-white md:px-6 md:py-6 ml-6 md:ml-8 lg:ml-10">
              <p className="ui-label animate-fade-up text-xs tracking-[0.25em] text-amber-300/90 md:text-sm">
                STYLE • BEAUTY • CONFIDENCE
              </p>
              <h1 className="animate-fade-up-delay mt-3 text-3xl font-bold leading-[1.1] md:text-4xl lg:text-5xl">
                <span className="block">Aniq Salon</span>
                <span className="block bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  Baghyalatha
                </span>
              </h1>
              <p className="ui-label mt-3 text-sm font-medium text-stone-200 md:text-base">
                Premium Unisex Salon
              </p>
              <p className="mt-1 text-sm text-amber-100 md:text-base">
                Hair • Beauty • Tattoo Studio
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/book-appointment"
                  className="hero-cta-primary"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="hero-cta-secondary"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-white/5 pt-4 md:flex-row md:gap-5">
                {heroTrustBadges.map((badge) => {
                  const content = (
                    <>
                      <PremiumIcon name={badge.icon} size={16} className="opacity-90" />
                      <span className="badge-value">{badge.label}</span>
                      <span className="badge-sublabel">{badge.sublabel}</span>
                    </>
                  )
                  return badge.href ? (
                    <a
                      key={badge.sublabel}
                      href={badge.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hero-trust-badge opacity-90"
                      aria-label={`${badge.label} ${badge.sublabel} - View on Google`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={badge.sublabel} className="hero-trust-badge opacity-90">
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {heroImages.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-2xl text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110 md:left-6"
              onClick={showPreviousHero}
              aria-label="Previous hero image"
            >
              ‹
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-2xl text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110 md:right-6"
              onClick={showNextHero}
              aria-label="Next hero image"
            >
              ›
            </button>

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={`hero-dot-${image.title}`}
                  className={`hero-slider-dot ${
                    activeHeroIndex === index ? 'active' : ''
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
        <div className="about-card-gold-border">
          <div className="about-card-gold-border-inner grid items-center gap-7 p-5 shadow-sm md:grid-cols-2 md:p-8">
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
        </div>
      </section>

      <section className="section-wrap-home fade-up">
        <h2 className="section-title section-title-floater"><span className="relative z-10">Premium Services</span></h2>
        <div className="about-card-gold-border mt-8">
          <div className="about-card-gold-border-inner p-5 md:p-7">
          <div className="flex flex-wrap gap-2.5">
            {premiumServices.map((service) => (
              <button
                key={service}
                className={`btn-neon-chip ${selectedPremiumService === service ? 'is-selected' : ''}`}
                onClick={() => setSelectedPremiumService(service)}
              >
                <span className="btn-neon-chip-inner">{service}</span>
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
        </div>
      </section>

      <section className="section-wrap-home fade-up">
        <h2 className="section-title section-title-floater"><span className="relative z-10">Why Choose Us</span></h2>
        <div className="about-card-gold-border mt-8">
          <div className="about-card-gold-border-inner about-card-gold-border-inner--light rounded-3xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid max-w-6xl mx-auto gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="glass-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
              <PremiumIcon name="hygiene" size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-stone-900">Clean & Hygienic</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Strict hygiene standards for a safe and comfortable salon visit.
            </p>
          </article>
          <article className="glass-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
              <PremiumIcon name="stylists" size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-stone-900">
              Experienced Stylists
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Skilled professionals who personalize every look to your preference.
            </p>
          </article>
          <article className="glass-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
              <PremiumIcon name="premium" size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-stone-900">Premium Products</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Quality products selected for long-lasting, salon-finish results.
            </p>
          </article>
          <article className="glass-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
              <PremiumIcon name="booking" size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-stone-900">Easy Booking</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Fast appointment booking with quick phone and WhatsApp support.
            </p>
          </article>
        </div>
          </div>
        </div>
      </section>

      <section className="section-wrap-home fade-up gallery">
        <h2 className="section-title section-title-floater"><span className="relative z-10">Our Work / Gallery</span></h2>
        <p className="mt-3 max-w-2xl text-stone-200">
          Real transformations in haircuts, beard styling, coloring, facials, and salon grooming.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeGalleryItems.map((item, index) => (
            <div key={`home-${item.title}`} className="about-card-gold-border about-card-gold-border-sm">
              <article
                className="about-card-gold-border-inner overflow-hidden border-0 border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-100/70 hover:shadow-xl"
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
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/gallery" className="btn-secondary">
            Explore Full Gallery
          </Link>
        </div>
      </section>

      <section className="section-wrap-home fade-up">
        <h2 className="section-title section-title-floater"><span className="relative z-10">Customer Reviews</span></h2>
        <div className="about-card-gold-border mt-8">
          <div className="about-card-gold-border-inner about-card-gold-border-inner--light rounded-3xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid max-w-5xl mx-auto gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} rating={5} {...testimonial} />
          ))}
        </div>
          </div>
        </div>
      </section>

      <section className="section-wrap-home fade-up">
        <div className="about-card-gold-border">
          <div className="about-card-gold-border-inner about-card-gold-border-inner--dark rounded-3xl px-6 py-10 text-center text-white md:px-10">
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
        </div>
      </section>

      <section className="section-wrap-home">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="about-card-gold-border about-card-gold-border-sm">
            <div className="about-card-gold-border-inner about-card-gold-border-inner--dark border border-white/10 p-6 text-white shadow-lg">
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
