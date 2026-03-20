import { contactInfo, testimonials, workingHours } from '../data/siteData'
import TestimonialCard from '../components/TestimonialCard'

function ContactUs() {
  return (
    <main className="section-wrap py-6 md:py-8">
      <div className="flex flex-col items-start gap-3">
        <h1 className="section-title section-title-floater">
          <span className="relative z-10">Contact Us</span>
        </h1>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="about-card-gold-border about-card-gold-border-sm">
          <div className="about-card-gold-border-inner bg-white p-6 shadow-sm md:p-7">
            <h2 className="highlight-heading text-xl">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">{contactInfo.address}</p>

            <a
              className="mt-3 block text-sm text-stone-700 hover:text-black"
              href={`tel:${contactInfo.phoneLink}`}
            >
              Contact: {contactInfo.contactLine}
            </a>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                className="action-pill action-pill--whatsapp"
                href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>

              <a
                className="action-pill action-pill--instagram"
                href={contactInfo.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              {contactInfo.facebook && (
                <a className="action-pill action-pill--facebook" href={contactInfo.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              )}
            </div>

            <h3 className="mt-6 highlight-heading text-lg">For Franchise</h3>
            <a
              className="mt-2 block text-sm text-stone-700 hover:text-black"
              href={`tel:${contactInfo.franchisePhone}`}
            >
              {contactInfo.franchisePhone}
            </a>

            <h3 className="mt-6 highlight-heading text-lg">Working Hours</h3>
            <div className="mt-2 space-y-1.5">
              {workingHours.map((slot) => (
                <p className="text-sm text-stone-700" key={slot.day}>
                  {slot.day}: {slot.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="about-card-gold-border about-card-gold-border-sm h-full">
          <div className="about-card-gold-border-inner h-full overflow-hidden bg-white shadow-sm">
            <div className="relative h-full">
              <iframe
                title="Google map location"
                src={contactInfo.mapEmbedUrl}
                className="min-h-80 h-full w-full border-0"
                loading="lazy"
              />

              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noreferrer"
                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="section-title section-title-floater">
          <span className="relative z-10">Client Reviews</span>
        </h2>
        <div className="mt-8 about-card-gold-border">
          <div className="about-card-gold-border-inner about-card-gold-border-inner--light rounded-3xl px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`contact-${testimonial.name}`} {...testimonial} />
          ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
