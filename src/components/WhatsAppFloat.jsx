import { contactInfo } from '../data/siteData'

function WhatsAppFloat() {
  const phoneNumber = contactInfo.whatsapp
  const whatsappNumber = contactInfo.whatsapp.replace('+', '')
  const sharedButtonClass =
    'float-dock-item group relative flex h-11 w-11 items-center justify-center rounded-xl text-lg text-white shadow-md md:h-12 md:w-12'
  const sharedTooltipClass =
    'pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-md bg-black/85 px-2 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block'

  return (
    <div className="float-dock fixed bottom-24 right-4 z-50 gap-2 md:bottom-8">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className={`${sharedButtonClass} overflow-hidden p-0`}
        aria-label="Chat on WhatsApp"
      >
        <span className={sharedTooltipClass}>WhatsApp</span>
        <svg aria-hidden="true" viewBox="10 10 44 44" className="h-full w-full rounded-xl">
          <rect x="10" y="10" width="44" height="44" rx="8" fill="#25D366" />
          <path
            d="M32.3 14.5c-9.7 0-17.6 7.8-17.6 17.5 0 3.1.8 6 2.3 8.6l-2 8.9 9.1-1.9a17.7 17.7 0 0 0 8.2 2c9.7 0 17.6-7.8 17.6-17.5s-7.9-17.6-17.6-17.6zm0 31.8c-2.7 0-5.2-.8-7.3-2.2l-.5-.3-5.4 1.1 1.2-5.2-.4-.6a14.2 14.2 0 1 1 12.4 7.2z"
            fill="#ffffff"
          />
          <path
            d="M40.5 36.2c-.4-.2-2.6-1.3-3-1.4-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.2.3-.5.3-.9.1-.4-.2-1.9-.7-3.5-2.2-1.3-1.2-2.2-2.6-2.4-3-.2-.4 0-.6.1-.8l.7-.8.5-.7c.2-.2.3-.4.4-.7.1-.3 0-.5-.1-.7-.1-.2-1-2.5-1.4-3.4-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.5s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.2 6.5 1 .4 1.8.7 2.4.9 1 .3 1.9.2 2.6.1.8-.1 2.6-1 2.9-2 .4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.8-.5z"
            fill="#ffffff"
          />
        </svg>
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className={`${sharedButtonClass} overflow-hidden bg-transparent p-0`}
        aria-label="Call salon"
      >
        <span className={sharedTooltipClass}>Call</span>
        <svg aria-hidden="true" viewBox="0 0 64 64" className="h-full w-full">
          <circle cx="32" cy="32" r="29" fill="#ffffff" />
          <circle cx="32" cy="32" r="27" fill="none" stroke="#36B12D" strokeWidth="4.5" />
          <path
            d="M40.4 39.5c-.5-.2-3-1.5-3.5-1.7-.5-.2-.8-.2-1.2.3-.3.5-1.3 1.7-1.6 2-.3.3-.6.4-1.1.1-.5-.2-2.1-.8-4-2.6-1.5-1.3-2.5-2.9-2.8-3.4-.3-.5 0-.8.2-1l.8-.9.5-.8c.2-.3.3-.6.5-.9.2-.3.1-.7 0-.9-.1-.2-1.2-3.2-1.7-4.4-.4-.9-.8-.8-1.1-.8h-.9c-.3 0-.8.1-1.2.5-.4.4-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.2 8 7.3 1.1.5 2 .8 2.8 1.1 1.2.4 2.2.3 3 .2.9-.1 3-1.2 3.4-2.4.4-1.2.4-2.2.3-2.4-.2-.2-.6-.4-1.1-.6z"
            fill="#111111"
          />
        </svg>
      </a>

      <a
        href={contactInfo.instagram}
        target="_blank"
        rel="noreferrer"
        className={`${sharedButtonClass} overflow-hidden p-0`}
        aria-label="Open Instagram"
      >
        <span className={sharedTooltipClass}>Instagram</span>
        <svg aria-hidden="true" viewBox="0 0 64 64" className="h-full w-full rounded-xl">
          <defs>
            <radialGradient id="instaGradient" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="31.2" fill="url(#instaGradient)" />
          <rect
            x="14"
            y="14"
            width="36"
            height="36"
            rx="11"
            fill="none"
            stroke="#fff"
            strokeWidth="3.4"
          />
          <circle cx="32" cy="32" r="9" fill="none" stroke="#fff" strokeWidth="3.4" />
          <circle cx="43.2" cy="20.8" r="2.7" fill="#fff" />
        </svg>
      </a>

      <a
        href={contactInfo.mapLink}
        target="_blank"
        rel="noreferrer"
        className={`${sharedButtonClass} overflow-hidden p-0`}
        aria-label="Open Google Maps location"
      >
        <span className={sharedTooltipClass}>Location</span>
        <svg aria-hidden="true" viewBox="0 0 64 64" className="h-full w-full rounded-xl">
          <rect x="0" y="0" width="64" height="64" rx="12" fill="#34A853" />
          <path d="M0 48 28 20l10 10L10 64H0z" fill="#FBBC05" />
          <path d="M12 64 40 36l24 24v4H12z" fill="#4285F4" />
          <path d="M24 24 64 64v-8L32 24z" fill="#ffffff" opacity="0.55" />
          <path d="M45 30c0 8-10 20-10 20s-10-12-10-20a10 10 0 0 1 20 0z" fill="#EA4335" />
          <circle cx="35" cy="30" r="4.2" fill="#8E2B21" />
        </svg>
      </a>
    </div>
  )
}

export default WhatsAppFloat
