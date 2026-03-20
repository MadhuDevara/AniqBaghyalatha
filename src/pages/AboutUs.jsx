import { Link } from 'react-router-dom'
import { contactInfo, galleryItems } from '../data/siteData'
import NeonCTAButton from '../components/NeonCTAButton'
import PremiumIcon from '../components/PremiumIcon'

function AboutUs() {
  const aboutImage =
    galleryItems.find((item) => item.category === 'Salon Interior')?.image || '/home-hero.png'

  return (
    <main className="section-wrap py-6 md:py-8">
      <div className="flex flex-col items-start gap-3">
        <h1 className="section-title section-title-floater">
          <span className="relative z-10">About Us</span>
        </h1>
        <p className="max-w-2xl text-sm text-stone-200 md:text-base">
          Aniq Salon Baghyalatha is a unisex salon for style, confidence, and hygiene-first beauty.
        </p>
      </div>

      <section className="mt-6 fade-up">
        <div className="about-card-gold-border">
          <div className="about-card-gold-border-inner grid items-center gap-7 p-5 shadow-sm md:grid-cols-2 md:p-8">
            <img
              src={aboutImage}
              alt="Aniq Salon interior"
              className="h-72 w-full rounded-2xl object-cover shadow-sm"
              loading="lazy"
            />

            <div>
              <p className="ui-label text-xs font-semibold text-[#6B6B6B]">50ᵗʰ BRANCH</p>
              <h2 className="section-title mt-2">Aniq Salon Baghyalatha</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                Premium beauty services and tattoos brought to your neighborhood. From grooming and
                facials to hair spa and color, we deliver a luxurious, hygienic experience every visit.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="glass-card rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <PremiumIcon name="star" size={18} />
                    Premium Services
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    Hair, skin, grooming, and tattoos under one roof.
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <PremiumIcon name="hygiene" size={18} />
                    Hygienic by default
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    Clean service standards for safe and comfortable visits.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link to="/book-appointment" className="btn-primary">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>

              <p className="mt-5 text-sm font-medium text-stone-700">
                I{' '}
                <span className="inline-flex align-middle">
                  <PremiumIcon name="heart" size={16} />
                </span>{' '}
                Bhagyalatha Colony
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 fade-up">
        <h2 className="section-title section-title-floater">
          <span className="relative z-10">Our Services</span>
        </h2>

        <div className="about-card-gold-border mt-8">
          <div className="about-card-gold-border-inner about-card-gold-border-inner--light rounded-3xl px-6 py-8 md:px-10 md:py-10">
            <div className="grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <article className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10 text-2xl">
                  <PremiumIcon name="scissors" size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">Grooming</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Haircuts, shaving / trimming, hair wash and styling.
                </p>
              </article>
              <article className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10 text-2xl">
                  <PremiumIcon name="facial" size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">Facials</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Skin care, scrubs, and premium facial packages.
                </p>
              </article>
              <article className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10 text-2xl">
                  <PremiumIcon name="steam" size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">Hair Care</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Hair spa, oil massage, smoothening and color.
                </p>
              </article>
              <article className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10 text-2xl">
                  <PremiumIcon name="tattoo" size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">Tattoos</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Clean, confident designs with a salon-level experience.
                </p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <NeonCTAButton to="/services">View All Services</NeonCTAButton>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/40 px-6 py-3 font-semibold text-stone-900 shadow-sm transition hover:bg-white"
              >
                Check Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 fade-up">
        <h2 className="section-title section-title-floater">
          <span className="relative z-10">Location & Mission</span>
        </h2>

        <div className="about-card-gold-border mt-8">
          <div className="about-card-gold-border-inner about-card-gold-border-inner--light rounded-3xl px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="glass-card p-6">
                <h3 className="text-xl font-semibold text-stone-900">Location</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">{contactInfo.address}</p>
                <a
                  href={contactInfo.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary mt-4 w-fit"
                >
                  Get Directions
                </a>
              </article>

              <article className="glass-card p-6">
                <h3 className="text-xl font-semibold text-stone-900">Mission & Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  <span className="font-semibold">Mission:</span> Deliver a luxurious and hygienic beauty experience.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  <span className="font-semibold">Vision:</span> Become the most loved destination for style, beauty, and confidence in Bhagyalatha Colony.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <NeonCTAButton to="/book-appointment">Book Now</NeonCTAButton>
                  <Link
                    to="/contact-us"
                    className="btn-secondary w-fit"
                  >
                    Contact Us
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
