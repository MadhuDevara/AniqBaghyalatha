import { Link } from 'react-router-dom'
import { contactInfo, workingHours } from '../data/siteData'

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-black text-stone-200">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Aniq Salon Baghyalatha</h3>
          <p className="mt-3 text-sm text-stone-300">
            Premium beauty, grooming, and bridal services with a warm and
            elegant experience.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:text-gray-300" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/book-appointment">
                Book Appointment
              </Link>
            </li>
            <li>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Hours & Contact</h4>
          <p className="mt-3 text-sm">{workingHours[0].day}</p>
          <p className="text-sm">{workingHours[0].time}</p>
          <p className="mt-3 text-sm">{contactInfo.address}</p>
          <a
            className="mt-2 block text-sm text-white"
            href={`tel:${contactInfo.phoneLink}`}
          >
            {contactInfo.contactLine}
          </a>
        </div>
      </div>
      <div className="border-t border-stone-800 py-4 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Aniq Salon Baghyalatha. All rights
        reserved.
      </div>
    </footer>
  )
}

export default Footer
