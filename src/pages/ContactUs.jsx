import { contactInfo, testimonials, workingHours } from '../data/siteData'
import TestimonialCard from '../components/TestimonialCard'

function ContactUs() {
  return (
    <main className="section-wrap">
      <h1 className="section-title">Contact Us</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">Get in touch</h2>
          <p className="mt-3 text-stone-700">{contactInfo.address}</p>
          <a
            className="mt-3 block text-stone-700 hover:text-black"
            href={`tel:${contactInfo.phoneLink}`}
          >
            Contact: {contactInfo.contactLine}
          </a>
          <a
            className="mt-2 inline-block rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white"
            href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
          <a
            className="mt-2 ml-2 inline-block rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700"
            href={contactInfo.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <h3 className="mt-6 font-semibold text-stone-900">Working Hours</h3>
          {workingHours.map((slot) => (
            <p className="mt-2 text-stone-700" key={slot.day}>
              {slot.day}: {slot.time}
            </p>
          ))}
        </article>

        <iframe
          title="Google map location"
          src={contactInfo.mapEmbedUrl}
          className="h-80 w-full rounded-2xl border border-stone-200"
          loading="lazy"
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">Client Reviews</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`contact-${testimonial.name}`} {...testimonial} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ContactUs
