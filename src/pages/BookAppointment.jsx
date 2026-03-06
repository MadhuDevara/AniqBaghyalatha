import { useSearchParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

function BookAppointment() {
  const [searchParams] = useSearchParams()
  const initialService = searchParams.get('service') || ''

  return (
    <main className="section-wrap">
      <h1 className="section-title">Book Appointment</h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Reserve your slot in a minute. Our team will confirm your appointment.
      </p>
      <div className="mt-8">
        <BookingForm key={initialService} initialService={initialService} />
      </div>
    </main>
  )
}

export default BookAppointment
