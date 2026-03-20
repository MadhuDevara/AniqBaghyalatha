import { Link } from 'react-router-dom'
import { contactInfo, workingHours } from '../data/siteData'
import PremiumIcon from './PremiumIcon'

function Footer() {
  return (
    <footer className="footer-neon relative overflow-hidden border-t-2 border-[#D4AF37]/50 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-black text-stone-200">
      {/* Neon gold accent line */}
      <div className="footer-neon-border absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-90" />

      <div className="mx-auto grid w-[92%] max-w-7xl gap-10 py-14 md:grid-cols-3 md:gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold tracking-wide text-white" style={{ textShadow: '0 0 12px rgba(212, 175, 55, 0.3)' }}>
            Aniq Salon Baghyalatha
          </h3>
          <span className="footer-neon-badge mt-2 inline-block rounded-md border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-2 py-0.5 text-xs font-medium text-[#D4AF37]">
            50ᵗʰ Branch
          </span>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            Unisex Beauty Salon & Tattoos — premium grooming, facials, hair spa, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]" style={{ textShadow: '0 0 8px rgba(212, 175, 55, 0.5)' }}>
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                className="footer-neon-link transition-colors duration-200 hover:text-[#D4AF37]"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="footer-neon-link transition-colors duration-200 hover:text-[#D4AF37]"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="footer-neon-link transition-colors duration-200 hover:text-[#D4AF37]"
                to="/book-appointment"
              >
                Book Appointment
              </Link>
            </li>
            <li>
              <Link
                className="footer-neon-link transition-colors duration-200 hover:text-[#D4AF37]"
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer-neon-link transition-colors duration-200 hover:text-[#D4AF37]"
              >
                Instagram
              </a>
            </li>
            {contactInfo.facebook && (
              <li>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-neon-link transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  Facebook
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]" style={{ textShadow: '0 0 8px rgba(212, 175, 55, 0.5)' }}>
            Hours & Contact
          </h4>
          <p className="mt-5 text-sm text-stone-300">
            {workingHours[0].day} – {workingHours[0].time}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            {contactInfo.address}
          </p>
          <a
            className="footer-neon-link mt-3 inline-block text-sm font-medium text-white transition-colors duration-200 hover:text-[#D4AF37]"
            href={`tel:${contactInfo.phoneLink}`}
          >
            {contactInfo.contactLine}
          </a>
          <p className="mt-2 text-sm text-stone-500">
            For Franchise:{' '}
            <a
              href={`tel:${contactInfo.franchisePhone}`}
              className="footer-neon-link text-stone-400 transition-colors duration-200 hover:text-[#D4AF37]"
            >
              {contactInfo.franchisePhone}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D4AF37]/20 py-5" style={{ boxShadow: '0 -1px 1px rgba(212, 175, 55, 0.15)' }}>
        <div className="mx-auto flex w-[92%] max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Aniq Salon Baghyalatha. All rights reserved.
          </p>
          <p className="text-xs text-stone-600">
            I <PremiumIcon name="heart" size={14} /> Bhagyalatha Colony
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
