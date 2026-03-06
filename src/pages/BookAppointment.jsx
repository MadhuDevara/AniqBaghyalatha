import { useSearchParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import { contactInfo } from '../data/siteData'

function BookAppointment() {
  const [searchParams] = useSearchParams()
  const initialService = searchParams.get('service') || ''

  return (
    <main className="section-wrap py-6 md:py-8">
      <h1 className="section-title">Book Appointment</h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Reserve your slot in a minute. Our team will confirm your appointment.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <BookingForm key={initialService} initialService={initialService} />

        <aside className="h-fit rounded-3xl bg-black p-6 text-white shadow-lg md:p-7">
          <p className="ui-label text-xs font-semibold text-white/70">
            FAST ASSISTANCE
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Need Quick Booking?</h2>
          <p className="mt-3 text-sm text-white/75">
            Call or WhatsApp us for instant booking.
          </p>
          <p className="mt-2 text-sm text-white/80">{contactInfo.contactLine}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${contactInfo.phoneLink}`}
              className="inline-flex items-center justify-center rounded-full bg-[#c59d5f] px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a67c3b] hover:shadow-lg"
            >
              {contactInfo.phone}
            </a>

            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#d4b076] bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c59d5f] hover:text-black hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default BookAppointment
