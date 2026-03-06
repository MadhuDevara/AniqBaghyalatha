import { Link } from 'react-router-dom'
import { contactInfo } from '../data/siteData'

function MobileStickyCTA() {
  const whatsappNumber = contactInfo.whatsapp.replace('+', '')

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#C59D5F]/35 bg-[#1A1A1A] p-2 text-white shadow-2xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
        <a
          href={`tel:${contactInfo.phoneLink}`}
          className="rounded-xl border border-[#C59D5F]/40 px-3 py-2 text-center text-xs font-semibold text-[#F8EAD5] transition hover:bg-[#C59D5F]/20 hover:text-[#C59D5F]"
        >
          Call
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[#C59D5F]/45 bg-[#C59D5F]/15 px-3 py-2 text-center text-xs font-semibold text-[#F8EAD5] transition hover:bg-[#C59D5F]/25 hover:text-[#C59D5F]"
        >
          WhatsApp
        </a>
        <Link
          to="/book-appointment"
          className="rounded-xl bg-[#C59D5F] px-3 py-2 text-center text-xs font-semibold text-[#1A1A1A] transition hover:bg-[#A67C3B]"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default MobileStickyCTA
