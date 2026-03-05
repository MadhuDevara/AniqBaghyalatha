import { contactInfo } from '../data/siteData'

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
    >
      WhatsApp
    </a>
  )
}

export default WhatsAppFloat
